import PropTypes from 'prop-types';
import HavenReveal from './HavenReveal';

export default function HavenTestimonials({ testimonials }) {
  return (
    <section className="py-24 sm:py-32 bg-haven-cream/60 border-b border-haven-border/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-[71px] text-center">
        <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.32em] text-haven-goldDark font-semibold block mb-3">
          GUEST REFLECTIONS
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-haven-deep font-normal mb-16">
          What Our Guests Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 text-left">
          {testimonials.map((item, idx) => (
            <HavenReveal key={item.id} delay={idx * 150}>
              <div className="h-full bg-white p-8 sm:p-10 rounded-2xl border border-haven-stone shadow-sm flex flex-col justify-between">
                <div>
                  <div className="text-haven-gold text-3xl sm:text-4xl font-serif mb-4 leading-none">&ldquo;</div>
                  <p className="font-serif italic text-base sm:text-lg text-haven-deep/90 leading-relaxed mb-6">
                    {item.quote}
                  </p>
                </div>
                <div className="pt-4 border-t border-haven-stone/70">
                  <span className="font-sans text-xs font-semibold uppercase tracking-wider text-haven-deep block">
                    {item.author}
                  </span>
                  <span className="text-[11px] text-haven-muted font-sans block mt-0.5">
                    {item.location} &middot; <span className="text-haven-goldDark">{item.stayed}</span>
                  </span>
                </div>
              </div>
            </HavenReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

HavenTestimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      quote: PropTypes.string.isRequired,
      stayed: PropTypes.string.isRequired,
    })
  ).isRequired,
};
