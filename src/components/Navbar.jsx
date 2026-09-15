import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';

export default function Navbar({ activePage, setActivePage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open to prevent jitter and page scroll glitch
  useEffect(() => {
    if (mobileMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      {/* Main Nav Bar */}
      <nav className="main-navbar">
        <div className="container nav-content">
          {/* Brand Logo */}
          <div 
            className="brand-logo-container" 
            onClick={() => handleNavClick('home')}
            role="button"
            tabIndex={0}
            aria-label="Metacon Home"
          >
            <div className="brand-logo-mark">
              <img 
                src="/images/metacon-logo-mark.png" 
                alt="METACON Architectural Logo" 
                className="brand-logo-img"
              />
            </div>
            <div className="brand-text">
              <span className="brand-name">METACON</span>
              <span className="brand-tagline">DESIGN · BUILD · DECORATE</span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="desktop-nav-links">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                className={`nav-link ${activePage === link.id ? 'active' : ''}`}
                onClick={() => handleNavClick(link.id)}
              >
                {link.label}
                {activePage === link.id && <span className="nav-active-indicator" />}
              </button>
            ))}
          </div>

          {/* Top Right Click-to-Call (Docx Developer Note) */}
          <div className="nav-actions">
            <a 
              href="tel:+923345092939" 
              className="click-to-call-btn"
              title="Direct line to central office"
            >
              <Phone size={14} className="bronze-icon" />
              <div className="call-info">
                <span className="call-label">Central Office:</span>
                <span className="call-numbers">+92-334-5092939</span>
              </div>
            </a>

            <button 
              className="btn btn-primary nav-cta-btn"
              onClick={() => handleNavClick('contact')}
            >
              <span>Get Consultation</span>
              <ArrowRight size={14} />
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button 
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Backdrop Overlay (Fixes glitch: full screen, clean tap-outside close) */}
      <div 
        className={`mobile-backdrop ${mobileMenuOpen ? 'visible' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer (Smooth fixed sidebar without jitter) */}
      <aside className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`} aria-label="Mobile Navigation">
        <div className="mobile-drawer-inner">
          <div className="mobile-drawer-header">
            <div className="brand-logo-container" onClick={() => handleNavClick('home')}>
              <img 
                src="/images/metacon-logo-mark.png" 
                alt="METACON Logo" 
                className="brand-logo-img"
              />
              <div className="brand-text">
                <span className="brand-name">METACON</span>
                <span className="brand-tagline">DESIGN · BUILD · DECORATE</span>
              </div>
            </div>
            <button 
              className="drawer-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close Navigation Menu"
            >
              <X size={22} />
            </button>
          </div>

          <div className="mobile-nav-list">
            {navLinks.map((link) => (
              <button
                key={link.id}
                className={`mobile-nav-item ${activePage === link.id ? 'active' : ''}`}
                onClick={() => handleNavClick(link.id)}
              >
                <span>{link.label}</span>
                <ChevronRight size={16} className="bronze-icon" />
              </button>
            ))}
          </div>

          <div className="mobile-contact-block">
            <span className="block-title">📞 Regional Central Office</span>
            <a href="tel:+923345092939" className="phone-line">+92-334-5092939</a>
            <a href="tel:+923364522111" className="phone-line">+92-336-4522111</a>
            <span className="office-sub">HQ H-9 Islamabad · Paragon City Lahore · Warsak Rd Peshawar</span>

            <button 
              className="btn btn-primary mobile-drawer-cta"
              onClick={() => handleNavClick('contact')}
            >
              Request Free Consultation
            </button>
          </div>
        </div>
      </aside>

      <style>{`
        .navbar-wrapper {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(13, 15, 20, 0.96);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border-subtle);
          transition: background 0.3s ease, border-color 0.3s ease;
          width: 100%;
        }
        .navbar-wrapper.scrolled {
          background: rgba(10, 12, 17, 0.98);
          border-bottom: 1px solid var(--border-bronze);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        }
        .main-navbar {
          padding: 12px 0;
        }
        .nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .brand-logo-container {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          user-select: none;
        }
        .brand-logo-mark {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .brand-logo-img {
          height: 42px;
          width: auto;
          object-fit: contain;
          filter: drop-shadow(0 0 8px rgba(223, 185, 135, 0.35));
          transition: transform 0.25s ease, filter 0.25s ease;
        }
        .brand-logo-container:hover .brand-logo-img {
          transform: scale(1.05);
          filter: drop-shadow(0 0 14px rgba(223, 185, 135, 0.6));
        }
        .brand-text {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .brand-name {
          font-family: var(--font-serif);
          font-size: 1.65rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--text-pure);
          line-height: 1;
          text-align: center;
        }
        .brand-tagline {
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          color: var(--bronze-light);
          font-weight: 600;
          margin-top: 4px;
          text-align: center;
          width: 100%;
        }
        .desktop-nav-links {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .nav-link {
          position: relative;
          color: var(--text-muted);
          font-size: 0.9rem;
          font-weight: 500;
          padding: 8px 14px;
          border-radius: var(--radius-xs);
          transition: color 0.2s ease;
        }
        .nav-link:hover {
          color: var(--text-pure);
        }
        .nav-link.active {
          color: var(--bronze-light);
          font-weight: 600;
        }
        .nav-active-indicator {
          position: absolute;
          bottom: 0;
          left: 14px;
          right: 14px;
          height: 2px;
          background: var(--bronze-primary);
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .click-to-call-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 7px 12px;
          background: rgba(194, 157, 109, 0.08);
          border: 1px solid var(--border-bronze);
          border-radius: var(--radius-xs);
          color: var(--text-pure);
        }
        .click-to-call-btn:hover {
          background: rgba(194, 157, 109, 0.15);
          border-color: var(--bronze-light);
        }
        .call-info {
          display: flex;
          flex-direction: column;
          line-height: 1.15;
        }
        .call-label {
          font-size: 0.65rem;
          color: var(--bronze-light);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .call-numbers {
          font-size: 0.775rem;
          font-weight: 700;
          color: var(--text-pure);
        }
        .nav-cta-btn {
          padding: 9px 18px;
          font-size: 0.825rem;
        }
        .mobile-toggle-btn {
          display: none;
          color: var(--text-pure);
          padding: 8px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-xs);
        }

        /* Mobile Backdrop Overlay */
        .mobile-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(4px);
          z-index: 9998;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }
        .mobile-backdrop.visible {
          opacity: 1;
          pointer-events: auto;
        }

        /* Mobile Drawer Sidebar */
        .mobile-drawer {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 320px;
          max-width: 86vw;
          height: 100vh;
          height: 100dvh;
          max-height: 100dvh;
          background: #11141c;
          border-left: 1px solid var(--border-bronze);
          box-shadow: -8px 0 32px rgba(0, 0, 0, 0.85);
          z-index: 9999;
          transform: translateX(100%);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
        .mobile-drawer.open {
          transform: translateX(0);
        }
        .mobile-drawer-inner {
          padding: 20px 18px;
          display: flex;
          flex-direction: column;
          min-height: 100%;
        }
        .mobile-drawer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 14px;
          margin-bottom: 14px;
          border-bottom: 1px solid var(--border-subtle);
        }
        .drawer-close-btn {
          color: var(--text-muted);
          padding: 8px;
          border-radius: var(--radius-xs);
          background: rgba(255, 255, 255, 0.04);
        }
        .drawer-close-btn:hover {
          color: var(--text-pure);
          background: rgba(255, 255, 255, 0.08);
        }
        .mobile-nav-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 14px;
        }
        .mobile-nav-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 12px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid transparent;
          border-radius: var(--radius-xs);
          color: var(--text-main);
          font-size: 0.92rem;
          font-weight: 600;
          text-align: left;
        }
        .mobile-nav-item.active {
          border-color: var(--border-bronze);
          background: var(--bronze-subtle);
          color: var(--bronze-light);
        }
        .mobile-contact-block {
          margin-top: 4px;
          background: #171b25;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 14px 16px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .block-title {
          font-size: 0.725rem;
          color: var(--bronze-light);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 2px;
        }
        .phone-line {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-pure);
        }
        .office-sub {
          font-size: 0.7rem;
          color: var(--text-dim);
          margin-bottom: 8px;
          line-height: 1.4;
        }
        .mobile-drawer-cta {
          width: 100%;
          padding: 10px;
          font-size: 0.825rem;
        }

        @media (max-width: 1024px) {
          .click-to-call-btn {
            display: none;
          }
        }
        @media (max-width: 860px) {
          .desktop-nav-links {
            display: none;
          }
          .nav-cta-btn {
            display: none;
          }
          .mobile-toggle-btn {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
}
