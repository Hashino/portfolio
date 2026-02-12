import React from 'react';
import './Section.css';

const Section = ({ title, children, className = '' }) => {
  return (
    <section className={`section ${className}`}>
      <div className="section-content">
        {title && <h2 className="section-title">{title}</h2>}
        {children}
      </div>
    </section>
  );
};

export default Section;
