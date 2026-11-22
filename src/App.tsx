import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Announcements } from './components/Announcements';
import { Projects } from './components/Projects';
import { Roadmap } from './components/Roadmap';
import { About } from './components/About';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { useTheme } from './hooks/useTheme';
import { useState } from 'react';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [notificationPrompt, setNotificationPrompt] = useState(() => !localStorage.getItem('nexus-notification-choice'));

  const chooseNotification = (choice: string) => {
    localStorage.setItem('nexus-notification-choice', choice);
    setNotificationPrompt(false);
  };

  return <><a className="skip-link" href="#main">Skip to content</a><Nav theme={theme} toggleTheme={toggleTheme}/><main id="main"><Hero/><Announcements/><Projects/><Roadmap/><About/><Newsletter/></main><Footer/>{notificationPrompt && <div className="notification-backdrop" role="presentation"><section className="notification-modal" role="dialog" aria-modal="true" aria-labelledby="notification-title"><p className="eyebrow">STAY UPDATED</p><h2 id="notification-title">Wanna be notified?</h2><p>Choose how you'd like to hear about new Nexus releases and updates.</p><div className="notification-actions"><button type="button" className="button button-primary notification-answer notification-yes" onClick={() => chooseNotification('yes')}>Yes, thanks</button><button type="button" className="button button-secondary notification-answer notification-no" onClick={() => chooseNotification('no')}>No, thanks</button><button type="button" className="button button-secondary notification-answer notification-later" onClick={() => chooseNotification('later')}>I'll think about it, thanks</button></div></section></div>}</>;
}
