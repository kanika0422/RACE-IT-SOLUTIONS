import React from 'react';
import './HeroSection.css';
// import WelcomePopup from './WelcomePopup'; // ✅ import here

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Welcome to</h1>
        <h2>RACE OF ADVANCE COMPUTING EDUCATION PVT. LTD.</h2>

        <p className="highlight-text">
          The Beautiful thing about Learning is that nobody can take it away from you
        </p>
        <p className="white-text">
          Education is the process of facilitating learning, or the acquisition of knowledge,
          skills, values, beliefs, and habits. Educational methods include teaching, training,
          storytelling, discussion and directed research!
        </p>

        <a href="#courses" className="hero-btn">Explore Courses</a>
      </div>

      {/* ✅ Place popup inside hero */}
      {/* <WelcomePopup /> */}
    </section>
  );
};

export default HeroSection;
