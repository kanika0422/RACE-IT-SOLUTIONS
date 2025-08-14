import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import './Header.css';
import GetStarted from './GetStarted';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleGetStartedClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <header className="site-header">
        <div className="logo">
          <img src="/NEW LOGO.png" alt="Race Logo" style={{ height: '40px' }} />
          <span>RACE IT Solution</span>
        </div>

        <nav className={`nav-links ${menuOpen ? 'mobile-open' : ''}`}>
          <li>
  <a
    href="http://localhost:5000" // change to live URL after deployment
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="race-next-step-btn">RACE-NEXT-STEP</button>
  </a>
</li>
          <HashLink smooth to="/#home" onClick={() => setMenuOpen(false)}>Home</HashLink>
          <HashLink smooth to="/#courses" onClick={() => setMenuOpen(false)}>Courses</HashLink>
          <HashLink smooth to="/#creators" onClick={() => setMenuOpen(false)}>Trainers</HashLink>
          <HashLink smooth to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</HashLink>
          <HashLink smooth to="/#contact" onClick={() => setMenuOpen(false)}>Contact</HashLink>
          <HashLink smooth to="/#footer" onClick={() => setMenuOpen(false)}>Payment</HashLink>
          <button onClick={handleGetStartedClick} className="get-started-btn">
            Explore Us
          </button>
        </nav>

        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </header>

      {showModal && <GetStarted onClose={() => setShowModal(false)} />}
    </>
  );
};

export default Header;
