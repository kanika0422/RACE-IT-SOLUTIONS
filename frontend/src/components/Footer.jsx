import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        {/* Left Side */}
        <div className="footer-left">
          <div className="footer-logo-wrapper">
            <img src="/NEW LOGO.png" alt="Race IT Logo" className="footer-logo" />
          </div>

          {/* Social Links */}
          <div className="social-icons">
            <a href="https://www.facebook.com/raceitsolution" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="https://www.instagram.com/raceitsolution" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a href="https://twitter.com/raceitsolution" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="https://www.linkedin.com/company/raceitsolution" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i> LinkedIn
            </a>
            <a href="https://wa.me/918800701946" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i> WhatsApp
            </a>
            <a href="mailto:RaceOfEducation@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i> Email
            </a>
            <a href="tel:+918800701946" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-phone-alt"></i> Call Us
            </a>
            <a href="https://goo.gl/maps/F4Qn9DR4WAF2" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-map-marker-alt"></i> Location
            </a>
          </div>

          {/* Copyright */}
          <p className="copyright">
            &copy; 2025 RACE of Advance Computing Education Pvt Ltd. <br />
            All Rights Reserved.
          </p>

          {/* Contact Info */}
          <div className="footer-contact">
            <p>
              <i className="fas fa-map-marker-alt"></i> RACE of Advance Computing Education Pvt Ltd<br />
              Office 15, Vatika Kunj, Bhondsi, Gurugram 122102
            </p>
            <p>
              <i className="fas fa-phone-alt"></i> +91-8800-701-946, +91-9999057839
            </p>
            <p>
              <i className="fas fa-envelope"></i> RaceOfEducation@gmail.com<br />
              LavishArora133@gmail.com<br />
              Race@RaceItSolution.co.in
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="footer-right">
          {/* Timings */}
          <div className="footer-timings">
            <h3><i className="fas fa-clock"></i> Timings</h3>
            <p>Our services are available during the following hours:</p>
            <p><strong>India Standard Time (IST):</strong> 6:00 AM to 11:00 PM</p>
            <p><strong>For International Clients:</strong> 8:00 PM to 6:00 AM IST</p>
          </div>

          {/* Payments */}
          <div className="footer-payments">
            <h3><i className="fas fa-credit-card"></i> Payments</h3>
            <p>To complete your payment, you can choose from the following options:</p>
            <p><strong>Option 1:</strong> Scan Our QR Code</p>
            <img src="paymentqr.jpg" alt="QR Code" className="qr-code" />
            <p><strong>Option 2:</strong> Use our account details</p>
            <p><strong>Account Number:</strong> 9192 2010 0128 53</p>
            <p><strong>Mobile Number:</strong> +91 8800 701 946</p>
            <p><strong>Account Holder's Name:</strong> LAVISH ARORA</p>
            <p><strong>IFSC Code:</strong> CNRB0005693</p>
            <p>Your support is greatly appreciated!</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
