import React from 'react';
import './GetStarted.css';

const GetStarted = ({ onClose }) => {
  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    onClose(); // Close the modal after scroll
  };

  return (
    <div className="get-started-overlay">
      <div className="get-started-modal">
        <button className="close-btn" onClick={onClose}>×</button>

        <h2 className="get-started-title">Welcome to <span>RACE IT Solution</span></h2>
        <p className="get-started-subtitle">Crafting Stories, Igniting Emotions</p>

        <ul className="quick-links">
          <li><a href="#home" onClick={(e) => handleLinkClick(e, '#home')}>Home</a></li>
          <li><a href="/gallery" onClick={onClose}>Our Team</a></li>
          <li><a href="#footer" onClick={(e) => handleLinkClick(e, '#footer')}>Payments</a></li>
          <li><a href="/domains" onClick={onClose}>Domains</a></li>
          {/* <li><a href="#videos" onClick={(e) => handleLinkClick(e, '#videos')}>Our Video Showcase</a></li> */}
          {/* <Link to="/work-videos" onClick={() => setMenuOpen(false)}>Our Video Showcase</Link> */}
          <li><a href="/work-videos" onClick={onClose}>Our Video Showcase</a></li>

        </ul>

        {/* <div className="contact-block">
          <p><strong>Office:</strong> RACE of Advance Computing Education Pvt Ltd<br />
            Office 15, Vatika Kunj, Bhondsi, Gurugram 122102</p>
          <p><strong>Phone:</strong> +91-8800-701-946, +91-9999057839</p>
          <p><strong>Email:</strong> RaceOfEducation@gmail.com, LavishArora133@gmail.com, Race@RaceItSolution.co.in</p>
        </div>

        <div className="timings">
          <h4>Timings</h4>
          <p>India Standard Time (IST): 6:00 AM to 11:00 PM</p>
          <p>International Clients: 8:00 PM to 6:00 AM IST</p>
        </div>

        <div className="payments">
          <h4>Payments</h4>
          <p><strong>Option 1:</strong> Scan Our QR Code</p>
          <img src="https://www.raceitsolution.co.in/images/qr.jpg" alt="QR Code" className="qr-image" />
          <p><strong>Option 2:</strong></p>
          <p>Account Number: 9192 2010 0128 53</p>
          <p>Mobile: +91 8800 701 946</p>
          <p>Account Holder: LAVISH ARORA</p>
          <p>IFSC Code: CNRB0005693</p>
        </div> */}
      </div>
    </div>
  );
};

export default GetStarted;
