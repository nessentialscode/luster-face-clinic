import React, { useState } from 'react';
import { MessageCircle, Phone, MapPin, ArrowUp, Mail, Send, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [emailInput, setEmailInput] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setEmailSent(true);
      setTimeout(() => setEmailSent(false), 4500);
      setEmailInput('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-footer-bg)',
        color: 'var(--color-footer-text)',
        paddingTop: 'clamp(3.5rem, 6vw, 5rem)',
        paddingBottom: 'clamp(2rem, 4vw, 3rem)',
        borderTop: '1px solid #1A1A1A',
      }}
    >
      <div className="container">
        {/* Main Footer Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            gap: 'clamp(2rem, 3.5vw, 3rem)',
            marginBottom: 'clamp(3rem, 5vw, 4.5rem)',
            alignItems: 'start',
          }}
          className="footer-grid"
        >
          {/* Col 1: Wordmark */}
          <div>
            <a href="#home" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '1rem' }}>
              <img
                src="/assets/luster-logo.png"
                alt="Luster Face Clinic"
                style={{
                  height: '48px',
                  width: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </a>
            <p
              style={{
                fontSize: '0.78rem',
                color: '#8A857F',
                lineHeight: 1.6,
                maxWidth: '260px',
                marginBottom: '1.25rem',
              }}
            >
              Aesthetic facial transformations and specialized dental care. Tailored with scientific precision in Valayamkulam, Kerala.
            </p>
          </div>

          {/* Col 2: Hours */}
          <div>
            <h4
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                marginBottom: '1.1rem',
              }}
            >
              HOURS
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.82rem', color: '#9E9B97' }}>
              <p>Monday – Saturday: 9am – 8pm</p>
              <p>Sunday: Closed</p>
              <p style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: 'var(--color-accent-champagne)' }}>
                Emergency Consultations by Appointment
              </p>
            </div>
          </div>

          {/* Col 3: Address & Phone */}
          <div>
            <h4
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                marginBottom: '1.1rem',
              }}
            >
              ADDRESS
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.82rem', color: '#9E9B97' }}>
              <p>KVM Complex, Thrissur–Kunnamkulam Rd</p>
              <p>Valayamkulam, Kerala 679591</p>
              <p>India</p>
              <a
                href="tel:07356196707"
                style={{
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  fontWeight: 600,
                  marginTop: '0.4rem',
                }}
              >
                073561 96707 / 073565 76707
              </a>
              <a
                href="https://maps.google.com/?q=Luster+Face+Clinic+KVM+Complex+Valayamkulam+Kerala"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--color-accent-champagne)',
                  textDecoration: 'underline',
                  fontSize: '0.78rem',
                  marginTop: '0.2rem',
                }}
              >
                Get Directions
              </a>
            </div>
          </div>

          {/* Col 4: Mail Section */}
          <div>
            <h4
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                marginBottom: '1.1rem',
              }}
            >
              EMAIL US
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', fontSize: '0.82rem' }}>
              <a
                href="mailto:contact@lusterfaceclinic.com"
                style={{
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent-champagne)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#FFFFFF')}
              >
                <Mail size={15} color="var(--color-accent-champagne)" />
                <span>contact@lusterfaceclinic.com</span>
              </a>
              <a
                href="mailto:lusterfaceclinic@gmail.com"
                style={{
                  color: '#9E9B97',
                  textDecoration: 'none',
                  fontSize: '0.78rem',
                  transition: 'color 0.2s ease',
                  paddingLeft: '23px',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#9E9B97')}
              >
                lusterfaceclinic@gmail.com
              </a>
              <p style={{ fontSize: '0.74rem', color: '#7E7A75', marginTop: '0.25rem', lineHeight: 1.5 }}>
                Direct consultation requests, case documentation & general enquiries.
              </p>

              {/* Quick Footer Email Form */}
              <form onSubmit={handleEmailSubmit} style={{ marginTop: '0.4rem' }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Enter email to enquire"
                    required
                    style={{
                      backgroundColor: '#1E1E1E',
                      border: '1px solid #333333',
                      borderRadius: '9999px',
                      padding: '0.48rem 0.9rem',
                      fontSize: '0.74rem',
                      color: '#FFFFFF',
                      outline: 'none',
                      width: '100%',
                      minWidth: '0',
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      backgroundColor: '#A38765',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '9999px',
                      padding: '0.48rem 0.95rem',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <span>Send</span>
                    <Send size={11} />
                  </button>
                </div>
                {emailSent && (
                  <p style={{ color: '#22C55E', fontSize: '0.72rem', marginTop: '0.4rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Check size={12} /> Enquiry sent! Our clinical team will reply promptly.
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Col 5: Navigation */}
          <div>
            <h4
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                marginBottom: '1.1rem',
              }}
            >
              NAVIGATION
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {[
                { label: 'HOME', href: '#home' },
                { label: 'FACIAL', href: '#facial' },
                { label: 'DOCTORS', href: '#doctors' },
                { label: 'BRANCHES', href: '#branches' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  style={{
                    color: '#9E9B97',
                    textDecoration: 'none',
                    fontSize: '0.76rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#9E9B97')}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Circular Social Badges */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '2rem',
            borderTop: '1px solid #181818',
            flexWrap: 'wrap',
            gap: '1.25rem',
          }}
        >
          <div style={{ fontSize: '0.74rem', color: '#6A6764' }}>
            © {new Date().getFullYear()} Luster Face Clinic. All rights reserved. • Valayamkulam, Kerala
          </div>

          {/* Social Badges matching reference bottom right */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <a
              href="https://www.instagram.com/luster_dental_facial_clinic"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'rgba(185, 167, 134, 0.9)',
                color: '#111111',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'var(--transition-smooth)',
              }}
              className="social-badge"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>

            <a
              href="https://wa.me/917356196707?text=Hello%20Luster%20Face%20Clinic,%20I%20would%20like%20to%20enquire%20about%20treatments"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: '#1E1E1E',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'var(--transition-smooth)',
              }}
              className="social-badge"
            >
              <MessageCircle size={15} />
            </a>

            <a
              href="tel:07356196707"
              aria-label="Call Clinic"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: '#1E1E1E',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'var(--transition-smooth)',
              }}
              className="social-badge"
            >
              <Phone size={14} />
            </a>

            <a
              href="mailto:contact@lusterfaceclinic.com"
              aria-label="Send Email"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: '#1E1E1E',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'var(--transition-smooth)',
              }}
              className="social-badge"
            >
              <Mail size={14} />
            </a>

            <a
              href="https://maps.google.com/?q=Luster+Face+Clinic+KVM+Complex+Valayamkulam+Kerala"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Maps Location"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: '#1E1E1E',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'var(--transition-smooth)',
              }}
              className="social-badge"
            >
              <MapPin size={14} />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'transparent',
                border: '1px solid #333333',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                marginLeft: '0.5rem',
                transition: 'var(--transition-smooth)',
              }}
              className="social-badge"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .social-badge:hover {
          transform: translateY(-2px);
          background-color: var(--color-accent-champagne) !important;
          color: #FFFFFF !important;
        }
      `}</style>
    </footer>
  );
};
