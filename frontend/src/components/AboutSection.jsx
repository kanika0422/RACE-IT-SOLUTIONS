import React from 'react';
import './AboutSection.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { ArrowRight, ArrowLeft } from 'lucide-react'; 

const AboutSection = () => {
  const slides = [
    "RACE (formerly - RACE of Advance Computing Education Pvt Ltd) is a leading technical training provider in Gurgaon, HR, co-founded by Mr. Lavish Arora in 2014. With 125+ employees across 3 branches, we focus on delivering top-notch education and practical skills.",
    "RACE excels in programming languages like Java, Python, and C++, web development essentials (HTML, CSS, JavaScript), and fundamental database management (SQL, MySQL, Oracle).",
    "We navigate the realms of cloud computing with AWS, Azure, and Google Cloud, ensuring our students stay at the forefront of innovation.",
    "Our courses cover network administration (TCP/IP, DNS, DHCP) and the vital components of cybersecurity (firewalls, intrusion detection systems).",
    "RACE guides individuals through data analysis tools (Excel, R, Tableau) and the foundations of machine learning (TensorFlow, scikit-learn).",
    "In essence, RACE offers a condensed yet comprehensive educational journey, preparing individuals for success in the rapidly evolving IT landscape."
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="section-title">About Us</h2>
        <h3>Learn More About Our Journey & Purpose</h3>

        <div className="swiper-navigation-wrapper">
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            autoplay={{ delay: 6000 }}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom'
            }}
            loop={true}
            className="about-swiper"
          >
            {slides.map((text, index) => (
              <SwiperSlide key={index}>
                <div className="about-slide">
                  <p>{text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-button-prev-custom"><ArrowLeft size={24} /></div>
          <div className="swiper-button-next-custom"><ArrowRight size={24} /></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
