import { BrandMark } from './BrandMark';
import { site } from '../data/site';
export function Footer(){const year=2026;return <footer className="footer"><div className="container footer-inner"><a className="brand" href="#top"><BrandMark small/><span>Nexus</span><b className="brand-pill">GITWEB</b></a><div className="footer-links"><a href="#announcements">Announcements</a><a href="#projects">Projects</a><a href="#roadmap">Roadmap</a><a href={site.github} target="_blank" rel="noreferrer">GitHub</a></div><p>© {year} · Built with React, TypeScript &amp; Vite</p></div></footer>}
