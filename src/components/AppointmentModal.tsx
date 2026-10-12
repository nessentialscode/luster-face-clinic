import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, MessageCircle } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDoctor?: string;
  initialBranch?: string;
  initialTreatment?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialDoctor = '',
  initialBranch = '',
  initialTreatment = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: initialTreatment || 'HydraFacial & Clinical Glow',
    doctor: initialDoctor || 'Dr. Lijeesh Kadambil (Chief Dental Surgeon)',
    branch: initialBranch || 'Valayamkulam Flagship Clinic',
    date: '',
    time: 'Morning (10:00 AM - 1:00 PM)',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Sync props when modal opens
  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setError('');
      setFormData((prev) => ({
        ...prev,
        doctor: initialDoctor || prev.doctor,
        branch: initialBranch || prev.branch,
        treatment: initialTreatment || prev.treatment,
      }));
      // Lock body scroll
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, initialDoctor, initialBranch, initialTreatment]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setError('Please provide your full name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 10) {
      setError('Please enter a valid 10-digit Indian phone number.');
      return;
    }
    setSubmitted(true);
  };

  const handleWhatsAppConfirmation = () => {
    const message = encodeURIComponent(
      `Hello Luster Face Clinic, I would like to book an appointment.\n\n` +
      `👤 Name: ${formData.name}\n` +
      `📞 Phone: ${formData.phone}\n` +
      `✨ Treatment: ${formData.treatment}\n` +
      `👨‍⚕️ Specialist: ${formData.doctor}\n` +
      `📍 Branch: ${formData.branch}\n` +
      `📅 Preferred Date: ${formData.date || 'Flexible'}\n` +
      `⏰ Preferred Time: ${formData.time}\n` +
      `📝 Notes: ${formData.notes || 'None'}`
    );
    window.open(`https://wa.me/917356196707?text=${message}`, '_blank');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        backdropFilter: 'blur(8px)',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '560px',
          maxHeight: '90vh',
          overflowY: 'auto',
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          padding: 'clamp(1.5rem, 4vw, 2.5rem)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.25)',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            border: '1px solid var(--color-border)',
            backgroundColor: '#F8F6F2',
            color: 'var(--color-text-main)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'var(--transition-smooth)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-text-main)';
            e.currentTarget.style.color = '#FFFFFF';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#F8F6F2';
            e.currentTarget.style.color = 'var(--color-text-main)';
          }}
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <CheckCircle2 size={54} color="#16A34A" style={{ margin: '0 auto 1.25rem auto' }} />
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.5rem',
                fontWeight: 800,
                color: 'var(--color-text-main)',
                marginBottom: '0.5rem',
              }}
            >
              Enquiry Received!
            </h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              Thank you, <strong>{formData.name}</strong>. Your consultation request for <strong>{formData.treatment}</strong> at our <strong>{formData.branch}</strong> has been logged.
            </p>
            <div
              style={{
                backgroundColor: '#F8F6F2',
                padding: '1.25rem',
                borderRadius: '16px',
                textAlign: 'left',
                fontSize: '0.82rem',
                marginBottom: '1.75rem',
                color: 'var(--color-text-main)',
                lineHeight: 1.6,
              }}
            >
              <p><strong>Doctor:</strong> {formData.doctor}</p>
              <p><strong>Date & Slot:</strong> {formData.date || 'To be scheduled'} ({formData.time})</p>
              <p><strong>Phone:</strong> {formData.phone}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button
                onClick={handleWhatsAppConfirmation}
                className="btn btn-champagne"
                style={{ width: '100%', padding: '0.85rem', gap: '0.5rem' }}
              >
                <MessageCircle size={18} />
                <span>Confirm Instantly via WhatsApp</span>
              </button>
              <button
                onClick={onClose}
                className="btn btn-outline"
                style={{ width: '100%', padding: '0.85rem' }}
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <img
                src="/assets/luster-logo.png"
                alt="Luster Face Clinic"
                style={{
                  height: '38px',
                  width: 'auto',
                  objectFit: 'contain',
                  marginBottom: '1rem',
                  display: 'block',
                }}
              />
              <span className="section-label">APPOINTMENT ENQUIRY</span>
              <h2
                id="booking-modal-title"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  color: 'var(--color-text-main)',
                  letterSpacing: '-0.01em',
                }}
              >
                RESERVE YOUR VISIT
              </h2>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.35rem' }}>
                Please share your preferred consultation details. Our team will verify slot availability and confirm your booking.
              </p>
            </div>

            {error && (
              <div
                style={{
                  backgroundColor: '#FEF2F2',
                  color: '#991B1B',
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  fontSize: '0.82rem',
                  marginBottom: '1rem',
                }}
              >
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                    Full Name *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Das"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        borderRadius: '10px',
                        border: '1px solid var(--color-border)',
                        fontSize: '0.85rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="073561 96707"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      borderRadius: '10px',
                      border: '1px solid var(--color-border)',
                      fontSize: '0.85rem',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                    Branch Location
                  </label>
                  <select
                    value={formData.branch}
                    onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      borderRadius: '10px',
                      border: '1px solid var(--color-border)',
                      fontSize: '0.82rem',
                      backgroundColor: '#FFFFFF',
                      outline: 'none',
                    }}
                  >
                    <option value="Valayamkulam Flagship Clinic">Valayamkulam Flagship Clinic</option>
                    <option value="Edappal – Ponnani Aesthetics Wing">Edappal – Ponnani Aesthetics Wing</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                    Preferred Specialist
                  </label>
                  <select
                    value={formData.doctor}
                    onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      borderRadius: '10px',
                      border: '1px solid var(--color-border)',
                      fontSize: '0.82rem',
                      backgroundColor: '#FFFFFF',
                      outline: 'none',
                    }}
                  >
                    <option value="Dr. Lijeesh Kadambil (Chief Dental Surgeon)">Dr. Lijeesh Kadambil (Chief Dental Surgeon)</option>
                    <option value="Dr. Divya Lijeesh (Chief Dental Surgeon)">Dr. Divya Lijeesh (Chief Dental Surgeon)</option>
                    <option value="Dr. Fathima Roosa Fidha (Resident Dental Surgeon)">Dr. Fathima Roosa Fidha (Resident Dental Surgeon)</option>
                    <option value="Dr. Neha K. Nair (Aesthetic Physician)">Dr. Neha K. Nair (Aesthetic Physician)</option>
                    <option value="Dr. Arun Mathew (Facial Specialist)">Dr. Arun Mathew (Facial Specialist)</option>
                    <option value="Dr. Anjali Menon (Dermatologist)">Dr. Anjali Menon (Dermatologist)</option>
                    <option value="Dr. Ashwin Rao (Orthodontist)">Dr. Ashwin Rao (Orthodontist)</option>
                    <option value="Dr. Shreya Pillai (Trichology Consultant)">Dr. Shreya Pillai (Trichology Consultant)</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                  Treatment Category
                </label>
                <select
                  value={formData.treatment}
                  onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '10px',
                    border: '1px solid var(--color-border)',
                    fontSize: '0.82rem',
                    backgroundColor: '#FFFFFF',
                    outline: 'none',
                  }}
                >
                  <option value="Clinical facials treatments">Clinical facials treatments (HydraFacial / Medifacial)</option>
                  <option value="BOTOX® Injections">BOTOX® Injections & Wrinkle Relaxation</option>
                  <option value="Best Dermal Fillers & Sculptra">Dermal Fillers & Sculptra Contouring</option>
                  <option value="Chemical Facials & Peels">Chemical Peels & Radiance Tone Correction</option>
                  <option value="Dental Implants & Oral Surgery">Dental Implants & Nobel Biocare Restorations</option>
                  <option value="Teeth Alignment & Invisible Braces">Clear Aligners & Cosmetic Smile Design</option>
                  <option value="Hair mesotherapy & PRP">Hair Mesotherapy & PRP Hair Regrowth</option>
                  <option value="Body mesotherapy">Body Mesotherapy & Contouring</option>
                  <option value="Intravenous vitamin treatment">Intravenous Vitamin Therapy & Glutathione</option>
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      borderRadius: '10px',
                      border: '1px solid var(--color-border)',
                      fontSize: '0.82rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                    Preferred Time Window
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      borderRadius: '10px',
                      border: '1px solid var(--color-border)',
                      fontSize: '0.82rem',
                      backgroundColor: '#FFFFFF',
                      outline: 'none',
                    }}
                  >
                    <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                    <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                    <option value="Evening (4:00 PM - 7:30 PM)">Evening (4:00 PM - 7:30 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                  Additional Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Any specific aesthetic questions, medical allergies, or concerns..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '10px',
                    border: '1px solid var(--color-border)',
                    fontSize: '0.82rem',
                    outline: 'none',
                    resize: 'none',
                  }}
                />
              </div>

              <div style={{ marginTop: '0.5rem' }}>
                <button
                  type="submit"
                  className="btn btn-champagne"
                  style={{
                    width: '100%',
                    padding: '0.85rem',
                    fontSize: '0.86rem',
                  }}
                >
                  Submit Appointment Enquiry
                </button>
              </div>

              <p style={{ fontSize: '0.7rem', color: 'var(--color-text-subtle)', textAlign: 'center' }}>
                Submitting this form initiates an enquiry. Our reception will contact you to confirm available clinical time slots.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
