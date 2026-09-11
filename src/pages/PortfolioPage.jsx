import React, { useState } from 'react';
import { 
  Building, Wrench, Sparkles, MapPin, 
  Layers, ExternalLink, ArrowRight 
} from 'lucide-react';
import { portfolioCategories, portfolioProjects } from '../data/projectsData';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

export default function PortfolioPage({ setActivePage, setProjectForModal }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === selectedCategory);

  const newBuilds = portfolioProjects.filter((p) => p.category === 'new-builds');
  const remodeling = portfolioProjects.filter((p) => p.category === 'remodeling');
  const interiors = portfolioProjects.filter((p) => p.category === 'interiors');

  return (
    <div className="portfolio-page">
      {/* 1. Header (Docx: Our Design & Construction Portfolio) */}
      <section className="portfolio-hero-section">
        <div className="container">
          <span className="section-tag">Project Showcase</span>
          <h1 className="portfolio-page-title font-serif">Our Design & Construction Portfolio</h1>
          <p className="portfolio-page-subtitle">
            A showcase of our architectural concepts, turn-key structural executions, and premium home transformations across Pakistan.
          </p>

          {/* Clean Category Filter Tabs */}
          <div className="category-tabs-bar">
            {portfolioCategories.map((cat) => (
              <button
                key={cat.id}
                id={`filter-btn-${cat.id}`}
                className={`tab-filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <span>{cat.name}</span>
                <span className="tab-count">
                  {cat.id === 'all' 
                    ? portfolioProjects.length 
                    : portfolioProjects.filter(p => p.category === cat.id).length}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY 1: TURN-KEY NEW RESIDENTIAL BUILDS (Docx) */}
      {(selectedCategory === 'all' || selectedCategory === 'new-builds') && (
        <section className="section-pad category-section">
          <div className="container">
            <div className="category-heading-pane">
              <span className="section-tag">Category 1</span>
              <h2 className="section-title">New House Construction & Structural Execution</h2>
              <p className="section-subtitle">
                From initial excavation and solid grey structures to final premium finishes, we deliver complete turn-key houses built strictly according to modern engineering standards and local development authority regulations.
              </p>
            </div>

            <div className="portfolio-cards-grid">
              {newBuilds.map((project) => (
                <div 
                  key={project.id}
                  className="portfolio-card"
                  onClick={() => setProjectForModal(project)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="card-media-box">
                    <img src={project.image} alt={project.title} className="card-img" />
                    <div className="media-badge">
                      <Layers size={12} className="gold-icon" /> 3D Elevation & Layout
                    </div>
                    <div className="hover-indicator">
                      <span>Inspect Drawings & Specifications</span>
                      <ExternalLink size={14} />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="body-top">
                      <span className="spec-badge-pill">{project.size}</span>
                      <span className="year-text">{project.completionYear}</span>
                    </div>
                    <h3 className="card-heading font-serif">{project.title}</h3>
                    <p className="card-excerpt">{project.description}</p>
                    <div className="card-tags">
                      <span className="t-pill">{project.scope}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CATEGORY 2: RESIDENTIAL REMODELING & EXTENSIONS (Docx Side-by-Side) */}
      {(selectedCategory === 'all' || selectedCategory === 'remodeling') && (
        <section className="section-pad category-section">
          <div className="container">
            <div className="category-heading-pane">
              <span className="section-tag">Category 2</span>
              <h2 className="section-title">Residential Remodeling & Structural Upgradations</h2>
              <p className="section-subtitle">
                Breathing new life into existing houses. This category showcases our expertise in structural expansion, adding second storeys, open-plan structural alterations, and complete exterior facade face-lifts.
              </p>
            </div>

            {/* Side-by-Side Sliders Layout with Regenerated Full Images (No Locations) */}
            <div className="remodeling-sliders-grid">
              <BeforeAfterSlider 
                beforeImage="/images/remodel-openplan-before.jpg"
                afterImage="/images/remodel-openplan-after.jpg"
                title="Ground Floor Open Plan & Structural Alteration"
                aspectRatio="16 / 10"
              />
              <BeforeAfterSlider 
                beforeImage="/images/remodel-warehouse-before.jpg"
                afterImage="/images/remodel-warehouse-after.jpg"
                title="Industrial Warehouse to Luxury Residence Conversion"
                aspectRatio="16 / 10"
              />
            </div>
          </div>
        </section>
      )}

      {/* CATEGORY 3: BESPOKE INTERIOR DESIGN & LUXURY STYLING (Docx Category 3) */}
      {(selectedCategory === 'all' || selectedCategory === 'interiors') && (
        <section className="section-pad category-section">
          <div className="container">
            <div className="category-heading-pane">
              <span className="section-tag">Category 3</span>
              <h2 className="section-title">Bespoke Interior Design & Luxury Styling</h2>
              <p className="section-subtitle">
                Crafting interior spaces that balance aesthetics with daily functionality. We focus on premium media walls, custom-engineered kitchens, luxury walk-in closets, and modern false ceiling designs.
              </p>
            </div>

            <div className="portfolio-cards-grid">
              {interiors.map((project) => (
                <div 
                  key={project.id}
                  className="portfolio-card"
                  onClick={() => setProjectForModal(project)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="card-media-box">
                    <img src={project.image} alt={project.title} className="card-img" />
                    <div className="media-badge">
                      <Sparkles size={12} className="gold-icon" /> Luxury Interior
                    </div>
                    <div className="hover-indicator">
                      <span>Inspect Lighting & Materials</span>
                      <ExternalLink size={14} />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="body-top">
                      <span className="spec-badge-pill">{project.size}</span>
                      <span className="year-text">{project.completionYear}</span>
                    </div>
                    <h3 className="card-heading font-serif">{project.title}</h3>
                    <p className="card-excerpt">{project.description}</p>
                    <div className="card-tags">
                      <span className="t-pill">{project.scope}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pre-Footer Action */}
      <section className="portfolio-cta-section">
        <div className="container">
          <div className="portfolio-cta-panel">
            <div>
              <h3 className="cta-panel-title font-serif">Have a specific architectural vision in mind?</h3>
              <p className="cta-panel-sub">
                Whether constructing a 10 Marla villa or executing a structural extension in Islamabad, Lahore, or Peshawar, our team provides transparent BOQs.
              </p>
            </div>
            <button 
              className="btn btn-primary"
              onClick={() => {
                setActivePage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span>Schedule Engineering Consultation</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      <style>{`
        .portfolio-hero-section {
          padding: 70px 0 40px;
          background: #0d0f14;
          border-bottom: 1px solid var(--border-subtle);
        }
        .portfolio-page-title {
          font-size: clamp(2rem, 3.8vw, 3.2rem);
          color: var(--text-pure);
          margin-bottom: 12px;
        }
        .portfolio-page-subtitle {
          font-size: 1.05rem;
          color: var(--text-muted);
          max-width: 680px;
          line-height: 1.6;
          margin-bottom: 28px;
        }
        .category-tabs-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }
        .tab-filter-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-xs);
          color: var(--text-muted);
          font-size: 0.825rem;
          font-weight: 600;
          transition: var(--transition-fast);
        }
        .tab-filter-btn:hover {
          color: var(--text-pure);
          border-color: var(--border-bronze);
        }
        .tab-filter-btn.active {
          background: var(--bronze-subtle);
          border-color: var(--bronze-primary);
          color: var(--bronze-light);
        }
        .tab-count {
          padding: 1px 6px;
          border-radius: var(--radius-xs);
          background: rgba(255, 255, 255, 0.06);
          font-size: 0.725rem;
        }
        .tab-filter-btn.active .tab-count {
          background: var(--bronze-primary);
          color: #0b0d12;
        }
        .category-heading-pane {
          margin-bottom: 36px;
        }
        .portfolio-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        @media (max-width: 1024px) {
          .portfolio-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .portfolio-cards-grid {
            grid-template-columns: 1fr;
          }
        }
        .portfolio-card {
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          overflow: hidden;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          transition: var(--transition-smooth);
        }
        .portfolio-card:hover {
          border-color: var(--border-bronze);
          transform: translateY(-3px);
        }
        .card-media-box {
          position: relative;
          height: 280px;
          background: #090a0d;
          overflow: hidden;
        }
        .card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .portfolio-card:hover .card-img {
          transform: scale(1.05);
        }
        .media-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          padding: 3px 10px;
          background: rgba(13, 15, 20, 0.85);
          backdrop-filter: blur(4px);
          border: 1px solid var(--border-bronze);
          border-radius: var(--radius-xs);
          font-size: 0.6875rem;
          color: var(--bronze-light);
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .hover-indicator {
          position: absolute;
          inset: 0;
          background: rgba(13, 15, 20, 0.65);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: #ffffff;
          font-size: 0.825rem;
          font-weight: 600;
          opacity: 0;
          transition: opacity 0.25s ease;
        }
        .portfolio-card:hover .hover-indicator {
          opacity: 1;
        }
        .card-body {
          padding: 22px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          flex-grow: 1;
        }
        .body-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.75rem;
          margin-bottom: 2px;
        }
        .spec-badge-pill {
          color: #dfb987;
          font-weight: 700;
          font-size: 0.76rem;
          letter-spacing: 0.03em;
        }
        .year-text {
          color: var(--text-dim);
          font-size: 0.72rem;
          font-weight: 600;
        }
        .card-heading {
          font-size: 1.15rem;
          color: var(--text-pure);
          line-height: 1.25;
        }
        .card-excerpt {
          font-size: 0.825rem;
          color: var(--text-muted);
          line-height: 1.55;
        }
        .card-tags {
          display: flex;
          gap: 6px;
          margin-top: auto;
          padding-top: 14px;
          flex-wrap: wrap;
        }
        .t-pill {
          padding: 2px 8px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-xs);
          font-size: 0.7rem;
          color: #cbd5e1;
        }
        .remodeling-sliders-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }
        @media (max-width: 960px) {
          .remodeling-sliders-grid {
            grid-template-columns: 1fr;
          }
        }
        .portfolio-cta-section {
          padding: 20px 0 60px;
        }
        .portfolio-cta-panel {
          padding: 44px;
          background: #11141c;
          border: 1px solid var(--border-bronze);
          border-radius: var(--radius-sm);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 28px;
          flex-wrap: wrap;
        }
        .cta-panel-title {
          font-size: clamp(1.4rem, 2.3vw, 1.9rem);
          color: var(--text-pure);
          margin-bottom: 6px;
        }
        .cta-panel-sub {
          font-size: 0.95rem;
          color: var(--text-muted);
          max-width: 600px;
        }
      `}</style>
    </div>
  );
}
