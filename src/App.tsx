import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FacialTreatments } from './components/FacialTreatments';
import { NaturalResultsSection } from './components/NaturalResultsSection';
import { DoctorsSection } from './components/DoctorsSection';
import { BranchesSection } from './components/BranchesSection';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { MessageCircle, Phone } from 'lucide-react';

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<string>('');
  const [selectedBranch, setSelectedBranch] = useState<string>('');
  const [selectedTreatment, setSelectedTreatment] = useState<string>('');

  const handleOpenBooking = (doctor?: string, branch?: string, treatment?: string) => {
    setSelectedDoctor(doctor || '');
    setSelectedBranch(branch || '');
    setSelectedTreatment(treatment || '');
    setIsModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-[#111111] antialiased">
      {/* 1. Header Navigation */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections in Exact Master Prompt & User Order */}
      <main>
        {/* Section 1: Hero */}
        <HeroSection onOpenBooking={() => handleOpenBooking()} />

        {/* Section 2: Clinical Facials (Horizontally Scrollable) */}
        <FacialTreatments
          onSelectTreatment={(treatmentName) => handleOpenBooking(undefined, undefined, treatmentName)}
        />

        {/* Section 3: Natural Looks, Outstanding Results */}
        <NaturalResultsSection />

        {/* Section 4: Doctors Section (3 Cards in First View, Horizontal Scroll, 8 Doctors) */}
        <DoctorsSection
          onBookDoctor={(doctorName) => handleOpenBooking(doctorName)}
        />

        {/* Section 5: Branches Section (2 Cards in First View, No Scrolling) */}
        <BranchesSection
          onBookBranch={(branchName) => handleOpenBooking(undefined, branchName)}
        />
      </main>

      {/* Section 9: Luxury Black Footer */}
      <Footer />

      {/* Appointment Experience Modal */}
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={handleCloseBooking}
        initialDoctor={selectedDoctor}
        initialBranch={selectedBranch}
        initialTreatment={selectedTreatment}
      />

      {/* Floating Fast Action Strip for Mobile & Desktop Patients */}
      <aside
        aria-label="Direct Patient Assistance"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 40,
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <a
          href="https://wa.me/917356196707?text=Hello%20Luster%20Face%20Clinic,%20I%20would%20like%20to%20enquire%20about%20treatments"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: '#25D366',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
            transition: 'var(--transition-smooth)',
            textDecoration: 'none',
          }}
          className="floating-action-btn"
          title="Chat on WhatsApp"
        >
          <MessageCircle size={26} />
        </a>

        <a
          href="tel:07356196707"
          aria-label="Call Clinic Now"
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: '#111111',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
            transition: 'var(--transition-smooth)',
            textDecoration: 'none',
          }}
          className="floating-action-btn floating-phone-btn"
          title="Call Clinic: 073561 96707"
        >
          <Phone size={22} color="var(--color-accent-champagne)" />
        </a>
      </aside>

      <style>{`
        .floating-action-btn:hover {
          transform: scale(1.1);
        }
        @media (max-width: 899px) {
          .floating-phone-btn {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
