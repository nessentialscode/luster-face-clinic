import React from 'react';

interface BodyTreatmentsProps {
  onSelectTreatment: (treatmentName: string) => void;
}

export const BodyTreatments: React.FC<BodyTreatmentsProps> = ({ onSelectTreatment }) => {
  const bodyTreatments = [
    {
      id: 'body-meso',
      title: 'Body mesotherapy',
      description: 'Targeted skin tightening, localized fat metabolism & contour refinement.',
      image: '/assets/body-photo-1.png',
      badge: '01',
    },
    {
      id: 'hair-meso',
      title: 'Hair mesotherapy',
      description: 'PRP & GFC follicular rejuvenation for density, scalp health & hair regrowth.',
      image: '/assets/body-photo-2.png',
      badge: '02',
    },
    {
      id: 'iv-vitamin',
      title: 'Intravenous vitamin treatment',
      description: 'Antioxidant infusion, glutathione therapy & systemic revitalizing glow.',
      image: '/assets/body-photo-3.png',
      badge: '03',
    },
  ];

  return (
    <section
      id="body"
      style={{
        backgroundColor: '#FFFFFF',
        paddingTop: 'clamp(3rem, 6vw, 5.5rem)',
        paddingBottom: 'clamp(3rem, 6vw, 5.5rem)',
      }}
    >
      <div className="container">
        <div style={{ marginBottom: '2.5rem' }}>
          <span className="section-label">WELLNESS & REJUVENATION</span>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.85rem, 3vw, 2.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              color: 'var(--color-text-main)',
            }}
          >
            BODY
          </h2>
        </div>

        {/* 3-Column Desktop Grid matching reference */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2.5rem)',
          }}
          className="body-grid"
        >
          {bodyTreatments.map((treatment) => (
            <div
              key={treatment.id}
              onClick={() => onSelectTreatment(treatment.title)}
              style={{
                cursor: 'pointer',
              }}
              className="body-card-wrapper"
            >
              {/* Image Container with rounded corners & circular badge */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '1 / 1.05',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  backgroundColor: 'var(--color-bg-warm)',
                  marginBottom: '1rem',
                  boxShadow: 'var(--shadow-subtle)',
                  transition: 'var(--transition-smooth)',
                }}
                className="body-card-img"
              >
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                  }}
                  loading="lazy"
                />

              </div>

              {/* Title and subtitle */}
              <div>
                <h3
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: 'var(--color-text-main)',
                    letterSpacing: '0.01em',
                    marginBottom: '0.3rem',
                  }}
                >
                  {treatment.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--color-text-muted)',
                    lineHeight: 1.5,
                  }}
                >
                  {treatment.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .body-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        .body-card-img:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-hover);
        }
        .body-card-img:hover img {
          transform: scale(1.04);
        }
        .body-card-img:hover .body-arrow-badge {
          background-color: var(--color-text-main);
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};
