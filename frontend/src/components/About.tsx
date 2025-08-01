import React from 'react';
import './About.css';
import { Profile } from '../types';

interface AboutProps {
  profile: Profile | null;
}

const About: React.FC<AboutProps> = ({ profile }) => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>{profile?.bio || 'Tell your story here. Share your background, interests, and what drives you as a developer.'}</p>
            <p>📍 {profile?.location || 'Your Location'}</p>
            <div className="resume-section">
              <a
                href="/assets/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-resume"
              >
                📄 View Resume
              </a>
            </div>
          </div>

          <div className="skills">
            <h3>Skills & Technologies</h3>
            <div className="skills-grid">
              {profile?.skills?.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              )) || (
                <>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">Flask</span>
                  <span className="skill-tag">Node.js</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
