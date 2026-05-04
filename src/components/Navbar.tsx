import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const navItems = [
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/education', label: 'Education' },
  { to: '/publications', label: 'Publications' },
  { to: '/contact', label: 'Contact' }
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="minimal-nav-wrap">
      <nav className="minimal-nav">
        <Link to="/" className="minimal-brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">KN</span>
          <span className="brand-text">© vibe-coded by Khushi</span>
        </Link>

        <button
          type="button"
          className="mobile-toggle"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          Menu
        </button>

        <div className={`minimal-links ${open ? 'open' : ''}`}>
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)}>
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
