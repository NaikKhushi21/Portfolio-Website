import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeGrid.css';

const HomeGrid: React.FC = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleNavigate = (path: string) => {
    setActiveSection(path);
    setTimeout(() => {
      navigate(path);
      setTimeout(() => setActiveSection(null), 50);
    }, 300);
  };

  const sections = [
    { name: 'work', path: '/experience', label: 'work', points: '0,0 500,0 500,300 0,300', x: '250', y: '150' },
    { name: 'education', path: '/education', label: 'education', points: '0,300 500,300 500,900 0,900', x: '250', y: '600' },
    { name: 'projects', path: '/projects', label: 'projects', points: '500,0 1100,0 1100,300 500,300', x: '800', y: '150' },
    { name: 'publication', path: '/publications', label: 'publications', points: '1100,0 1600,0 1600,600 1100,600', x: '1350', y: '300' },
    { name: 'contact', path: '/contact', label: 'contact', points: '1100,600 1600,600 1600,900 1100,900', x: '1350', y: '750' },
    { name: 'about', path: '/about', label: 'about', points: '500,600 1100,600 1100,900 500,900', x: '800', y: '750' }
  ];

  return (
    <>
      <div className="svg-container desktop-homegrid">
        <svg viewBox="0 0 1600 900" preserveAspectRatio="none">
          <defs>
            <filter id="blur-filter" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="80" />
            </filter>
            <radialGradient id="purple-gradient">
              <stop offset="0%" stopColor="#a18cd1" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#fbc2eb" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="teal-gradient">
              <stop offset="0%" stopColor="#43cea2" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#185a9d" stopOpacity="0" />
            </radialGradient>
          </defs>

          <rect width="100%" height="100%" fill="white" />

          {/* Clickable Groups for Sections */}
          {sections.map(section => (
            <g key={section.name} className="nav-group" onClick={() => handleNavigate(section.path)}>
              <polygon
                points={section.points}
                className={`nav-polygon ${activeSection === section.path ? 'active' : ''}`}
              />
              <text
                className={`nav-text ${activeSection === section.path ? 'active' : ''}`}
                x={section.x}
                y={section.y}
                textAnchor="middle"
              >
                {section.label.charAt(0).toUpperCase() + section.label.slice(1).toLowerCase()}
              </text>
            </g>
          ))}

          {/* Center Box */}
          <g>
            <rect x="500" y="270" width="600" height="360" fill="#F8C8DC"/>
            <rect x="500" y="270" width="600" height="360" fill="none" stroke="#D83F87" strokeWidth="2"/>
          </g>

          {/* Center Circle with Image */}
          <g>
            <circle cx="800" cy="420" r="120" fill="#F8C8DC" stroke="#D83F87" strokeWidth="3"/>
            <image 
              href={`${import.meta.env.BASE_URL}me (2).png`} 
              x="680" 
              y="300" 
              width="240" 
              height="240" 
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#circle-clip)"
            />
            <defs>
              <clipPath id="circle-clip">
                <circle cx="800" cy="420" r="120"/>
              </clipPath>
            </defs>
            {/* Name Text */}
            <text 
              x="800" 
              y="575" 
              textAnchor="middle" 
              className="center-name"
              fill="#D83F87"
              fontSize="32"
              fontFamily="'Dancing Script', cursive"
              fontWeight="700"
            >
              Khushi Naik
            </text>
          </g>

          {/* Lines */}
          <line x1="0" y1="300" x2="500" y2="300" stroke="#D83F87" strokeWidth="2" />
          <line x1="1100" y1="600" x2="1600" y2="600" stroke="#D83F87" strokeWidth="2" />
          <line x1="500" y1="0" x2="500" y2="300" stroke="#D83F87" strokeWidth="2" />
          <line x1="1100" y1="0" x2="1100" y2="600" stroke="#D83F87" strokeWidth="2" />
          <line x1="500" y1="600" x2="500" y2="900" stroke="#D83F87" strokeWidth="2" />
          <line x1="1100" y1="600" x2="1100" y2="900" stroke="#D83F87" strokeWidth="2" />
        </svg>
      </div>
      <div className="mobile-homegrid">
        <div className="mobile-image-container">
          <img src={`${import.meta.env.BASE_URL}me (2).png`} alt="Khushi Naik" className="mobile-profile-image" />
          <h2 className="mobile-name">Khushi Naik</h2>
        </div>
        <div className="mobile-grid-items">
          {sections.map(section => (
            <div
              key={section.name}
              className="mobile-homegrid-item"
              onClick={() => handleNavigate(section.path)}
            >
              {section.label.charAt(0).toUpperCase() + section.label.slice(1).toLowerCase()}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeGrid;