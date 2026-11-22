import { site } from '../data/site';
import { useI18n } from '../i18n';

export function Forum() {
  const { t } = useI18n();
  return (
    <section className="section" id="forum">
      <div className="container">
        <div className="forum-panel">
          <div className="forum-mark" aria-hidden="true">↗</div>
          <p className="eyebrow">{t('forumEyebrow')}</p>
          <h2>{t('forumHeading')}</h2>
          <p>{t('forumDescription')}</p>
          <a className="button button-primary" href={site.forum} target="_blank" rel="noreferrer">
            {t('forumButton')} <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
