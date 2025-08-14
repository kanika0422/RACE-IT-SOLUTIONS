import React, { useState } from 'react';
import './GallerySection.css';

const trainers = [
  { name: 'Lavish Arora', location: 'Haryana, India', role: 'Corporate Trainer', image: '/lavish.png' },
  { name: 'Shivani', location: 'Delhi, India', role: 'Soft Skills Trainer', image: '/shivani.jpg' },
  { name: 'Suraj', location: 'Maharashtra, India', role: 'Technical Trainer', image: '/suraj.jpg' },
  { name: 'Amit Ashokan', location: 'Maharashtra, India', role: 'Technical Trainer/Consultant', image: '/Amit Ashokan.jpg' },
  { name: 'Utkarsh', location: 'Haryana, India', role: 'Full Stack Web Developer', image: '/utkarsh.jpg' },
  { name: 'Pranay', location: 'Madhya Pradesh, India', role: 'Technical Trainer', image: '/pranay.jpg' },
  { name: 'Alok Prasher', location: 'Uttar Pradesh, India', role: 'Technical Trainer', image: '/alok.jpg' },
  { name: 'Kuldeep', location: 'Punjab, India', role: 'Developer', image: '/kuldeep.jpg' },
  { name: 'Mohit Jain', location: 'West Bengal, India', role: 'Soft Skills Trainer', image: '/mohit.jpg' },
  { name: 'Sankalp', location: 'Uttar Pradesh, India', role: 'Developer/Trainer', image: '/Sankalp (1).jpeg' },
  { name: 'Rishi', location: 'Uttar Pradesh, India', role: 'Software Developer', image: '/rishi.jpg' },
  { name: 'Neha', location: 'Uttar Pradesh, India', role: 'Operations', image: '/neha.jpg' },
  { name: 'Prateek Mishra', location: 'Madhya Pradesh, India', role: 'Developer/Trainer', image: '/prateek.png' },
  { name: 'Naresh kumar', location: 'Telangana, India', role: 'Technical Trainer', image: '/naresh.jpg' },
  { name: 'Aman', location: 'Bihar, India', role: 'Developer', image: '/aman.jpg' },
  { name: 'Navpreet', location: 'Chandigarh, India', role: 'Data Analytics', image: '/navpreet.jpg' },
  { name: 'Mr Ram', location: 'Telangana, India', role: 'Trainer', image: '/ram.jpg' },
  { name: 'Eshika', location: 'Punjab, India', role: 'Intership Developer', image: '/eshika.jpg' },
  { name: 'SP Tripathi', location: 'Bihar, India', role: 'Technical Trainer', image: '/sp.jpg' },
  { name: 'Aman', location: 'Telangana, India', role: 'Salesforce', image: '/aman1.jpg' },
  { name: 'Aditya', location: 'Delhi, India', role: 'Technical Trainer', image: '/aditya.jpg' }
];

const studentTestimonials = [
  {
    image: '/stu1.jpg',
    text: 'Incredible experience! Knowledgeable and supportive trainers. Diverse courses helped enhance my skills.'
  },
  {
    image: '/stu2.jpg',
    text: 'Top-notch trainers, practical learning, and real-world projects. Boosted my confidence as a developer.'
  },
  {
    image: '/stu3.jpg',
    text: 'Commendable commitment to diversity and inclusion. Welcoming and supportive environment.'
  },
  {
    image: '/stu4.jpg',
    text: 'Outstanding commitment to continuous learning. Updated content based on industry advancements.'
  },
  {
    image: '/stu5.jpg',
    text: 'Practical learning sets it apart. Real-world projects and constructive feedback.'
  },
  {
    image: '/stu6.jpg',
    text: 'Exceeded expectations. Industry expert trainers, practical exercises, and excellent career support.'
  },
  {
    image: '/stu7.jpg',
    text: 'Transitioning to tech was smooth. Engaging curriculum and supportive staff.'
  },
  {
    image: '/stu8.jpg',
    text: 'Grateful for the amazing learning experience. Mentors go above and beyond.'
  }
];

const trainingMessages = [
  {
    image: '/train2.jpg',
    text: 'Education Evolved, Futures Unleashed - Your Gateway to Growth and Achievement.'
  },
  {
    image: '/train3.jpg',
    text: 'Igniting Minds, Illuminating Futures - Where Learning Leads to Limitless Possibilities.'
  },
  {
    image: '/train4.jpg',
    text: 'Empower Your Potential, Excel in Every Endeavor - Your Success, Our Commitment.'
  },
  {
    image: '/train6.jpg',
    text: 'Where Achievement Meets Recognition!'
  }
];


const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const getUniqueRoles = () => {
    const roles = trainers.map(t => t.role);
    return ['All', ...Array.from(new Set(roles))];
  };

  const filteredTrainers =
    activeCategory === 'All'
      ? trainers
      : trainers.filter(trainer => trainer.role === activeCategory);

  return (
    <section className="gallery-section" id="gallery">
      <h2>Explore Our Gallery</h2>
      <p className="gallery-intro">
        Discover the moments, people, and experiences that define our community
      </p>

      {/* --- Meet Our Team --- */}
      <div className="gallery-subsection">
        <h3>Meet Our Team</h3>
        <div className="category-tabs">
          {getUniqueRoles().map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={activeCategory === category ? 'active' : ''}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredTrainers.map((trainer, index) => (
            <div key={index} className="gallery-card">
              <div className="card-text">
                <h4>{trainer.name}</h4>
                <p>From: {trainer.location}</p>
                <p>Works as: {trainer.role}</p>
              </div>
              <img src={trainer.image} alt={trainer.name} className="trainer-photo" />
            </div>
          ))}
        </div>
      </div>

      {/* --- Students --- */}
      <div className="gallery-subsection">
        <h3>Our Students</h3>
        <div className="testimonials-grid">
          {studentTestimonials.map((student, index) => (
            <div key={index} className="testimonial-card">
              <img src={student.image} alt={student.name} className="student-photo" />
              <p className="testimonial-text">“{student.text}”</p>
              <h4 className="student-name">— {student.name}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* --- Training Messages --- */}
      <div className="gallery-subsection">
        <h3>Training in Action</h3>
        <div className="training-grid">
  {trainingMessages.map((item, index) => (
    <div key={index} className="training-card">
      <img src={item.image} alt={`Training ${index + 1}`} className="training-image" />
      <p className="training-quote">“{item.text}”</p>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default GallerySection;
