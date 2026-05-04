import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import './SiteMeta.css';

const SiteMeta: React.FC = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const formatted = new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'America/Los_Angeles',
      }).format(new Date());
      setTime(formatted);
    };

    update();
    const timer = setInterval(update, 30_000);

    return () => clearInterval(timer);
  }, []);

  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <aside className="site-meta-rail" aria-label="Site meta">
      <div className="site-meta-card">
        <p className="meta-kicker">Let’s work together</p>
        <Link to="/contact" className="meta-cta">Open channel</Link>
        <a className="meta-mail" href="mailto:khushinaikk21@gmail.com">khushinaikk21@gmail.com</a>
      </div>

      <div className="site-meta-grid">
        <div>
          <span>Version</span>
          <strong>{year} Edition</strong>
        </div>
        <div>
          <span>Timezone</span>
          <strong>{time} PT</strong>
        </div>
        <div>
          <span>Socials</span>
          <strong>
            <a href="https://github.com/NaikKhushi21" target="_blank" rel="noreferrer">GitHub</a>
            {' · '}
            <a href="https://www.linkedin.com/in/khushinaik/" target="_blank" rel="noreferrer">LinkedIn</a>
          </strong>
        </div>
      </div>
    </aside>
  );
};

export default SiteMeta;
