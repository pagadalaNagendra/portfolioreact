import React from 'react';
import './Skills'; 

const SkillBar = ({ skill, percentage }) => {
  return (
    <div className="skill_bar">
      <div className="info">
        <p>{skill}</p>
        <p>{percentage}%</p>
      </div>
      <div className={`bar ${skill.toLowerCase().replace(' ', '_')}`}></div>
    </div>
  );
};

export default SkillBar;
