// import React from 'react';
// import SkillBar from './SkillBar'; // Import the SkillBar component
// import './Skills.css'

// const SkillsSection = () => {
//   const skills = [
//     { skill: 'HTML', percentage: 90 },
//     { skill: 'CSS', percentage: 85 },
//     // Add more skills as needed
//   ];

//   return (
//     <div className="skills_section">
//       <div className="skills_head">
//         <h2>My <span>Skills</span></h2>
//         <p>Here are my skills to represent my expertise</p>
//       </div>

//       <div className="skills_main">
//         {skills.map((skill, index) => (
//           <SkillBar key={index} skill={skill.skill} percentage={skill.percentage} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SkillsSection;

import React from 'react';
import './Skills.css';  // Make sure to import your CSS file

const Skills = () => {
  const skills = [
    { skill: 'HTML', percentage: 90, className: 'html' },
    { skill: 'CSS', percentage: 85, className: 'css' },
    { skill: 'Python', percentage: 80, className: 'sass' },
    { skill: 'JavaScript', percentage: 80, className: 'js' },
    { skill: 'React.js', percentage: 75, className: 'react' },
    { skill: 'Node.js', percentage: 70, className: 'node' },
    { skill: 'Express.js', percentage: 65, className: 'express' },
    { skill: 'MongoDB', percentage: 60, className: 'mongo' }
  ];

  return (
    <div className="skills_section" id="skills_section">
      <div className="skills_head">
        <h2>My <span>Skills</span></h2>
        <p>Here are my skills to represent my expertise</p>
      </div>

      <div className="skills_main">
        {skills.map((skill, index) => (
          <div className="skill_bar" key={index}>
            <div className="info">
              <p>{skill.skill}</p>
              <p>{skill.percentage}%</p>
            </div>
            <div className="bar">
              <span className={skill.className}></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
