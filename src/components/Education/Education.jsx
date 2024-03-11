import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <div className="education-container" id="education">
      <div className="education-wrapper">
        <main className="education-main">
          <section className="education-section">
            <header className="education-title">
              <h2>EDUCATION</h2>
            </header>
            <div className="education-details">
              <div className="education-box">
                <h4>2017 - 2018</h4>
                <h3>Pragati Little Public School</h3>
                <p>
                 2017-2018
                </p>
                <p>
                 Secondary School of Certificate (9.0 CGPA)
                </p>
              </div>

              <div className="education-box">
                <h4>2018 - 2020</h4>
                <h3>Narayana Junior College</h3>
                <p>
                 2018-2020
                </p>
                <p>
                Intermediate_MPC(7.17 CGPA)
                </p>
              </div>

              <div className="education-box">
                <h4>2020 - 2024</h4>
                <h3>Kakinada Institute</h3>
                <p>
                 2020-2024
                </p>
                <p>
                 B Tech (Bachelor of Technology)_Computer Science Engineering (CSE) (7.01 CGPA)
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Education;


