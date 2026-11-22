import { BrandMark } from './BrandMark';
import { site } from '../data/site';
import { useI18n } from '../i18n';
export function Footer(){const {t}=useI18n();const year=2026;return <footer className="footer"><div className="container footer-inner"><a className="brand" href="#top"><BrandMark small/><span>Nexus</span><b className="brand-pill">GITWEB</b></a><div className="footer-links"><a href="#announcements">{t('announcements')}</a><a href="#projects">{t('projects')}</a><a href="#roadmap">{t('roadmap')}</a><a href={site.github} target="_blank" rel="noreferrer">{t('footerGitHub')}</a></div><p>© {year} · {t('builtWith')}</p></div></footer>}
