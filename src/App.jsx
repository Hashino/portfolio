import React from 'react';
import Stars from './components/Stars';
import Astronaut from './components/Astronaut';
import Hero from './components/Hero';
import Section from './components/Section';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Education from './components/Education';
import './App.css';

function App() {
  return (
    <>
      <Stars />
      <Astronaut />
      
      <div className="container">
        <Hero />
        
        <Section title="Summary">
          <p>
            Full Stack & AI Engineer with 9+ years of experience building scalable backend systems for 
            regulated SaaS environments. Led initiatives to resolve high-frequency customer issues, 
            decreasing repeat support escalations and improving operational efficiency. Delivered AI-driven 
            SaaS platforms, improving processing speed by 35%. Led UI redesigns for five key mobile 
            applications, directly contributing to a 15% increase in customer lifetime value.
          </p>
        </Section>

        <Section title="Work Experience">
          <Experience />
        </Section>

        <Section title="Selected Achievements">
          <Achievements />
        </Section>

        <Section title="Core Skills">
          <Skills />
        </Section>

        <Section title="Education">
          <Education />
        </Section>

        <footer className="footer">
          <p>© 2024 Iam Ravara. Built with React.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
