import React from 'react';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    'Engineered scalable AI SaaS platforms using Python and React/Next.js, improving processing speed by 35% and reducing compute costs',
    'Designed architecture for cloud-native systems across AWS, Azure, and GCP using microservices and serverless components, achieving 99.5% uptime and 40% cost optimization',
    'Designed Python-based AI automation services integrating LLMs and LangChain to streamline internal data analysis workflows'
  ];

  return (
    <ul className="achievements-list">
      {achievements.map((achievement, index) => (
        <li key={index} className="achievement-item">{achievement}</li>
      ))}
    </ul>
  );
};

export default Achievements;
