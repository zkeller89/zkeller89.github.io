import React from 'react';
import './Footer.css';
import { Profile } from '../types';

interface FooterProps {
  profile: Profile | null;
}

const Footer: React.FC<FooterProps> = ({ profile }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>{profile?.name || 'Your Name'}</h3>
            <p>{profile?.title || 'Software Developer'}</p>
          </div>
          
          <div className="social-links">
            {profile?.social?.github && (
              <a 
                href={profile.social.github} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                GitHub
              </a>
            )}
            {profile?.social?.linkedin && (
              <a 
                href={profile.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
            )}
            {profile?.social?.twitter && (
              <a 
                href={profile.social.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                Twitter
              </a>
            )}
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {profile?.name || 'Your Name'}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
