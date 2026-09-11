import React from 'react';
import { 
  Compass, Hammer, Palette, ArrowRight, ShieldCheck, 
  Check, Layers, FileCheck, HardHat, PhoneCall, Award, Sparkles 
} from 'lucide-react';
import { servicesData, processSteps } from '../data/servicesData';

export default function ServicesPage({ setActivePage }) {
  const handleConsultation = (serviceTitle) => {
    setActivePage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="services-page">
      {/* 1. Page Header (Docx: Our Residential Services) */}
      <section className="services-hero-section">
        <div className="container">
          <div className="services-hero-header">
            <span className="section-tag">Comprehensive Architectural & Construction Solutions</span>
            <h1 className="services-page-title font-serif">Our Residential Services</h1>
            <p className="services-page-subtitle">
              From empty plots to luxury turn-key villas, and structural renovations to modern interior upgrades—we shape the homes you love across Islamabad, Lahore, and Peshawar.
            </p>

            <div className="authority-inline-badge">
              <ShieldCheck size={16} className="gold-icon" />
              <span>Strictly Compliant with CDA, LDA, PDA, and DHA Engineering Building Codes</span>
            </div>

            {/* Quick Navigation Jump Bar */}
            <div className="services-quick-nav">
              <span className="quick-nav-label">QUICK JUMP:</span>
              <div className="quick-nav-pills">
                <a href="#architectural-design" className="quick-nav-pill">
                  <span className="pill-index">01</span>
                  <span className="pill-txt-desktop">Architectural & Interior Design</span>
                  <span className="pill-txt-mobile">Architecture</span>
                </a>
                <a href="#turnkey-construction" className="quick-nav-pill">
                  <span className="pill-index">02</span>
                  <span className="pill-txt-desktop">Turn-Key Construction & Grey Structure</span>
                  <span className="pill-txt-mobile">Turn-Key Construction</span>
                </a>
                <a href="#remodeling-interior" className="quick-nav-pill">
                  <span className="pill-index">03</span>
                  <span className="pill-txt-desktop">Home Remodeling & Decoration</span>
                  <span className="pill-txt-mobile">Home Remodeling</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The 3 Core Categories from Docx */}
      <section className="section-pad services-list-section">
        <div className="container">
          <div className="services-stack">
            {servicesData.map((svc, index) => {
              const isEven = index % 2 === 1;
              return (
                <article 
                  key={svc.id} 
                  id={svc.id}
                  className={`service-card ${isEven ? 'reversed-layout' : ''}`}
                >
                  {/* Subtle Background Watermark Number */}
                  <div className="service-watermark font-serif" aria-hidden="true">
                    {svc.number}
                  </div>

                  {/* Dual Architectural Gallery: Side-by-Side to eliminate awkward cropping */}
                  <div className="service-visual-col">
                    <div className="service-dual-gallery">
                      {/* Photo 1: Primary View */}
                      <div className="gallery-photo-frame">
                        <img 
                          src={svc.image} 
                          alt={svc.primaryTag || svc.title} 
                          className="gallery-photo-img" 
                          loading="lazy"
                        />
                        {/* High-Contrast Number Badge On Image */}
                        <div className="photo-corner-badge font-serif">
                          <span className="badge-svc-lbl">SERVICE</span>
                          <span className="badge-svc-val">{svc.number}</span>
                        </div>
                        {/* Photo Caption Tag */}
                        <div className="photo-caption-glass">
                          <span className="caption-dot"></span>
                          <span className="caption-text">{svc.primaryTag || 'Architectural View'}</span>
                        </div>
                      </div>

                      {/* Photo 2: Secondary / Execution View */}
                      {svc.secondaryImage && (
                        <div className="gallery-photo-frame">
                          <img 
                            src={svc.secondaryImage} 
                            alt={svc.secondaryTag || `${svc.title} detail`} 
                            className="gallery-photo-img" 
                            loading="lazy"
                          />
                          {/* Photo Caption Tag */}
                          <div className="photo-caption-glass">
                            <span className="caption-dot gold"></span>
                            <span className="caption-text">{svc.secondaryTag || 'Execution Detail'}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Copy & Offerings Column */}
                  <div className="service-content-col">
                    {/* Prominent Number Pill & Category */}
                    <div className="service-header-meta">
                      <div className="service-number-pill">
                        <span className="num-prefix">SERVICE</span>
                        <span className="num-val font-serif">{svc.number}</span>
                      </div>
                      <span className="service-category-tag">{svc.tagline}</span>
                    </div>

                    <h2 className="service-title font-serif">{svc.title}</h2>
                    <p className="service-desc">{svc.description}</p>

                    {/* Key Offerings List */}
                    <div className="offerings-box">
                      <h4 className="offerings-heading font-serif">Key Offerings & Scope:</h4>
                      <div className="offerings-items">
                        {svc.offerings.map((offering, idx) => (
                          <div key={idx} className="offering-row">
                            <div className="offering-icon-wrap">
                              <Check size={12} className="gold-check-icon" />
                            </div>
                            <div className="offering-text-wrap">
                              <h5 className="offering-title">{offering.title}</h5>
                              <p className="offering-body">{offering.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Regional Code Compliance */}
                    <div className="service-codes-box">
                      <span className="codes-label">Regional Code Compliance:</span>
                      <div className="codes-chips">
                        {svc.authorityCodes.map((code, cIdx) => (
                          <span key={cIdx} className="code-chip">
                            <ShieldCheck size={13} className="code-chip-icon" />
                            <span>{code}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions: Primary CTA + Direct Call */}
                    <div className="service-action-row">
                      <button 
                        className="btn btn-primary service-inquire-btn"
                        onClick={() => handleConsultation(svc.title)}
                      >
                        <span className="btn-txt-desktop">Inquire About {svc.tagline}</span>
                        <span className="btn-txt-mobile">Inquire About This Service</span>
                        <ArrowRight size={15} />
                      </button>
                      <a href="tel:+923345092939" className="btn-service-call">
                        <PhoneCall size={14} className="gold-icon" />
                        <span>+92-334-5092939</span>
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Mid-Page Call to Action Banner (Docx Specification) */}
      <section className="mid-page-cta-section">
        <div className="container">
          <div className="mid-cta-panel">
            <div className="mid-cta-content">
              <span className="section-tag">Complimentary Site Survey</span>
              <h2 className="mid-cta-heading font-serif">
                Planning a new build or looking to remodel your luxury residence?
              </h2>
              <p className="mid-cta-text">
                Our resident civil engineers and lead architects across Islamabad, Lahore (Paragon City), and Peshawar are available for prompt site surveys, soil assessment, and fixed BOQ planning.
              </p>
            </div>
            <div className="mid-cta-actions">
              <button 
                className="btn btn-primary mid-cta-btn"
                onClick={() => {
                  setActivePage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <span className="btn-txt-desktop">Schedule Site Visit / Consultation</span>
                <span className="btn-txt-mobile">Schedule Site Visit</span>
                <ArrowRight size={15} />
              </button>
              <a href="tel:+923345092939" className="btn btn-outline mid-call-btn">
                <PhoneCall size={15} className="gold-icon" />
                <span>Call +92-334-5092939</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 6-Stage Process Roadmap */}
      <section className="section-pad process-section">
        <div className="container">
          <div className="section-heading-block">
            <span className="section-tag">Structured Execution</span>
            <h2 className="section-title">The Metacon 6-Stage Construction Process</h2>
            <p className="section-subtitle">
              From soil excavation to certified concrete pours and turnkey handover, every phase is audited by certified structural engineers.
            </p>
          </div>

          <div className="process-cards-grid">
            {processSteps.map((step, idx) => (
              <div key={idx} className="process-card">
                <div className="process-card-top">
                  <span className="step-num font-serif">{step.step}</span>
                  <div className="step-accent-line"></div>
                </div>
                <h4 className="step-name font-serif">{step.title}</h4>
                <p className="step-text">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Metacon Engineering Standards Guarantee Banner */}
      <section className="section-pad guarantees-section">
        <div className="container">
          <div className="section-heading-block">
            <span className="section-tag">Quality Assured</span>
            <h2 className="section-title">The Metacon Standard of Excellence</h2>
            <p className="section-subtitle">
              Every residential build and renovation is governed by strict structural safety protocols and fixed material guarantees.
            </p>
          </div>

          <div className="guarantees-grid">
            <div className="guarantee-card">
              <div className="guarantee-icon-box">
                <ShieldCheck size={26} className="gold-icon" />
              </div>
              <h4 className="guarantee-title font-serif">Certified Structural Safety</h4>
              <p className="guarantee-text">
                Engineered for regional seismic zones with Grade-60 deformed steel and 3000–4000 PSI certified concrete cylinder batch testing.
              </p>
            </div>

            <div className="guarantee-card">
              <div className="guarantee-icon-box">
                <FileCheck size={26} className="gold-icon" />
              </div>
              <h4 className="guarantee-title font-serif">100% Fixed-Price BOQ</h4>
              <p className="guarantee-text">
                Zero surprise costs. Complete itemized Bill of Quantities locked before breaking ground, backed by transparent material schedules.
              </p>
            </div>

            <div className="guarantee-card">
              <div className="guarantee-icon-box">
                <HardHat size={26} className="gold-icon" />
              </div>
              <h4 className="guarantee-title font-serif">On-Site Resident Engineers</h4>
              <p className="guarantee-text">
                Full-time civil engineering supervision throughout your project—monitoring curing timelines, formwork, and MEP installations.
              </p>
            </div>

            <div className="guarantee-card">
              <div className="guarantee-icon-box">
                <Award size={26} className="gold-icon" />
              </div>
              <h4 className="guarantee-title font-serif">Comprehensive Handover Warranty</h4>
              <p className="guarantee-text">
                1-year warranty on plumbing, waterproofing, electrical infrastructure, and architectural finishes with ongoing maintenance support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* ==========================================================================
           Services Page Styles
           ========================================================================== */
        .services-page {
          background: #08090d;
          color: #f1f5f9;
        }

        /* 1. Hero Section */
        .services-hero-section {
          padding: 80px 0 48px;
          background: radial-gradient(circle at 50% 0%, #151b27 0%, #08090d 80%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          position: relative;
        }
        .services-hero-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 860px;
          margin: 0 auto;
        }
        .services-page-title {
          font-size: clamp(2.2rem, 4vw, 3.4rem);
          color: #ffffff;
          margin: 12px 0 16px;
          letter-spacing: 0.01em;
          line-height: 1.15;
        }
        .services-page-subtitle {
          font-size: 1.05rem;
          color: #94a3b8;
          line-height: 1.65;
          margin-bottom: 24px;
          max-width: 740px;
        }
        .authority-inline-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 18px;
          background: rgba(197, 154, 99, 0.08);
          border: 1px solid rgba(197, 154, 99, 0.3);
          border-radius: 9999px;
          font-size: 0.8rem;
          color: #dfb987;
          font-weight: 600;
          margin-bottom: 32px;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
        }
        .gold-icon {
          color: #dfb987;
          flex-shrink: 0;
        }

        /* Quick Jump Bar */
        .services-quick-nav {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
          background: rgba(17, 20, 28, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 8px 16px;
          border-radius: 9999px;
          backdrop-filter: blur(8px);
        }
        .quick-nav-label {
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          color: #64748b;
        }
        .quick-nav-pills {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .quick-nav-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 9999px;
          font-size: 0.775rem;
          color: #cbd5e1;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.25s ease;
        }
        .quick-nav-pill:hover {
          background: rgba(197, 154, 99, 0.15);
          border-color: rgba(197, 154, 99, 0.4);
          color: #dfb987;
          transform: translateY(-2px);
        }
        .pill-index {
          font-family: var(--font-heading, 'Oswald', sans-serif);
          font-size: 0.8rem;
          font-weight: 800;
          color: #dfb987;
        }

        /* 2. Service Cards Stack */
        .services-list-section {
          padding: 60px 0 80px;
        }
        .services-stack {
          display: flex;
          flex-direction: column;
          gap: 64px;
        }
        .service-card {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1.08fr;
          gap: 44px;
          padding: 44px;
          background: linear-gradient(180deg, #121620 0%, #0c0e14 100%);
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 16px;
          align-items: stretch;
          overflow: hidden;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.45);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          scroll-margin-top: 100px;
        }
        .service-card:hover {
          border-color: rgba(197, 154, 99, 0.4);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.65), 0 0 25px rgba(197, 154, 99, 0.08);
        }
        .service-card.reversed-layout {
          grid-template-columns: 1.08fr 1fr;
        }
        .service-card.reversed-layout .service-visual-col {
          order: 2;
        }
        @media (max-width: 990px) {
          .service-card,
          .service-card.reversed-layout {
            grid-template-columns: 1fr;
            padding: 28px;
            gap: 32px;
          }
          .service-card.reversed-layout .service-visual-col {
            order: 1;
          }
        }

        /* Watermark Numeral */
        .service-watermark {
          position: absolute;
          top: 10px;
          right: 28px;
          font-size: 7.5rem;
          font-weight: 900;
          color: rgba(223, 185, 135, 0.04);
          line-height: 1;
          pointer-events: none;
          user-select: none;
          z-index: 0;
        }

        /* Dual Gallery Column (Side-by-Side to eliminate cropping) */
        .service-visual-col {
          display: flex;
          flex-direction: column;
          height: 100%;
          position: relative;
          z-index: 1;
        }
        .service-dual-gallery {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          height: 100%;
          min-height: 460px;
        }
        @media (max-width: 600px) {
          .service-dual-gallery {
            grid-template-columns: 1fr;
            min-height: auto;
          }
        }
        .gallery-photo-frame {
          position: relative;
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid rgba(197, 154, 99, 0.28);
          background: #080a0f;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
          height: 100%;
          min-height: 240px;
        }
        @media (max-width: 600px) {
          .gallery-photo-frame {
            height: 280px;
          }
        }
        .gallery-photo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .gallery-photo-frame:hover .gallery-photo-img {
          transform: scale(1.05);
        }

        /* Photo Badges & Glassmorphic Tags */
        .photo-corner-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background: rgba(8, 10, 15, 0.9);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(223, 185, 135, 0.5);
          border-radius: 6px;
          padding: 4px 10px;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.7);
          z-index: 3;
        }
        .badge-svc-lbl {
          font-size: 0.6rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: #dfb987;
          opacity: 0.85;
        }
        .badge-svc-val {
          font-size: 1rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1;
        }
        .photo-caption-glass {
          position: absolute;
          bottom: 12px;
          left: 10px;
          right: 10px;
          background: rgba(10, 13, 19, 0.9);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 6px;
          padding: 6px 10px;
          display: flex;
          align-items: center;
          gap: 8px;
          z-index: 3;
        }
        .caption-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #38bdf8;
          flex-shrink: 0;
        }
        .caption-dot.gold {
          background: #dfb987;
        }
        .caption-text {
          font-size: 0.72rem;
          font-weight: 600;
          color: #f1f5f9;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* Content Column */
        .service-content-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
          position: relative;
          z-index: 1;
          justify-content: center;
        }
        .service-header-meta {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        /* ULTRA-VISIBLE SERVICE NUMBER PILL */
        .service-number-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: linear-gradient(135deg, #dfb987 0%, #c59a63 50%, #9a723e 100%);
          color: #07080b;
          padding: 4px 14px;
          border-radius: 9999px;
          box-shadow: 0 4px 14px rgba(197, 154, 99, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.35);
          flex-shrink: 0;
        }
        .num-prefix {
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          opacity: 0.9;
        }
        .num-val {
          font-size: 1.15rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          line-height: 1;
        }
        .service-category-tag {
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #dfb987;
        }
        .service-title {
          font-size: clamp(1.6rem, 2.3vw, 2.15rem);
          color: #ffffff;
          line-height: 1.25;
          letter-spacing: 0.01em;
        }
        .service-desc {
          font-size: 0.96rem;
          color: #94a3b8;
          line-height: 1.65;
        }

        /* Key Offerings */
        .offerings-box {
          display: flex;
          flex-direction: column;
          gap: 12px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 10px;
          padding: 16px 18px;
        }
        .offerings-heading {
          font-size: 0.76rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #dfb987;
          font-weight: 700;
        }
        .offerings-items {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .offering-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }
        .offering-icon-wrap {
          margin-top: 3px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: rgba(197, 154, 99, 0.16);
          border: 1px solid rgba(197, 154, 99, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .gold-check-icon {
          color: #dfb987;
        }
        .offering-text-wrap {
          flex: 1;
        }
        .offering-title {
          font-size: 0.92rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 2px;
        }
        .offering-body {
          font-size: 0.835rem;
          color: #94a3b8;
          line-height: 1.5;
        }

        /* Authority Compliance Chips */
        .service-codes-box {
          background: rgba(10, 12, 17, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.06);
          padding: 12px 16px;
          border-radius: 8px;
        }
        .codes-label {
          display: block;
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #64748b;
          margin-bottom: 8px;
        }
        .codes-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .code-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.74rem;
          font-weight: 600;
          color: #dfb987;
          background: rgba(197, 154, 99, 0.08);
          border: 1px solid rgba(197, 154, 99, 0.25);
          padding: 4px 10px;
          border-radius: 6px;
        }
        .code-chip-icon {
          color: #dfb987;
          flex-shrink: 0;
        }

        /* Action Row */
        .service-action-row {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 4px;
        }
        .service-inquire-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .btn-service-call {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 18px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 8px;
          font-size: 0.82rem;
          font-weight: 600;
          color: #dfb987;
          text-decoration: none;
          transition: all 0.25s ease;
        }
        .btn-service-call:hover {
          background: rgba(197, 154, 99, 0.12);
          border-color: rgba(197, 154, 99, 0.4);
          color: #ffffff;
          transform: translateY(-2px);
        }
        .pill-txt-desktop { display: inline; }
        .pill-txt-mobile { display: none; }
        .btn-txt-desktop { display: inline; }
        .btn-txt-mobile { display: none; }

        @media (max-width: 640px) {
          .pill-txt-desktop { display: none; }
          .pill-txt-mobile { display: inline; }
          .btn-txt-desktop { display: none; }
          .btn-txt-mobile { display: inline; }

          .services-hero-section {
            padding: 48px 0 32px;
          }
          .services-page-title {
            font-size: 1.85rem;
            margin: 10px 0 14px;
          }
          .services-page-subtitle {
            font-size: 0.92rem;
            line-height: 1.55;
            margin-bottom: 20px;
          }
          .authority-inline-badge {
            border-radius: 10px;
            font-size: 0.74rem;
            padding: 8px 12px;
            text-align: left;
            line-height: 1.4;
            max-width: 100%;
            margin-bottom: 22px;
          }
          .services-quick-nav {
            border-radius: 12px;
            padding: 12px 10px;
            width: 100%;
            flex-direction: column;
            align-items: stretch;
            gap: 8px;
            box-sizing: border-box;
          }
          .quick-nav-label {
            text-align: center;
            display: block;
          }
          .quick-nav-pills {
            flex-direction: column;
            width: 100%;
            gap: 6px;
          }
          .quick-nav-pill {
            width: 100%;
            justify-content: flex-start;
            padding: 8px 12px;
            border-radius: 8px;
            font-size: 0.78rem;
            box-sizing: border-box;
          }
          .services-list-section {
            padding: 36px 0 50px;
          }
          .services-stack {
            gap: 36px;
          }
          .service-card,
          .service-card.reversed-layout {
            padding: 20px 16px;
            gap: 20px;
            border-radius: 12px;
          }
          .service-watermark {
            font-size: 4.5rem;
            top: 6px;
            right: 12px;
          }
          .service-header-meta {
            gap: 10px;
          }
          .service-title {
            font-size: 1.45rem;
            line-height: 1.25;
          }
          .service-desc {
            font-size: 0.9rem;
            line-height: 1.55;
          }
          .offerings-box {
            padding: 14px 12px;
            gap: 10px;
          }
          .offering-title {
            font-size: 0.88rem;
          }
          .offering-body {
            font-size: 0.8rem;
          }
          .service-codes-box {
            padding: 10px 12px;
          }
          .code-chip {
            font-size: 0.7rem;
            padding: 3px 8px;
          }
          .service-action-row {
            flex-direction: column;
            width: 100%;
            gap: 10px;
          }
          .service-inquire-btn {
            width: 100%;
            justify-content: center;
            white-space: normal;
            line-height: 1.35;
            text-align: center;
            padding: 12px 16px;
          }
          .btn-service-call {
            width: 100%;
            justify-content: center;
            padding: 11px 16px;
          }
          .service-dual-gallery {
            grid-template-columns: 1fr;
            min-height: auto;
            gap: 12px;
          }
          .gallery-photo-frame {
            height: 220px;
            min-height: 220px;
          }
          .mid-page-cta-section {
            padding: 10px 0 40px;
          }
          .mid-cta-panel {
            padding: 22px 16px;
            border-radius: 12px;
            gap: 18px;
          }
          .mid-cta-heading {
            font-size: 1.35rem;
            line-height: 1.3;
          }
          .mid-cta-text {
            font-size: 0.88rem;
            line-height: 1.55;
          }
          .mid-cta-actions {
            width: 100%;
            min-width: auto;
            gap: 10px;
          }
          .mid-cta-btn {
            width: 100%;
            white-space: normal;
            text-align: center;
            line-height: 1.35;
            padding: 12px 16px;
          }
          .mid-call-btn {
            width: 100%;
            justify-content: center;
          }
        }

        /* 3. Mid-Page CTA */
        .mid-page-cta-section {
          padding: 20px 0 60px;
        }
        .mid-cta-panel {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          padding: 44px;
          background: radial-gradient(circle at 0% 50%, #171d29 0%, #11141c 100%);
          border: 1px solid rgba(197, 154, 99, 0.35);
          border-radius: 14px;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
          flex-wrap: wrap;
        }
        .mid-cta-content {
          max-width: 620px;
        }
        .mid-cta-heading {
          font-size: clamp(1.5rem, 2.3vw, 2.05rem);
          color: #ffffff;
          margin: 10px 0 12px;
          line-height: 1.25;
        }
        .mid-cta-text {
          font-size: 0.95rem;
          color: #94a3b8;
          line-height: 1.6;
        }
        .mid-cta-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          min-width: 260px;
        }
        .mid-cta-btn {
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .mid-call-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-color: rgba(197, 154, 99, 0.4);
          color: #dfb987;
          text-decoration: none;
        }
        .mid-call-btn:hover {
          background: rgba(197, 154, 99, 0.12);
          color: #ffffff;
        }

        /* 4. Process Steps */
        .process-section {
          background: #090b10;
        }
        .process-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 40px;
        }
        @media (max-width: 960px) {
          .process-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 560px) {
          .process-cards-grid {
            grid-template-columns: 1fr;
          }
        }
        .process-card {
          background: #11151e;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 30px 24px;
          transition: all 0.3s ease;
          position: relative;
        }
        .process-card:hover {
          border-color: rgba(197, 154, 99, 0.4);
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5);
        }
        .process-card-top {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
        }
        .step-num {
          font-size: 1.6rem;
          font-weight: 800;
          color: #dfb987;
          line-height: 1;
        }
        .step-accent-line {
          height: 2px;
          flex: 1;
          background: linear-gradient(90deg, rgba(197, 154, 99, 0.5) 0%, transparent 100%);
        }
        .step-name {
          font-size: 1.15rem;
          color: #ffffff;
          margin-bottom: 8px;
          letter-spacing: 0.01em;
        }
        .step-text {
          font-size: 0.86rem;
          color: #94a3b8;
          line-height: 1.6;
        }

        /* 5. Guarantees Section */
        .guarantees-section {
          background: #07080c;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }
        .guarantees-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 40px;
        }
        @media (max-width: 1024px) {
          .guarantees-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 560px) {
          .guarantees-grid {
            grid-template-columns: 1fr;
          }
        }
        .guarantee-card {
          background: #0f121a;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 12px;
          padding: 28px 20px;
          transition: all 0.3s ease;
        }
        .guarantee-card:hover {
          border-color: rgba(197, 154, 99, 0.35);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
        }
        .guarantee-icon-box {
          width: 50px;
          height: 50px;
          border-radius: 10px;
          background: rgba(197, 154, 99, 0.1);
          border: 1px solid rgba(197, 154, 99, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
        .guarantee-title {
          font-size: 1.05rem;
          color: #ffffff;
          margin-bottom: 8px;
          letter-spacing: 0.01em;
        }
        .guarantee-text {
          font-size: 0.84rem;
          color: #94a3b8;
          line-height: 1.55;
        }
      `}</style>
    </div>
  );
}
