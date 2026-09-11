import React from 'react';
import { X, MapPin, Calendar, Check, ArrowRight, Layers, ShieldCheck } from 'lucide-react';

export default function LightboxModal({ project, onClose, onInquire }) {
  if (!project) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close-btn" onClick={onClose} aria-label="Close">
          <X size={22} />
        </button>

        <div className="lightbox-grid">
          {/* Left: Project Image & Architectural Plan */}
          <div className="lightbox-image-pane">
            <img 
              src={project.image} 
              alt={project.title} 
              className="lightbox-main-img" 
            />
            {project.blueprint && (
              <div className="blueprint-tag">
                <Layers size={14} className="gold-icon" />
                <span>Includes Full Structural 3D Architectural Blueprint</span>
              </div>
            )}
          </div>

          {/* Right: Specifications & Details */}
          <div className="lightbox-info-pane">
            <span className="lightbox-category-tag">
              {project.category === 'new-builds' && 'Turn-Key Residential Build'}
              {project.category === 'remodeling' && 'Residential Remodeling & Extension'}
              {project.category === 'interiors' && 'Bespoke Interior & Luxury Styling'}
            </span>

            <h2 className="lightbox-title">{project.title}</h2>

            <div className="lightbox-meta-row">
              {project.location ? (
                <div className="meta-item">
                  <MapPin size={16} className="gold-icon" />
                  <span>{project.location}</span>
                </div>
              ) : (
                <div className="meta-item">
                  <ShieldCheck size={16} className="gold-icon" />
                  <span>Verified Structural Quality</span>
                </div>
              )}
              {project.completionYear && (
                <div className="meta-item">
                  <Calendar size={16} className="gold-icon" />
                  <span>Handover: {project.completionYear}</span>
                </div>
              )}
            </div>

            {project.size && (
              <div className="lightbox-spec-box">
                <span className="spec-label">Plot / Area:</span>
                <span className="spec-val">{project.size}</span>
                <span className="spec-divider">•</span>
                <span className="spec-label">Scope:</span>
                <span className="spec-val">{project.scope}</span>
              </div>
            )}

            <p className="lightbox-description">
              {project.description}
            </p>

            {project.highlights && (
              <div className="lightbox-highlights">
                <h4 className="highlights-heading">Engineering & Material Specs:</h4>
                <div className="highlights-tags">
                  {project.highlights.map((item, idx) => (
                    <span key={idx} className="highlight-pill">
                      <Check size={12} className="gold-icon" /> {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="lightbox-cta-bar">
              <button 
                className="btn btn-primary"
                onClick={() => {
                  onClose();
                  if (onInquire) onInquire(project);
                }}
              >
                <span>Inquire About Similar Build</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .lightbox-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(4, 6, 9, 0.9);
          backdrop-filter: blur(12px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: fadeIn 0.3s ease;
        }
        .lightbox-modal-content {
          background: #11151f;
          border: 1px solid var(--gold-border);
          border-radius: var(--radius-lg);
          max-width: 1050px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8);
        }
        .lightbox-close-btn {
          position: absolute;
          top: 18px;
          right: 18px;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          color: var(--text-pure);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          transition: var(--transition-smooth);
        }
        .lightbox-close-btn:hover {
          background: var(--gold-primary);
          color: #0c0e14;
        }
        .lightbox-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
        }
        @media (max-width: 860px) {
          .lightbox-grid {
            grid-template-columns: 1fr;
          }
        }
        .lightbox-image-pane {
          background: #090b10;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .lightbox-main-img {
          width: 100%;
          height: 100%;
          max-height: 540px;
          object-fit: cover;
        }
        .blueprint-tag {
          position: absolute;
          bottom: 16px;
          left: 16px;
          right: 16px;
          padding: 8px 14px;
          background: rgba(10, 13, 19, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid var(--gold-border);
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          color: var(--gold-light);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .lightbox-info-pane {
          padding: 40px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        @media (max-width: 600px) {
          .lightbox-info-pane {
            padding: 24px;
          }
        }
        .lightbox-category-tag {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--gold-light);
          letter-spacing: 0.08em;
        }
        .lightbox-title {
          font-size: clamp(1.4rem, 2vw, 1.8rem);
          color: var(--text-pure);
          line-height: 1.25;
        }
        .lightbox-meta-row {
          display: flex;
          gap: 18px;
          font-size: 0.875rem;
          color: var(--text-muted);
          flex-wrap: wrap;
        }
        .meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .lightbox-spec-box {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          padding: 10px 14px;
          border-radius: var(--radius-sm);
          font-size: 0.8125rem;
          display: flex;
          gap: 8px;
          align-items: center;
          flex-wrap: wrap;
        }
        .spec-label {
          color: var(--text-dim);
          font-weight: 600;
        }
        .spec-val {
          color: var(--gold-light);
          font-weight: 700;
        }
        .spec-divider {
          color: var(--border-medium);
        }
        .lightbox-description {
          font-size: 0.9375rem;
          color: var(--text-muted);
          line-height: 1.6;
        }
        .lightbox-highlights {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .highlights-heading {
          font-size: 0.8125rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-pure);
        }
        .highlights-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .highlight-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          background: rgba(197, 154, 99, 0.08);
          border: 1px solid rgba(197, 154, 99, 0.25);
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          color: var(--text-main);
        }
        .lightbox-cta-bar {
          margin-top: 12px;
          padding-top: 16px;
          border-top: 1px solid var(--border-subtle);
        }
        .lightbox-cta-bar .btn {
          width: 100%;
        }
      `}</style>
    </div>
  );
}
