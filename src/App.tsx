import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Announcements } from './components/Announcements';
import { Projects } from './components/Projects';
import { Roadmap } from './components/Roadmap';
import { About } from './components/About';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { Forum } from './components/Forum';
import { useTheme } from './hooks/useTheme';
import { useState } from 'react';
import { I18nProvider, useI18n } from './i18n';

function SiteApp() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useI18n();
  const [notificationPrompt, setNotificationPrompt] = useState(() => !localStorage.getItem('nexus-notification-choice'));

  const chooseNotification = (choice: string) => {
    localStorage.setItem('nexus-notification-choice', choice);
    setNotificationPrompt(false);
  };

  return <><a className="skip-link" href="#main">{t('skip')}</a><Nav theme={theme} toggleTheme={toggleTheme}/><main id="main"><Hero/><Announcements/><Projects/><Forum/><Roadmap/><About/><Newsletter/></main><Footer/>{notificationPrompt && <div className="notification-backdrop" role="presentation"><section className="notification-modal" role="dialog" aria-modal="true" aria-labelledby="notification-title"><p className="eyebrow">{t('stayUpdated')}</p><h2 id="notification-title">{t('notifyTitle')}</h2><p>{t('notifyDescription')}</p><div className="notification-actions"><button type="button" className="button button-primary notification-answer notification-yes" onClick={() => chooseNotification('yes')}>{t('yesThanks')}</button><button type="button" className="button button-secondary notification-answer notification-no" onClick={() => chooseNotification('no')}>{t('noThanks')}</button><button type="button" className="button button-secondary notification-answer notification-later" onClick={() => chooseNotification('later')}>{t('thinkThanks')}</button></div></section></div>}</>;
}

export default function App() {
  return <I18nProvider><SiteApp/></I18nProvider>;
}
