import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    { city: 'Islamabad / Rawalpindi', text: 'Hi Metacon, I have a project inquiry in Islamabad/Rawalpindi.' },
    { city: 'Lahore', text: 'Hi Metacon, I want to discuss a new house build in Lahore.' },
    { city: 'Peshawar', text: 'Hi Metacon, I need construction & remodeling in Peshawar.' },
  ];

  const handleSend = (text) => {
    const url = `https://wa.me/923345092939?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="floating-wa-container">
      {isOpen && (
        <div className="wa-popup-card">
          <div className="wa-popup-header">
            <div className="wa-brand-avatar">
              <MessageCircle size={20} />
            </div>
            <div>
              <h4 className="wa-agent-name">Metacon Engineering Desk</h4>
              <span className="wa-status-text">● Online · Direct WhatsApp</span>
            </div>
            <button className="wa-close-btn" onClick={() => setIsOpen(false)}>
              <X size={18} />
            </button>
          </div>

          <div className="wa-popup-body">
            <p className="wa-greeting">
              Welcome to <strong>METACON</strong>! How can our regional engineering team assist your build or remodeling project today?
            </p>
            <div className="wa-quick-options">
              {quickMessages.map((msg, idx) => (
                <button
                  key={idx}
                  className="wa-quick-btn"
                  onClick={() => handleSend(msg.text)}
                >
                  <Send size={12} className="gold-icon" />
                  <span>{msg.city} Inquiry</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <button 
        className="floating-wa-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp (+92-334-5092939)"
      >
        <MessageCircle size={28} />
        <span className="wa-tooltip">Direct WhatsApp Inquiry</span>
      </button>

      <style>{`
        .floating-wa-container {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 1500;
        }
        .floating-wa-btn {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: #25d366;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.45);
          position: relative;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .floating-wa-btn:hover {
          transform: scale(1.1);
        }
        .wa-tooltip {
          position: absolute;
          right: 70px;
          background: #0f131a;
          color: #ffffff;
          padding: 6px 14px;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          font-weight: 600;
          white-space: nowrap;
          border: 1px solid var(--border-subtle);
          box-shadow: 0 4px 12px rgba(0,0,0,0.5);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s ease;
        }
        .floating-wa-btn:hover .wa-tooltip {
          opacity: 1;
        }
        .wa-popup-card {
          position: absolute;
          bottom: 70px;
          right: 0;
          width: 310px;
          background: #11151f;
          border: 1px solid var(--gold-border);
          border-radius: var(--radius-md);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.7);
          overflow: hidden;
          animation: fadeIn 0.25s ease;
        }
        .wa-popup-header {
          background: #19202c;
          padding: 14px 18px;
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1px solid var(--border-subtle);
        }
        .wa-brand-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #25d366;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .wa-agent-name {
          font-size: 0.875rem;
          color: var(--text-pure);
          font-weight: 700;
        }
        .wa-status-text {
          font-size: 0.6875rem;
          color: #25d366;
          font-weight: 500;
        }
        .wa-close-btn {
          margin-left: auto;
          color: var(--text-muted);
          padding: 4px;
        }
        .wa-popup-body {
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .wa-greeting {
          font-size: 0.8125rem;
          color: var(--text-muted);
          line-height: 1.5;
        }
        .wa-quick-options {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .wa-quick-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          color: var(--text-main);
          font-size: 0.775rem;
          font-weight: 600;
          text-align: left;
          transition: var(--transition-smooth);
        }
        .wa-quick-btn:hover {
          background: var(--gold-subtle-bg);
          border-color: var(--gold-primary);
          color: var(--gold-light);
        }
      `}</style>
    </div>
  );
}
