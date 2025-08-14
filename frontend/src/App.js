import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css';

// Components
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import CoursesSection from './components/CoursesSection';
// import TrainersSection from './components/TrainersSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import GetStarted from './components/GetStarted';
import PortfolioSection from './components/PortfolioSection';
import StatsHighlightSection from './components/StatsHighlightSection';
import CreatorTrainersSection from './components/CreatorTrainersSection';
import WelcomePopup from './components/WelcomePopup';
import ClientListSection from './components/ClientListSection';
import DomainsPage from './components/DomainsPage';
import WorkVideosPage from './components/WorkVideosPage';

// New Page
import GalleryPage from './pages/GalleryPage'; 
function App() {
  const [showGetStarted, setShowGetStarted] = useState(false);
  const [showWelcomePopup, setShowWelcomePopup] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="App">
      {showWelcomePopup && <WelcomePopup onClose={() => setShowWelcomePopup(false)} />}
      {showGetStarted && <GetStarted onClose={() => setShowGetStarted(false)} />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header onGetStartedClick={() => setShowGetStarted(true)} />
              <HeroSection />
              <AboutSection />
              <PortfolioSection />
              <StatsHighlightSection />
              <CreatorTrainersSection />
              <ServicesSection />
              <CoursesSection />
              {/* <TrainersSection /> */}
              {/* GallerySection moved to separate page */}
              <TestimonialsSection />
              <ContactSection />
              <ClientListSection />
              <Footer />
            </>
          }
        />
        <Route path="/domains" element={<DomainsPage />} />
        <Route path="/gallery" element={<GalleryPage />} /> 
        <Route path="/work-videos" element={<WorkVideosPage />} /> 

      </Routes>
    </div>
  );
}

export default App;
