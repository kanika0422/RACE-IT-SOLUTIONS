import React from 'react';
import './StatsHighlightSection.css';

const stats = [
  { number: '55000+', label: 'Enrolled Students' },
  { number: '60+', label: 'Total Courses' },
  { number: '1550+', label: 'Resources Provided - Companies/Universities' },
  { number: '1500+', label: 'Total Worldwide Projects' },
];

const StatsHighlightSection = () => {
  return (
    <section className="stats-highlight">
      <h2 data-aos="fade-up">We're increasing this data every year</h2>
      <div className="stats-grid" data-aos="zoom-in">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <h3>{item.number}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsHighlightSection;
