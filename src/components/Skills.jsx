import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['Python', 'TypeScript', 'JavaScript (ES6+)', 'C#', 'C++', 'Bash', 'Go', 'Lua']
    },
    {
      category: 'Frontend',
      skills: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Chakra UI']
    },
    {
      category: 'Backend & APIs',
      skills: ['Node.js', 'Django', 'Flask', 'FastAPI', 'REST', 'GraphQL', 'WebSockets', 'Microservices', 'Express', 'Maven']
    },
    {
      category: 'AI / ML',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'LLMs', 'LangChain', 'LangGraph', 'MLflow', 'OpenCV', 'NumPy']
    },
    {
      category: 'Cloud & DevOps',
      skills: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'GitOps', 'Firebase']
    },
    {
      category: 'Data & Search',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch']
    },
    {
      category: 'Testing & Tooling',
      skills: ['Jest', 'Mocha', 'Cypress', 'GitHub Actions', 'Webpack', 'Vite']
    },
    {
      category: 'Ways of Working',
      skills: ['Agile/Scrum', 'Jira', 'Git', 'Code Reviews', 'Cross-functional Collaboration']
    }
  ];

  return (
    <div className="skills-grid">
      {skillCategories.map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="skill-category-title">{category.category}</h3>
          <div className="skill-tags">
            {category.skills.map((skill, idx) => (
              <span key={idx} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
