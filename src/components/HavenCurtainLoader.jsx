import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

/**
 * HavenCurtainLoader (EYHAN HAVEN Sanctuary)
 * Style: Architectural 4-Column Cascading Shutter Reveal (Vertical Slat Cascade).
 * Distinct from E-YHAN Resort's horizontal curtain split.
 * Features:
 * - 4 vertical architectural pillars that slide up sequentially with a staggered cascade.
 * - Initial site open & refresh entrance reveal.
 * - Staggered slide-down / slide-up transition between route changes.
 * - StrictMode safe (never gets stuck on home or any page).
 * - Safety watchdog timer guarantees dismissal under all circumstances.
 */
export default function HavenCurtainLoader({ brand }) {
  const location = useLocation();
  // Start 'closed' on page load/refresh so the user sees the loader first
  const [stage, setStage] = useState('closed'); // 'closed' | 'opening' | 'idle'
  const isFirstRoute = useRef(true);
  const currentPath = useRef(location.pathname);

  // 1. Initial site open / refresh grand entrance reveal
  useEffect(() => {
    const openTimer = setTimeout(() => {
      setStage('opening');
    }, 750);

    const idleTimer = setTimeout(() => {
      setStage('idle');
    }, 1600);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(idleTimer);
    };
  }, []);

  // 2. Route change staggered pillar transitions
  useEffect(() => {
    // Skip initial mount route trigger (handled by the effect above)
    if (isFirstRoute.current) {
      isFirstRoute.current = false;
      currentPath.current = location.pathname;
      return;
    }

    // Skip if user clicked the same page link they are already viewing
    if (location.pathname === currentPath.current) {
      return;
    }
    currentPath.current = location.pathname;

    // Phase 1: Pillars slide in to close
    setStage('closed');

    // Smoothly reset scroll position while covered
    const scrollTimer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 280);

    // Phase 2: Hold emblem briefly, then cascade pillars open
    const openTimer = setTimeout(() => {
      setStage('opening');
    }, 600);

    // Phase 3: Transition finished, unmount from DOM
    const idleTimer = setTimeout(() => {
      setStage('idle');
    }, 1450);

    return () => {
      clearTimeout(scrollTimer);
      clearTimeout(openTimer);
      clearTimeout(idleTimer);
    };
  }, [location.pathname]);

  // 3. Absolute safety watchdog: Guarantee the loader CANNOT stay stuck
  useEffect(() => {
    if (stage !== 'idle') {
      const watchdog = setTimeout(() => {
        setStage('idle');
      }, 2400);
      return () => clearTimeout(watchdog);
    }
  }, [stage]);

  if (stage === 'idle') return null;

  const isFullyClosed = stage === 'closed';

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[250] overflow-hidden ${
        isFullyClosed ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      {/* 4 Architectural Vertical Columns with Staggered Cascading Slides */}
      <div className="absolute inset-0 grid grid-cols-4 pointer-events-none">
        {/* Column 1 (Leftmost) */}
        <div
          className={`h-full bg-[#0a1118] border-r border-haven-gold/30 shadow-2xl relative transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
            isFullyClosed ? 'translate-y-0' : '-translate-y-full'
          }`}
          style={{ transitionDelay: isFullyClosed ? '0ms' : '0ms' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-haven-deep/40" />
          <div className="absolute bottom-4 left-4 text-[9px] uppercase tracking-[0.28em] text-haven-gold/30 font-sans hidden sm:block">
            01 &middot; ARCH
          </div>
        </div>

        {/* Column 2 (Center-Left) */}
        <div
          className={`h-full bg-[#0e1720] border-r border-haven-gold/30 shadow-2xl relative transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
            isFullyClosed ? 'translate-y-0' : '-translate-y-full'
          }`}
          style={{ transitionDelay: isFullyClosed ? '60ms' : '90ms' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-haven-deep/40" />
          <div className="absolute bottom-4 left-4 text-[9px] uppercase tracking-[0.28em] text-haven-gold/30 font-sans hidden sm:block">
            02 &middot; SHORE
          </div>
        </div>

        {/* Column 3 (Center-Right) */}
        <div
          className={`h-full bg-[#0e1720] border-r border-haven-gold/30 shadow-2xl relative transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
            isFullyClosed ? 'translate-y-0' : '-translate-y-full'
          }`}
          style={{ transitionDelay: isFullyClosed ? '120ms' : '180ms' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-haven-deep/40" />
          <div className="absolute bottom-4 left-4 text-[9px] uppercase tracking-[0.28em] text-haven-gold/30 font-sans hidden sm:block">
            03 &middot; FLORA
          </div>
        </div>

        {/* Column 4 (Rightmost) */}
        <div
          className={`h-full bg-[#0a1118] shadow-2xl relative transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
            isFullyClosed ? 'translate-y-0' : '-translate-y-full'
          }`}
          style={{ transitionDelay: isFullyClosed ? '180ms' : '270ms' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-haven-deep/40" />
          <div className="absolute bottom-4 left-4 text-[9px] uppercase tracking-[0.28em] text-haven-gold/30 font-sans hidden sm:block">
            04 &middot; COVE
          </div>
        </div>
      </div>

      {/* Center Botanical Monogram & Sanctuary Emblem */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center z-10 transition-all duration-350 ease-out ${
          isFullyClosed ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
        }`}
      >
        <div className="relative flex flex-col items-center text-center px-6">
          {/* Botanical Haven Crest with Warm Gold Glow */}
          <div className="relative mb-3 sm:mb-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl rotate-45 border border-haven-gold flex items-center justify-center font-serif text-2xl sm:text-3xl text-haven-gold shadow-[0_0_35px_rgba(197,160,89,0.35)] bg-[#121c26]">
              <span className="-rotate-45">{brand?.name ? brand.name.charAt(0) : 'H'}</span>
            </div>
            {/* Subtle outer diamond ring */}
            <div className="absolute -inset-2 rounded-2xl rotate-45 border border-haven-gold/30 animate-pulse pointer-events-none" />
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

          {/* Editorial Cascade Progress Indicator */}
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-0.5 bg-haven-gold rounded-full animate-pulse" />
            <span className="w-6 h-0.5 bg-haven-gold/60 rounded-full" />
            <span className="w-2 h-0.5 bg-haven-gold/30 rounded-full" />
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
