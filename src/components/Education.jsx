import React from 'react';
import './Education.css';

const Education = () => {
  const education = [
    {
      institution: 'Open University, Brazil',
      degree: 'BSc in Computer Science',
      period: 'Sep 2021 - Present'
    },
    {
      institution: 'Escola Hilda Miranda, Serra',
      degree: 'Information Technology',
      period: 'Sep 2013 - Nov 2016'
    }
  ];

  return (
    <div className="education-list">
      {education.map((edu, index) => (
        <div key={index} className="education-item">
          <div className="education-header">
            <h3 className="education-institution">{edu.institution}</h3>
            <span className="education-period">{edu.period}</span>
          </div>
          <p className="education-degree">{edu.degree}</p>
        </div>
      ))}
      <div className="languages">
        <h3 className="languages-title">Languages</h3>
        <p className="language-item"><strong>English:</strong> C2 (Proficient)</p>
      </div>
    </div>
  );
};

export default Education;
