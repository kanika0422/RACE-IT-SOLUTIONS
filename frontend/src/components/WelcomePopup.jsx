import React, { useState, useEffect } from 'react';
import './WelcomePopup.css';

const WelcomePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="welcome-overlay">
      <div className="welcome-modal" data-aos="zoom-in">
        <button className="welcome-close" onClick={handleClose}>×</button>
        {/* <img src="/NEW LOGO.png" alt="Race Logo" className="welcome-logo" /> */}
        <h2 className="welcome-heading">Welcome to <span>RACE IT Solution</span></h2>
        <p className="welcome-message">
          Empowering your future with innovative learning and technical excellence.
        </p>
        <a href="#get-started" className="welcome-btn" onClick={handleClose}>
          Get Started
        </a>
      </div>
    </div>
  );
};

export default WelcomePopup;
