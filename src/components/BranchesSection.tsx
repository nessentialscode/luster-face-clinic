import React, { useRef } from 'react';
import { MapPin, Phone, Clock, Navigation, Calendar, ArrowLeft, ArrowRight } from 'lucide-react';

interface BranchesSectionProps {
  onBookBranch: (branchName: string) => void;
}

export const BranchesSection: React.FC<BranchesSectionProps> = ({ onBookBranch }) => {
  const branchesRef = useRef<HTMLDivElement>(null);

  const scrollBranches = (direction: 'left' | 'right') => {
    if (branchesRef.current) {
      const scrollAmount = branchesRef.current.clientWidth * 0.88;
      branchesRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const branches = [
    {
      id: 'valayamkulam',
      name: 'Valayamkulam Flagship Clinic',
      tag: 'FLAGSHIP CENTRE',
      badgeStatus: 'OPEN TODAY • 9:00 AM - 8:00 PM',
      address: 'KVM Complex, Thrissur–Kunnamkulam Road, Valayamkulam, Kerala 679591',
      phone: '073561 96707 / 073565 76707',
      hours: 'Mon – Sat: 9:00 AM – 8:00 PM (Sunday Closed)',
      services: 'Clinical Facials, Medifacials, Laser Pigmentation, Dermal Fillers, Advanced Dental Surgery, Smile Design',
      image: '/assets/branch-valayamkulam.jpg',
      mapUrl: 'https://maps.google.com/?q=Luster+Face+Clinic+KVM+Complex+Valayamkulam+Kerala',
    },
    {
      id: 'edappal',
      name: 'Edappal – Ponnani Aesthetics & Dental Wing',
      tag: 'ASSOCIATE WING',
      badgeStatus: 'OPEN TODAY • 9:30 AM - 7:30 PM',
      address: 'Med Care Building, Edappal Road, KK Junction, Ponnani South, Kerala 679586',
      phone: '073561 96707',
      hours: 'Mon – Sat: 9:30 AM – 7:30 PM (Sunday Closed)',
      services: 'Implant Dentistry, Orthodontic Aligners, Cosmetic Dentistry, Trichology & PRP Rejuvenation',
      image: '/assets/branch-edappal.jpg',
      mapUrl: 'https://maps.google.com/?q=Dento+Care+Med+Care+Building+Edappal+Road+Ponnani+South+Kerala',
    },
  ];

  return (
    <section
      id="branches"
      style={{
        backgroundColor: '#FFFFFF',
        paddingTop: 'clamp(3.5rem, 7vw, 6.5rem)',
        paddingBottom: 'clamp(3.5rem, 7vw, 6.5rem)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '1rem',
            }}
          >
            <div style={{ maxWidth: '640px' }}>
              <span className="section-label">OUR CLINIC CENTRES</span>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.85rem, 3.2vw, 2.75rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text-main)',
                  lineHeight: 1.15,
                }}
              >
                LOCATIONS DESIGNED FOR YOUR COMFORT
              </h2>
            </div>

            {/* Navigation Arrows for Mobile Horizontal Scroll */}
            <div className="branches-mobile-arrows" style={{ gap: '0.5rem', flexShrink: 0 }}>
              <button
                onClick={() => scrollBranches('left')}
                className="circle-nav-btn"
                aria-label="Previous Branch"
                style={{ backgroundColor: '#EFF3E8', width: '38px', height: '38px' }}
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={() => scrollBranches('right')}
                className="circle-nav-btn"
                aria-label="Next Branch"
                style={{ backgroundColor: '#EFF3E8', width: '38px', height: '38px' }}
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <p
            style={{
              fontSize: '0.95rem',
              color: 'var(--color-text-muted)',
              marginTop: '0.75rem',
              lineHeight: 1.6,
              maxWidth: '640px',
            }}
          >
            Experience tranquil, state-of-the-art clinical environments equipped with the latest aesthetic technology across Malappuram & Thrissur borders.
          </p>
        </div>

        {/* Branch Cards Grid (Desktop 2-Cards Grid, Mobile Horizontal Scroll Track) */}
        <div
          ref={branchesRef}
          className="branches-grid"
        >
          {branches.map((branch) => (
            <div
              key={branch.id}
              className="branch-card"
              style={{
                backgroundColor: '#EFF3E8', // Matching pale olive/ivory card container
                borderRadius: '24px',
                padding: '14px 14px 22px 14px',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'var(--transition-smooth)',
              }}
            >
              {/* Branch Interior Photo with Rounded Inner Corners */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16 / 10',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  backgroundColor: '#DDE2D5',
                  marginBottom: '1.25rem',
                }}
              >
                <img
                  src={branch.image}
                  alt={branch.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                  }}
                  loading="lazy"
                />

                {/* Status Badge: Green dot + OPEN */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.94)',
                    backdropFilter: 'blur(6px)',
                    padding: '5px 12px',
                    borderRadius: 'var(--radius-full)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                  }}
                >
                  <span
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      backgroundColor: '#16A34A',
                      display: 'inline-block',
                    }}
                  />
                  <span
                    style={{
                      fontSize: '0.62rem',
                      fontWeight: 800,
                      letterSpacing: '0.08em',
                      color: '#166534',
                      textTransform: 'uppercase',
                    }}
                  >
                    {branch.badgeStatus}
                  </span>
                </div>

                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    backgroundColor: 'rgba(17, 17, 17, 0.85)',
                    backdropFilter: 'blur(6px)',
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-full)',
                    color: '#FFFFFF',
                    fontSize: '0.58rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                  }}
                >
                  {branch.tag}
                </div>
              </div>

              {/* Branch Content Info */}
              <div style={{ padding: '0 6px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    letterSpacing: '-0.01em',
                    color: 'var(--color-text-main)',
                    marginBottom: '0.85rem',
                  }}
                >
                  {branch.name}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                    <MapPin size={16} color="var(--color-accent-champagne-dark)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ fontSize: '0.84rem', color: 'var(--color-text-muted)', lineHeight: 1.45 }}>
                      {branch.address}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <Phone size={15} color="var(--color-accent-champagne-dark)" style={{ flexShrink: 0 }} />
                    <a
                      href={`tel:${branch.phone.split('/')[0].trim()}`}
                      style={{ fontSize: '0.84rem', color: 'var(--color-text-main)', textDecoration: 'none', fontWeight: 600 }}
                    >
                      {branch.phone}
                    </a>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <Clock size={15} color="var(--color-accent-champagne-dark)" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
                      {branch.hours}
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.65)',
                    padding: '0.75rem 0.95rem',
                    borderRadius: '12px',
                    marginBottom: '1.5rem',
                    fontSize: '0.76rem',
                    color: 'var(--color-text-muted)',
                    lineHeight: 1.45,
                  }}
                >
                  <strong style={{ color: 'var(--color-text-main)', fontWeight: 700 }}>Featured Facilities: </strong>
                  {branch.services}
                </div>

                {/* Bottom Action Buttons */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginTop: 'auto',
                    flexWrap: 'wrap',
                  }}
                >
                  <button
                    onClick={() => onBookBranch(branch.name)}
                    className="btn btn-champagne"
                    style={{
                      flex: 1,
                      padding: '0.75rem 1.25rem',
                      fontSize: '0.78rem',
                      letterSpacing: '0.04em',
                    }}
                  >
                    <Calendar size={14} />
                    <span>Book at this Branch</span>
                  </button>

                  <a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{
                      padding: '0.75rem 1.15rem',
                      fontSize: '0.78rem',
                      backgroundColor: '#FFFFFF',
                      borderColor: 'rgba(0, 0, 0, 0.15)',
                    }}
                  >
                    <Navigation size={14} />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .branches-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: clamp(1.5rem, 3vw, 2.5rem);
        }
        .branches-mobile-arrows {
          display: none;
        }

        @media (max-width: 899px) {
          .branches-mobile-arrows {
            display: flex !important;
          }
          .branches-grid {
            display: flex !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory !important;
            gap: 1.25rem !important;
            padding-bottom: 1.25rem !important;
            padding-right: 1.5rem !important;
            scrollbar-width: none !important;
            -webkit-overflow-scrolling: touch !important;
          }
          .branches-grid::-webkit-scrollbar {
            display: none !important;
          }
          .branch-card {
            flex: 0 0 86% !important;
            min-width: 290px !important;
            max-width: 86vw !important;
            scroll-snap-align: start !important;
          }
        }

        @media (min-width: 900px) {
          .branches-mobile-arrows {
            display: none !important;
          }
          .branches-grid {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: clamp(1.5rem, 3vw, 2.5rem) !important;
            overflow-x: visible !important;
          }
        }

        .branch-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.08) !important;
        }
        .branch-card:hover img {
          transform: scale(1.03);
        }
      `}</style>
    </section>
  );
};
