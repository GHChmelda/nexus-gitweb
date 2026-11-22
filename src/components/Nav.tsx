import { useState } from 'react';
import { BrandMark } from './BrandMark';
import { ThemeToggle } from './ThemeToggle';
import type { Theme } from '../types';
import { site } from '../data/site';

export function Nav({theme,toggleTheme}:{theme:Theme,toggleTheme:()=>void}) {
  const [open,setOpen]=useState(false);
  return <header className="site-header"><div className="container nav-wrap">
    <a className="brand" href="#top" aria-label="Nexus GitWeb home"><BrandMark/><span>Nexus</span><b className="brand-pill">GITWEB</b></a>
    <nav className={`nav-links${open?' is-open':''}`} aria-label="Primary">
      <a href="#announcements" onClick={()=>setOpen(false)}>Announcements</a><a href="#projects" onClick={()=>setOpen(false)}>Projects</a><a href="#roadmap" onClick={()=>setOpen(false)}>Roadmap</a><a href="#about" onClick={()=>setOpen(false)}>About</a>
    </nav>
    <div className="nav-actions"><a className="github-pill" href={site.github} target="_blank" rel="noreferrer">GitHub <span>↗</span></a><ThemeToggle theme={theme} toggleTheme={toggleTheme}/><button className="menu-button icon-button" type="button" aria-expanded={open} aria-label="Toggle menu" onClick={()=>setOpen(v=>!v)}><span/><span/><span/></button></div>
  </div></header>;
}
