import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Close the menu whenever the route changes
    setMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="new-navbar">
      <div className="navbar-container">
        <NavLink to="/" className="nav-item-kn">KN</NavLink>

        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <NavLink to="/about" className="nav-item">About</NavLink>
          <NavLink to="/education" className="nav-item">Education</NavLink>
          <NavLink to="/experience" className="nav-item">Work</NavLink>
          <NavLink to="/projects" className="nav-item">Projects</NavLink>
          <NavLink to="/publications" className="nav-item">Publications</NavLink>
          <NavLink to="/contact" className="nav-item">Contact</NavLink>
        </div>

        <button className="hamburger-menu" onClick={toggleMenu} aria-label="Toggle menu">
          <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
          <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
          <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 