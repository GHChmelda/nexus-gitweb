import { site } from '../data/site';
import { announcements } from '../data/announcements';
import { projects } from '../data/projects';
import { formatDate } from '../lib/format';
export function Hero(){
 const newest=[...announcements].sort((a,b)=>b.date.localeCompare(a.date))[0];
 return <section className="hero section" id="top"><div className="container hero-grid"><div className="hero-copy">
  <p className="eyebrow"><span/> OPEN-SOURCE DEVELOPER PLATFORM</p><h1>Build in the open.<br/><span className="gradient-text">Ship what matters.</span></h1>
  <p className="hero-description">Tools for ambitious builders. Explore the work, follow the releases, and help shape the next generation of developer software.</p>
  <div className="hero-actions"><a className="button button-primary" href="#projects">Explore projects <span>↓</span></a><a className="button button-secondary" href={site.github} target="_blank" rel="noreferrer">View on GitHub ↗</a><a className="button button-secondary" href="#share-project">Share Project</a></div>
  <div className="stats"><div><strong>{projects.length}</strong><span>Projects</span></div><div><strong>{announcements.length}</strong><span>Updates</span></div><div><strong>100%</strong><span>Open source</span></div></div>
 </div><aside className="latest-card"><div className="latest-head"><span>LATEST DROP</span><span className="live-dot">●</span></div><p className="latest-date">{formatDate(newest.date)} · {newest.category}</p><h2>{newest.title}</h2><p>{newest.summary}</p><a className="latest-link" href={newest.link} target={newest.link.startsWith('http')?'_blank':undefined} rel="noreferrer">Read release notes <span>→</span></a><div className="latest-socials"><a href={site.github} target="_blank" rel="noreferrer">GitHub <span>↗</span></a><a href={site.discord} target="_blank" rel="noreferrer">Discord <span>↗</span></a><a href={`mailto:${site.email}`}>Email <span>↗</span></a></div></aside></div></section>
}
