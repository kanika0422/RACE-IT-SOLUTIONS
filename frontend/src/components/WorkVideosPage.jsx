import React from 'react';
import './WorkVideosPage.css';
import Header from '../components/Header';  
import Footer from '../components/Footer';

const videoData = [
  { title: 'Team Meeting in Action', src: '/v18.mp4' },
  { title: 'Onsite Training Session', src: '/v13.mp4' },
  { title: 'Join Our Prestigious Circle', src: '/v15.mp4' },
  { title: 'Behind the Scenes', src: '/v14.mp4' },
  { title: 'Explore Diverse Domains', src: '/v6.mp4' },
  { title: 'Journey Through Learning', src: '/v7.mp4' },
  { title: 'Discover Excellence in Our Portfolio', src: '/v8.mp4' },
  { title: 'Connect with Our Community', src: '/v9.mp4' },
  { title: 'Behind the Scenes', src: '/v10.mp4' },
  { title: 'Elevating education, support, and opportunity for every learner & partner', src: '/v11.mp4' },
  { title: 'Behind the Scenes', src: '/v12.mp4' },
  { title: '24x7 Online Support', src: '/v16.mp4' }
];

const WorkVideosPage = () => {
  return (
    <>
      <Header />
      
      <div className="work-videos-page">
        <h1 className="work-videos-title">Working Videos of RACE IT Solution</h1>
        <p className="work-videos-subtitle">
          Explore how our team collaborates, innovates, and delivers excellence!
        </p>

        <div className="video-grid">
          {videoData.map((video, index) => (
            <div key={index} className="video-card">
              <video controls>
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h3>{video.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default WorkVideosPage;
