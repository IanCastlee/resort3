import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

export default function HavenCurtainLoader({ brand }) {
  const location = useLocation();
  const [stage, setStage] = useState('idle'); // 'idle' | 'closed' | 'opening'
  const isFirstMount = useRef(true);
  const prevPathname = useRef(location.pathname);

  useEffect(() => {
    // Only trigger when actually changing pages, not on initial site load
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

    if (location.pathname === prevPathname.current) {
      return;
    }
    prevPathname.current = location.pathname;

    // Phase 1: Curtains glide in to close
    setStage('closed');

    // Scroll window to top cleanly while curtains are shut
    const scrollTimer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 280);

    // Phase 2: Hold briefly then open curtains
    const openTimer = setTimeout(() => {
      setStage('opening');
    }, 550);

    // Phase 3: Transition fully finished, return to idle
    const idleTimer = setTimeout(() => {
      setStage('idle');
    }, 1050);

    return () => {
      clearTimeout(scrollTimer);
      clearTimeout(openTimer);
      clearTimeout(idleTimer);
    };
  }, [location.pathname]);

  if (stage === 'idle') return null;

  const isFullyClosed = stage === 'closed';

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[200] pointer-events-none overflow-hidden"
    >
      {/* Left Curtain Panel */}
      <div
        className={`absolute top-0 bottom-0 left-0 w-1/2 bg-[#0c131d] border-r border-haven-gold/30 shadow-[15px_0_40px_rgba(0,0,0,0.8)] transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isFullyClosed ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Subtle Silk / Luxury Depth Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />
      </div>

      {/* Right Curtain Panel */}
      <div
        className={`absolute top-0 bottom-0 right-0 w-1/2 bg-[#0c131d] border-l border-haven-gold/30 shadow-[-15px_0_40px_rgba(0,0,0,0.8)] transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isFullyClosed ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Subtle Silk / Luxury Depth Gradient */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-transparent to-black/40" />
      </div>

      {/* Center Luxury Emblem & Monogram (Revealed while curtains are closed) */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center z-10 transition-all duration-300 ${
          isFullyClosed ? 'opacity-100 scale-100 delay-150' : 'opacity-0 scale-95'
        }`}
      >
        <div className="relative flex flex-col items-center text-center px-6">
          {/* Glowing Crest Circle */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-haven-gold flex items-center justify-center text-haven-gold mb-3 sm:mb-4 shadow-[0_0_30px_rgba(197,160,89,0.35)] bg-[#0f172a]">
            <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
          </div>

          {/* Brand Name */}
          <h2 className="font-sans text-lg sm:text-2xl font-bold tracking-[0.28em] text-white uppercase mb-1">
            {brand?.name || 'E-YHAN'}
          </h2>

          {/* Symmetrical Gold Line Divider */}
          <div className="flex items-center gap-3 my-1.5 sm:my-2">
            <span className="w-8 sm:w-12 h-px bg-haven-gold/70" />
            <span className="w-1.5 h-1.5 rotate-45 bg-haven-gold" />
            <span className="w-8 sm:w-12 h-px bg-haven-gold/70" />
          </div>

          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.34em] text-haven-goldLight font-sans font-medium">
            {brand?.tagline || 'Sanctuary & Coastal Reserve'}
          </span>
        </div>
      </div>
    </div>
  );
}

HavenCurtainLoader.propTypes = {
  brand: PropTypes.object,
};
