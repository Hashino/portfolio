import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Iam Ravara</h1>
        <h2>Senior Full Stack & AI Engineer</h2>
        <p className="hero-location">Brazil</p>
        <div className="hero-links">
          <a href="mailto:iam.ravara@gmail.com" className="hero-link">
            Email
          </a>
          <a href="https://github.com/hashino" target="_blank" rel="noopener noreferrer" className="hero-link">
            GitHub
          </a>
          <a href="https://hashino.github.io" target="_blank" rel="noopener noreferrer" className="hero-link">
            Blog
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
