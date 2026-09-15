import React from 'react';
import { 
  Compass, Hammer, Palette, ArrowRight, ShieldCheck, 
  MapPin, CheckCircle2, Building, Award, Phone, Mail, ExternalLink, HardHat, Check 
} from 'lucide-react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { portfolioProjects } from '../data/projectsData';

export default function HomePage({ setActivePage, setProjectForModal }) {
  const featured = portfolioProjects.slice(0, 4);

  const navigateTo = (pageId, targetId = null) => {
    setActivePage(pageId, targetId);
    if (!targetId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="home-page">
      {/* ====================================================================
          FULL-WIDTH HERO SECTION (With Picture Covering Full Width & Overlapped Text)
          ==================================================================== */}
      <section className="fullwidth-hero-section">
        {/* Full Width Background Image with Gradient Overlay */}
        <div className="hero-fullwidth-backdrop">
          <img 
            src="/images/hero-triplet.png" 
            alt="METACON Design - Build - Decorate" 
            className="hero-backdrop-img"
          />
          <div className="hero-gradient-scrim" />
        </div>

        {/* Overlapped Hero Content */}
        <div className="container hero-overlap-container">
          <div className="hero-text-content animate-fade-in">
            <div className="hero-brand-badge">
              <span className="gold-line" />
              <span>20 YEARS OF STRUCTURAL EXCELLENCE</span>
            </div>

            <h1 className="hero-main-title">
              BUILT ON STRENGTH.<br />
              <span className="text-gold-gradient">DRIVEN BY TRUST.</span>
            </h1>

            <p className="hero-lead-text">
              Delivering architectural excellence, turnkey construction, and luxury interior decoration across{' '}
              <strong className="text-white">Islamabad</strong>, <strong className="text-white">Rawalpindi</strong>, <strong className="text-white">Lahore</strong>, and <strong className="text-white">Peshawar</strong>.
            </p>

            <div className="hero-action-buttons">
              <button 
                id="hero-request-consultation-btn"
                className="btn btn-primary"
                onClick={() => navigateTo('contact')}
              >
                <span>Request a Free Consultation</span>
                <ArrowRight size={16} />
              </button>

              <button 
                id="hero-view-portfolio-btn"
                className="btn btn-secondary"
                onClick={() => navigateTo('portfolio')}
              >
                <span>View Portfolio</span>
              </button>
            </div>

            {/* Quick Authority Stats - Matching Reference Screenshot */}
            <div className="hero-authority-strip">
              <div className="hero-stat-cell">
                <span className="stat-number">20+</span>
                <span className="stat-label">YEARS EXPERIENCE</span>
              </div>
              <div className="hero-stat-sep" />
              <div className="hero-stat-cell">
                <span className="stat-number">250+</span>
                <span className="stat-label">EXECUTED PROJECTS</span>
              </div>
              <div className="hero-stat-sep" />
              <div className="hero-stat-cell">
                <span className="stat-number">CDA · DHA</span>
                <span className="stat-label">MUNICIPAL APPROVALS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          CORE DISCIPLINES STRIP (From Reference Mockup 1.jpeg)
          ==================================================================== */}
      <section className="disciplines-banner">
        <div className="container">
          <div className="disciplines-grid">
            <div className="discipline-box" onClick={() => navigateTo('services')}>
              <Building size={24} className="gold-icon" />
              <span className="d-title">GENERAL CONSTRUCTION</span>
              <span className="d-sub">Foundations & Grey Structures</span>
            </div>
            <div className="discipline-box" onClick={() => navigateTo('services')}>
              <Compass size={24} className="gold-icon" />
              <span className="d-title">DESIGN & BUILD</span>
              <span className="d-sub">3D Elevation & Turnkey Villas</span>
            </div>
            <div className="discipline-box" onClick={() => navigateTo('services')}>
              <HardHat size={24} className="gold-icon" />
              <span className="d-title">CONSTRUCTION MANAGEMENT</span>
              <span className="d-sub">On-Site Resident Supervision</span>
            </div>
            <div className="discipline-box" onClick={() => navigateTo('services')}>
              <Hammer size={24} className="gold-icon" />
              <span className="d-title">RENOVATION & REMODELING</span>
              <span className="d-sub">Structural Upgrades & Makeovers</span>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          THE 3 CORE PILLARS SECTION (From Docx: Design, Build, Decorate)
          ==================================================================== */}
      <section className="section-pad pillars-section">
        <div className="container">
          <div className="section-header-centered text-center">
            <span className="section-tag">Core Disciplines</span>
            <h2 className="section-title">Design · Build · Decorate</h2>
            <p className="section-subtitle mx-auto">
              A comprehensive single-window construction lifecycle for luxury residences and commercial projects across Pakistan.
            </p>
          </div>

          <div className="pillars-grid">
            {/* 1. Design */}
            <div className="pillar-card glass-card">
              <div className="pillar-top-row">
                <span className="pillar-index">01</span>
                <div className="pillar-icon-wrap">
                  <Compass size={24} className="gold-icon" />
                </div>
              </div>
              <h3 className="pillar-title">1. Design</h3>
              <p className="pillar-excerpt">
                Architectural layouts, solar orientation, seismic engineering, and space planning.
              </p>
              <div className="pillar-bullets">
                <div className="b-item"><CheckCircle2 size={15} className="gold-icon flex-shrink" /> Architectural Layouts & 3D Floor Plans</div>
                <div className="b-item"><CheckCircle2 size={15} className="gold-icon flex-shrink" /> Structural Engineering & Blueprints</div>
                <div className="b-item"><CheckCircle2 size={15} className="gold-icon flex-shrink" /> Commercial & Residential Space Planning</div>
                <div className="b-item"><CheckCircle2 size={15} className="gold-icon flex-shrink" /> Permit Drawings & Approvals</div>
              </div>
              <button className="pillar-btn" onClick={() => navigateTo('services')}>
                <span>Explore Design Services</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* 2. Build */}
            <div className="pillar-card glass-card highlight-pillar">
              <div className="pillar-badge-top">Turnkey Management</div>
              <div className="pillar-top-row">
                <span className="pillar-index">02</span>
                <div className="pillar-icon-wrap">
                  <Hammer size={24} className="gold-icon" />
                </div>
              </div>
              <h3 className="pillar-title">2. Build</h3>
              <p className="pillar-excerpt">
                Solid grey structures, seismic foundation excavation, and complete villa execution.
              </p>
              <div className="pillar-bullets">
                <div className="b-item"><CheckCircle2 size={15} className="gold-icon flex-shrink" /> Grey Structure Construction (Foundation, Framing, Brickwork)</div>
                <div className="b-item"><CheckCircle2 size={15} className="gold-icon flex-shrink" /> Turnkey Construction & Project Management</div>
                <div className="b-item"><CheckCircle2 size={15} className="gold-icon flex-shrink" /> Commercial Plaza & Office Building Construction</div>
                <div className="b-item"><CheckCircle2 size={15} className="gold-icon flex-shrink" /> Residential Villa & Apartment Building</div>
              </div>
              <button className="pillar-btn" onClick={() => navigateTo('services')}>
                <span>Explore Build Services</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* 3. Decorate */}
            <div className="pillar-card glass-card">
              <div className="pillar-top-row">
                <span className="pillar-index">03</span>
                <div className="pillar-icon-wrap">
                  <Palette size={24} className="gold-icon" />
                </div>
              </div>
              <h3 className="pillar-title">3. Decorate</h3>
              <p className="pillar-excerpt">
                Luxury interior decoration, custom cabinetry, modern false ceilings, and ambient lighting.
              </p>
              <div className="pillar-bullets">
                <div className="b-item"><CheckCircle2 size={15} className="gold-icon flex-shrink" /> Modern Interior Designing & Execution</div>
                <div className="b-item"><CheckCircle2 size={15} className="gold-icon flex-shrink" /> Premium Flooring, Tiling, and False Ceilings</div>
                <div className="b-item"><CheckCircle2 size={15} className="gold-icon flex-shrink" /> Custom Cabinetry, Woodwork, and Wardrobes</div>
                <div className="b-item"><CheckCircle2 size={15} className="gold-icon flex-shrink" /> Commercial Office Fit-Outs & Retail Branding</div>
              </div>
              <button className="pillar-btn" onClick={() => navigateTo('services')}>
                <span>Explore Decor Services</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          REGIONAL REACH SECTION (Docx Word-for-Word Copy)
          Heading: Building Across Pakistan’s Major Cities
          Body: Metacon operates fully managed construction crews and design studios in
          Islamabad/Rawalpindi, Lahore, and Peshawar.
          ==================================================================== */}
      <section className="section-pad regional-reach-section">
        <div className="container">
          <div className="regional-header-flex">
            <div>
              <span className="section-tag">
                <MapPin size={13} className="gold-icon" /> Service Locations
              </span>
              <h2 className="section-title">Building Across Pakistan’s Major Cities</h2>
              <p className="section-subtitle">
                Metacon operates fully managed construction crews and design studios in <strong>Islamabad/Rawalpindi</strong>, <strong>Lahore</strong>, and <strong>Peshawar</strong>. Wherever you are, we bring local compliance expertise and elite project management straight to your site.
              </p>
            </div>
            <a 
              href="tel:+923345092939" 
              className="central-hotline-card"
              title="Call Central Helpline"
            >
              <Phone size={18} className="gold-icon" />
              <div>
                <span className="hotline-lbl">Central Helpline</span>
                <span className="hotline-num">+92-334-5092939</span>
              </div>
            </a>
          </div>

          <div className="regional-cards-grid">
            {/* Islamabad / Rawalpindi */}
            <div className="city-card glass-card">
              <span className="city-status-pill">Central Headquarters</span>
              <h3 className="city-card-title">Islamabad / Rawalpindi</h3>
              <span className="city-card-address">Sector H-9, Islamabad</span>
              <div className="city-bullets">
                <div className="c-item"><ShieldCheck size={14} className="gold-icon" /> CDA, RDA & DHA Islamabad Approved</div>
                <div className="c-item"><CheckCircle2 size={14} className="gold-icon" /> Turn-Key Villas & Grey Structures</div>
              </div>
              <div className="city-contact-details">
                <div className="city-phone-row">
                  <Phone size={13} />
                  <span>+92-334-5092939 / +92-336-4522111</span>
                </div>
                <div className="city-email-row">
                  <Mail size={13} />
                  <span>cmetacon@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Lahore */}
            <div className="city-card glass-card">
              <span className="city-status-pill">Regional Hub</span>
              <h3 className="city-card-title">Lahore</h3>
              <span className="city-card-address">Paragon City Lahore</span>
              <div className="city-bullets">
                <div className="c-item"><ShieldCheck size={14} className="gold-icon" /> LDA & DHA Lahore Byelaw Compliant</div>
                <div className="c-item"><CheckCircle2 size={14} className="gold-icon" /> Luxury Residential Villas & Renders</div>
              </div>
              <div className="city-contact-details">
                <div className="city-phone-row">
                  <Phone size={13} />
                  <span>+92-334-5092939</span>
                </div>
                <div className="city-email-row">
                  <Mail size={13} />
                  <span>cmetacon@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Peshawar */}
            <div className="city-card glass-card">
              <span className="city-status-pill">Regional Office</span>
              <h3 className="city-card-title">Peshawar</h3>
              <span className="city-card-address">Warsak Road, Peshawar</span>
              <div className="city-bullets">
                <div className="c-item"><ShieldCheck size={14} className="gold-icon" /> PDA & Cantt Authority Regulated</div>
                <div className="c-item"><CheckCircle2 size={14} className="gold-icon" /> Bespoke Residences & Remodeling</div>
              </div>
              <div className="city-contact-details">
                <div className="city-phone-row">
                  <Phone size={13} />
                  <span>+92-334-5092939</span>
                </div>
                <div className="city-email-row">
                  <Mail size={13} />
                  <span>cmetacon@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          BEFORE & AFTER STRUCTURAL TRANSFORMATION SLIDERS
          ==================================================================== */}
      <section className="section-pad before-after-section">
        <div className="container">
          <div className="section-header-centered text-center">
            <span className="section-tag">Visual Transformations</span>
            <h2 className="section-title">See The Difference: Before & After</h2>
            <p className="section-subtitle mx-auto">
              From raw brickwork skeletons and dated rooms to turnkey luxury sanctuaries. Drag the slider to reveal Metacon's structural transformations.
            </p>
          </div>

          <div className="sliders-duo-grid">
            <BeforeAfterSlider 
              beforeImage="/images/remodel-warehouse-before.jpg"
              afterImage="/images/remodel-warehouse-after.jpg"
              title="Cathedral Ceiling & Steel Trusses Overhaul"
              aspectRatio="16 / 10"
            />
            <BeforeAfterSlider 
              beforeImage="/images/building-foundation.jpg"
              afterImage="/images/villa-exterior-after.jpg?v=3"
              title="Ground-Up Foundation to 1-Kanal Luxury Villa"
              aspectRatio="16 / 10"
            />
          </div>
        </div>
      </section>

      {/* ====================================================================
          SERVICES SHOWCASE SECTION (Derived Directly from Docx Page 2)
          Replacing fabricated address cards with 3 short-form service columns
          ==================================================================== */}
      <section className="section-pad services-showcase-section">
        <div className="container">
          <div className="featured-header-row">
            <div>
              <span className="section-tag">Our Core Expertise</span>
              <h2 className="section-title">Our Residential Services</h2>
              <p className="section-subtitle">
                From empty plots to luxury turn-key villas, and structural renovations to modern interior upgrades—we shape the homes you love.
              </p>
            </div>
            <button 
              className="btn btn-outline-gold"
              onClick={() => navigateTo('services')}
            >
              <span>Explore All Services</span>
              <ArrowRight size={15} />
            </button>
          </div>

          <div className="services-showcase-grid">
            {/* Service 1: Architectural & Interior Design */}
            <div 
              className="service-showcase-card glass-card"
              onClick={() => navigateTo('services', 'architectural-design')}
              role="button"
              tabIndex={0}
            >
              <div className="service-showcase-img-box">
                <img 
                  src="/images/design-drafting.jpg" 
                  alt="Residential Design & Space Planning" 
                  className="service-showcase-thumb"
                />
                <div className="service-showcase-badge">Design Studio</div>
                <div className="service-hover-curtain">
                  <span>Explore Design Details</span>
                  <ArrowRight size={15} />
                </div>
              </div>
              <div className="service-showcase-body">
                <span className="service-cat-label">1. Architectural & Interior Design</span>
                <h3 className="service-card-heading">Residential Design & Space Planning</h3>
                <p className="service-card-text">
                  Every great home begins with an exceptional plan. Our design team creates personalized layouts optimized for natural light, ventilation, and structural longevity.
                </p>
                <div className="service-bullets-list">
                  <div className="s-bullet"><CheckCircle2 size={14} className="gold-icon flex-shrink" /> Custom 3D Elevation & Floor Plans</div>
                  <div className="s-bullet"><CheckCircle2 size={14} className="gold-icon flex-shrink" /> Structural & Engineering Drawings</div>
                  <div className="s-bullet"><CheckCircle2 size={14} className="gold-icon flex-shrink" /> Remodeling Concepts & Expansions</div>
                </div>
                <button 
                  className="service-card-cta"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateTo('services', 'architectural-design');
                  }}
                >
                  <span>Explore Design Services</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Service 2: Turn-Key Construction & Grey Structure */}
            <div 
              className="service-showcase-card glass-card"
              onClick={() => navigateTo('services', 'turnkey-construction')}
              role="button"
              tabIndex={0}
            >
              <div className="service-showcase-img-box">
                <img 
                  src="/images/site-workers.jpg" 
                  alt="New House Construction & Structural Execution" 
                  className="service-showcase-thumb"
                />
                <div className="service-showcase-badge">General Construction</div>
                <div className="service-hover-curtain">
                  <span>Explore Build Details</span>
                  <ArrowRight size={15} />
                </div>
              </div>
              <div className="service-showcase-body">
                <span className="service-cat-label">2. Turn-Key Construction & Grey Structure</span>
                <h3 className="service-card-heading">New House Construction & Structural Execution</h3>
                <p className="service-card-text">
                  We deliver premium, hassle-free construction tracking from foundational excavation to final finishing handover strictly adhering to local development authority codes.
                </p>
                <div className="service-bullets-list">
                  <div className="s-bullet"><CheckCircle2 size={14} className="gold-icon flex-shrink" /> Premium Grey Structure Builds</div>
                  <div className="s-bullet"><CheckCircle2 size={14} className="gold-icon flex-shrink" /> Turn-Key Villa Construction</div>
                  <div className="s-bullet"><CheckCircle2 size={14} className="gold-icon flex-shrink" /> Home Extensions & Upgradations</div>
                </div>
                <button 
                  className="service-card-cta"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateTo('services', 'turnkey-construction');
                  }}
                >
                  <span>Explore Build Services</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Service 3: Home Remodeling & Decoration */}
            <div 
              className="service-showcase-card glass-card"
              onClick={() => navigateTo('services', 'remodeling-interior')}
              role="button"
              tabIndex={0}
            >
              <div className="service-showcase-img-box">
                <img 
                  src="/images/interior-grand.jpg" 
                  alt="Luxury Remodeling & Interior Decoration" 
                  className="service-showcase-thumb"
                />
                <div className="service-showcase-badge">Luxury Interiors</div>
                <div className="service-hover-curtain">
                  <span>Explore Remodel Details</span>
                  <ArrowRight size={15} />
                </div>
              </div>
              <div className="service-showcase-body">
                <span className="service-cat-label">3. Home Remodeling & Decoration</span>
                <h3 className="service-card-heading">Luxury Remodeling & Interior Decoration</h3>
                <p className="service-card-text">
                  Transform your existing house into a modern sanctuary. We specialize in complete home makeovers, upgrading outdated structures into premium contemporary living spaces.
                </p>
                <div className="service-bullets-list">
                  <div className="s-bullet"><CheckCircle2 size={14} className="gold-icon flex-shrink" /> Complete Home Remodeling & Facelifts</div>
                  <div className="s-bullet"><CheckCircle2 size={14} className="gold-icon flex-shrink" /> Kitchen & Bath Bespoke Upgrades</div>
                  <div className="s-bullet"><CheckCircle2 size={14} className="gold-icon flex-shrink" /> Interior Styling, False Ceilings & Lighting</div>
                </div>
                <button 
                  className="service-card-cta"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateTo('services', 'remodeling-interior');
                  }}
                >
                  <span>Explore Remodel Services</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          ABOUT US TEASER (Founded 20 Years Ago & 3 Young Engineers from Docx)
          ==================================================================== */}
      <section className="section-pad about-teaser-section">
        <div className="container">
          <div className="about-teaser-grid">
            <div className="teaser-text-col">
              <span className="section-tag">
                <Award size={13} className="gold-icon" /> 20-Year Legacy
              </span>
              <h2 className="section-title">
                Bridging Time-Tested Standards with Cutting-Edge Engineering
              </h2>
              <p className="teaser-quote">
                "Founded <strong>20 years ago</strong>, our company has spent two decades serving communities with integrity, building a reputation for reliability and structural excellence. Today, that rich legacy is powered by a dynamic team of <strong>three young engineers and developers</strong> who bring an intense passion for remodeling, modern architectural design, and creative space planning to every job site."
              </p>
              <p className="teaser-body">
                We bridge the gap between time-tested construction standards and cutting-edge engineering techniques. Whether we are drawing up blueprints, managing a ground-up build, or executing a high-end structural upgrade, our focus is always on delivering intelligent, creative, and structurally sound solutions.
              </p>
              <button 
                className="btn btn-primary"
                onClick={() => navigateTo('about')}
              >
                <span>Read Our Full Story</span>
                <ArrowRight size={15} />
              </button>
            </div>

            <div className="teaser-img-col">
              <div className="teaser-img-frame">
                <img 
                  src="/images/architect-vs-engineer.jpg" 
                  alt="Architectural design meets civil engineering"
                  className="teaser-img"
                />
                <div className="teaser-caption">
                  <span className="cap-bold">Architect + Structural Engineer</span>
                  <span className="cap-sub">Aesthetic Open Space Engineered With High-Load Seismic Safety</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* ====================================================================
           Full-Width Hero with Picture Covering Full Width & Overlapped Text
           ==================================================================== */
        .fullwidth-hero-section {
          position: relative;
          width: 100%;
          min-height: calc(100vh - 84px);
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #080a0f;
          padding: 70px 0 90px;
          border-bottom: 1px solid rgba(197, 154, 99, 0.2);
        }
        @media (max-width: 768px) {
          .fullwidth-hero-section {
            min-height: auto;
            padding: 50px 0 70px;
          }
        }
        .hero-fullwidth-backdrop {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        .hero-backdrop-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center right;
        }
        .hero-gradient-scrim {
          position: absolute;
          inset: 0;
          background: 
            linear-gradient(90deg, rgba(8, 10, 15, 0.96) 0%, rgba(8, 10, 15, 0.88) 38%, rgba(8, 10, 15, 0.45) 72%, rgba(8, 10, 15, 0.80) 100%),
            linear-gradient(180deg, rgba(8, 10, 15, 0.6) 0%, transparent 15%, transparent 80%, rgba(8, 10, 15, 0.98) 100%);
        }
        @media (max-width: 768px) {
          .fullwidth-hero-section {
            min-height: 80vh;
            padding: 40px 0 60px;
          }
          .hero-backdrop-img {
            object-position: 70% center;
            filter: brightness(0.95);
          }
          .hero-gradient-scrim {
            background: linear-gradient(180deg, 
              rgba(8, 10, 15, 0.72) 0%, 
              rgba(8, 10, 15, 0.38) 35%, 
              rgba(8, 10, 15, 0.65) 70%, 
              rgba(8, 10, 15, 0.96) 100%
            );
          }
          .hero-text-content {
            background: rgba(9, 11, 16, 0.45);
            backdrop-filter: blur(8px);
            padding: 22px 18px;
            border-radius: var(--radius-sm);
            border: 1px solid rgba(255, 255, 255, 0.08);
          }
        }
        .hero-overlap-container {
          position: relative;
          z-index: 2;
        }
        .hero-text-content {
          max-width: 680px;
          display: flex;
          flex-direction: column;
        }
        .hero-brand-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.75rem;
          font-weight: 600;
          color: #dfb987;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 18px;
          align-self: flex-start;
        }
        .gold-line {
          width: 28px;
          height: 2px;
          background: #dfb987;
          display: inline-block;
        }
        .hero-main-title {
          font-family: var(--font-heading, 'Oswald', sans-serif);
          font-size: clamp(2.8rem, 5.5vw, 4.6rem);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.02em;
          line-height: 1.05;
          margin-bottom: 18px;
          color: #ffffff;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
        }
        .hero-lead-text {
          font-size: clamp(1.05rem, 1.3vw, 1.2rem);
          color: #cbd5e1;
          line-height: 1.65;
          margin-bottom: 32px;
          max-width: 620px;
          text-shadow: 0 2px 12px rgba(0,0,0,0.85);
        }
        .hero-action-buttons {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 38px;
          flex-wrap: wrap;
        }
        .hero-authority-strip {
          display: flex;
          align-items: center;
          gap: 32px;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          flex-wrap: wrap;
        }
        @media (max-width: 600px) {
          .hero-main-title {
            font-size: 2.35rem;
          }
          .hero-action-buttons {
            flex-direction: column;
            width: 100%;
          }
          .hero-action-buttons .btn {
            width: 100%;
          }
          .hero-authority-strip {
            gap: 14px;
            justify-content: space-between;
          }
          .hero-stat-cell .stat-number {
            font-size: 1.4rem;
          }
          .hero-stat-sep {
            display: none;
          }
        }
        .hero-stat-cell {
          display: flex;
          flex-direction: column;
        }
        .stat-number {
          font-family: var(--font-heading, 'Oswald', sans-serif);
          font-size: 1.8rem;
          font-weight: 700;
          color: #dfb987;
          line-height: 1.1;
          letter-spacing: 0.02em;
        }
        .stat-label {
          font-size: 0.7rem;
          font-weight: 700;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-top: 4px;
        }
        .hero-stat-sep {
          width: 1px;
          height: 36px;
          background: rgba(255, 255, 255, 0.12);
        }

        /* Disciplines Banner (Directly mirroring 1.jpeg) */
        .disciplines-banner {
          background: #10131b;
          border-bottom: 1px solid var(--border-subtle);
          padding: 32px 0;
        }
        .disciplines-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        @media (max-width: 960px) {
          .disciplines-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 520px) {
          .disciplines-grid {
            grid-template-columns: 1fr;
          }
        }
        .discipline-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 8px;
          padding: 16px 12px;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: var(--transition-smooth);
        }
        .discipline-box:hover {
          background: rgba(255, 255, 255, 0.03);
          transform: translateY(-2px);
        }
        .d-title {
          font-family: var(--font-heading);
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          color: #ffffff;
          margin-top: 4px;
        }
        .d-sub {
          font-size: 0.775rem;
          color: var(--text-muted);
        }

        /* Pillars Section */
        .section-header-centered {
          margin-bottom: 44px;
        }
        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        @media (max-width: 960px) {
          .pillars-grid {
            grid-template-columns: 1fr;
          }
        }
        .pillar-card {
          padding: 36px 28px;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .highlight-pillar {
          border-color: var(--border-gold);
          background: #141824;
        }
        .pillar-badge-top {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          padding: 4px 14px;
          background: linear-gradient(135deg, #241d13 0%, #151822 100%);
          border: 1px solid var(--border-gold);
          border-radius: var(--radius-full);
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--gold-light);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
          z-index: 5;
          white-space: nowrap;
        }
        .pillar-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        .pillar-index {
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.12);
        }
        .pillar-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-sm);
          background: var(--gold-subtle);
          border: 1px solid var(--gold-border);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .pillar-title {
          font-size: 1.4rem;
          font-weight: 500;
          color: #ffffff;
          margin-bottom: 8px;
        }
        .pillar-excerpt {
          font-size: 0.925rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 24px;
        }
        .pillar-bullets {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 28px;
          font-size: 0.875rem;
          color: var(--text-main);
          flex-grow: 1;
        }
        .b-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }
        .pillar-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--gold-light);
          font-size: 0.875rem;
          font-weight: 700;
          padding-top: 16px;
          border-top: 1px solid var(--border-subtle);
        }
        .pillar-btn:hover {
          color: #ffffff;
          transform: translateX(3px);
        }

        /* Regional Section */
        .regional-header-flex {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 32px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }
        .central-hotline-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 20px;
          background: var(--bg-surface);
          border: 1px solid var(--border-gold);
          border-radius: var(--radius-sm);
          text-decoration: none;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .central-hotline-card:hover {
          background: rgba(197, 154, 99, 0.12);
          border-color: rgba(223, 185, 135, 0.8);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(197, 154, 99, 0.25);
        }
        .hotline-lbl {
          font-size: 0.7rem;
          color: var(--gold-light);
          text-transform: uppercase;
          font-weight: 700;
          display: block;
        }
        .hotline-num {
          font-size: 1.05rem;
          font-weight: 700;
          color: #ffffff;
        }
        .regional-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 900px) {
          .regional-cards-grid {
            grid-template-columns: 1fr;
          }
        }
        .city-card {
          padding: 28px;
          display: flex;
          flex-direction: column;
        }
        .city-status-pill {
          display: inline-block;
          align-self: flex-start;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--gold-light);
          margin-bottom: 8px;
        }
        .city-card-title {
          font-size: 1.3rem;
          font-weight: 500;
          color: #ffffff;
          margin-bottom: 4px;
        }
        .city-card-address {
          font-size: 0.825rem;
          color: var(--text-dim);
          display: block;
          margin-bottom: 18px;
        }
        .city-bullets {
          display: flex;
          flex-direction: column;
          gap: 10px;
          font-size: 0.825rem;
          color: var(--text-muted);
          margin-bottom: 20px;
        }
        .c-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .city-phone-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.825rem;
          color: var(--gold-light);
          font-weight: 600;
          margin-top: auto;
          padding-top: 14px;
          border-top: 1px solid var(--border-subtle);
        }

        /* Sliders */
        .sliders-duo-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: stretch;
        }
        @media (max-width: 960px) {
          .sliders-duo-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Featured Projects */
        .featured-header-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 24px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }
        /* Services Showcase Section */
        .services-showcase-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        @media (max-width: 960px) {
          .services-showcase-grid {
            grid-template-columns: 1fr;
          }
        }
        .service-showcase-card {
          padding: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: #11141c;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .service-showcase-card:hover {
          transform: translateY(-6px);
          border-color: rgba(197, 154, 99, 0.5);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6);
        }
        .service-showcase-img-box {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background: #090b10;
        }
        .service-showcase-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .service-showcase-card:hover .service-showcase-thumb {
          transform: scale(1.06);
        }
        .service-showcase-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          padding: 4px 12px;
          background: rgba(10, 12, 17, 0.88);
          backdrop-filter: blur(6px);
          border: 1px solid var(--border-gold);
          border-radius: var(--radius-full);
          font-size: 0.725rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--gold-light);
          letter-spacing: 0.05em;
        }
        .service-hover-curtain {
          position: absolute;
          inset: 0;
          background: rgba(9, 11, 16, 0.65);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: #ffffff;
          font-weight: 600;
          font-size: 0.9rem;
          opacity: 0;
          transition: opacity 0.25s ease;
        }
        .service-showcase-card:hover .service-hover-curtain {
          opacity: 1;
        }
        .service-showcase-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .service-cat-label {
          font-size: 0.725rem;
          color: var(--gold-light);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 6px;
        }
        .service-card-heading {
          font-family: var(--font-heading, 'Oswald', sans-serif);
          font-size: 1.25rem;
          font-weight: 500;
          color: #ffffff;
          margin-bottom: 10px;
          line-height: 1.25;
        }
        .service-card-text {
          font-size: 0.875rem;
          color: var(--text-muted);
          line-height: 1.55;
          margin-bottom: 18px;
        }
        .service-bullets-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 22px;
          flex-grow: 1;
        }
        .s-bullet {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          color: #cbd5e1;
        }
        .service-card-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--gold-light);
          font-size: 0.85rem;
          font-weight: 700;
          background: transparent;
          border: none;
          padding-top: 14px;
          border-top: 1px solid var(--border-subtle);
          margin-top: auto;
          cursor: pointer;
          transition: color 0.2s ease, transform 0.2s ease;
        }
        .service-card-cta:hover {
          color: #ffffff;
          transform: translateX(3px);
        }
        .city-contact-details {
          margin-top: auto;
          padding-top: 14px;
          border-top: 1px solid var(--border-subtle);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .city-phone-row, .city-email-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.825rem;
          color: var(--gold-light);
          font-weight: 600;
        }
        .city-email-row {
          color: #94a3b8;
          font-size: 0.8rem;
        }

        /* About Teaser */
        .about-teaser-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 48px;
          align-items: center;
        }
        @media (max-width: 960px) {
          .about-teaser-grid {
            grid-template-columns: 1fr;
          }
        }
        .teaser-text-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .teaser-quote {
          font-size: 1.05rem;
          color: #cbd5e1;
          line-height: 1.65;
          border-left: 3px solid var(--gold-primary);
          padding-left: 18px;
          background: var(--gold-subtle);
          padding: 16px 20px;
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
        }
        .teaser-body {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.65;
        }
        .teaser-img-col {
          display: flex;
          justify-content: center;
        }
        .teaser-img-frame {
          position: relative;
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 1px solid var(--border-gold);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6);
          width: 100%;
        }
        .teaser-img {
          width: 100%;
          height: auto;
          display: block;
        }
        .teaser-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 14px 18px;
          background: rgba(10, 12, 17, 0.92);
          backdrop-filter: blur(4px);
          display: flex;
          flex-direction: column;
        }
        .cap-bold {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--gold-light);
        }
        .cap-sub {
          font-size: 0.85rem;
          color: #ffffff;
        }

        .text-center { text-align: center; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .flex-shrink { flex-shrink: 0; }
      `}</style>
    </div>
  );
}
