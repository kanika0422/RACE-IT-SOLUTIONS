import React from 'react';
import './PortfolioSection.css';

const PortfolioSection = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-content" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>
          “Our mission is to deliver high-quality education, innovative solutions, and practical skills that drive success in the ever-evolving technical landscape.
          We are committed to fostering growth, innovation, and excellence in every endeavor.
          Our team of experienced instructors and industry experts ensures our training programs, encompassing programming courses, Python, data analytics, Excel,
          cloud computing, and more, remain up-to-date, relevant, and tailored to meet our clients' specific needs.
          Whether you are looking to enhance your own technical skills or empower your team with the latest knowledge,
          <strong> RACE (Computer Training Institute)</strong> is here to support your growth and success.”
        </p>
      </div>
    </section>
  );
};

export default PortfolioSection;
