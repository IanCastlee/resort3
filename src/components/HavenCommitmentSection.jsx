import PropTypes from 'prop-types';
import HavenReveal from './HavenReveal';

export default function HavenCommitmentSection({ commitment }) {
  const getArchIcon = (iconName) => {
    switch (iconName) {
      case 'leaf':
        return (
          <svg className="w-6 h-6 text-haven-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        );
      case 'sun':
        return (
          <svg className="w-6 h-6 text-haven-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      case 'heart':
        return (
          <svg className="w-6 h-6 text-haven-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6 text-haven-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-haven-bg border-b border-haven-border/40">
      <div className="max-w-[1536px] mx-auto px-2 sm:px-8 lg:px-10">
        {/* Header Grid: Eyebrow + Title on left, editorial paragraph on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-20 sm:mb-24">
          <div className="lg:col-span-6 space-y-4">
            <HavenReveal direction="up" delay={100}>
              <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.32em] text-haven-goldDark font-semibold block">
                {commitment.eyebrow}
              </span>
            </HavenReveal>
            <HavenReveal direction="up" delay={200}>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-haven-deep font-normal leading-[1.15]">
                {commitment.heading}
              </h2>
            </HavenReveal>
          </div>
          <div className="lg:col-span-6 lg:pt-6">
            <HavenReveal direction="up" delay={300}>
              <p className="text-sm sm:text-base text-haven-deep/75 font-light leading-relaxed">
                {commitment.description}
              </p>
            </HavenReveal>
          </div>
        </div>

        {/* 4 Signature Arch Cards from the user's mockup image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {commitment.cards.map((card, idx) => (
            <HavenReveal key={card.id} delay={idx * 120}>
              <div className="group h-full bg-white border border-haven-stone rounded-t-[100px] rounded-b-2xl p-8 sm:p-10 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:border-haven-gold transition-all duration-500">
                {/* Arch Icon Ring */}
                <div className="w-16 h-16 rounded-full bg-haven-cream/80 border border-haven-stone flex items-center justify-center mb-10 group-hover:bg-haven-gold/15 group-hover:scale-110 transition-all duration-500">
                  {getArchIcon(card.icon)}
                </div>

                {/* Card Title */}
                <h3 className="font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.24em] text-haven-deep mb-2">
                  {card.title}
                </h3>

                {/* Subtitle */}
                <span className="text-xs text-haven-goldDark font-serif italic mb-4 block">
                  {card.subtitle}
                </span>

                {/* Body description */}
                <p className="text-xs text-haven-muted font-light leading-relaxed mt-auto">
                  {card.description}
                </p>
              </div>
            </HavenReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

HavenCommitmentSection.propTypes = {
  commitment: PropTypes.object.isRequired,
};
