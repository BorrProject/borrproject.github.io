import React, {useEffect, useState, useRef} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import styles from './styles.module.css';

const STORAGE_PREFIX = 'borr:read:';
const SECTIONS = [
  ['/computer-science', 'Computer Science'],
  ['/precollege-math', 'Pre-College Math'],
  ['/data-science', 'Data Science'],
  ['/math', 'Math'],
];

function norm(p){
  if(!p) return '/';
  try{ p = new URL(p, typeof window !== 'undefined' ? window.location.origin : 'http://localhost').pathname }catch(e){}
  if(p !== '/' && p.endsWith('/')) p = p.slice(0,-1);
  return p || '/';
}

async function loadManifest(){
  try{
    const r = await fetch('/docs-manifest.json', {cache:'no-store'});
    if(r.ok){
      const arr = await r.json();
      return arr.map(norm);
    }
  }catch(e){}
  try{
    const anchors = Array.from(document.querySelectorAll('.menu__list a'));
    return Array.from(new Set(anchors.map(a=>a.getAttribute('href')).filter(Boolean).filter(h=>h.startsWith('/')).map(norm)));
  }catch(e){}
  return [];
}

function Bar({label, done, total, onExport, onImport, onReset, onGo}){
  const pct = total > 0 ? Math.round((done/total)*100) : 0;
  return (
    <div className={styles.barContainer}>
      <div className={styles.barHeader}>
        <div className={styles.barLabel}>
          <div dangerouslySetInnerHTML={{__html:`<strong>${label}</strong> <span style="color:var(--ifm-color-emphasis-400, #666); margin-left:0.5rem;">${done} / ${total}</span>`}} />
        </div>
        <div className={styles.barActions}>
          <div className={styles.barPercentage}>{pct}%</div>
          <div>
            <button className="button button--secondary borr-export" onClick={onExport} title="Export progress for this section">Export</button>
          </div>
          <div>
            <button className="button button--secondary borr-import" onClick={onImport} title="Import progress JSON">Import</button>
          </div>
          <div>
            <button className="button button--outline borr-reset" onClick={onReset} title="Reset progress for this section">Reset</button>
          </div>
          <div>
            <button className="button button--primary borr-go" onClick={onGo} title="Go to this curriculum">Let's go</button>
          </div>
        </div>
      </div>
      <div className={styles.barProgressTrack}>
        <div className={styles.barProgressFill} style={{width: `${pct}%`}} />
      </div>
    </div>
  );
}

function ProgressContainer(){
  function initialRowsFromStorage(){
    try{
      const out = SECTIONS.map(([_,label]) => ({label, done: 0, total: 0}));
      for(let i=0;i<localStorage.length;i++){
        const k = localStorage.key(i);
        if(!k || !k.startsWith(STORAGE_PREFIX)) continue;
        const p = k.slice(STORAGE_PREFIX.length);
        for(let idx=0; idx<SECTIONS.length; idx++){
          const section = norm(SECTIONS[idx][0]);
          if(p === section || p.startsWith(section + '/')) out[idx].done++;
        }
      }
      return out;
    }catch(e){
      return SECTIONS.map(([_,label])=>({label,done:0,total:0}));
    }
  }

  const [rows, setRows] = useState(initialRowsFromStorage);
  const fileInputRef = useRef(null);
  const [pendingImportSection, setPendingImportSection] = useState(null);
  async function handleImportFile(ev){
    const f = ev.target && ev.target.files && ev.target.files[0];
    if(!f) return;
    try{
      const text = await f.text();
      const json = JSON.parse(text);
      let entries = [];
      if (Array.isArray(json)) entries = json;
      else if (json && Array.isArray(json.entries)) entries = json.entries;
      else if (json && json.entries && typeof json.entries === 'object') entries = Object.keys(json.entries);

      if(entries.length === 0){
        alert('No entries found in import file. Expected array or {entries:[...]}');
        return;
      }

      if(!pendingImportSection){
        alert('No section selected for import.');
        return;
      }

      let added = 0;
      for(const p of entries){
        const normp = norm(p);
        if(normp === pendingImportSection || normp.startsWith(pendingImportSection + '/')){
          const key = STORAGE_PREFIX + normp;
          if(localStorage.getItem(key) !== '1'){
            localStorage.setItem(key, '1');
            added++;
          }
        }
      }
      alert(`Imported ${added} entries for this section.`);
      
      setRows((prev)=>{
        const copy = prev.slice();
        const idx = SECTIONS.findIndex(s=>norm(s[0])===pendingImportSection);
        if(idx !== -1){
          const section = pendingImportSection;
          const manifest = [];
          
          let done = 0;
          for(let i=0;i<localStorage.length;i++){
            const k = localStorage.key(i);
            if(!k || !k.startsWith(STORAGE_PREFIX)) continue;
            const p = k.slice(STORAGE_PREFIX.length);
            if(p === section || p.startsWith(section + '/')) done++;
          }
          copy[idx] = {...copy[idx], done};
        }
        return copy;
      });
    }catch(e){
      alert('Failed to import: ' + (e && e.message ? e.message : String(e)));
    }finally{
      if(fileInputRef.current) fileInputRef.current.value = '';
      setPendingImportSection(null);
    }
  }

  function triggerImportForSection(section){
    setPendingImportSection(section);
    if(fileInputRef.current) fileInputRef.current.click();
  }

  function exportSection(section){
    const entries = [];
    for(let i=0;i<localStorage.length;i++){
      const k = localStorage.key(i);
      if(!k || !k.startsWith(STORAGE_PREFIX)) continue;
      const p = k.slice(STORAGE_PREFIX.length);
      if(p === section || p.startsWith(section + '/')) entries.push(p);
    }
    if(entries.length === 0){ alert('No progress saved for this section.'); return; }
    const data = {version:1, section, entries};
    const blob = new Blob([JSON.stringify(data, null, 2)], {type:'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `borr-progress-${section.replace(/[^a-z0-9]/gi,'_')}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  function resetSection(section){
    const ok = window.confirm('Reset progress for this section? This will remove all saved marks for this section.');
    if(!ok) return;
    const toRemove = [];
    for(let i=0;i<localStorage.length;i++){
      const k = localStorage.key(i);
      if(!k || !k.startsWith(STORAGE_PREFIX)) continue;
      const p = k.slice(STORAGE_PREFIX.length);
      if(p === section || p.startsWith(section + '/')) toRemove.push(k);
    }
    for(const k of toRemove) localStorage.removeItem(k);
    setRows((prev)=>{
      const copy = prev.slice();
      const idx = SECTIONS.findIndex(s => norm(s[0]) === section);
      if(idx !== -1){
        copy[idx] = {...copy[idx], done: 0};
      }
      return copy;
    });
  }


  useEffect(()=>{
    let mounted = true;
    (async ()=>{
      const manifest = await loadManifest();
      const out = [];
      for(const [path,label] of SECTIONS){
        const section = norm(path);
        const pages = manifest.length ? manifest.filter(p => p === section || p.startsWith(section + '/')) : [];
        let done = 0;
        for(const p of pages){ if(localStorage.getItem(STORAGE_PREFIX + p) === '1') done++; }
        out.push({label,done,total:pages.length});
      }
      if(mounted) setRows(out);
    })();
    return ()=>{ mounted = false };
  }, []);

  return (
    <div>
      <input ref={fileInputRef} type="file" accept="application/json" style={{display:'none'}} onChange={handleImportFile} />
      <div className={styles.borrMultiProgress}>
        {rows.map((r, i) => {
          const path = norm(SECTIONS[i][0]);
          return (
            <div key={i}>
              <Bar
                {...r}
                onExport={() => exportSection(path)}
                onImport={() => triggerImportForSection(path)}
                onReset={() => resetSection(path)}
                onGo={() => { window.location.href = path + '/'; }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function StartHereProgress(){
  return (
    <BrowserOnly>
      {() => <ProgressContainer />}
    </BrowserOnly>
  );
}
