import React from 'react';
import './Header.css';
import { Profile } from '../types';

interface HeaderProps {
  profile: Profile | null;
}

const Header: React.FC<HeaderProps> = ({ profile }) => {
  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <a href="/"><h2>{profile?.short_name || 'Your Name'}</h2></a>
        </div>
        <ul className="nav-links">
          <li><button onClick={() => scrollToSection('about')}>About</button></li>
          <li><a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
          <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
        </ul>
      </nav>

      <div className="hero">
        <div className="hero-content">
          <h1>Hi, I'm {profile?.name || 'Your Name'}</h1>
          <p className="hero-title">{profile?.title || 'Software Developer'}</p>
          <p className="hero-bio">{profile?.quick_bio || 'Welcome to my personal website'}</p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection('about')}
            >
              Learn More
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
