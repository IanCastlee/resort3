import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export default function HavenHero({ hero, brand }) {
  const navigate = useNavigate();

  const handleScrollDown = () => {
    const el = document.getElementById('feature-ribbon');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen min-h-[580px] w-full flex flex-col justify-center overflow-hidden bg-haven-dark">
      {/* Background Photography: Tropical Daytime Infinity Pool & Palms */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero.image}
          alt={`${brand.name} Tropical Infinity Pool`}
          className="w-full h-full object-cover scale-105"
          loading="eager"
        />
        {/* Cinematic Vignette Overlays for clear, crisp contrast on mobile & desktop */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/80 sm:from-haven-dark/80 sm:via-transparent sm:to-haven-dark/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-haven-dark/90 via-haven-dark/40 to-transparent hidden sm:block" />
      </div>

      {/* Hero Content Container - Perfectly centered in viewport */}
      <div className="relative z-10 max-w-[1536px] mx-auto px-5 sm:px-8 lg:px-10 w-full pt-16 sm:pt-20 pb-16">
        <div className="max-w-2xl space-y-4 sm:space-y-6">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 sm:gap-3">
            <span className="w-6 sm:w-8 h-px bg-haven-gold" />
            <span className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.24em] sm:tracking-[0.32em] text-white/90 sm:text-haven-goldLight font-medium drop-shadow">
              {hero.eyebrow}
            </span>
          </div>

          {/* Headline (Editorial Serif Typography) */}
          <h1 className="font-serif text-[32px] sm:text-5xl lg:text-7xl text-white font-normal leading-[1.15] tracking-tight drop-shadow-xl">
            Nature, Comfort <br />
            <span className="font-serif italic text-white">and True Luxury</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-base text-white/90 font-light leading-relaxed max-w-md sm:max-w-xl drop-shadow">
            {hero.subtitle}
          </p>

          {/* Action Button */}
          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <button
              onClick={() => navigate(hero.cta.path)}
              className="w-fit px-7 sm:px-10 py-3 sm:py-4 bg-haven-gold text-haven-dark font-sans text-xs uppercase tracking-[0.22em] font-semibold hover:bg-haven-goldLight transition-all duration-300 shadow-xl text-center"
            >
              {hero.cta.label}
            </button>
          </div>
        </div>
      </div>

      {/* Centered Bottom Scroll Indicator - Points cleanly to the Feature Ribbon */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5">
        <button
          onClick={handleScrollDown}
          className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-white/25 bg-black/40 backdrop-blur-md flex items-center justify-center text-white/90 hover:text-haven-gold hover:border-haven-gold transition-colors focus:outline-none shadow-lg group"
          aria-label="Scroll Down to Features"
        >
          <svg
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-bounce text-haven-goldLight group-hover:translate-y-0.5 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
}

HavenHero.propTypes = {
  hero: PropTypes.object.isRequired,
  brand: PropTypes.object.isRequired,
};
