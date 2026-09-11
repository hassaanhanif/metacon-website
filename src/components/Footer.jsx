import React from 'react';
import { MapPin, Phone, Mail, ArrowUp, ShieldCheck, Award } from 'lucide-react';

export default function Footer({ setActivePage }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (pageId) => {
    setActivePage(pageId);
    scrollToTop();
  };

  return (
    <footer className="footer-section">
      {/* Pre-Footer Call to Action Banner (From Docx: The Bottom Call to Action) */}
      <div className="cta-banner-strip">
        <div className="container banner-flex">
          <div className="banner-left">
            <span className="section-tag">Direct Regional Consultation</span>
            <h2 className="banner-title font-serif">Ready to build your dream space?</h2>
            <p className="banner-text">
              Get in touch with our regional office nearest to you today. From 3D planning to complete turnkey luxury execution.
            </p>
          </div>
          <div className="banner-right">
            <button 
              className="btn btn-primary"
              onClick={() => handleNav('contact')}
            >
              Get an Estimate
            </button>
            <a 
              href="https://wa.me/923345092939?text=Hello%20Metacon%2C%20I%20would%20like%20to%20inquire%20about%20a%20construction%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="container footer-body">
        <div className="footer-columns-row">
          {/* Company Bio */}
          <div className="col-brand">
            <div className="brand-logo-container" onClick={() => handleNav('home')}>
              <img 
                src="/images/metacon-logo-mark.png" 
                alt="METACON Logo" 
                className="footer-logo-img" 
              />
              <div className="footer-brand-text">
                <span className="footer-brand-title font-serif">METACON</span>
                <span className="footer-brand-subtitle">DESIGN · BUILD · DECORATE</span>
              </div>
            </div>
            <p className="footer-description">
              Founded 20 years ago, serving communities with integrity and structural reliability. Today, that legacy is powered by a team of three young engineers & developers bridging time-tested construction standards with modern architectural engineering.
            </p>
            <div className="authority-chips">
              <span className="chip"><Award size={12} className="bronze-icon" /> 20-Year Heritage</span>
              <span className="chip"><ShieldCheck size={12} className="bronze-icon" /> Seismic Code Certified</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="col-nav">
            <h4 className="col-heading font-serif">Navigation</h4>
            <ul className="footer-links">
              <li><button onClick={() => handleNav('home')}>Home</button></li>
              <li><button onClick={() => handleNav('services')}>Residential Services</button></li>
              <li><button onClick={() => handleNav('portfolio')}>Portfolio</button></li>
              <li><button onClick={() => handleNav('about')}>About Us</button></li>
              <li><button onClick={() => handleNav('contact')}>Contact & Consultation</button></li>
            </ul>
          </div>

          {/* Regional Authorities */}
          <div className="col-authorities">
            <h4 className="col-heading font-serif">Compliance Authorities</h4>
            <ul className="footer-links-static">
              <li>• CDA (Capital Development Authority)</li>
              <li>• RDA (Rawalpindi Development Authority)</li>
              <li>• LDA (Lahore Development Authority)</li>
              <li>• PDA (Peshawar Development Authority)</li>
              <li>• DHA & Bahria Town Approved</li>
            </ul>
          </div>
        </div>

        {/* The Exact 2-Column Regional Office Layout (From Docx Developer Note) */}
        <div className="regional-divider-strip">
          <span className="divider-label font-serif">Regional Contact Details</span>
        </div>

        <div className="three-col-offices-grid">
          {/* Column 1: Metacon HQ */}
          <div className="office-col-card">
            <div className="card-top">
              <span className="card-badge">Central Headquarters</span>
              <h3 className="card-title font-serif">Metacon HQ (Islamabad / Rawalpindi)</h3>
            </div>
            <div className="card-items">
              <div className="item">
                <MapPin size={16} className="bronze-icon flex-shrink" />
                <div>
                  <span className="item-label">Address:</span>
                  <span className="item-text">H-9 Islamabad</span>
                </div>
              </div>
              <div className="item">
                <Phone size={16} className="bronze-icon flex-shrink" />
                <div>
                  <span className="item-label">Phone:</span>
                  <a href="tel:+923345092939" className="link-text">+92-334-5092939</a>
                  <span className="item-sep">/</span>
                  <a href="tel:+923364522111" className="link-text">+92-336-4522111</a>
                </div>
              </div>
              <div className="item">
                <Mail size={16} className="bronze-icon flex-shrink" />
                <div>
                  <span className="item-label">Email:</span>
                  <a href="mailto:cmetacon@gmail.com" className="link-text">cmetacon@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Lahore Regional Hub */}
          <div className="office-col-card">
            <div className="card-top">
              <span className="card-badge">Regional Hub</span>
              <h3 className="card-title font-serif">Lahore Regional Office</h3>
            </div>
            <div className="card-items">
              <div className="item">
                <MapPin size={16} className="bronze-icon flex-shrink" />
                <div>
                  <span className="item-label">Address:</span>
                  <span className="item-text">Paragon City Lahore</span>
                </div>
              </div>
              <div className="item">
                <Phone size={16} className="bronze-icon flex-shrink" />
                <div>
                  <span className="item-label">Phone:</span>
                  <a href="tel:+923345092939" className="link-text">+92-334-5092939</a>
                </div>
              </div>
              <div className="item">
                <Mail size={16} className="bronze-icon flex-shrink" />
                <div>
                  <span className="item-label">Email:</span>
                  <a href="mailto:cmetacon@gmail.com" className="link-text">cmetacon@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Peshawar Regional Office */}
          <div className="office-col-card">
            <div className="card-top">
              <span className="card-badge">Khyber Pakhtunkhwa Regional Hub</span>
              <h3 className="card-title font-serif">Peshawar Regional Office</h3>
            </div>
            <div className="card-items">
              <div className="item">
                <MapPin size={16} className="bronze-icon flex-shrink" />
                <div>
                  <span className="item-label">Address:</span>
                  <span className="item-text">Warsak Road Peshawar</span>
                </div>
              </div>
              <div className="item">
                <Phone size={16} className="bronze-icon flex-shrink" />
                <div>
                  <span className="item-label">Phone:</span>
                  <a href="tel:+923345092939" className="link-text">+92-334-5092939</a>
                </div>
              </div>
              <div className="item">
                <Mail size={16} className="bronze-icon flex-shrink" />
                <div>
                  <span className="item-label">Email:</span>
                  <a href="mailto:cmetacon@gmail.com" className="link-text">cmetacon@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Back to Top */}
        <div className="footer-sub-bar">
          <p className="copyright-line">
            © {new Date().getFullYear()} METACON (Pvt.) Ltd. All rights reserved. Architectural Design, Turnkey Construction & Luxury Interiors.
          </p>
          <button className="top-scroll-btn" onClick={scrollToTop}>
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <style>{`
        .footer-section {
          background: #090a0e;
          border-top: 1px solid var(--border-subtle);
          color: var(--text-muted);
        }
        .cta-banner-strip {
          background: #11141c;
          border-bottom: 1px solid var(--border-bronze);
          padding: 50px 0;
        }
        .banner-flex {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          flex-wrap: wrap;
        }
        .banner-title {
          font-size: clamp(1.6rem, 2.5vw, 2.2rem);
          color: var(--text-pure);
          margin-bottom: 8px;
        }
        .banner-text {
          font-size: 0.95rem;
          color: var(--text-muted);
          max-width: 580px;
        }
        .banner-right {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .footer-body {
          padding-top: 56px;
          padding-bottom: 32px;
        }
        .footer-columns-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 48px;
        }
        @media (max-width: 900px) {
          .footer-columns-row {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
        .col-brand {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .footer-description {
          font-size: 0.875rem;
          color: var(--text-muted);
          line-height: 1.6;
          max-width: 440px;
        }
        .authority-chips {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 3px 10px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-xs);
          font-size: 0.725rem;
          color: var(--bronze-light);
        }
        .col-heading {
          font-size: 1rem;
          color: var(--text-pure);
          margin-bottom: 16px;
          letter-spacing: 0.04em;
        }
        .footer-links, .footer-links-static {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 0.875rem;
        }
        .footer-links button {
          color: var(--text-muted);
          text-align: left;
        }
        .footer-links button:hover {
          color: var(--bronze-light);
          transform: translateX(3px);
        }
        .footer-links-static li {
          color: #94a3b8;
          font-size: 0.825rem;
        }
        .regional-divider-strip {
          position: relative;
          text-align: center;
          margin-bottom: 28px;
        }
        .regional-divider-strip::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: var(--border-subtle);
        }
        .divider-label {
          position: relative;
          display: inline-block;
          background: #090a0e;
          padding: 0 16px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--bronze-light);
        }
        .three-col-offices-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
          margin-bottom: 48px;
        }
        @media (max-width: 960px) {
          .three-col-offices-grid {
            grid-template-columns: 1fr;
          }
        }
        .brand-logo-container {
          display: flex;
          align-items: center;
          gap: 14px;
          cursor: pointer;
          margin-bottom: 8px;
          width: fit-content;
        }
        .footer-logo-img {
          height: 44px;
          width: auto;
          object-fit: contain;
          filter: drop-shadow(0 0 10px rgba(223, 185, 135, 0.4));
        }
        .footer-brand-text {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .footer-brand-title {
          font-family: var(--font-heading, 'Oswald', sans-serif);
          font-size: 1.65rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          color: #ffffff;
          line-height: 1;
        }
        .footer-brand-subtitle {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          color: #dfb987;
          text-transform: uppercase;
          line-height: 1;
        }
        .office-col-card {
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 24px;
          transition: var(--transition-smooth);
        }
        .office-col-card:hover {
          border-color: var(--border-bronze);
        }
        .card-top {
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-subtle);
        }
        .card-badge {
          display: inline-block;
          font-size: 0.6875rem;
          font-weight: 700;
          color: var(--bronze-light);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 4px;
        }
        .card-title {
          font-size: 1.1rem;
          color: var(--text-pure);
        }
        .card-items {
          display: flex;
          flex-direction: column;
          gap: 10px;
          font-size: 0.85rem;
        }
        .item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }
        .item-label {
          font-weight: 600;
          color: var(--text-main);
          margin-right: 6px;
        }
        .item-text {
          color: var(--text-muted);
        }
        .link-text {
          color: var(--text-pure);
          font-weight: 600;
        }
        .link-text:hover {
          color: var(--bronze-light);
          text-decoration: underline;
        }
        .item-sep {
          margin: 0 6px;
          color: var(--text-dim);
        }
        .footer-sub-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 24px;
          border-top: 1px solid var(--border-subtle);
          font-size: 0.8rem;
          flex-wrap: wrap;
          gap: 12px;
        }
        .top-scroll-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--bronze-light);
          font-weight: 600;
        }
        .top-scroll-btn:hover {
          color: var(--text-pure);
        }
        .flex-shrink {
          flex-shrink: 0;
          margin-top: 2px;
        }
      `}</style>
    </footer>
  );
}
