import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Calendar } from 'lucide-react';

interface DoctorsSectionProps {
  onBookDoctor: (doctorName: string) => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({ onBookDoctor }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const doctors = [
    {
      id: 'dr-divya',
      name: 'Dr. Divya Lijeesh',
      role: 'Chief Dental Surgeon',
      qualification: 'BDS • Facial Aesthetics Specialist',
      image: '/assets/doctor-photo-4.jpg',
      status: 'PRESENT',
      isFeatured: false,
    },
    {
      id: 'dr-lijeesh',
      name: 'Dr. Lijeesh Kadambil',
      role: 'Chief Dental Surgeon',
      qualification: 'BDS • Dip. Implant Dentistry (Nobel Biocare, Sweden)',
      image: '/assets/doctor-photo-5.jpg',
      status: 'PRESENT',
      isFeatured: true,
    },
    {
      id: 'dr-fathima',
      name: 'Dr. Fathima Roosa Fidha',
      role: 'Resident Dental Surgeon',
      qualification: 'BDS • General & Preventive Dental Care',
      image: '/assets/doctor-photo-8.jpg',
      status: 'PRESENT',
      isFeatured: false,
    },
    {
      id: 'dr-neha',
      name: 'Dr. Neha K. Nair',
      role: 'Consultant Aesthetic Physician',
      qualification: 'MBBS • Fellowship in Aesthetic Medicine',
      image: '/assets/doctor-photo-6.jpg',
      status: 'PRESENT',
      isFeatured: false,
    },
    {
      id: 'dr-arun',
      name: 'Dr. Arun Mathew',
      role: 'Facial Aesthetic Specialist',
      qualification: 'MDS • Maxillofacial Aesthetics Consultant',
      image: '/assets/doctor-photo-7.jpg',
      status: 'PRESENT',
      isFeatured: false,
    },
    {
      id: 'dr-anjali',
      name: 'Dr. Anjali Menon',
      role: 'Clinical Dermatologist',
      qualification: 'MD Dermatology • Laser & Pigmentation Specialist',
      image: '/assets/doctor-female-clinic.jpg',
      status: 'PRESENT',
      isFeatured: false,
    },
    {
      id: 'dr-ashwin',
      name: 'Dr. Ashwin Rao',
      role: 'Dental Surgeon & Smile Architect',
      qualification: 'MDS Orthodontics • Clear Aligners Specialist',
      image: '/assets/doctor-male-studio.jpg',
      status: 'PRESENT',
      isFeatured: false,
    },
    {
      id: 'dr-shreya',
      name: 'Dr. Shreya Pillai',
      role: 'Aesthetic & Trichology Consultant',
      qualification: 'Clinical Cosmetology & PRP Hair Specialist',
      image: '/assets/doctor-female-portrait.jpg',
      status: 'PRESENT',
      isFeatured: false,
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.clientWidth / 3;
      const scrollDistance = cardWidth > 320 ? cardWidth : 340;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollDistance : scrollDistance,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="doctors"
      style={{
        backgroundColor: '#F8F6F2',
        paddingTop: 'clamp(3.5rem, 7vw, 6.5rem)',
        paddingBottom: 'clamp(3.5rem, 7vw, 6.5rem)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div className="container">
        {/* Header with Title and Carousel Navigation */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '2.5rem',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div>
            <span className="section-label">CLINICAL TEAM</span>
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
              OUR SPECIALIST DOCTORS
            </h2>
            <p
              style={{
                fontSize: '0.92rem',
                color: 'var(--color-text-muted)',
                marginTop: '0.5rem',
                maxWidth: '520px',
              }}
            >
              Distinguished dental surgeons and facial aesthetic physicians delivering patient-first clinical precision.
            </p>
          </div>

          {/* Navigation Arrows for Doctors Carousel */}
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button
              onClick={() => scroll('left')}
              className="circle-nav-btn"
              aria-label="Previous Doctors"
              style={{
                backgroundColor: '#FFFFFF',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              }}
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="circle-nav-btn"
              aria-label="Next Doctors"
              style={{
                backgroundColor: '#FFFFFF',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              }}
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* 3 Cards Visible in First View with Right Horizontal Scrolling */}
        <div
          ref={carouselRef}
          style={{
            display: 'flex',
            gap: '1.5rem',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            paddingBottom: '1rem',
          }}
          className="doctors-track"
        >
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="doctor-card"
              style={{
                flex: '0 0 calc((100% - 3rem) / 3)',
                minWidth: '300px',
                scrollSnapAlign: 'start',
                backgroundColor: '#EFF3E8', // Light pale olive/ivory card container from reference image 3
                borderRadius: '24px',
                padding: '12px 12px 18px 12px',
                border: '1px solid rgba(0, 0, 0, 0.04)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'var(--transition-smooth)',
                position: 'relative',
              }}
            >
              {/* Doctor Image Container with Rounded Inner Corners */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '1 / 1.15',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  backgroundColor: '#DDE2D5',
                  marginBottom: '1rem',
                }}
              >
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    transition: 'transform 0.4s ease',
                  }}
                  loading="lazy"
                />

                {/* Status Pill matching reference: Green dot + PRESENT */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(6px)',
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-full)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
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
                    {doctor.status}
                  </span>
                </div>

                {/* Center Book Consultation Pill Button matching Dr. Lijeesh's card */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onBookDoctor(doctor.name);
                  }}
                  className="doctor-book-overlay-btn"
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '12px',
                    backgroundColor: 'rgba(17, 17, 17, 0.88)',
                    backdropFilter: 'blur(6px)',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: 'var(--radius-full)',
                    padding: '6px 14px',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    letterSpacing: '0.02em',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    transition: 'var(--transition-smooth)',
                  }}
                >
                  <Calendar size={12} color="var(--color-accent-champagne)" />
                  <span>Book Consultation</span>
                </button>
              </div>

              {/* Doctor Details matching reference */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingLeft: '6px',
                  paddingRight: '6px',
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.05rem',
                      fontWeight: 800,
                      color: doctor.isFeatured ? '#65A30D' : 'var(--color-text-main)', // Accent green name for featured doctor as in reference
                      marginBottom: '2px',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {doctor.name}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.78rem',
                      color: 'var(--color-text-muted)',
                      fontWeight: 500,
                      lineHeight: 1.3,
                    }}
                  >
                    {doctor.role}
                  </p>
                </div>

                {/* Bottom Right Circular Arrow Button matching reference */}
                <button
                  onClick={() => onBookDoctor(doctor.name)}
                  aria-label={`Consult with ${doctor.name}`}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    color: 'var(--color-text-main)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
                    transition: 'var(--transition-smooth)',
                    flexShrink: 0,
                  }}
                  className="doctor-arrow-btn"
                >
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .doctors-track::-webkit-scrollbar {
          display: none;
        }
        @media (max-width: 1024px) {
          .doctor-card {
            flex: 0 0 calc((100% - 1.5rem) / 2) !important;
          }
        }
        @media (max-width: 640px) {
          .doctor-card {
            flex: 0 0 calc(85%) !important;
          }
        }
        .doctor-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08) !important;
        }
        .doctor-card:hover img {
          transform: scale(1.03);
        }
        .doctor-card:hover .doctor-arrow-btn {
          background-color: var(--color-text-main);
          color: #FFFFFF;
        }
        .doctor-book-overlay-btn:hover {
          background-color: var(--color-accent-champagne);
          color: #FFFFFF;
        }
      `}</style>
    </section>
  );
};
