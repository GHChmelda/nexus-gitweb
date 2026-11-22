import { useState } from 'react';
import { BrandMark } from './BrandMark';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSelect } from './LanguageSelect';
import type { Theme } from '../types';
import { site } from '../data/site';
import { useI18n } from '../i18n';

export function Nav({theme,toggleTheme}:{theme:Theme,toggleTheme:()=>void}) {
  const [open,setOpen]=useState(false);
  const { t } = useI18n();
  return <header className="site-header"><div className="container nav-wrap">
    <a className="brand" href="#top" aria-label={t('home')}><BrandMark/><span>Nexus</span><b className="brand-pill">GITWEB</b></a>
    <nav className={`nav-links${open?' is-open':''}`} aria-label={t('nav')}>
      <a href="#announcements" onClick={()=>setOpen(false)}>{t('announcements')}</a><a href="#projects" onClick={()=>setOpen(false)}>{t('projects')}</a><a href="#forum" onClick={()=>setOpen(false)}>{t('forum')}</a><a href="#roadmap" onClick={()=>setOpen(false)}>{t('roadmap')}</a><a href="#about" onClick={()=>setOpen(false)}>{t('about')}</a>
    </nav>
    <div className="nav-actions"><LanguageSelect/><a className="github-pill" href={site.github} target="_blank" rel="noreferrer">{t('github')} <span>↗</span></a><ThemeToggle theme={theme} toggleTheme={toggleTheme}/><button className="menu-button icon-button" type="button" aria-expanded={open} aria-label={t('menu')} onClick={()=>setOpen(v=>!v)}><span/><span/><span/></button></div>
  </div></header>;
}
