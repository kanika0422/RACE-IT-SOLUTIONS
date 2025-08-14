import React, { useEffect, useState } from 'react';
import './DomainsPage.css';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const DomainsPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you can add API logic for backend submission
    alert('Your application has been submitted successfully!');
    setShowForm(false);
  };

  return (
    <>
      <div className="domains-page">
        <div id="home" className="domains-header" data-aos="fade-down">
          <h1>Our Main Domains</h1>
          <div className="domains-nav">
            <a href="/">Home</a>
            <a href="#training">Training</a>
            <a href="#projects">Projects</a>
            <a href="#consultancy">Consultancy</a>
            <a href="#internship">Internship</a>
          </div>
        </div>

        <div id="training" className="domains-section" data-aos="fade-up">
          <h2>Training</h2>
          <h3>Online Trainings</h3>
          <p>
            Unlock your potential, gain practical skills, and set yourself on the path to success with our student-friendly online training programs.
            Learn programming, data analytics, and more at your own pace. Enjoy live classes, hands-on projects, mentorship, certificates, and placement assistance.
          </p>
          <h3>Paid Training</h3>
          <p>
            Elevate your career by joining as a trainer and get paid for sharing your knowledge. Contribute to growth and be rewarded for your expertise.
          </p>
        </div>

        <div id="projects" className="domains-section" data-aos="fade-up">
          <h2>Projects</h2>
          <h3>Student Projects</h3>
          <p>
            Dive into real-world projects and gain experience by collaborating with companies in a professional environment.
          </p>
          <h3>Company Projects</h3>
          <p>
            Submit your company’s projects and let our talented students turn them into success stories with innovation and dedication.
          </p>
        </div>

        <div id="consultancy" className="domains-section" data-aos="fade-up">
          <h2>Consultancy</h2>
          <h3>University Consultancy</h3>
          <p>
            Need 100–150 professional trainers for your university? We specialize in connecting institutions with top-tier talent.
          </p>
          <h3>Industry Specialisms</h3>
          <p>
            Our consultants enhance business performance, solve challenges, and deliver tailored growth strategies across industries.
          </p>
        </div>

        <div id="internship" className="domains-section" data-aos="fade-up">
          <h2>Internship</h2>
          <h3>Unpaid Internship</h3>
          <p>
            Join our Unpaid Internship Program to gain real-world experience, earn certificates, and build your resume.
          </p>
          <h3>Paid Internship</h3>
          <p>
            Become a mentor in our Paid Internship Program and share your expertise while guiding students.
          </p>

          <button className="apply-btn" onClick={() => setShowForm(true)}>
            Apply for Internship
          </button>
        </div>
      </div>

      {/* Application Form Popup */}
      {showForm && (
        <div className="form-popup-overlay" onClick={() => setShowForm(false)}>
          <div className="form-popup enhanced" onClick={(e) => e.stopPropagation()}>
            <h2>Internship Application</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your full name"
                required
                onChange={handleChange}
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                required
                onChange={handleChange}
              />

              <label htmlFor="course">Course Interested In</label>
              <input
                type="text"
                name="course"
                id="course"
                placeholder="e.g., Web Development, Data Science"
                required
                onChange={handleChange}
              />

              <label htmlFor="resume">Upload Resume (.pdf, .doc, .docx)</label>
              <input
                type="file"
                name="resume"
                id="resume"
                accept=".pdf,.doc,.docx"
                required
                onChange={handleChange}
              />

              <button type="submit" className="submit-btn">Submit Application</button>
            </form>
            <button className="close-btn" onClick={() => setShowForm(false)}>×</button>
          </div>
        </div>
      )}

      <Footer />

      <div className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        ↑
      </div>
    </>
  );
};

export default DomainsPage;
