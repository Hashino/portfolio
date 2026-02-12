import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'MentorTech Solutions',
      role: 'Senior AI Full Stack Engineer',
      period: 'Apr 2024 - Present',
      highlights: [
        'Revamped PostgreSQL database schema, boosting system stability by 35% and reducing query time by 20%',
        'Led root-cause analysis for production failures, resulting in 40% fewer repeat incidents',
        'Researched AI-powered clinical documentation assistant using RAG (LangChain, Pinecone, OpenAI)',
        'Optimized AWS infrastructure with Terraform and Kubernetes, achieving 20% cost reduction',
        'Accelerated team delivery by 12% through mentorship of 4 junior engineers',
        'Streamlined CI/CD pipelines with automated testing, resulting in 50% faster deployments',
        'Automated 6 manual data validation steps using NLP, improving efficiency by 35%'
      ]
    },
    {
      company: 'Sollo Brasil',
      role: 'Full Stack Engineer',
      period: 'Nov 2021 - Apr 2024',
      highlights: [
        'Architected Python automation workflows with Flask and REST APIs, saving ~10 hours/week',
        'Improved system uptime by ~5% through refactoring and structured error handling',
        'Reduced incident resolution time by ~25% as technical escalation point',
        'Integrated AI/ML with embeddings and vector search, increasing search relevance by ~30%',
        'Mentored 5+ junior developers, achieving 4.8/5 satisfaction score'
      ]
    },
    {
      company: 'Upwork',
      role: 'Full Stack Engineer',
      period: 'Jun 2016 - Nov 2021',
      highlights: [
        'Revamped mobile onboarding with React Native, cutting churn by 30%',
        'Engineered scalable .NET applications (C#) for desktop and web environments',
        'Developed high-performance solutions in C/C++, Rust, and Go',
        'Architected RESTful APIs with MongoDB and Redis, reducing latency by 30%',
        'Integrated Docker into CI/CD, accelerating release cycles by 45%'
      ]
    }
  ];

  return (
    <div className="experience-list">
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <div className="experience-header">
            <h3 className="experience-company">{exp.company}</h3>
            <span className="experience-period">{exp.period}</span>
          </div>
          <h4 className="experience-role">{exp.role}</h4>
          <ul className="experience-highlights">
            {exp.highlights.map((highlight, idx) => (
              <li key={idx}>{highlight}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
