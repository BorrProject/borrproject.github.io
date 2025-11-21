#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';

const BUILD_DIR = path.resolve(process.cwd(), 'build');
const OUT_FILE = path.join(BUILD_DIR, 'docs-manifest.json');

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      files.push(...await walk(full));
    } else if (ent.isFile() && ent.name === 'index.html') {
      files.push(full);
    }
  }

  return files;
}

function toRoute(filePath) {
  const rel = path.relative(BUILD_DIR, path.dirname(filePath)).split(path.sep).join('/');
  return rel === '' ? '/' : `/${rel}/`;
}

async function main() {
  try {
    await fs.access(BUILD_DIR);
  } catch (e) {
    console.error('build/ directory not found, skipping manifest generation.');
    process.exit(0);
  }

  const files = await walk(BUILD_DIR);
  const routes = files.map(toRoute);
  const unique = Array.from(new Set(routes)).sort();

  try {
    await fs.writeFile(OUT_FILE, JSON.stringify(unique, null, 2), 'utf8');
    console.log(`Wrote docs manifest with ${unique.length} entries to ${path.relative(process.cwd(), OUT_FILE)}`);
  } catch (e) {
    console.error('Failed to write manifest:', e);
    process.exit(1);
  }
}

main();