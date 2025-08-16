import React from 'react';
import './TestimonialsSection.css';

const testimonials = [
  {
    name: 'Lauren',
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
    message: `C & C++ awesome trainer Mr. Lavish Arora sir… Too good teaching style & knowledge but some time don't have much more time we know. Now I got the job in uhg… Nice institute & reasonable fee.`,
  },
  {
    name: 'Rahul',
    image: 'https://randomuser.me/api/portraits/men/12.jpg',
    message: `Python course was very practical and helpful. The trainer explained everything with real-time projects.`,
  },
  {
    name: 'Selena',
    image: 'https://randomuser.me/api/portraits/women/36.jpg',
    message: `Data Science classes helped me understand core ML concepts easily. The placement support was good.`,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <h2>What the Students Say About Us?</h2>
      <div className="review-cards-wrapper">
        {testimonials.map((item, index) => (
          <div className="review-card" key={index}>
            <div className="review-left">
              <img src={item.image} alt={item.name} className="review-avatar" />
              <div className="review-name">{item.name}</div>
              <div className="review-stars">★★★★★</div>
            </div>
            <div className="review-right">
              <b>Review:</b>
              <p>{item.message}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
