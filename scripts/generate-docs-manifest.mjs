#!/usr/bin/env node
import fs from 'fs/promises';
import path from 'path';

const DOCS_DIR = path.resolve(process.cwd(), 'docs');
const OUT_DIR = path.resolve(process.cwd(), 'static');
const OUT_FILE = path.join(OUT_DIR, 'docs-manifest.json');

function isDocFile(name) {
  return name.endsWith('.md') || name.endsWith('.mdx');
}

async function walk(dir) {
  const entries = await fs.readdir(dir, {withFileTypes: true});
  const files = [];
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      files.push(...await walk(full));
    } else if (ent.isFile() && isDocFile(ent.name)) {
      files.push(full);
    }
  }
  return files;
}

function toRoute(filePath) {
  const rel = path.relative(DOCS_DIR, filePath).split(path.sep).join('/');
  const dirname = path.dirname(rel);
  const basename = path.basename(rel);
  const name = basename.replace(/\.(md|mdx)$/i, '');

  if (name.toLowerCase() === 'index') {
    if (dirname === '.' || dirname === '') return '/';
    return `/${dirname}/`;
  }

  if (dirname === '.' || dirname === '') return `/${name}/`;
  return `/${dirname}/${name}/`;
}

async function main() {
  try {
    await fs.access(DOCS_DIR);
  } catch (e) {
    console.error('docs/ directory not found, skipping manifest generation.');
    process.exit(0);
  }

  const files = await walk(DOCS_DIR);
  const routes = files.map(toRoute);
  const unique = Array.from(new Set(routes)).sort();

  try {
    await fs.mkdir(OUT_DIR, {recursive: true});
    await fs.writeFile(OUT_FILE, JSON.stringify(unique, null, 2), 'utf8');
    console.log(`Wrote docs manifest with ${unique.length} entries to ${path.relative(process.cwd(), OUT_FILE)}`);
  } catch (e) {
    console.error('Failed to write manifest:', e);
    process.exit(1);
  }
}

main();
