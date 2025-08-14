import React, { useState } from 'react';
import './CoursesSection.css';

const categories = {
  Corporate: [
    { name: 'Power BI', duration: '50 HOURS' },
    { name: 'Tableau', duration: '50 HOURS' },
    { name: 'Google Looker', duration: '50 HOURS' },
    { name: 'Adv Excel', duration: '30 HOURS' },
    { name: 'AWS Certification', duration: '30 HOURS PER CERTIFICATION TRAINING' },
    { name: 'Digital Marketing', duration: '40 HOURS' },
    { name: 'IT', duration: '25 HOURS' },
    { name: 'Azure Machine Learning', duration: '40 HOURS' },
    { name: 'Azure Certification', duration: '30 HOURS PER CERTIFICATION TRAINING' },
    { name: 'AWS Cloud Computing', duration: '50 HOURS' },
    { name: 'Google Cloud Computing', duration: '50 HOURS' },
    { name: 'Microsoft Certification', duration: '30 HOURS PER CERTIFICATION TRAINING' },
    { name: 'Office 365', duration: '30 HOURS' },
    { name: 'SharePoint', duration: '15 HOURS' },
    { name: 'MBA Coaching', duration: '25 HOURS' },
    { name: 'Marketing', duration: '25 HOURS' },
    { name: 'HR', duration: '25 HOURS' },
    { name: 'Infosys Preparation', duration: '25 HOURS' },
    { name: 'TCS Preparation', duration: '25 HOURS' },
    { name: 'Capgemini Preparation', duration: '25 HOURS' },
    { name: 'Soft Skills Training', duration: '30 HOURS' },
    { name: 'Interview Preparation', duration: '30 HOURS' },
    { name: 'Spoken English', duration: '3 MONTHS' }
  ],
  Students: [
    { name: 'Python', duration: '25 HOURS' },
    { name: 'Java', duration: '40 HOURS' },
    { name: 'Core Java', duration: '40 HOURS' },
    { name: 'Adv Java', duration: '40 HOURS' },
    { name: 'C Language', duration: '30 HOURS' },
    { name: 'C++', duration: '30 HOURS' },
    { name: 'JavaScript (JS)', duration: '25 HOURS' },
    { name: 'React JS', duration: '25 HOURS' },
    { name: 'React Native', duration: '25 HOURS' },
    { name: 'HTML', duration: '20 HOURS' },
    { name: 'CSS', duration: '30 HOURS' },
    { name: 'jQuery', duration: '20 HOURS' },
    { name: 'Ajax', duration: '20 HOURS' },
    { name: 'SQL', duration: '25 HOURS' },
    { name: 'PHP', duration: '30 HOURS' },
    { name: '.NET', duration: '40 HOURS' },
    { name: 'Full Stack Web Developer', duration: '6 MONTHS' },
    { name: 'Full Stack Java Developer', duration: '6 MONTHS' },
    { name: 'Networking', duration: '30 HOURS' },
    { name: 'Networking and Hardware', duration: '50 HOURS' },
    { name: 'Cyber Security', duration: '40 HOURS' },
    { name: 'Ethical Hacking', duration: '40 HOURS' },
    { name: 'MongoDB', duration: '25 HOURS' },
    { name: 'Basic Computer', duration: '30 HOURS' }
  ],
  University: [
    { name: 'BTECH CSE (BE)', duration: '25 HOURS PER SUBJECT' },
    { name: 'BTECH Electronics', duration: '25 HOURS PER SUBJECT' },
    { name: 'BTECH IT', duration: '25 HOURS PER SUBJECT' },
    { name: 'Computer Fundamentals', duration: '60 HOURS' },
    { name: 'Operating System', duration: '25 HOURS' },
    { name: 'Windows OS', duration: '25 HOURS' },
    { name: 'Linux OS', duration: '30 HOURS' },
    { name: 'Computer Hardware and Software', duration: '20 HOURS' },
    { name: 'Full Stack Web Development', duration: '6 MONTHS' },
    { name: 'Data Analytics', duration: '50 HOURS' },
    { name: 'Cloud Computing', duration: '50 HOURS' },
    { name: 'AWS Cloud', duration: '50 HOURS' },
    { name: 'Azure Cloud', duration: '50 HOURS' },
    { name: 'Google Cloud', duration: '50 HOURS' }
  ]
};

const CoursesSection = () => {
  const [activeCategory, setActiveCategory] = useState('Corporate');

  return (
    <section className="courses-section" id="courses">
      <h2>Courses on RACE</h2>
      <p className="courses-intro">
        Learn programming languages and concepts to prepare for a career in hardware or software development.
      </p>

      <div className="courses-tabs">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            className={activeCategory === category ? 'active' : ''}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="courses-grid">
        {categories[activeCategory].map((course, index) => (
          <div key={index} className="course-card">
            <h3>{course.name}</h3>
            <p className="course-duration">Duration: {course.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
