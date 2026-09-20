import React from 'react';
import { 
  Sparkles, Coffee, Compass, Ruler, Users, 
  CheckCircle2, ArrowRight, Phone, Eye, ShieldCheck, 
  Layers, MessageSquare, SunMedium, LayoutGrid, Hammer,
  Check
} from 'lucide-react';

export default function AboutPage({ setActivePage }) {
  const handleConsultation = () => {
    setActivePage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="about-page">
      {/* 1. Page Header (ABOUT US) */}
      <section className="about-header-section">
        <div className="container text-center">
          <span className="section-tag animate-fade-in">
            <Sparkles size={13} className="gold-icon" /> The Team Behind Metacon
          </span>
          <h1 className="about-hero-title animate-fade-in delay-1 font-serif">
            ABOUT US
          </h1>
          <p className="about-hero-subtitle animate-fade-in delay-2">
            Three partners bringing together architecture, structural engineering, remodeling, and interiors to create spaces that are built properly and designed to be lived in.
          </p>
        </div>
      </section>

      {/* 2. Full-Width WOW Feature Image of the 3 Partners */}
      <section className="about-media-feature-section">
        <div className="container-wide">
          <div className="cinematic-portrait-frame">
            <img 
              src="/images/about-partners.jpg" 
              alt="The three partners of Metacon around the meeting table" 
              className="cinematic-portrait-img"
            />
            <div className="portrait-vignette-overlay" />
            
            {/* Top Glass Badge */}
            <div className="portrait-floating-badge">
              <span className="live-status-dot" />
              <span>Founders &amp; Managing Partners</span>
            </div>

            {/* Bottom Info Bar Overlay */}
            <div className="portrait-bottom-bar">
              <div className="portrait-bar-content">
                <div className="portrait-meta-left">
                  <span className="p-brand-tag font-serif">METACON LEADERSHIP</span>
                  <p className="p-brand-desc">Three Perspectives · Architecture · Engineering · Construction Execution</p>
                </div>
                <div className="portrait-meta-right">
                  <span className="p-pill">Islamabad</span>
                  <span className="p-pill">Lahore</span>
                  <span className="p-pill">Peshawar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Manifesto / Hook Section */}
      <section className="about-manifesto-section section-pad">
        <div className="container">
          <div className="manifesto-card glass-card">
            <div className="manifesto-header">
              <span className="manifesto-mini-label">
                <Coffee size={14} className="gold-icon" /> Our Core Perspective
              </span>
              <h2 className="manifesto-bold-headline font-serif">
                WE KNOW CONCRETE. WE KNOW GOOD COFFEE. <br className="hidden-mobile" />
                <span className="text-gold-gradient">WE KNOW A BAD FLOOR PLAN WHEN WE SEE ONE.</span>
              </h2>
            </div>

            <div className="manifesto-body-grid">
              <div className="manifesto-lead-col">
                <p className="manifesto-lead-p">
                  We’re three partners who decided that construction could be done a little differently. Less unnecessary complication, more good design, better execution, and considerably fewer conversations that start with, <span className="text-highlight">“But the contractor said…”</span> Welcome to Metacon.
                </p>
                <div className="manifesto-quote-pill">
                  <p>
                    We’re a construction and design company bringing together architecture, construction, remodeling, and interiors to create spaces that are built properly and designed to be lived in.
                  </p>
                </div>
              </div>

              {/* 4 Pillars Strip */}
              <div className="pillars-side-grid">
                <div className="pillar-mini-item">
                  <div className="pillar-num font-serif">01</div>
                  <div>
                    <h4 className="pillar-title">Architecture</h4>
                    <p className="pillar-desc">Visionary space planning, natural light, and structural harmony.</p>
                  </div>
                </div>
                <div className="pillar-mini-item">
                  <div className="pillar-num font-serif">02</div>
                  <div>
                    <h4 className="pillar-title">Construction</h4>
                    <p className="pillar-desc">Ground-up engineering, lab-tested concrete, and rock-solid grey structures.</p>
                  </div>
                </div>
                <div className="pillar-mini-item">
                  <div className="pillar-num font-serif">03</div>
                  <div>
                    <h4 className="pillar-title">Remodeling</h4>
                    <p className="pillar-desc">Transforming outdated floor plans into modern, high-value spaces.</p>
                  </div>
                </div>
                <div className="pillar-mini-item">
                  <div className="pillar-num font-serif">04</div>
                  <div>
                    <h4 className="pillar-title">Interiors</h4>
                    <p className="pillar-desc">Bespoke joinery, tailored lighting, and lived-in warmth.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Philosophy: Buildings with Personality & Good Execution */}
      <section className="about-editorial-section section-pad-subtle">
        <div className="container">
          <div className="editorial-cards-grid">
            {/* Card 1: Buildings with Personality */}
            <div className="editorial-card glass-card">
              <div className="editorial-badge-row">
                <span className="editorial-tag">
                  <Sparkles size={13} className="gold-icon" /> Space Philosophy
                </span>
              </div>
              <h3 className="editorial-card-title font-serif">
                WE LIKE BUILDINGS WITH PERSONALITY.
              </h3>
              <p className="editorial-p">
                A building shouldn't just stand there looking expensive. It should work. It should feel right, make sense, and, ideally, shouldn't require an instruction manual to figure out where the light switches are. That’s where we come in.
              </p>
              <p className="editorial-p">
                We combine creative thinking with practical construction knowledge to develop spaces that balance aesthetics, functionality, comfort, and structural integrity.
              </p>

              <div className="balance-chips-row">
                <span className="balance-chip"><Check size={13} /> Aesthetics</span>
                <span className="balance-chip"><Check size={13} /> Functionality</span>
                <span className="balance-chip"><Check size={13} /> Comfort</span>
                <span className="balance-chip"><Check size={13} /> Structural Integrity</span>
              </div>
            </div>

            {/* Card 2: Good Ideas Deserve Good Execution */}
            <div className="editorial-card glass-card highlighted-border">
              <div className="editorial-badge-row">
                <span className="editorial-tag gold">
                  <Hammer size={13} className="gold-icon" /> Execution Standards
                </span>
              </div>
              <h3 className="editorial-card-title font-serif">
                GOOD IDEAS DESERVE GOOD EXECUTION.
              </h3>
              <p className="editorial-p">
                Anyone can make a beautiful 3D render. Making it look that good in real life? That's where things get interesting.
              </p>
              <p className="editorial-p">
                Our team works through the details from planning and design to construction and finishing, keeping an eye on the things that are easy to overlook but impossible to ignore later.
              </p>

              <div className="witty-punchline-box">
                <div className="punchline-accent-bar" />
                <p className="punchline-text font-serif">
                  “Because changing a colour is easy. Moving a wall after it's built? Not so much.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Details Matter Section */}
      <section className="about-details-section section-pad">
        <div className="container">
          <div className="details-header-block text-center">
            <span className="section-tag">
              <Ruler size={13} className="gold-icon" /> Obsession with Precision
            </span>
            <h2 className="section-title font-serif">
              WE BELIEVE DETAILS MATTER.
            </h2>
            <p className="details-lead-text">
              The proportions of a room, the way sunlight enters it, where the furniture sits, how materials work together, and how a space feels when you walk into it — these aren't small things. They're what turn a building into a place people actually enjoy being in.
            </p>
          </div>

          <div className="details-features-grid">
            <div className="detail-item-box glass-card">
              <div className="detail-icon-wrap">
                <LayoutGrid size={22} className="gold-icon" />
              </div>
              <h4 className="detail-box-title font-serif">Room Proportions</h4>
              <p className="detail-box-desc">
                Balancing ceiling heights, wall spans, and visual sightlines for effortless balance.
              </p>
            </div>

            <div className="detail-item-box glass-card">
              <div className="detail-icon-wrap">
                <SunMedium size={22} className="gold-icon" />
              </div>
              <h4 className="detail-box-title font-serif">Sunlight Paths</h4>
              <p className="detail-box-desc">
                Maximizing daylight angles, morning rays, and energy-conscious illumination.
              </p>
            </div>

            <div className="detail-item-box glass-card">
              <div className="detail-icon-wrap">
                <Layers size={22} className="gold-icon" />
              </div>
              <h4 className="detail-box-title font-serif">Furniture Flow</h4>
              <p className="detail-box-desc">
                Designing floor plans that welcome natural movement without cramped bottlenecks.
              </p>
            </div>

            <div className="detail-item-box glass-card">
              <div className="detail-icon-wrap">
                <Compass size={22} className="gold-icon" />
              </div>
              <h4 className="detail-box-title font-serif">Material Harmony</h4>
              <p className="detail-box-desc">
                Curating stone, warm woods, glass, and steel that age gracefully side by side.
              </p>
            </div>
          </div>

          {/* Witty Precision Alert Banner */}
          <div className="precision-banner-alert">
            <div className="precision-badge">
              <Ruler size={16} className="gold-icon" />
              <span>THE 2MM RULE</span>
            </div>
            <p className="precision-banner-text font-serif">
              “And yes, we will probably notice if your door is two millimetres off.”
            </p>
          </div>
        </div>
      </section>

      {/* 6. Three Partners. One Metacon. */}
      <section className="about-synergy-section section-pad-subtle">
        <div className="container">
          <div className="synergy-layout">
            <div className="synergy-headline-col">
              <span className="section-tag">
                <Users size={13} className="gold-icon" /> Collaborative Power
              </span>
              <h2 className="section-title font-serif">
                THREE PARTNERS. <br />
                <span className="text-gold-gradient">ONE METACON.</span>
              </h2>
              <p className="synergy-desc">
                Three partners means three perspectives, plenty of discussion, and occasionally a completely unnecessary debate about something nobody else would notice. But it also means ideas get challenged, solutions get improved, and decisions get made with more than one point of view.
              </p>
              <div className="synergy-highlight font-editorial">
                “We believe the best work happens when design, engineering, construction, and creativity aren't working in separate corners. They work together.”
              </div>
            </div>

            <div className="synergy-cards-col">
              <div className="synergy-pillar-card glass-card">
                <div className="synergy-card-top">
                  <span className="pillar-num font-serif">01</span>
                  <span className="pillar-label">Architectural Vision</span>
                </div>
                <h4 className="synergy-card-heading font-serif">Design &amp; Space Planning</h4>
                <p className="synergy-card-p">
                  Focusing on human flow, bold geometry, aesthetic longevity, and how a space feels upon first step.
                </p>
              </div>

              <div className="synergy-pillar-card glass-card">
                <div className="synergy-card-top">
                  <span className="pillar-num font-serif">02</span>
                  <span className="pillar-label">Engineering Rigor</span>
                </div>
                <h4 className="synergy-card-heading font-serif">Structural &amp; Seismic Safety</h4>
                <p className="synergy-card-p">
                  Validating load calculations, reinforcement detailing, and material strengths so your home lasts generations.
                </p>
              </div>

              <div className="synergy-pillar-card glass-card">
                <div className="synergy-card-top">
                  <span className="pillar-num font-serif">03</span>
                  <span className="pillar-label">On-Site Execution</span>
                </div>
                <h4 className="synergy-card-heading font-serif">Craftsmanship &amp; Turnkey Management</h4>
                <p className="synergy-card-p">
                  Daily on-site oversight, timeline adherence, zero shortcuts, and uncompromising finishing quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Culture & Anti-Jargon Communication */}
      <section className="about-culture-section section-pad">
        <div className="container">
          <div className="culture-banner glass-card">
            <div className="culture-header text-center">
              <span className="section-tag">
                <MessageSquare size={13} className="gold-icon" /> Transparent Collaboration
              </span>
              <h2 className="culture-title font-serif">
                WE TAKE THE WORK SERIOUSLY. <br />
                <span className="text-gold-gradient">WE JUST DON'T THINK WE HAVE TO SOUND SERIOUS ALL THE TIME.</span>
              </h2>
              <p className="culture-subtitle">
                Construction is a serious investment. Your experience with the people building your project shouldn't feel like a court hearing.
              </p>
            </div>

            <div className="culture-commitments-grid">
              <div className="commitment-card">
                <div className="c-icon-badge">
                  <CheckCircle2 size={18} className="gold-icon" />
                </div>
                <h4 className="c-title font-serif">Straightforward Talk</h4>
                <p className="c-desc">
                  No complicated jargon for the sake of sounding clever. We explain every engineering decision in clear, practical terms.
                </p>
              </div>

              <div className="commitment-card">
                <div className="c-icon-badge">
                  <Eye size={18} className="gold-icon" />
                </div>
                <h4 className="c-title font-serif">Stay Involved</h4>
                <p className="c-desc">
                  We stay hands-on from soil excavation to finishing keys. You work directly with the partners, not detached subcontractors.
                </p>
              </div>

              <div className="commitment-card">
                <div className="c-icon-badge">
                  <Hammer size={18} className="gold-icon" />
                </div>
                <h4 className="c-title font-serif">Real-Time Problem Solving</h4>
                <p className="c-desc">
                  Construction throws surprises. We confront challenges upfront, formulate engineered solutions, and keep the build moving.
                </p>
              </div>

              <div className="commitment-card">
                <div className="c-icon-badge">
                  <ShieldCheck size={18} className="gold-icon" />
                </div>
                <h4 className="c-title font-serif">100% Accountability</h4>
                <p className="c-desc">
                  No disappearing when things get difficult. And definitely no “that's someone else's problem.” We take full ownership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Scope: From First Idea to Final Touch */}
      <section className="about-scope-section section-pad-subtle">
        <div className="container">
          <div className="scope-header-box text-center">
            <span className="section-tag">
              <Compass size={13} className="gold-icon" /> Complete Lifecycle
            </span>
            <h2 className="section-title font-serif">
              FROM FIRST IDEA TO FINAL TOUCH.
            </h2>
            <p className="section-subtitle mx-auto">
              Whether it’s a new home, a commercial project, a renovation, or a complete interior transformation, we focus on creating something that feels considered from beginning to end.
            </p>
          </div>

          <div className="scope-cards-grid">
            <div className="scope-card glass-card">
              <h4 className="scope-card-title font-serif">New Homes &amp; Villas</h4>
              <p className="scope-card-text">Turnkey 10 Marla, 1 Kanal, and multi-acre estates engineered for life.</p>
            </div>
            <div className="scope-card glass-card">
              <h4 className="scope-card-title font-serif">Commercial Projects</h4>
              <p className="scope-card-text">Corporate headquarters, retail storefronts, and functional workspaces.</p>
            </div>
            <div className="scope-card glass-card">
              <h4 className="scope-card-title font-serif">Structural Renovations</h4>
              <p className="scope-card-text">Complete remodeling, load-bearing beam removal, and layout modernizations.</p>
            </div>
            <div className="scope-card glass-card">
              <h4 className="scope-card-title font-serif">Interior Transformations</h4>
              <p className="scope-card-text">Curated bespoke woodwork, luxury lighting, and tailored residential luxury.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Grand Climax Banner & Call to Action */}
      <section className="about-climax-cta-section section-pad">
        <div className="container">
          <div className="climax-cta-panel">
            <div className="climax-quote-container text-center">
              <span className="climax-pretitle font-serif">THE METACON CONVICTION</span>
              <h2 className="climax-main-quote font-serif">
                BECAUSE A GOOD BUILDING ISN'T JUST SOMETHING YOU LOOK AT.
                <span className="climax-golden-line">IT'S SOMETHING YOU LIVE IN.</span>
              </h2>
            </div>

            <div className="climax-cta-bottom">
              <div className="cta-left-text">
                <h3 className="cta-action-h font-serif">Ready to talk through your project?</h3>
                <p className="cta-action-p">
                  Schedule a direct conversation with the Metacon partners in Islamabad, Lahore, or Peshawar.
                </p>
              </div>
              <div className="cta-action-buttons">
                <button 
                  className="btn btn-primary"
                  onClick={handleConsultation}
                >
                  <span>Start a Conversation</span>
                  <ArrowRight size={16} />
                </button>
                <a 
                  href="tel:+923345092939"
                  className="btn btn-secondary"
                >
                  <Phone size={15} className="gold-icon" />
                  <span>Call +92-334-5092939</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Styles Scoped to About Us Page */}
      <style>{`
        .about-page {
          background-color: var(--bg-primary);
          overflow-x: hidden;
        }

        .section-pad-subtle {
          padding-top: 50px;
          padding-bottom: 50px;
        }

        .container-wide {
          width: 100%;
          max-width: 1360px;
          margin: 0 auto;
          padding: 0 24px;
        }

        @media (max-width: 640px) {
          .container-wide {
            padding: 0 16px;
          }
        }

        /* 1. Header */
        .about-header-section {
          padding: 80px 0 36px;
          background: linear-gradient(180deg, rgba(16, 19, 27, 0.6) 0%, rgba(10, 12, 17, 1) 100%);
          text-align: center;
        }

        .about-hero-title {
          font-size: clamp(2.5rem, 5vw, 4.2rem);
          color: var(--text-pure);
          letter-spacing: 0.08em;
          margin-bottom: 16px;
          font-weight: 300;
        }

        .about-hero-subtitle {
          font-size: clamp(1rem, 1.3vw, 1.2rem);
          color: var(--text-muted);
          max-width: 780px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* 2. Full-Width WOW Feature Image */
        .about-media-feature-section {
          padding: 10px 0 40px;
        }

        .cinematic-portrait-frame {
          position: relative;
          width: 100%;
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 1px solid var(--border-gold);
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.7), 0 0 40px rgba(197, 154, 99, 0.12);
          background: #0d0f15;
          aspect-ratio: 16 / 9;
          max-height: 680px;
        }

        @media (max-width: 768px) {
          .cinematic-portrait-frame {
            aspect-ratio: 4 / 3;
            max-height: 520px;
          }
        }

        .cinematic-portrait-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 20%;
          display: block;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cinematic-portrait-frame:hover .cinematic-portrait-img {
          transform: scale(1.02);
        }

        .portrait-vignette-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg, 
            rgba(10, 12, 17, 0.15) 0%, 
            rgba(10, 12, 17, 0.05) 50%, 
            rgba(10, 12, 17, 0.85) 100%
          );
          pointer-events: none;
        }

        .portrait-floating-badge {
          position: absolute;
          top: 24px;
          left: 24px;
          background: rgba(13, 16, 23, 0.82);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(197, 154, 99, 0.4);
          padding: 8px 18px;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-pure);
          letter-spacing: 0.04em;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
        }

        .live-status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #dfb987;
          box-shadow: 0 0 10px #dfb987;
          animation: pulseGold 2s infinite;
        }

        @keyframes pulseGold {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }

        .portrait-bottom-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 24px 32px;
          background: linear-gradient(180deg, transparent 0%, rgba(10, 12, 17, 0.95) 100%);
          backdrop-filter: blur(4px);
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .portrait-bar-content {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          flex-wrap: wrap;
          gap: 16px;
        }

        .p-brand-tag {
          font-size: 0.95rem;
          letter-spacing: 0.12em;
          color: var(--gold-light);
          display: block;
          margin-bottom: 2px;
        }

        .p-brand-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
          margin: 0;
        }

        .portrait-meta-right {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .p-pill {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 5px 12px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: var(--radius-full);
          color: var(--text-pure);
        }

        @media (max-width: 640px) {
          .portrait-bottom-bar {
            padding: 16px 18px;
          }
          .portrait-floating-badge {
            top: 16px;
            left: 16px;
            font-size: 0.75rem;
          }
        }

        /* 3. Manifesto Section */
        .manifesto-card {
          padding: 48px;
          background: #11141c;
          border: 1px solid rgba(197, 154, 99, 0.35);
          position: relative;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .manifesto-card {
            padding: 28px 20px;
          }
        }

        .manifesto-mini-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--gold-light);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .manifesto-bold-headline {
          font-size: clamp(1.6rem, 3.2vw, 2.6rem);
          line-height: 1.25;
          color: var(--text-pure);
          font-weight: 350;
          margin-bottom: 32px;
        }

        .manifesto-body-grid {
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          gap: 48px;
          align-items: center;
        }

        @media (max-width: 960px) {
          .manifesto-body-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }

        .manifesto-lead-p {
          font-size: 1.05rem;
          color: var(--text-main);
          line-height: 1.8;
          margin-bottom: 24px;
        }

        .text-highlight {
          color: var(--gold-light);
          font-weight: 500;
        }

        .manifesto-quote-pill {
          padding: 20px 24px;
          background: rgba(197, 154, 99, 0.08);
          border-left: 3px solid var(--gold-primary);
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
          font-size: 1.02rem;
          line-height: 1.65;
          color: #f1f5f9;
        }

        .pillars-side-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        @media (max-width: 580px) {
          .pillars-side-grid {
            grid-template-columns: 1fr;
          }
        }

        .pillar-mini-item {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          padding: 16px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          transition: var(--transition-smooth);
        }

        .pillar-mini-item:hover {
          border-color: var(--border-gold);
          background: rgba(197, 154, 99, 0.04);
          transform: translateY(-2px);
        }

        .pillar-num {
          font-size: 1.25rem;
          font-weight: 300;
          color: var(--gold-light);
          line-height: 1;
        }

        .pillar-title {
          font-size: 0.95rem;
          color: var(--text-pure);
          margin-bottom: 4px;
          font-weight: 500;
        }

        .pillar-desc {
          font-size: 0.78rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin: 0;
        }

        /* 4. Editorial Section */
        .editorial-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }

        @media (max-width: 880px) {
          .editorial-cards-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }

        .editorial-card {
          padding: 38px 34px;
          display: flex;
          flex-direction: column;
        }

        .editorial-card.highlighted-border {
          border-color: rgba(197, 154, 99, 0.4);
        }

        .editorial-badge-row {
          margin-bottom: 18px;
        }

        .editorial-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--gold-light);
          font-weight: 600;
          background: rgba(197, 154, 99, 0.1);
          padding: 4px 12px;
          border-radius: var(--radius-full);
          border: 1px solid rgba(197, 154, 99, 0.25);
        }

        .editorial-card-title {
          font-size: clamp(1.35rem, 2.2vw, 1.8rem);
          color: var(--text-pure);
          line-height: 1.35;
          margin-bottom: 18px;
          font-weight: 350;
        }

        .editorial-p {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.75;
          margin-bottom: 16px;
        }

        .balance-chips-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: auto;
          padding-top: 16px;
        }

        .balance-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          padding: 6px 14px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-full);
          color: var(--text-pure);
        }

        .balance-chip svg {
          color: var(--gold-light);
        }

        .witty-punchline-box {
          margin-top: auto;
          padding: 18px 20px;
          background: rgba(197, 154, 99, 0.08);
          border-radius: var(--radius-sm);
          position: relative;
          border: 1px dashed rgba(197, 154, 99, 0.35);
        }

        .punchline-text {
          font-size: 1.05rem;
          color: var(--gold-light);
          font-style: italic;
          line-height: 1.5;
          margin: 0;
        }

        /* 5. Details Section */
        .details-header-block {
          max-width: 820px;
          margin: 0 auto 48px;
        }

        .details-lead-text {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.8;
          margin-top: 14px;
        }

        .details-features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 32px;
        }

        @media (max-width: 990px) {
          .details-features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 580px) {
          .details-features-grid {
            grid-template-columns: 1fr;
          }
        }

        .detail-item-box {
          padding: 28px 22px;
          text-align: left;
        }

        .detail-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-sm);
          background: rgba(197, 154, 99, 0.1);
          border: 1px solid rgba(197, 154, 99, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }

        .detail-box-title {
          font-size: 1.05rem;
          color: var(--text-pure);
          margin-bottom: 8px;
          font-weight: 400;
        }

        .detail-box-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0;
        }

        .precision-banner-alert {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          padding: 20px 30px;
          background: #11141c;
          border: 1px solid var(--border-gold);
          border-radius: var(--radius-sm);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
          flex-wrap: wrap;
          text-align: center;
        }

        .precision-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(197, 154, 99, 0.15);
          color: var(--gold-light);
          padding: 4px 12px;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
        }

        .precision-banner-text {
          font-size: 1.08rem;
          color: var(--text-pure);
          font-weight: 350;
          letter-spacing: 0.02em;
          margin: 0;
        }

        /* 6. Synergy (Three Partners. One Metacon) */
        .synergy-layout {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 56px;
          align-items: center;
        }

        @media (max-width: 960px) {
          .synergy-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        .synergy-desc {
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.8;
          margin-bottom: 24px;
        }

        .synergy-highlight {
          font-size: 1.15rem;
          color: var(--gold-light);
          border-left: 2px solid var(--gold-primary);
          padding-left: 20px;
          margin-top: 24px;
          line-height: 1.6;
        }

        .synergy-cards-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .synergy-pillar-card {
          padding: 24px 28px;
        }

        .synergy-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .pillar-label {
          font-size: 0.75rem;
          color: var(--gold-light);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 600;
        }

        .synergy-card-heading {
          font-size: 1.15rem;
          color: var(--text-pure);
          margin-bottom: 6px;
          font-weight: 350;
        }

        .synergy-card-p {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0;
        }

        /* 7. Culture Section */
        .culture-banner {
          padding: 56px 48px;
          background: #11141c;
          border: 1px solid var(--border-gold);
        }

        @media (max-width: 768px) {
          .culture-banner {
            padding: 32px 20px;
          }
        }

        .culture-title {
          font-size: clamp(1.5rem, 2.8vw, 2.3rem);
          color: var(--text-pure);
          margin-bottom: 16px;
          font-weight: 350;
          line-height: 1.3;
        }

        .culture-subtitle {
          font-size: 1.05rem;
          color: var(--text-muted);
          max-width: 680px;
          margin: 0 auto 48px;
          line-height: 1.7;
        }

        .culture-commitments-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        @media (max-width: 960px) {
          .culture-commitments-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 580px) {
          .culture-commitments-grid {
            grid-template-columns: 1fr;
          }
        }

        .commitment-card {
          padding: 24px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          transition: var(--transition-smooth);
        }

        .commitment-card:hover {
          border-color: var(--border-gold);
          transform: translateY(-3px);
          background: rgba(197, 154, 99, 0.04);
        }

        .c-icon-badge {
          margin-bottom: 14px;
        }

        .c-title {
          font-size: 1rem;
          color: var(--text-pure);
          margin-bottom: 8px;
          font-weight: 400;
        }

        .c-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0;
        }

        /* 8. Scope Section */
        .scope-header-box {
          margin-bottom: 40px;
        }

        .scope-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        @media (max-width: 990px) {
          .scope-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 580px) {
          .scope-cards-grid {
            grid-template-columns: 1fr;
          }
        }

        .scope-card {
          padding: 28px 24px;
          text-align: left;
        }

        .scope-card-title {
          font-size: 1.1rem;
          color: var(--text-pure);
          margin-bottom: 8px;
          font-weight: 400;
        }

        .scope-card-text {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0;
        }

        /* 9. Climax CTA Section */
        .climax-cta-panel {
          padding: 60px 48px;
          background: linear-gradient(135deg, #10131b 0%, #151a24 100%);
          border: 1px solid var(--border-gold);
          border-radius: var(--radius-md);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
          position: relative;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .climax-cta-panel {
            padding: 36px 20px;
          }
        }

        .climax-pretitle {
          font-size: 0.85rem;
          letter-spacing: 0.18em;
          color: var(--gold-light);
          display: block;
          margin-bottom: 12px;
          font-weight: 500;
        }

        .climax-main-quote {
          font-size: clamp(1.6rem, 3.4vw, 2.7rem);
          color: var(--text-pure);
          line-height: 1.3;
          margin-bottom: 40px;
          font-weight: 300;
        }

        .climax-golden-line {
          display: block;
          margin-top: 6px;
          background: var(--gold-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .climax-cta-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 32px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          gap: 28px;
          flex-wrap: wrap;
        }

        .cta-action-h {
          font-size: 1.35rem;
          color: var(--text-pure);
          margin-bottom: 4px;
          font-weight: 350;
        }

        .cta-action-p {
          font-size: 0.92rem;
          color: var(--text-muted);
          margin: 0;
        }

        .cta-action-buttons {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .gold-icon {
          color: #dfb987;
        }

        .mx-auto {
          margin-left: auto;
          margin-right: auto;
        }

        .text-center {
          text-align: center;
        }

        @media (max-width: 768px) {
          .hidden-mobile {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
