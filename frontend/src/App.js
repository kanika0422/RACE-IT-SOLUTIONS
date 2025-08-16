import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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

// New Pages
import GalleryPage from './pages/GalleryPage'; 
import Domain from './pages/Domain';
import WorkVideos from './pages/WorkVideos';

function App() {
  const [showGetStarted, setShowGetStarted] = useState(false);
  const [showWelcomePopup, setShowWelcomePopup] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Router>
      <div className="App">
        {showWelcomePopup && <WelcomePopup onClose={() => setShowWelcomePopup(false)} />}
        {showGetStarted && <GetStarted onClose={() => setShowGetStarted(false)} />}

        <Routes>
          {/* Home Page */}
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
                <TestimonialsSection />
                <ContactSection />
                <ClientListSection />

                {/* Example buttons to other pages */}
                <div style={{ textAlign: 'center', margin: '20px' }}>
                  <Link to="/domains">
                    <button>Go to Domains</button>
                  </Link>
                  <Link to="/gallery" style={{ marginLeft: '10px' }}>
                    <button>Go to Gallery</button>
                  </Link>
                  <Link to="/work-videos" style={{ marginLeft: '10px' }}>
                    <button>Go to Work Videos</button>
                  </Link>
                </div>

                <Footer />
              </>
            }
          />

          {/* Other Pages */}
          <Route path="/domains" element={<Domain />} />
          <Route path="/gallery" element={<GalleryPage />} /> 
          <Route path="/work-videos" element={<WorkVideos />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
