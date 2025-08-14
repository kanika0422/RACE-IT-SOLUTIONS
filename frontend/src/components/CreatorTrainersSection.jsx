import React from 'react';
import { Link } from 'react-router-dom';
import './CreatorTrainersSection.css';
import trainerIcon from '../assets/training.png'; 

// const mainTrainers = [
//   { name: 'Shivani', role: 'Soft Skills Trainer', image: '/shivani.jpg' },
//   { name: 'Suraj', role: 'Technical Trainer', image: '/suraj.jpg' },
//   { name: 'Amit Ashokan', role: 'Technical Trainer & Consultant', image: '/Amit Ashokan.jpg' }
// ];

const CreatorTrainersSection = () => {
  return (
    <section className="creator-trainers-wrapper" id="creators">
      <h2 className="creator-title">Creator</h2>

      {/* Top Section with MD and Vision */}
      <div className="creator-trainers-bg">
        {/* MD Card */}
        <div className="creator-card" data-aos="fade-right">
          <img src="/lavish.png" alt="Lavish Arora" className="creator-photo" />
          <h3>Lavish Arora</h3>
          <p className="role">MD</p>
          <blockquote>
            “As we continue to evolve in the dynamic technical landscape, our mission remains clear: 
            to foster growth, inspire creativity, and support our learners' journey towards success.”
          </blockquote>
          <div className="social-icons">
            <button className="icon-button">
              <i className="fab fa-linkedin"></i>
            </button>
            <button className="icon-button">
              <i className="fab fa-facebook"></i>
            </button>
          </div>
        </div>

        {/* Trainers Message Card */}
        <div className="trainers-card" data-aos="fade-left">
          <img src={trainerIcon} alt="Trainer Icon" className="creator-image" />
          <h3>Our Trainers</h3>
          <blockquote>
            “We are passionate about revolutionizing the way we learn. 
            Our innovative team combines technology, expertise, and community 
            to create an unparalleled educational experience.”
          </blockquote>
          <div className="bottom-links">
            <Link to="/gallery">Our Gallery +</Link>
            <a href="#services">Services +</a>
          </div>
        </div>
      </div>

      {/* Main Trainers Section
      <div className="main-trainers-grid">
        {mainTrainers.map((trainer, index) => (
          <div className="creator-card" key={index} data-aos="fade-up">
            <img src={trainer.image} alt={trainer.name} className="creator-photo" />
            <h3>{trainer.name}</h3>
            <p className="role">{trainer.role}</p>
            <blockquote>
              “Empowering learners with real-world insights and hands-on expertise.”
            </blockquote>
            <div className="social-icons">
              <button className="icon-button">
                <i className="fab fa-linkedin"></i>
              </button>
              <button className="icon-button">
                <i className="fab fa-facebook"></i>
              </button>
            </div>
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default CreatorTrainersSection;
