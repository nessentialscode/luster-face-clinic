import React from 'react';

export const PersonalizedCareSection: React.FC = () => {
  return (
    <section
      style={{
        backgroundColor: '#FFFFFF',
        paddingTop: 'clamp(3.5rem, 7vw, 6.5rem)',
        paddingBottom: 'clamp(3.5rem, 7vw, 6.5rem)',
      }}
    >
      <div className="container">
        {/* Split Header */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
            marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
          }}
          className="personalized-header-grid"
        >
          <div>
            <span className="section-label">PERSONALIZED CARE</span>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 3.4vw, 2.9rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                lineHeight: 1.12,
                textTransform: 'uppercase',
                color: 'var(--color-text-main)',
              }}
            >
              CUSTOMIZED SKIN &<br />
              BESPOKE CARE
            </h2>
          </div>

          <div style={{ maxWidth: '580px' }}>
            <p
              style={{
                fontSize: 'clamp(0.92rem, 1.1vw, 1.05rem)',
                lineHeight: 1.8,
                color: 'var(--color-text-muted)',
              }}
            >
              Every face is uniquely crafted, and every skin profile requires personalized clinical calibration. At Luster Face Clinic, our approach begins with attentive diagnosis, high-resolution dermatological evaluation, and a transparent conversation regarding your aspirations.
            </p>
            <p
              style={{
                fontSize: 'clamp(0.88rem, 1vw, 0.98rem)',
                lineHeight: 1.8,
                color: 'var(--color-text-muted)',
                marginTop: '1rem',
              }}
            >
              From non-invasive facial rejuvenation to advanced laser care and aesthetic dental enhancements, your bespoke protocol is mapped for natural balance and lasting dermal vitality.
            </p>
          </div>
        </div>

        {/* Wide Photographic Banner */}
        <div
          style={{
            width: '100%',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            backgroundColor: 'var(--color-bg-warm)',
            boxShadow: '0 16px 40px rgba(0, 0, 0, 0.05)',
          }}
        >
          <img
            src="/assets/personalized-banner.png"
            alt="Customized Skin and Personalized Care - Luster Face Clinic"
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '520px',
              objectFit: 'cover',
              display: 'block',
            }}
            loading="lazy"
          />
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .personalized-header-grid {
            grid-template-columns: 1.1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
