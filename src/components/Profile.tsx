import React from 'react';

const Profile: React.FC = () => {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src="/profile.jpg" alt="Khushi Naik profile" />
      </div>
      <div className="section__text">
        <h2>Khushi Naik</h2>
        <p className="section__text__p2">M.S. Computer Science @ USC | Los Angeles, CA</p>
        <div className="btn-container">
          <button className="btn btn-color-2" onClick={() => window.open('https://drive.google.com/drive/folders/1x1KbPmivgnAkG7HczOKsDR4e0e5XM2CT?usp=sharing')}>Download CV</button>
          <button className="btn btn-color-1" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>Contact Info</button>
        </div>
        <div id="socials-container">
          <a href="https://www.linkedin.com/in/khushinaik/" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.png" alt="LinkedIn" className="icon" />
          </a>
          <a href="https://github.com/NaikKhushi21" target="_blank" rel="noopener noreferrer">
            <img src="/github.png" alt="GitHub" className="icon" />
          </a>
          <a href="https://scholar.google.com/citations?user=KhushiNaik" target="_blank" rel="noopener noreferrer">
            <img src="/scholar.png" alt="Google Scholar" className="icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Profile; 