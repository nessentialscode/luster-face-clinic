import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'FACIAL', href: '#facial' },
    { label: 'DOCTORS', href: '#doctors' },
    { label: 'BRANCHES', href: '#branches' },
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: '#FFFFFF',
        borderBottom: isScrolled ? '1px solid rgba(0, 0, 0, 0.05)' : 'none',
        transition: 'all 0.25s ease',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '70px',
        }}
      >
        {/* Official Clinic Logo */}
        <a
          href="#home"
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
          }}
          aria-label="Luster Face Clinic Home"
        >
          <img
            src="/assets/luster-logo.png"
            alt="Luster Face Clinic"
            style={{
              height: '42px',
              width: 'auto',
              maxHeight: '44px',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        </a>

        {/* Center Navigation Links matching reference */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: 'clamp(1.5rem, 2.8vw, 3rem)',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                textDecoration: 'none',
                color: '#111111',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.16em',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent-champagne)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#111111')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button matching OFINO reference & Image 2 mobile */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <button
            onClick={onOpenBooking}
            className="header-book-btn"
            style={{
              backgroundColor: '#B8A383', // Exact champagne tone from OFINO reference
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '9999px',
              padding: '0.62rem 1.6rem',
              fontSize: '0.74rem',
              fontWeight: 600,
              letterSpacing: '0.04em',
              cursor: 'pointer',
              transition: 'var(--transition-smooth)',
              boxShadow: '0 2px 8px rgba(184, 163, 131, 0.25)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#A59070';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#B8A383';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <Calendar size={13} className="header-calendar-icon" />
            <span>Book Appointment</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#111111',
              padding: '0.4rem',
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderTop: '1px solid var(--color-border)',
            borderBottom: '1px solid var(--color-border)',
            padding: '1.25rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                textDecoration: 'none',
                color: '#111111',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 860px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-toggle {
            display: none !important;
          }
          .header-calendar-icon {
            display: none;
          }
        }
        @media (max-width: 859px) {
          .mobile-menu-toggle {
            display: block !important;
          }
          .header-book-btn {
            background-color: #A38765 !important;
            padding: 0.44rem 0.95rem !important;
            font-size: 0.70rem !important;
            gap: 5px !important;
          }
          .header-calendar-icon {
            display: inline-block !important;
          }
        }
      `}</style>
    </header>
  );
};
