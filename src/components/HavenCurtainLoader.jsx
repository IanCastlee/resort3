import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

/**
 * HavenCurtainLoader
 * Luxury split-curtain transition loader for EYHAN HAVEN Sanctuary.
 * Triggers on initial site mount / refresh and on route transitions.
 */
export default function HavenCurtainLoader({ brand }) {
  const location = useLocation();
  const [stage, setStage] = useState('closed'); // 'closed' | 'opening' | 'idle'
  const isFirstMount = useRef(true);
  const prevPathname = useRef(location.pathname);

  // Initial site load reveal
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;

      const openTimer = setTimeout(() => {
        setStage('opening');
      }, 700);

      const idleTimer = setTimeout(() => {
        setStage('idle');
      }, 1450);

      return () => {
        clearTimeout(openTimer);
        clearTimeout(idleTimer);
      };
    }
  }, []);

  // Route change transitions
  useEffect(() => {
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
    }, 600);

    // Phase 3: Transition fully finished, return to idle
    const idleTimer = setTimeout(() => {
      setStage('idle');
    }, 1250);

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
      className={`fixed inset-0 z-[250] overflow-hidden ${
        isFullyClosed ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      {/* Left Obsidian Curtain Panel */}
      <div
        className={`absolute top-0 bottom-0 left-0 w-1/2 bg-[#0e171f] border-r border-haven-gold/30 shadow-[20px_0_50px_rgba(0,0,0,0.85)] transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isFullyClosed ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-haven-deep/40 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-haven-gold/50 to-transparent" />
      </div>

      {/* Right Obsidian Curtain Panel */}
      <div
        className={`absolute top-0 bottom-0 right-0 w-1/2 bg-[#0e171f] border-l border-haven-gold/30 shadow-[-20px_0_50px_rgba(0,0,0,0.85)] transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isFullyClosed ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-black/85 via-haven-deep/40 to-transparent" />
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-haven-gold/50 to-transparent" />
      </div>

      {/* Center Grand Monogram & Brand Crest */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center z-10 transition-all duration-400 ease-out ${
          isFullyClosed ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="relative flex flex-col items-center text-center px-6">
          {/* Botanical Haven Monogram */}
          <div className="relative mb-3 sm:mb-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-haven-gold flex items-center justify-center font-serif text-2xl sm:text-3xl text-haven-gold shadow-[0_0_35px_rgba(197,160,89,0.35)] bg-[#14202b]">
              {brand?.name ? brand.name.charAt(0) : 'H'}
            </div>
            <div className="absolute -inset-1.5 rounded-full border border-haven-gold/30 animate-pulse pointer-events-none" />
          </div>

          {/* Luxury Brand Title */}
          <h2 className="font-sans text-xl sm:text-3xl font-bold tracking-[0.28em] text-white uppercase mb-1 drop-shadow-lg">
            {brand?.name || 'EYHAN HAVEN'}
          </h2>

          {/* Symmetrical Gold Line Divider */}
          <div className="flex items-center gap-3 my-2 sm:my-2.5">
            <span className="w-10 sm:w-16 h-px bg-haven-gold/70" />
            <span className="w-1.5 h-1.5 rotate-45 bg-haven-gold" />
            <span className="w-10 sm:w-16 h-px bg-haven-gold/70" />
          </div>

          <span className="text-[9px] sm:text-[11px] uppercase tracking-[0.34em] text-haven-goldLight font-sans font-medium mb-4">
            Coastal Reserve &amp; Sanctuary
          </span>

          {/* Subtle Golden Shimmer Loading Line */}
          <div className="w-32 sm:w-44 h-0.5 bg-white/10 rounded-full overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-transparent via-haven-gold to-transparent w-full animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}

HavenCurtainLoader.propTypes = {
  brand: PropTypes.shape({
    name: PropTypes.string,
  }),
};
