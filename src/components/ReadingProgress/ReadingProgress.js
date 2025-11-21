import React, {useEffect, useState, useRef} from 'react';
import styles from './styles.module.css';

const STORAGE_PREFIX = 'borr:read:';

function normalizePath(path) {
  if (!path) return '/';
  try {
    const url = new URL(path, typeof window !== 'undefined' ? window.location.origin : 'http://localhost');
    path = url.pathname;
  } catch (e) {
  }
  if (path !== '/' && path.endsWith('/')) path = path.slice(0, -1);
  return path || '/';
}

function getSidebarDocLinks() {
  const anchors = Array.from(document.querySelectorAll('.menu__list a'));
  const internal = anchors
    .map((a) => a.getAttribute('href'))
    .filter(Boolean)
    .filter((h) => h.startsWith('/'))
    .map((h) => normalizePath(h));
  return Array.from(new Set(internal));
}

const TRACK_SECTIONS = {
  '/computer-science': 'Computer Science',
  '/precollege-math': 'Pre-College Math',
  '/data-science': 'Data Science',
  '/math': 'Math',
};

export default function ReadingProgress() {
  const [totalPages, setTotalPages] = useState(0);
  const [readCount, setReadCount] = useState(0);
  const [isRead, setIsRead] = useState(false);
  const [pagesList, setPagesList] = useState(null);
  const [currentSection, setCurrentSection] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const currentPath = normalizePath(window.location.pathname + window.location.search);

    const normalizedSections = Object.keys(TRACK_SECTIONS).map((p) => normalizePath(p));
    const found = normalizedSections.find((s) => currentPath === s || currentPath.startsWith(s + '/')) || null;
    setCurrentSection(found);

    if (!found) {
      setTotalPages(0);
      setReadCount(0);
      setIsRead(false);
      setPagesList([]);
      return;
    }
    async function loadManifest() {
      try {
        const res = await fetch('/docs-manifest.json', {cache: 'no-store'});
        if (res.ok) {
          const arr = await res.json();
          const pages = arr.map((p) => normalizePath(p));
          const sectionPages = pages.filter((p) => p === found || p.startsWith(found + '/'));
          setPagesList(sectionPages);
          setTotalPages(sectionPages.length);

          const counts = sectionPages.reduce((acc, p) => acc + (localStorage.getItem(STORAGE_PREFIX + p) === '1' ? 1 : 0), 0);
          setReadCount(counts);

          const currentKey = STORAGE_PREFIX + currentPath;
          setIsRead(localStorage.getItem(currentKey) === '1');
          return;
        }
      } catch (e) {
      }

      const links = getSidebarDocLinks();
      const sectionLinks = (links.length > 0 ? links : [currentPath]).filter((p) => p === found || p.startsWith(found + '/'));

      setPagesList(sectionLinks);
      setTotalPages(sectionLinks.length);

      const counts = sectionLinks.reduce((acc, p) => {
        const key = STORAGE_PREFIX + p;
        if (localStorage.getItem(key) === '1') acc++;
        return acc;
      }, 0);
      setReadCount(counts);

      const currentKey = STORAGE_PREFIX + currentPath;
      setIsRead(localStorage.getItem(currentKey) === '1');
    }

    loadManifest();

    function onStorage(ev) {
      if (!ev.key) return;
      if (!ev.key.startsWith(STORAGE_PREFIX)) return;
      let newCounts = 0;
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (!k || !k.startsWith(STORAGE_PREFIX)) continue;
        const p = k.slice(STORAGE_PREFIX.length);
        if (p === found || p.startsWith(found + '/')) newCounts++;
      }
      setReadCount(newCounts);
      setIsRead(localStorage.getItem(STORAGE_PREFIX + currentPath) === '1');
    }

    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  if (typeof window === 'undefined') return null;

  if (!currentSection) return null;

  const percent = totalPages > 0 ? Math.round((readCount / totalPages) * 100) : 0;
  function toggleRead() {
    const currentPath = normalizePath(window.location.pathname + window.location.search);
    const key = STORAGE_PREFIX + currentPath;
    if (localStorage.getItem(key) === '1') {
      localStorage.removeItem(key);
      setIsRead(false);
      setReadCount((c) => Math.max(0, c - 1));
    } else {
      localStorage.setItem(key, '1');
      setIsRead(true);
      setReadCount((c) => c + 1);
    }
    try {
      window.dispatchEvent(new Event('storage'));
    } catch (e) {}
  }

  function exportProgress() {
    if (!currentSection) return;
    const entries = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (!k || !k.startsWith(STORAGE_PREFIX)) continue;
      const p = k.slice(STORAGE_PREFIX.length);
      if (p === currentSection || p.startsWith(currentSection + '/')) entries.push(p);
    }
    if (entries.length === 0) {
      alert('No progress saved for this section.');
      return;
    }
    const data = {version: 1, section: currentSection, entries};
    const blob = new Blob([JSON.stringify(data, null, 2)], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const safeSection = currentSection.replace(/[^a-z0-9]/gi, '_').replace(/^_+|_+$/g, '');
    a.download = `borr-progress-${safeSection}.json`;
    a.href = url;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  function openImportDialog() {
    if (fileInputRef.current) fileInputRef.current.click();
  }

  async function handleImportFile(ev) {
    const f = ev.target.files && ev.target.files[0];
    if (!f) return;
    try {
      const text = await f.text();
      const json = JSON.parse(text);
      let entries = [];
      if (Array.isArray(json)) entries = json;
      else if (json && Array.isArray(json.entries)) entries = json.entries;
      else if (json && typeof json === 'object') {
        if (json.entries && typeof json.entries === 'object') entries = Object.keys(json.entries);
      }
      if (entries.length === 0) {
        alert('No entries found in import file. Expected an array of doc paths or {entries: [...]}.');
        return;
      }

      if (json.section && json.section !== currentSection) {
        const ok = window.confirm(`Import file is for "${json.section}" but you are on "${currentSection}". Import anyway (will merge)?`);
        if (!ok) return;
      }

      let added = 0;
      for (const p of entries) {
        const norm = normalizePath(p);
        if (norm === currentSection || norm.startsWith(currentSection + '/')) {
          const key = STORAGE_PREFIX + norm;
          if (localStorage.getItem(key) !== '1') {
            localStorage.setItem(key, '1');
            added++;
          }
        }
      }
      const newCounts = pagesList ? pagesList.reduce((acc, p) => acc + (localStorage.getItem(STORAGE_PREFIX + p) === '1' ? 1 : 0), 0) : 0;
      setReadCount(newCounts);
      setIsRead(localStorage.getItem(STORAGE_PREFIX + normalizePath(window.location.pathname)) === '1');
      alert(`Imported ${added} entries for this section.`);
    } catch (e) {
      alert('Failed to import file: ' + (e && e.message ? e.message : String(e)));
    } finally {
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  }

  function resetProgress() {
    if (!currentSection) return;
    const ok = window.confirm('Reset progress for this section? This will remove all saved "done" marks for this section.');
    if (!ok) return;
    let removed = 0;
    const toRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (!k || !k.startsWith(STORAGE_PREFIX)) continue;
      const p = k.slice(STORAGE_PREFIX.length);
      if (p === currentSection || p.startsWith(currentSection + '/')) toRemove.push(k);
    }
    for (const k of toRemove) {
      localStorage.removeItem(k);
      removed++;
    }
    setReadCount(0);
    setIsRead(false);
    alert(`Removed ${removed} entries for this section.`);
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.summary}>
          <span className={styles.sectionName}>{TRACK_SECTIONS[currentSection] ?? ''}</span>
          <strong>{readCount}</strong>
          <span className={styles.sep}>/</span>
          <span>{totalPages}</span>
          
        </div>
        <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}>
          <button
            aria-pressed={isRead}
            className={`button button--primary borr-tick ${styles.tick} ${isRead ? styles.ticked : ''}`}
            onClick={toggleRead}
            title={isRead ? 'Mark page as not done' : 'Mark page as done'}
          >
            {isRead ? '✓ Done' : 'Mark done'}
          </button>
        </div>
      </div>

      <div className={styles.progressBar} aria-hidden>
        <div className={styles.filler} style={{width: `${percent}%`}} />
      </div>
      <div className={styles.percent}>{percent}%</div>

      <div className={styles.controls}>
        <input ref={fileInputRef} className={styles.fileInput} type="file" accept="application/json" onChange={handleImportFile} />
        <div style={{display: 'flex', gap: '0.5rem'}}>
          <button className="button button--secondary borr-export" onClick={exportProgress} title="Export progress for this section">Export</button>
          <button className="button button--secondary borr-import" onClick={openImportDialog} title="Import progress JSON">Import</button>
          <button className="button button--outline borr-reset" onClick={resetProgress} title="Reset progress for this section">Reset</button>
        </div>
      </div>
    </div>
  );
}
