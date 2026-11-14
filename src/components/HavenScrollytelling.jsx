import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export default function HavenScrollytelling({ scrollytelling }) {
  const [activeStep, setActiveStep] = useState(0);
  const chapterRefs = useRef([]);

  const { eyebrow, heading, subtitle, chapters = [] } = scrollytelling;

  useEffect(() => {
    const observers = [];

    chapterRefs.current.forEach((el, index) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveStep(index);
            }
          });
        },
        {
          threshold: 0.5,
          rootMargin: '-10% 0px -25% 0px',
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [chapters]);

  const scrollToChapter = (index) => {
    const target = chapterRefs.current[index];
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="relative py-28 bg-haven-cream/50 border-b border-haven-border/40">
      {/* Section Header */}
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-10 mb-16 sm:mb-24 text-center">
        <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.32em] text-haven-goldDark font-semibold block mb-3">
          {eyebrow}
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-haven-deep font-normal mb-4">
          {heading}
        </h2>
        <p className="text-xs sm:text-sm text-haven-deep/70 font-light max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        {/* Quick Chapter Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-8">
          {chapters.map((ch, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={ch.id}
                onClick={() => scrollToChapter(idx)}
                className={`px-4 sm:px-6 py-2 rounded-full text-[10px] sm:text-xs font-sans uppercase tracking-[0.2em] transition-all duration-300 border ${
                  isActive
                    ? 'bg-haven-deep text-white border-haven-deep font-semibold shadow-md scale-105'
                    : 'bg-white text-haven-deep/75 border-haven-stone hover:border-haven-gold hover:text-haven-deep'
                }`}
              >
                <span>{ch.step} &middot; {ch.time}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Scrollytelling Stage: Sticky Visual Stage + Narrative Stream */}
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start relative">
          {/* Sticky Visual Canvas (Sticks on desktop & mobile) */}
          <div className="lg:col-span-6 sticky top-20 lg:top-28 z-20">
            <div className="relative h-[48vh] sm:h-[60vh] lg:h-[75vh] w-full rounded-3xl overflow-hidden border border-haven-stone shadow-xl bg-haven-stone">
              {/* Stacked Chapter Images with Smooth Cross-Fade */}
              {chapters.map((ch, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div
                    key={ch.id}
                    className={`absolute inset-0 transition-all duration-1000 ease-out ${
                      isActive
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-105 pointer-events-none'
                    }`}
                  >
                    <img
                      src={ch.image}
                      alt={ch.title}
                      className="w-full h-full object-cover"
                      loading={idx === 0 ? 'eager' : 'lazy'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-haven-dark/85 via-black/25 to-black/30" />
                  </div>
                );
              })}

              {/* Top Floating Ambient Badge */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <div className="px-4 py-1.5 bg-white/95 backdrop-blur-md border border-haven-stone rounded-full flex items-center gap-2 shadow-md text-haven-deep">
                  <span className="w-2 h-2 rounded-full bg-haven-goldDark animate-pulse" />
                  <span className="text-[10px] uppercase tracking-widest font-sans font-bold text-haven-goldDark">
                    {chapters[activeStep]?.time} &middot; CHAPTER {chapters[activeStep]?.step} OF {chapters.length}
                  </span>
                </div>

                <span className="hidden sm:inline-block text-[9px] uppercase tracking-ultra text-white/90 bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 font-sans">
                  Interactive Viewport
                </span>
              </div>

              {/* Bottom Quote Overlay on Active Image */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10 bg-gradient-to-t from-haven-dark via-haven-dark/80 to-transparent text-white">
                <blockquote className="font-serif italic text-sm sm:text-base text-haven-stone mb-2 leading-relaxed">
                  {chapters[activeStep]?.quote}
                </blockquote>
                <p className="text-[11px] font-sans uppercase tracking-[0.22em] text-haven-gold font-medium">
                  {chapters[activeStep]?.title}
                </p>

                {/* Progress Bar Indicator */}
                <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden mt-4">
                  <div
                    className="bg-haven-gold h-full transition-all duration-700 ease-out"
                    style={{
                      width: `${((activeStep + 1) / chapters.length) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Scrolling Narrative Stream on Right */}
          <div className="lg:col-span-6 space-y-16 sm:space-y-24 py-8 lg:py-16">
            {chapters.map((ch, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={ch.id}
                  ref={(el) => (chapterRefs.current[idx] = el)}
                  className={`transition-all duration-700 p-6 sm:p-10 rounded-3xl border ${
                    isActive
                      ? 'bg-white border-haven-gold shadow-2xl scale-[1.02]'
                      : 'bg-white/60 border-haven-stone/70 opacity-70 hover:opacity-95'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-3xl sm:text-4xl text-haven-goldDark font-normal">
                      {ch.step}
                    </span>
                    <span className="px-3.5 py-1 text-[10px] font-sans uppercase tracking-[0.22em] text-haven-deep font-semibold bg-haven-cream rounded-full border border-haven-stone">
                      {ch.time}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-haven-deep font-normal mb-2">
                    {ch.title}
                  </h3>
                  <h4 className="text-xs uppercase tracking-widest text-haven-goldDark mb-4 font-sans font-medium">
                    {ch.subtitle}
                  </h4>

                  <p className="text-xs sm:text-sm text-haven-deep/75 font-light leading-relaxed mb-6">
                    {ch.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-haven-stone">
                    {ch.highlights.map((item) => (
                      <div key={item} className="flex items-center gap-2.5 text-xs text-haven-deep/85 font-light">
                        <svg className="w-3.5 h-3.5 text-haven-goldDark shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

HavenScrollytelling.propTypes = {
  scrollytelling: PropTypes.shape({
    eyebrow: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    chapters: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        step: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
        quote: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
