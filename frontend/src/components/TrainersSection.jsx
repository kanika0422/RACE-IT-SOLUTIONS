import React from 'react';
import './TrainersSection.css';

const trainers = [
  {
    name: 'Rohit Kumar',
    title: 'Full Stack Trainer',
    image: 'https://via.placeholder.com/200x200?text=Rohit',
  },
  {
    name: 'Anita Sharma',
    title: 'Python & ML Trainer',
    image: 'https://via.placeholder.com/200x200?text=Anita',
  },
  {
    name: 'Ravi Verma',
    title: 'ReactJS Instructor',
    image: 'https://via.placeholder.com/200x200?text=Ravi',
  },
  {
    name: 'Divya Mehta',
    title: 'AWS & DevOps Trainer',
    image: 'https://via.placeholder.com/200x200?text=Divya',
  },
  {
    name: 'Arjun Singh',
    title: 'Java & Spring Mentor',
    image: 'https://via.placeholder.com/200x200?text=Arjun',
  },
];

const TrainersSection = () => {
  return (
    <section className="trainers-section" id="trainers">
      <h2>Our Trainers</h2>
      <div className="trainers-grid">
        {trainers.map((trainer, index) => (
          <div key={index} className="trainer-card">
            <img src={trainer.image} alt={trainer.name} />
            <h3>{trainer.name}</h3>
            <p>{trainer.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrainersSection;
