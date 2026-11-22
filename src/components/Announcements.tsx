import { useState } from 'react';
import { announcements } from '../data/announcements';
import { formatDate } from '../lib/format';

const filters = ['All', 'Announcement', 'Release', 'Update', 'Event'] as const;

export function Announcements() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');

  const visible = [...announcements]
    .filter((item) => filter === 'All' || item.category === filter)
    .sort((a, b) => Number(Boolean(b.pinned)) - Number(Boolean(a.pinned)) || b.date.localeCompare(a.date));

  const count = (name: (typeof filters)[number]) =>
    name === 'All' ? announcements.length : announcements.filter((item) => item.category === name).length;

  return (
    <>
      <section className="section" id="announcements">
        <div className="container">
          <div className="section-heading">
            <div><p className="eyebrow">FROM THE LAB</p><h2>Announcements</h2></div>
          </div>
          <div className="filters" aria-label="Filter announcements">
            {filters.map((name) => (
              <button key={name} type="button" aria-pressed={filter === name} onClick={() => setFilter(name)}>
                {name}<span>{count(name)}</span>
              </button>
            ))}
          </div>
          <div className="announcement-list">
            {visible.map((item) => (
              <article className="announcement-card" key={item.id}>
                <div className="announcement-meta">
                  <span className={`category category-${item.category.toLowerCase()}`}>{item.category}</span>
                  {item.pinned && <span className="pinned">Pinned</span>}
                  <time dateTime={item.date}>{formatDate(item.date)}</time>
                </div>
                <div className="announcement-body">
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                </div>
                {item.id === 'gitweb-live' ? (
                  <a className="arrow-link" href="gitweb-live.html" aria-label={`Read ${item.title}`}>→</a>
                ) : (
                  <a className="arrow-link" href={item.link} target={item.link.startsWith('http') ? '_blank' : undefined} rel="noreferrer" aria-label={`Read ${item.title}`}>→</a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
