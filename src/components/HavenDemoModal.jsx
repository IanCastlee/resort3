import { useState, useEffect } from 'react';

export default function HavenDemoModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('haven_demo_dismissed');
    if (!dismissed) {
      setIsOpen(true);
    }
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem('haven_demo_dismissed', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] bg-haven-dark/80 backdrop-blur-md flex items-center justify-center p-3 pt-16 sm:p-6 overflow-y-auto"
    >
      <div className="bg-white border-2 border-haven-gold w-full max-w-[calc(100vw-24px)] sm:max-w-lg mx-auto p-4 sm:p-8 rounded-2xl shadow-2xl relative text-left box-border my-auto">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <span className="px-3 py-1 bg-haven-gold/15 border border-haven-gold/40 text-[9px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.22em] text-haven-goldDark font-sans font-semibold rounded-full">
            Demonstration Prototype
          </span>
          <button
            onClick={handleDismiss}
            aria-label="Close"
            className="text-haven-deep/50 hover:text-haven-deep p-1 text-2xl leading-none"
          >
            &times;
          </button>
        </div>

        <h3 className="font-serif text-xl sm:text-3xl text-haven-deep font-normal mb-3 sm:mb-4">
          Website Demonstration Notice
        </h3>

        <p className="text-xs sm:text-sm text-haven-deep/75 font-light leading-relaxed mb-4">
          This website is an interactive prototype created for design demonstration and portfolio review purposes. All brand names, locations, rates, and imagery are sample placeholders (dummy data).
        </p>

        <div className="bg-haven-cream border-l-4 border-haven-gold p-3.5 sm:p-4 mb-6 sm:mb-8 text-xs text-haven-deep/90 font-medium rounded-r-lg leading-relaxed">
          No real bookings, reservations, or financial transactions will be processed.
        </div>

        <div className="flex justify-start w-full">
          <button
            onClick={handleDismiss}
            className="w-fit text-left px-5 sm:px-8 py-2.5 sm:py-3.5 bg-haven-gold hover:bg-haven-goldLight text-haven-dark font-sans text-[11px] sm:text-xs uppercase tracking-[0.12em] sm:tracking-[0.20em] font-semibold transition-all rounded-lg shadow-md whitespace-normal leading-snug"
          >
            I Understand, Open Demo Website
          </button>
        </div>
      </div>
    </div>
  );
}
