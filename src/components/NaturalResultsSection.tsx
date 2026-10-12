import React from 'react';

export const NaturalResultsSection: React.FC = () => {
  return (
    <section
      style={{
        backgroundColor: '#FFFFFF',
        paddingTop: 'clamp(3.5rem, 7vw, 6.5rem)',
        paddingBottom: 'clamp(3.5rem, 7vw, 6.5rem)',
      }}
    >
      <div className="container">
        {/* Top Header: Split layout with Heading on Left and Editorial Copy on Right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
            marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
          }}
          className="natural-header-grid"
        >
          <div>
            <span className="section-label">AESTHETIC PHILOSOPHY</span>
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
              NATURAL LOOKS,<br />
              OUTSTANDING RESULTS
            </h2>
          </div>

          <div style={{ maxWidth: '580px' }} className="natural-editorial-copy">
            <p
              style={{
                fontSize: 'clamp(0.92rem, 1.1vw, 1.05rem)',
                lineHeight: 1.8,
                color: 'var(--color-text-muted)',
              }}
            >
              We believe every patient is beautiful in their own right — our mission is only to reveal hidden strengths. Whether we enhance facial contours, rejuvenate skin texture, or restore a radiant confident smile, we perform every procedure to achieve a fresh, harmonious appearance.
            </p>
            <p
              style={{
                fontSize: 'clamp(0.88rem, 1vw, 0.98rem)',
                lineHeight: 1.8,
                color: 'var(--color-text-muted)',
                marginTop: '1rem',
              }}
            >
              Clinical aesthetics and modern dentistry are about empowering you to feel entirely at ease. Our clinical team works with precision, state-of-the-art protocols, and personalized care to preserve and elevate your natural beauty.
            </p>
          </div>
        </div>

        {/* Wide Editorial Photographic Banner */}
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
            src="/assets/natural-banner.png"
            alt="Natural Looks, Outstanding Results - Luster Face Clinic"
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
          .natural-header-grid {
            grid-template-columns: 1.1fr 1fr !important;
          }
        }
        @media (max-width: 899px) {
          .natural-editorial-copy {
            display: none !important;
          }
          .natural-header-grid {
            margin-bottom: 1.5rem !important;
            gap: 0.75rem !important;
          }
        }
      `}</style>
    </section>
  );
};
