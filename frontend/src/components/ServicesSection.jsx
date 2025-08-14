import React from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
  const services = [
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/992/992700.png',
      title: 'Unlock Digital Frontiers',
      subtitle: 'with Our Online Courses',
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/4140/4140037.png',
      title: 'Join Our Prestigious Circle',
      subtitle: 'of Clients',
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/1099/1099690.png',
      title: 'Explore Diverse Domains',
      subtitle: 'with Us',
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828919.png',
      title: 'Journey Through Learning',
      subtitle: 'in Our Gallery',
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/1621/1621635.png',
      title: 'Discover Excellence in Our',
      subtitle: 'Portfolio',
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
      title: 'Discover Insights and',
      subtitle: 'Reviews',
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/1042/1042340.png',
      title: 'Our Video Showcase',
      subtitle: '',
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/1055/1055646.png',
      title: '24x7 Online Support',
      subtitle: '',
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/2620/2620314.png',
      title: 'Connect with Our',
      subtitle: 'Community',
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-header" data-aos="fade-up">
  <div className="services-title-wrapper">
    <div className="services-title-background">Explore Our Services</div>
    <h2 className="services-title">Explore Our Services</h2>
  </div>
  <p className="services-subtitle">
    Elevating education, support, and opportunity for every learner & partner.
  </p>
</div>


      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            data-aos="zoom-in"
            data-aos-delay={index * 80}
          >
            <img src={service.icon} alt={service.title} className="service-icon" />
            <h3 className="service-title">
              {service.title}<br />{service.subtitle}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
