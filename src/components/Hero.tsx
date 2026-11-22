import { site } from '../data/site';
import { announcements } from '../data/announcements';
import { projects } from '../data/projects';
import { formatDate } from '../lib/format';
import { useI18n } from '../i18n';
export function Hero(){
 const {locale,t,announcement}=useI18n();
 const newest=[...announcements].sort((a,b)=>b.date.localeCompare(a.date))[0];
 return <section className="hero section" id="top"><div className="container hero-grid"><div className="hero-copy">
  <p className="eyebrow"><span/> {t('heroEyebrow')}</p><h1>{t('heroLine1')}<br/><span className="gradient-text">{t('heroLine2')}</span></h1>
  <p className="hero-description">{t('heroDescription')}</p>
  <div className="hero-actions"><a className="button button-primary" href="#projects">{t('explore')} <span>↓</span></a><a className="button button-secondary" href={site.github} target="_blank" rel="noreferrer">{t('viewGithub')} ↗</a><a className="button button-secondary" href="#share-project">{t('shareProject')}</a></div>
  <div className="stats"><div><strong>{projects.length}</strong><span>{t('statsProjects')}</span></div><div><strong>{announcements.length}</strong><span>{t('statsUpdates')}</span></div><div><strong>100%</strong><span>{t('statsOpen')}</span></div></div>
 </div><aside className="latest-card"><div className="latest-head"><span>{t('latestDrop')}</span><span className="live-dot">●</span></div><p className="latest-date">{formatDate(newest.date,locale)} · {t(newest.category.toLowerCase())}</p><h2>{announcement(newest.id,'title')??newest.title}</h2><p>{announcement(newest.id,'summary')??newest.summary}</p><a className="latest-link" href={newest.link} target={newest.link.startsWith('http')?'_blank':undefined} rel="noreferrer">{t('readReleaseNotes')} <span>→</span></a><div className="latest-socials"><a href={site.github} target="_blank" rel="noreferrer">GitHub <span>↗</span></a><a href={site.discord} target="_blank" rel="noreferrer">Discord <span>↗</span></a><a href={`mailto:${site.email}`}>Email <span>↗</span></a></div></aside></div></section>
}
