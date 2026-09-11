import React from 'react';
import { 
  Award, ShieldCheck, CheckCircle2, 
  ArrowRight, Compass 
} from 'lucide-react';

export default function AboutPage({ setActivePage }) {
  return (
    <div className="about-page">
      {/* 1. Header (Docx: About Us) */}
      <section className="about-hero-section">
        <div className="container">
          <span className="section-tag">
            <Award size={13} className="gold-icon" /> 20 Years of Structural Excellence
          </span>
          <h1 className="about-page-title font-serif">Welcome to a New Era of Construction</h1>
          <p className="about-page-subtitle">
            Founded 20 years ago, our company has spent two decades serving communities with integrity, building a reputation for reliability and structural excellence.
          </p>
        </div>
      </section>

      {/* The Core Narrative & Dual Specialization (Docx Word-for-Word) */}
      <section className="section-pad narrative-section">
        <div className="container">
          <div className="narrative-grid">
            <div className="narrative-text-col">
              <span className="section-tag">Our Philosophy</span>
              <h2 className="section-title">
                Bridging Time-Tested Standards with Cutting-Edge Engineering
              </h2>
              <div className="quote-box font-editorial">
                "Today, that rich legacy is powered by a dynamic team of <strong>three young engineers and developers</strong> who bring an intense passion for remodeling, modern architectural design, and creative space planning to every job site."
              </div>
              <p className="narrative-p">
                We bridge the gap between time-tested construction standards and cutting-edge engineering techniques. Whether we are drawing up blueprints, managing a ground-up build, or executing a high-end structural upgrade, our focus is always on delivering intelligent, creative, and structurally sound solutions.
              </p>
              
              <div className="principles-list">
                <div className="principle-row">
                  <CheckCircle2 size={16} className="gold-icon flex-shrink" />
                  <div>
                    <h4 className="principle-name font-serif">Intelligent Space Planning</h4>
                    <p className="principle-text">Optimized for natural light, cross-ventilation, and modern family ergonomics.</p>
                  </div>
                </div>
                <div className="principle-row">
                  <CheckCircle2 size={16} className="gold-icon flex-shrink" />
                  <div>
                    <h4 className="principle-name font-serif">Certified Seismic Safety</h4>
                    <p className="principle-text">Calculated safely for local seismic zones in Islamabad, Lahore, and Peshawar with lab-tested steel.</p>
                  </div>
                </div>
                <div className="principle-row">
                  <CheckCircle2 size={16} className="gold-icon flex-shrink" />
                  <div>
                    <h4 className="principle-name font-serif">Turn-Key Accountability</h4>
                    <p className="principle-text">Single-window responsibility from foundational excavation to final key handover.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="narrative-media-col">
              <div className="narrative-frame">
                <img 
                  src="/images/architect-vs-engineer.jpg" 
                  alt="Architectural space planning meets structural engineering" 
                  className="narrative-img"
                />
                <div className="narrative-caption">
                  <span className="cap-title font-serif">Architect + Structural Engineer</span>
                  <span className="cap-sub">Aesthetic Open Space Engineered With High-Load Seismic Safety</span>
                </div>
              </div>

              {/* Minimal Metrics Strip */}
              <div className="metrics-strip-card">
                <div className="m-block">
                  <span className="m-val font-serif">20+</span>
                  <span className="m-lbl">Years in Business</span>
                </div>
                <div className="m-sep" />
                <div className="m-block">
                  <span className="m-val font-serif">250+</span>
                  <span className="m-lbl">Completed Villas</span>
                </div>
                <div className="m-sep" />
                <div className="m-block">
                  <span className="m-val font-serif">3</span>
                  <span className="m-lbl">Regional Hubs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Footer Action */}
      <section className="about-action-section">
        <div className="container">
          <div className="about-action-panel">
            <div>
              <h3 className="action-title font-serif">Ready to build with structural confidence?</h3>
              <p className="action-sub">
                Connect directly with our regional engineering desks in Islamabad, Lahore, or Peshawar.
              </p>
            </div>
            <div className="action-btns">
              <button 
                className="btn btn-primary"
                onClick={() => {
                  setActivePage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <span>Request Free Consultation</span>
                <ArrowRight size={15} />
              </button>
              <a 
                href="tel:+923345092939"
                className="btn btn-secondary"
              >
                <span>Call Central Office: +92-334-5092939</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .about-hero-section {
          padding: 70px 0 40px;
          background: #0d0f14;
          border-bottom: 1px solid var(--border-subtle);
        }
        .about-page-title {
          font-size: clamp(2rem, 3.8vw, 3.2rem);
          color: var(--text-pure);
          margin-bottom: 12px;
        }
        .about-page-subtitle {
          font-size: 1.05rem;
          color: var(--text-muted);
          max-width: 680px;
          line-height: 1.6;
        }
        .narrative-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 60px;
          align-items: center;
        }
        @media (max-width: 960px) {
          .narrative-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
        .quote-box {
          font-size: 1.15rem;
          line-height: 1.6;
          color: #dfb987;
          border-left: 2px solid #dfb987;
          padding-left: 20px;
          margin: 20px 0 24px;
          background: rgba(197, 154, 99, 0.05);
          padding: 16px 20px;
          border-radius: 0 var(--radius-xs) var(--radius-xs) 0;
        }
        .narrative-p {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 28px;
        }
        .principles-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .principle-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }
        .principle-name {
          font-size: 1rem;
          color: var(--text-pure);
          margin-bottom: 3px;
        }
        .principle-text {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.5;
        }
        .narrative-frame {
          position: relative;
          border-radius: var(--radius-sm);
          overflow: hidden;
          border: 1px solid var(--border-gold, rgba(197, 154, 99, 0.35));
          margin-bottom: 24px;
        }
        .narrative-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }
        .narrative-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 14px 18px;
          background: rgba(11, 13, 18, 0.88);
          backdrop-filter: blur(8px);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .cap-title {
          display: block;
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-pure);
        }
        .cap-sub {
          display: block;
          font-size: 0.75rem;
          color: #dfb987;
          margin-top: 2px;
        }
        .metrics-strip-card {
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 20px;
          background: #11141c;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
        }
        .m-block {
          text-align: center;
        }
        .m-val {
          font-size: 1.8rem;
          font-weight: 700;
          color: #dfb987;
          line-height: 1;
        }
        .m-lbl {
          font-size: 0.7rem;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-top: 4px;
        }
        .m-sep {
          width: 1px;
          height: 32px;
          background: var(--border-subtle);
        }
        .about-action-section {
          padding: 20px 0 60px;
        }
        .about-action-panel {
          padding: 44px;
          background: #11141c;
          border: 1px solid rgba(197, 154, 99, 0.35);
          border-radius: var(--radius-sm);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 28px;
          flex-wrap: wrap;
        }
        .action-title {
          font-size: clamp(1.4rem, 2.3vw, 1.9rem);
          color: var(--text-pure);
          margin-bottom: 6px;
        }
        .action-sub {
          font-size: 0.95rem;
          color: var(--text-muted);
          max-width: 580px;
        }
        .action-btns {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .gold-icon {
          color: #dfb987;
        }
        .flex-shrink {
          flex-shrink: 0;
        }
      `}</style>
    </div>
  );
}
