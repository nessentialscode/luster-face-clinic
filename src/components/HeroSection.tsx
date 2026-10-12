import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        backgroundColor: '#FFFFFF',
        width: '100%',
        minHeight: 'calc(100vh - 70px)',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
      className="hero-section"
    >
      {/* Desktop Image on the Right Half (min-width: 900px) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '64%',
          height: '100%',
          zIndex: 1,
          pointerEvents: 'none',
        }}
        className="hero-desktop-image-container"
      >
        <img
          src="/assets/hero-model-enhanced.jpg"
          alt="Luster Face Clinic - Editorial Beauty & Aesthetics"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'right center',
            display: 'block',
          }}
          loading="eager"
        />

        {/* Soft seamless blend mask into white background on the left */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, #FFFFFF 0%, rgba(255, 255, 255, 0.8) 6%, rgba(255, 255, 255, 0) 22%)',
          }}
        />

        {/* Circular Champagne Seal for desktop */}
        <div
          onClick={onOpenBooking}
          title="Book Consultation"
          style={{
            position: 'absolute',
            bottom: '24px',
            right: '28%',
            width: '94px',
            height: '94px',
            borderRadius: '50%',
            backgroundColor: '#B8A383', // Exact champagne gold
            border: '8px solid #FFFFFF', // Crisp white separation ring
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(184, 163, 131, 0.35)',
            transition: 'var(--transition-smooth)',
            zIndex: 15,
            pointerEvents: 'auto',
          }}
          className="hero-champagne-seal"
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              border: '1.5px dashed rgba(255, 255, 255, 0.7)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              textAlign: 'center',
            }}
          >
            <span
              style={{
                fontSize: '0.48rem',
                fontWeight: 800,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                lineHeight: 1.1,
              }}
            >
              LUSTER
            </span>
            <span
              style={{
                fontSize: '0.38rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                opacity: 0.9,
                textTransform: 'uppercase',
              }}
            >
              EST. 2026
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Full-Bleed Background Image (max-width: 899px) */}
      <div className="hero-mobile-image-container">
        <img
          src="/assets/mobile-hero-model.jpg"
          alt="Luster Face Clinic - Aesthetics & Beauty"
          className="hero-mobile-bg-image"
          loading="eager"
        />
        {/* Soft white mask ensuring perfect text legibility */}
        <div className="hero-mobile-gradient-mask" />
      </div>

      {/* Hero Content */}
      <div
        className="container hero-content-container"
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
        }}
      >
        {/* Desktop Content Layout (min-width: 900px) */}
        <div className="hero-desktop-content" style={{ maxWidth: '560px' }}>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.4rem, 4.5vw, 4.8rem)',
              fontWeight: 900,
              lineHeight: 0.98,
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
              color: '#111111',
              marginBottom: '1.75rem',
            }}
          >
            OUR<br />
            <span style={{ whiteSpace: 'nowrap' }}>BEAUTY & AESTHETICS</span><br />
            SKIN CARE<br />
            <span style={{ color: '#B8A383' }}>CLINIC</span>
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.95rem, 1.25vw, 1.15rem)',
              fontWeight: 500,
              lineHeight: 1.35,
              color: '#222222',
              maxWidth: '300px',
            }}
          >
            Beauty treatments based<br />
            on science
          </p>
        </div>

        {/* Mobile Content Layout matching exact Reference Image 2 */}
        <div className="hero-mobile-content">
          <h1 className="hero-mobile-heading">
            <span>OUR</span>
            <span>BEAUTY &</span>
            <span>AESTHETICS</span>
            <span>SKIN CARE</span>
            <span className="hero-mobile-clinic-word">CLINIC</span>
          </h1>

          <p className="hero-mobile-subtext">
            Beauty treatments<br />
            based on science
          </p>

          <button
            onClick={onOpenBooking}
            className="hero-mobile-cta-btn"
            aria-label="Book Appointment"
          >
            <Calendar size={18} strokeWidth={2.2} />
            <span>Book Appointment</span>
            <ArrowRight size={18} strokeWidth={2.2} />
          </button>
        </div>
      </div>

      <style>{`
        /* Desktop styles (default) */
        .hero-mobile-image-container,
        .hero-mobile-content {
          display: none !important;
        }

        .hero-champagne-seal:hover {
          transform: scale(1.08) rotate(10deg);
          box-shadow: 0 12px 32px rgba(184, 163, 131, 0.45);
        }

        /* Mobile layout matching Reference Image 2 */
        @media (max-width: 899px) {
          .hero-section {
            min-height: calc(100vh - 65px) !important;
            min-height: calc(100dvh - 65px) !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: flex-end !important;
            padding: 0 !important;
            position: relative !important;
          }

          .hero-desktop-image-container,
          .hero-desktop-content {
            display: none !important;
          }

          /* Full portrait image on mobile right side */
          .hero-mobile-image-container {
            display: block !important;
            position: absolute !important;
            inset: 0 !important;
            width: 100% !important;
            height: 100% !important;
            z-index: 1 !important;
            overflow: hidden !important;
            pointer-events: none !important;
          }

          .hero-mobile-bg-image {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
            object-position: 80% top !important;
            display: block !important;
          }

          .hero-mobile-gradient-mask {
            position: absolute !important;
            inset: 0 !important;
            background: linear-gradient(to right, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.75) 42%, rgba(255, 255, 255, 0) 75%),
                        linear-gradient(to top, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.6) 20%, rgba(255, 255, 255, 0) 35%) !important;
          }

          .hero-content-container {
            padding: 1.5rem 1.25rem 2.75rem 1.25rem !important;
            z-index: 10 !important;
          }

          .hero-mobile-content {
            display: flex !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            max-width: 100% !important;
          }

          /* Exact 5-line typography matching Reference Image 2 */
          .hero-mobile-heading {
            font-family: var(--font-heading) !important;
            font-size: clamp(2.35rem, 8.8vw, 3.2rem) !important;
            font-weight: 900 !important;
            line-height: 0.96 !important;
            letter-spacing: -0.035em !important;
            text-transform: uppercase !important;
            color: #111111 !important;
            margin: 0 0 1.15rem 0 !important;
            display: flex !important;
            flex-direction: column !important;
          }

          .hero-mobile-clinic-word {
            color: #A38765 !important; /* Warm champagne bronze from Image 2 */
          }

          .hero-mobile-subtext {
            font-family: var(--font-body) !important;
            font-size: 1.05rem !important;
            font-weight: 500 !important;
            line-height: 1.35 !important;
            color: #2D2B29 !important;
            margin: 0 0 1.5rem 0 !important;
          }

          /* Exact pill button with calendar icon & arrow */
          .hero-mobile-cta-btn {
            background-color: #A38765 !important;
            color: #FFFFFF !important;
            border: none !important;
            border-radius: 9999px !important;
            padding: 0.8rem 1.6rem !important;
            font-size: 0.92rem !important;
            font-weight: 600 !important;
            letter-spacing: 0.02em !important;
            display: inline-flex !important;
            align-items: center !important;
            gap: 0.85rem !important;
            cursor: pointer !important;
            box-shadow: 0 8px 24px rgba(163, 135, 101, 0.35) !important;
            transition: transform 0.2s ease, background-color 0.2s ease !important;
            text-decoration: none !important;
          }

          .hero-mobile-cta-btn:active {
            transform: scale(0.97) !important;
            background-color: #927756 !important;
          }
        }
      `}</style>
    </section>
  );
};
