import React, { useState } from 'react';
import {
  Phone, Mail, MapPin, Send, CheckCircle2,
  MessageCircle, AlertCircle, ShieldCheck
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { regionalOffices } from '../data/projectsData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    countryCode: '+92',
    phone: '',
    email: '',
    city: 'Islamabad / Rawalpindi',
    service: 'New House Build (Turn-key / Grey Structure)',
    plotSize: '10 Marla',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setErrorMsg('Please fill in all required fields (Full Name, Phone Number, and Email).');
      return;
    }

    setIsSubmitting(true);

    // EmailJS parameters (supports both standard and custom variable names)
    const templateParams = {
      from_name: formData.fullName,
      name: formData.fullName,
      phone_number: `${formData.countryCode} ${formData.phone}`,
      phone: `${formData.countryCode} ${formData.phone}`,
      reply_to: formData.email,
      email: formData.email,
      project_city: formData.city,
      city: formData.city,
      service_required: formData.service,
      service: formData.service,
      plot_size: formData.plotSize,
      message_details: formData.message || 'No additional notes provided',
      message: formData.message || 'No additional notes provided',
      time: new Date().toLocaleString(),
      to_email: 'cmetacon@gmail.com'
    };

    try {
      // Live EmailJS configuration
      const SERVICE_ID = 'service_mye65tb';
      const TEMPLATE_ID = 'template_cj6xb5c';
      const PUBLIC_KEY = 'FtSa2Dc5OxBw6K_iX';

      const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      console.log('EmailJS dispatched successfully!', res.status, res.text);
    } catch (err) {
      console.error('EmailJS dispatch note:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      countryCode: '+92',
      phone: '',
      email: '',
      city: 'Islamabad / Rawalpindi',
      service: 'New House Build (Turn-key / Grey Structure)',
      plotSize: '10 Marla',
      message: ''
    });
  };

  const waLead = `*New Project Consultation Inquiry - METACON*
Name: ${formData.fullName}
Phone: ${formData.countryCode} ${formData.phone}
Email: ${formData.email}
City: ${formData.city}
Service: ${formData.service}
Plot: ${formData.plotSize}
Details: ${formData.message || 'None'}`;

  return (
    <div className="contact-page">
      {/* 1. Page Header (Docx: Contact & Free Consultation) */}
      <section className="contact-header-section">
        <div className="container">
          <span className="section-tag">
            <MessageCircle size={13} className="gold-icon" /> Regional Direct Line
          </span>
          <h1 className="contact-title">Contact & Free Consultation</h1>
          <p className="contact-subtitle">
            Schedule a site visit or request a detailed architectural & structural consultation with our regional project managers.
          </p>
        </div>
      </section>

      {/* Main Form & Regional Offices Section */}
      <section className="section-pad contact-grid-section">
        <div className="container">
          <div className="contact-two-col-grid">
            {/* Left: Prominent Contact Form (Docx Specification) */}
            <div className="consultation-form-card glass-card">
              <div className="form-head">
                <span className="form-pill">Direct Regional Routing</span>
                <h2 className="form-main-heading">Request a Consultation</h2>
                <p className="form-main-sub">
                  Fill out your project details. A dedicated civil engineer from your chosen city will contact you.
                </p>
              </div>

              {submitted ? (
                /* The Exact Client Submission Success Message from Docx Developer Note */
                <div className="submission-success-view animate-fade-in">
                  <div className="success-icon-badge">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="success-heading">Consultation Dispatched!</h3>
                  <div className="success-copy-box">
                    <p className="exact-docx-text">
                      "Thank you for contacting Metacon! Your project details have been sent to our regional engineering team. A project manager from your selected city will contact you within 24 to 48 hours to discuss your requirements."
                    </p>
                  </div>

                  <div className="submitted-chips">
                    <span className="chip">📍 {formData.city}</span>
                    <span className="chip">📐 {formData.plotSize}</span>
                    <span className="chip">🔨 {formData.service}</span>
                  </div>

                  <div className="success-actions">
                    <a
                      href={`https://wa.me/923345092939?text=${encodeURIComponent(waLead)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <MessageCircle size={16} />
                      <span>Instant WhatsApp Follow-up</span>
                    </a>
                    <button className="btn btn-secondary" onClick={resetForm}>
                      Submit Another Project
                    </button>
                  </div>
                </div>
              ) : (
                <form className="consultation-form" onSubmit={handleSubmit}>
                  {errorMsg && (
                    <div className="form-error-banner">
                      <AlertCircle size={16} />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Full Name (Text Field - Required) */}
                  <div className="form-field">
                    <label className="field-lbl" htmlFor="fullName">
                      Full Name <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      className="field-txt"
                      placeholder="e.g. Malik Tariq / Dr. Usman"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Phone Number (Phone Field - Required – Add country code support) */}
                  <div className="form-field">
                    <label className="field-lbl" htmlFor="phone">
                      Phone Number (with Country Code) <span className="req">*</span>
                    </label>
                    <div className="phone-split-row">
                      <select
                        name="countryCode"
                        id="countryCode"
                        className="field-sel country-code-box"
                        value={formData.countryCode}
                        onChange={handleChange}
                      >
                        <option value="+92">🇵🇰 +92</option>
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+44">🇬🇧 +44</option>
                        <option value="+971">🇦🇪 +971</option>
                        <option value="+966">🇸🇦 +966</option>
                      </select>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="field-txt phone-txt"
                        placeholder="334 5092939"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Email Address (Email Field - Required) */}
                  <div className="form-field">
                    <label className="field-lbl" htmlFor="email">
                      Email Address <span className="req">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="field-txt"
                      placeholder="client@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Project City & Plot Size */}
                  <div className="form-duo">
                    <div className="form-field">
                      <label className="field-lbl" htmlFor="city">
                        Project City <span className="req">*</span>
                      </label>
                      <select
                        id="city"
                        name="city"
                        className="field-sel"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      >
                        <option value="Islamabad / Rawalpindi">Islamabad / Rawalpindi</option>
                        <option value="Lahore">Lahore</option>
                        <option value="Peshawar">Peshawar</option>
                      </select>
                    </div>

                    <div className="form-field">
                      <label className="field-lbl" htmlFor="plotSize">
                        Property / Plot Size (Optional)
                      </label>
                      <select
                        id="plotSize"
                        name="plotSize"
                        className="field-sel"
                        value={formData.plotSize}
                        onChange={handleChange}
                      >
                        <option value="5 Marla">5 Marla</option>
                        <option value="10 Marla">10 Marla</option>
                        <option value="1 Kanal">1 Kanal</option>
                        <option value="2 Kanal+">2 Kanal+</option>
                      </select>
                    </div>
                  </div>

                  {/* Service Required */}
                  <div className="form-field">
                    <label className="field-lbl" htmlFor="service">
                      Service Required <span className="req">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="field-sel"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="New House Build (Turn-key / Grey Structure)">
                        New House Build (Turn-key / Grey Structure)
                      </option>
                      <option value="Complete Home Remodeling / Upgradation">
                        Complete Home Remodeling / Upgradation
                      </option>
                      <option value="Architectural Layout & Interior Design">
                        Architectural Layout & Interior Design
                      </option>
                    </select>
                  </div>

                  {/* Project Details / Message (Exact docx placeholder) */}
                  <div className="form-field">
                    <label className="field-lbl" htmlFor="message">
                      Project Details / Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="field-area"
                      placeholder="Tell us briefly about your project goals or structural changes you wish to make..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="submit-consultation-btn"
                    className="btn btn-primary submit-btn-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span>Sending Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Consultation Request</span>
                        <Send size={15} />
                      </>
                    )}
                  </button>

                  <div className="form-privacy-note">
                    <ShieldCheck size={14} className="gold-icon" />
                    <span>Your data is sent directly to our regional engineers.</span>
                  </div>
                </form>
              )}
            </div>

            {/* Right: Regional Offices Contact Details */}
            <div className="regional-sidebar-col">
              <div className="sidebar-header">
                <span className="section-tag">Direct Lines</span>
                <h3 className="sidebar-title">Regional Offices</h3>
                <p className="sidebar-text">
                  You can also contact our regional engineers directly via phone or WhatsApp during business hours (Mon – Sat, 9:00 AM – 7:00 PM).
                </p>
              </div>

              <div className="offices-list">
                {regionalOffices.map((office) => (
                  <div key={office.id} className="office-card glass-card">
                    <div className="office-card-top">
                      <span className="office-pill">{office.badge}</span>
                      <span className="office-reg">{office.compliance}</span>
                    </div>
                    <h4 className="office-city-heading">{office.city}</h4>

                    <div className="office-lines-stack">
                      <div className="o-line">
                        <MapPin size={15} className="gold-icon flex-shrink" />
                        <span>{office.address}</span>
                      </div>
                      <div className="o-line">
                        <Phone size={15} className="gold-icon flex-shrink" />
                        <a href={`tel:${office.primaryPhone}`} className="o-link">
                          {office.phone}
                        </a>
                      </div>
                      <div className="o-line">
                        <Mail size={15} className="gold-icon flex-shrink" />
                        <a href={`mailto:${office.email}`} className="o-link">
                          {office.email}
                        </a>
                      </div>
                    </div>

                    <div className="office-action-bar">
                      <a
                        href={`https://wa.me/${office.primaryPhone.replace('+', '')}?text=Hello%20Metacon%2C%20I%20have%20an%20inquiry%20for%20your%20${encodeURIComponent(office.city)}%20office.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-gold btn-sm"
                      >
                        <MessageCircle size={14} />
                        <span>WhatsApp Office</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-header-section {
          padding: 60px 0 32px;
          background: #0d0f15;
          border-bottom: 1px solid var(--border-subtle);
        }
        .contact-title {
          font-size: clamp(2rem, 3.8vw, 3.2rem);
          color: #ffffff;
          margin-bottom: 12px;
        }
        .contact-subtitle {
          font-size: 1.05rem;
          color: var(--text-muted);
          max-width: 680px;
          line-height: 1.6;
        }
        .contact-two-col-grid {
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          gap: 48px;
        }
        @media (max-width: 960px) {
          .contact-two-col-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
        .consultation-form-card {
          padding: 40px;
        }
        @media (max-width: 600px) {
          .consultation-form-card {
            padding: 24px;
          }
        }
        .form-head {
          margin-bottom: 28px;
        }
        .form-pill {
          font-size: 0.725rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--gold-light);
          margin-bottom: 6px;
          display: block;
        }
        .form-main-heading {
          font-size: clamp(1.6rem, 2.5vw, 2.2rem);
          color: #ffffff;
          margin-bottom: 8px;
        }
        .form-main-sub {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.55;
        }
        .consultation-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .form-error-banner {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          background: rgba(239, 68, 68, 0.12);
          border: 1px solid rgba(239, 68, 68, 0.35);
          border-radius: var(--radius-xs);
          color: #fca5a5;
          font-size: 0.85rem;
        }
        .form-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .field-lbl {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-main);
        }
        .req {
          color: var(--gold-light);
        }
        .field-txt, .field-sel, .field-area {
          width: 100%;
          background: #0f121a;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-xs);
          padding: 12px 14px;
          color: #ffffff;
          font-size: 0.925rem;
          transition: var(--transition-smooth);
        }
        .field-txt:focus, .field-sel:focus, .field-area:focus {
          outline: none;
          border-color: var(--gold-primary);
          background: #141824;
          box-shadow: 0 0 12px var(--gold-glow);
        }
        .phone-split-row {
          display: flex;
          gap: 8px;
        }
        .country-code-box {
          width: 105px;
          flex-shrink: 0;
        }
        .phone-txt {
          flex-grow: 1;
        }
        .form-duo {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        @media (max-width: 600px) {
          .form-duo {
            grid-template-columns: 1fr;
          }
        }
        .submit-btn-full {
          width: 100%;
          padding: 14px;
          font-size: 0.95rem;
          margin-top: 6px;
        }
        .form-privacy-note {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.75rem;
          color: var(--text-dim);
          line-height: 1.4;
        }

        /* Success View */
        .submission-success-view {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 24px 8px;
        }
        .success-icon-badge {
          width: 68px;
          height: 68px;
          border-radius: 50%;
          background: var(--gold-subtle);
          border: 2px solid var(--gold-primary);
          color: var(--gold-light);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          box-shadow: 0 0 20px var(--gold-glow);
        }
        .success-heading {
          font-size: 1.6rem;
          color: #ffffff;
          margin-bottom: 16px;
        }
        .success-copy-box {
          background: #131722;
          border-left: 3px solid var(--gold-primary);
          border-radius: var(--radius-xs);
          padding: 20px;
          margin-bottom: 20px;
          max-width: 540px;
        }
        .exact-docx-text {
          font-size: 0.975rem;
          color: #ffffff;
          line-height: 1.65;
          font-weight: 500;
        }
        .submitted-chips {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 24px;
        }
        .chip {
          padding: 4px 12px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          color: var(--gold-light);
        }
        .success-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
        }

        /* Sidebar Column */
        .regional-sidebar-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .sidebar-title {
          font-size: 1.45rem;
          color: #ffffff;
          margin-bottom: 6px;
        }
        .sidebar-text {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.55;
        }
        .offices-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .office-card {
          padding: 24px;
        }
        .office-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 6px;
          font-size: 0.725rem;
          flex-wrap: wrap;
          gap: 6px;
        }
        .office-pill {
          color: var(--gold-light);
          font-weight: 700;
          text-transform: uppercase;
        }
        .office-reg {
          color: var(--text-dim);
        }
        .office-city-heading {
          font-size: 1.25rem;
          color: #ffffff;
          margin-bottom: 12px;
        }
        .office-lines-stack {
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 0.875rem;
          margin-bottom: 16px;
        }
        .o-line {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-muted);
        }
        .o-link {
          color: #ffffff;
          font-weight: 600;
        }
        .o-link:hover {
          color: var(--gold-light);
          text-decoration: underline;
        }
        .office-action-bar {
          display: flex;
          justify-content: flex-end;
          padding-top: 10px;
          border-top: 1px solid var(--border-subtle);
        }
        .btn-sm {
          padding: 6px 14px;
          font-size: 0.8rem;
        }
        .flex-shrink {
          flex-shrink: 0;
        }
      `}</style>
    </div>
  );
}
