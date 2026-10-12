import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface FacialTreatmentsProps {
  onSelectTreatment: (treatmentName: string) => void;
}

export const FacialTreatments: React.FC<FacialTreatmentsProps> = ({ onSelectTreatment }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const treatments = [
    {
      id: 'clinical-facials',
      title: 'Clinical facials treatments',
      subtitle: 'HydraFacial, Carbon Peel & Medifacials',
      image: '/assets/facial-photo-1.png',
      badgeText: '01',
    },
    {
      id: 'botox',
      title: 'BOTOX® Injections',
      subtitle: 'Targeted Wrinkle Relaxation & Smoothing',
      image: '/assets/facial-photo-2.png',
      badgeText: '02',
    },
    {
      id: 'fillers',
      title: 'Best Dermal Fillers & Sculptra',
      subtitle: 'Facial Contouring, Lips & Volume Restoring',
      image: '/assets/facial-photo-3.png',
      badgeText: '03',
    },
    {
      id: 'chemical-peels',
      title: 'Chemical Facials & Peels',
      subtitle: 'Deep Resurfacing & Radiance Tone Correction',
      image: '/assets/facial-photo-4.png',
      badgeText: '04',
    },
    {
      id: 'prp-facial',
      title: 'Vampire Facelift & PRP Therapy',
      subtitle: 'Autologous Cellular Collagen Regeneration',
      image: '/assets/facial-photo-1.png',
      badgeText: '05',
    },
    {
      id: 'pigmentation',
      title: 'Skin Pigmentation Care',
      subtitle: 'Targeted Melasma & Scar Management',
      image: '/assets/facial-photo-2.png',
      badgeText: '06',
    },
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="facial"
      style={{
        backgroundColor: '#FFFFFF',
        paddingTop: 'clamp(3rem, 6vw, 5.5rem)',
        paddingBottom: 'clamp(3rem, 6vw, 5.5rem)',
      }}
    >
      <div className="container">
        {/* Section Header with Carousel Controls */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '2.5rem',
          }}
        >
          <div>
            <span className="section-label">FACIAL AESTHETICS</span>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.75rem, 2.8vw, 2.4rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                color: 'var(--color-text-main)',
              }}
            >
              CLINICAL FACIALS
            </h2>
          </div>

          {/* Carousel Arrows matching OFINO reference */}
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button
              onClick={() => handleScroll('left')}
              className="circle-nav-btn"
              aria-label="Previous Treatments"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="circle-nav-btn"
              aria-label="Next Treatments"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Track */}
        <div
          ref={scrollContainerRef}
          className="carousel-track"
          style={{
            display: 'flex',
            gap: '1.5rem',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            paddingBottom: '0.75rem',
          }}
        >
          {treatments.map((item) => (
            <div
              key={item.id}
              style={{
                flex: '0 0 clamp(260px, 28vw, 310px)',
                scrollSnapAlign: 'start',
                cursor: 'pointer',
              }}
              onClick={() => onSelectTreatment(item.title)}
            >
              {/* Card Image Container with rounded corners & circular badge */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '1 / 1.18',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  backgroundColor: 'var(--color-bg-warm)',
                  marginBottom: '1rem',
                  transition: 'var(--transition-smooth)',
                  boxShadow: 'var(--shadow-subtle)',
                }}
                className="treatment-card-img"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                  }}
                  loading="lazy"
                />

              </div>

              {/* Title & Subtitle underneath card */}
              <div>
                <h3
                  style={{
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    color: 'var(--color-text-main)',
                    letterSpacing: '0.01em',
                    marginBottom: '0.2rem',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.78rem',
                    color: 'var(--color-text-muted)',
                    lineHeight: 1.4,
                  }}
                >
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .treatment-card-img:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-hover);
        }
        .treatment-card-img:hover img {
          transform: scale(1.04);
        }
        .treatment-card-img:hover .treatment-arrow-badge {
          background-color: var(--color-text-main);
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};
