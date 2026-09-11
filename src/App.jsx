import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import LightboxModal from './components/LightboxModal';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [modalProject, setModalProject] = useState(null);
  const [consultationPrefill, setConsultationPrefill] = useState(null);

  // Sync with browser URL / history for natural navigation
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace('/', '') || 'home';
      if (['home', 'services', 'portfolio', 'about', 'contact'].includes(path)) {
        setActivePage(path);
      }
    };

    const initialPath = window.location.pathname.replace('/', '') || 'home';
    if (['home', 'services', 'portfolio', 'about', 'contact'].includes(initialPath)) {
      setActivePage(initialPath);
    }

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handlePageChange = (newPage, targetId = null) => {
    setActivePage(newPage);
    const newUrl = newPage === 'home' ? '/' : `/${newPage}`;
    window.history.pushState(null, '', newUrl);
    if (targetId) {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 120);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleInquireFromModal = (project) => {
    setConsultationPrefill({
      service: project.category === 'new-builds' 
        ? 'New House Build (Turn-key / Grey Structure)' 
        : project.category === 'remodeling' 
        ? 'Complete Home Remodeling / Upgradation' 
        : 'Architectural Layout & Interior Design',
      note: `Inquiring about project: "${project.title}" (${project.size || 'Residential Project'}).`
    });
    handlePageChange('contact');
  };

  return (
    <div className="app-layout">
      {/* Global Navigation Bar */}
      <Navbar activePage={activePage} setActivePage={handlePageChange} />

      {/* Main Page Content */}
      <main className="main-viewport">
        {activePage === 'home' && (
          <HomePage 
            setActivePage={handlePageChange} 
            setProjectForModal={setModalProject} 
            setConsultationPrefill={setConsultationPrefill} 
          />
        )}
        {activePage === 'services' && (
          <ServicesPage setActivePage={handlePageChange} />
        )}
        {activePage === 'portfolio' && (
          <PortfolioPage 
            setActivePage={handlePageChange} 
            setProjectForModal={setModalProject} 
          />
        )}
        {activePage === 'about' && (
          <AboutPage setActivePage={handlePageChange} />
        )}
        {activePage === 'contact' && (
          <ContactPage prefillData={consultationPrefill} />
        )}
      </main>

      {/* Global Footer */}
      <Footer setActivePage={handlePageChange} />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Full-Screen Project Lightbox Modal */}
      {modalProject && (
        <LightboxModal 
          project={modalProject} 
          onClose={() => setModalProject(null)} 
          onInquire={handleInquireFromModal}
        />
      )}
    </div>
  );
}
