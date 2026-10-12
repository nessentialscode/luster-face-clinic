import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Validation
    if (!formData.firstName.trim()) {
      setErrorMessage('Please enter your first name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 10) {
      setErrorMessage('Please enter a valid 10-digit Indian phone number.');
      return;
    }
    if (formData.email && !formData.email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setFormStatus('submitting');

    // Simulate reliable enquiry dispatch
    setTimeout(() => {
      setFormStatus('success');
    }, 800);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Luster Face Clinic, I would like to enquire about treatments.\n\nName: ${formData.firstName} ${formData.lastName}\nPhone: ${formData.phone}\nMessage: ${formData.message || 'Consultation enquiry'}`
    );
    window.open(`https://wa.me/917356196707?text=${text}`, '_blank');
  };

  return (
    <section
      id="contact"
      style={{
        backgroundColor: '#FFFFFF',
        paddingTop: 'clamp(3.5rem, 7vw, 6.5rem)',
        paddingBottom: 'clamp(3.5rem, 7vw, 6.5rem)',
      }}
    >
      <div className="container">
        {/* Section Heading */}
        <div style={{ marginBottom: '2.5rem' }}>
          <span className="section-label">GET IN TOUCH</span>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 3.4vw, 2.9rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              color: 'var(--color-text-main)',
            }}
          >
            CONTACT
          </h2>
          <p
            style={{
              fontSize: '0.95rem',
              color: 'var(--color-text-muted)',
              marginTop: '0.5rem',
              maxWidth: '560px',
            }}
          >
            Schedule a personalized consultation with our clinical specialists. We respond to all patient enquiries promptly.
          </p>
        </div>

        {/* Minimal Clean Contact Form Matching OFINO Reference */}
        <form onSubmit={handleSubmit} style={{ marginBottom: '3.5rem' }}>
          {errorMessage && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#FEF2F2',
                color: '#991B1B',
                padding: '0.85rem 1.25rem',
                borderRadius: 'var(--radius-sm)',
                marginBottom: '1.5rem',
                fontSize: '0.86rem',
              }}
            >
              <AlertCircle size={18} />
              <span>{errorMessage}</span>
            </div>
          )}

          {formStatus === 'success' ? (
            <div
              style={{
                backgroundColor: '#F0FDF4',
                border: '1px solid #BBF7D0',
                padding: '2.5rem',
                borderRadius: 'var(--radius-lg)',
                textAlign: 'center',
                marginBottom: '2rem',
              }}
            >
              <CheckCircle2 size={42} color="#16A34A" style={{ margin: '0 auto 1rem auto' }} />
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  color: '#166534',
                  marginBottom: '0.5rem',
                }}
              >
                Thank You, {formData.firstName}!
              </h3>
              <p style={{ color: '#14532D', fontSize: '0.92rem', maxWidth: '480px', margin: '0 auto 1.5rem auto' }}>
                Your enquiry has been received. Our clinical coordinator will call you back on <strong>{formData.phone}</strong> to confirm your slot.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="btn btn-champagne"
                  style={{ gap: '0.6rem' }}
                >
                  <MessageCircle size={16} />
                  <span>Connect Instantly via WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setFormStatus('idle');
                    setFormData({ firstName: '', lastName: '', phone: '', email: '', message: '' });
                  }}
                  className="btn btn-outline"
                >
                  Send Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem',
              }}
              className="contact-form-grid"
            >
              {/* Left Column: First Name, Last Name, Phone, Email */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                  <div>
                    <label
                      htmlFor="firstName"
                      style={{
                        display: 'block',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: 'var(--color-text-main)',
                        marginBottom: '0.5rem',
                      }}
                    >
                      Name *
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="Enter name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.85rem 0',
                        border: 'none',
                        borderBottom: '1.5px solid var(--color-border)',
                        backgroundColor: 'transparent',
                        fontSize: '0.92rem',
                        color: 'var(--color-text-main)',
                        outline: 'none',
                        transition: 'border-color 0.2s ease',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--color-text-main)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      style={{
                        display: 'block',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: 'var(--color-text-main)',
                        marginBottom: '0.5rem',
                      }}
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Enter last name"
                      value={formData.lastName}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.85rem 0',
                        border: 'none',
                        borderBottom: '1.5px solid var(--color-border)',
                        backgroundColor: 'transparent',
                        fontSize: '0.92rem',
                        color: 'var(--color-text-main)',
                        outline: 'none',
                        transition: 'border-color 0.2s ease',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--color-text-main)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                  <div>
                    <label
                      htmlFor="phone"
                      style={{
                        display: 'block',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: 'var(--color-text-main)',
                        marginBottom: '0.5rem',
                      }}
                    >
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="073561 96707"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.85rem 0',
                        border: 'none',
                        borderBottom: '1.5px solid var(--color-border)',
                        backgroundColor: 'transparent',
                        fontSize: '0.92rem',
                        color: 'var(--color-text-main)',
                        outline: 'none',
                        transition: 'border-color 0.2s ease',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--color-text-main)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      style={{
                        display: 'block',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: 'var(--color-text-main)',
                        marginBottom: '0.5rem',
                      }}
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter email"
                      value={formData.email}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.85rem 0',
                        border: 'none',
                        borderBottom: '1.5px solid var(--color-border)',
                        backgroundColor: 'transparent',
                        fontSize: '0.92rem',
                        color: 'var(--color-text-main)',
                        outline: 'none',
                        transition: 'border-color 0.2s ease',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--color-text-main)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Your Message & Send Button */}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <label
                    htmlFor="message"
                    style={{
                      display: 'block',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      color: 'var(--color-text-main)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Enter message"
                    value={formData.message}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.85rem 0',
                      border: 'none',
                      borderBottom: '1.5px solid var(--color-border)',
                      backgroundColor: 'transparent',
                      fontSize: '0.92rem',
                      color: 'var(--color-text-main)',
                      outline: 'none',
                      resize: 'none',
                      transition: 'border-color 0.2s ease',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--color-text-main)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
                  />
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginTop: '2rem',
                  }}
                >
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="btn btn-champagne"
                    style={{
                      padding: '0.85rem 2.5rem',
                      fontSize: '0.88rem',
                      minWidth: '130px',
                    }}
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Send'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </form>

        {/* Location Map & Fast Contact Strip */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            backgroundColor: 'var(--color-bg-warm)',
            boxShadow: '0 12px 36px rgba(0, 0, 0, 0.04)',
          }}
        >
          {/* High-Key Reference Map Banner */}
          <div style={{ position: 'relative', width: '100%', height: '320px' }}>
            <img
              src="/assets/reference-map.png"
              alt="Luster Face Clinic Valayamkulam Location Map"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'grayscale(15%) contrast(102%)',
              }}
              loading="lazy"
            />

            {/* Overlay Pin with Verified Clinic Address */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'rgba(255, 255, 255, 0.96)',
                backdropFilter: 'blur(10px)',
                padding: '1.25rem 1.65rem',
                borderRadius: 'var(--radius-lg)',
                boxShadow: '0 16px 40px rgba(0, 0, 0, 0.12)',
                border: '1px solid var(--color-border)',
                textAlign: 'center',
                maxWidth: '90%',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', marginBottom: '0.35rem' }}>
                <MapPin size={18} color="var(--color-accent-champagne-dark)" />
                <h4
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    color: 'var(--color-text-main)',
                  }}
                >
                  Luster Face Clinic
                </h4>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '0.95rem' }}>
                KVM Complex, Thrissur–Kunnamkulam Road, Valayamkulam, Kerala 679591
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href="https://maps.google.com/?q=Luster+Face+Clinic+KVM+Complex+Valayamkulam+Kerala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-champagne"
                  style={{ padding: '0.5rem 1.15rem', fontSize: '0.74rem' }}
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight size={13} />
                </a>
                <a
                  href="tel:07356196707"
                  className="btn btn-outline"
                  style={{ padding: '0.5rem 1.15rem', fontSize: '0.74rem', backgroundColor: '#FFFFFF' }}
                >
                  <Phone size={13} />
                  <span>Call: 073561 96707</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
