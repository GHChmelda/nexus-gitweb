import { useState, type FormEvent } from 'react';
import { projects } from '../data/projects';
import { useI18n } from '../i18n';

export function Projects() {
  const { t, project } = useI18n();
  const [projectName, setProjectName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    try {
      const parsed = new URL(url.trim());
      const parts = parsed.pathname.split('/').filter(Boolean);
      if (parsed.protocol !== 'https:' || parsed.hostname !== 'github.com' || parsed.username || parsed.password || parts.length !== 2) {
        throw new Error('Invalid GitHub repository URL');
      }

      const repositoryUrl = `https://github.com/${parts[0]}/${parts[1].replace(/\.git$/i, '')}`;
      const body = [
        '### Project name',
        projectName.trim(),
        '',
        '### Repository URL',
        repositoryUrl,
        '',
        '### Description',
        description.trim(),
      ].join('\n');
      const params = new URLSearchParams({
        template: 'project-submission.md',
        title: `Project submission: ${projectName.trim()}`,
        body,
        labels: 'project-submission',
      });

      window.location.assign(`https://github.com/GHChmelda/nexus-gitweb/issues/new?${params.toString()}`);
    } catch {
      setError(t('invalidRepo'));
    }
  };

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-heading">
          <div><p className="eyebrow">{t('work')}</p><h2>{t('projectHeading')}</h2></div>
          <p className="heading-note">{t('projectNote')}</p>
        </div>
        <div className="project-grid">
          {projects.map((projectItem) => (
            <article className="project-card" key={projectItem.name}>
              <div className="project-top">
                <span className="project-icon">{projectItem.name === 'NovaOS' ? 'N' : projectItem.name.slice(0, 1)}</span>
                <span className={`status status-${projectItem.status.toLowerCase()}`}>{t(projectItem.status.toLowerCase())}</span>
              </div>
              <p className="project-name">{projectItem.name}</p>
              <h3>{project(projectItem.name, 'tagline') ?? projectItem.tagline}</h3>
              <p className="project-description">{project(projectItem.name, 'description') ?? projectItem.description}</p>
              <div className="tags">{projectItem.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <div className="project-links">
                {projectItem.links.map((link) => (
                  <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                    {link.label} <span>↗</span>
                  </a>
                ))}
              </div>
            </article>
          ))}
          <section className="share-project" id="share-project">
            <div>
              <p className="eyebrow">{t('communityProjects')}</p>
              <h3>{t('shareHeading')}</h3>
              <p>{t('shareDescription')}</p>
            </div>
            <form onSubmit={submit}>
              <label htmlFor="project-name">{t('projectName')}</label>
              <input id="project-name" required maxLength={100} value={projectName} onChange={(event) => setProjectName(event.target.value)} />
              <label htmlFor="project-url">{t('repoUrl')}</label>
              <input id="project-url" type="url" required placeholder={t('repoPlaceholder')} value={url} onChange={(event) => setUrl(event.target.value)} />
              <label htmlFor="project-description">{t('projectDescription')}</label>
              <textarea id="project-description" required maxLength={1000} rows={3} value={description} onChange={(event) => setDescription(event.target.value)} />
              <button className="button button-primary" type="submit">{t('submitProject')}</button>
            </form>
            {error && <p className="form-error" role="alert">{error}</p>}
            <p className="submission-note">{t('shareGithubNote')}</p>
          </section>
        </div>
      </div>
    </section>
  );
}
