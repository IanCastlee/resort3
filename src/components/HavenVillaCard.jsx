import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export default function HavenVillaCard({ villa }) {
  const navigate = useNavigate();

  return (
    <article className="group bg-white border border-haven-stone/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:border-haven-gold transition-all duration-700 flex flex-col justify-between">
      <div>
        {/* Photo Container with subtle zoom */}
        <div className="relative h-72 sm:h-80 overflow-hidden bg-haven-cream">
          <img
            src={villa.image}
            alt={villa.name}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

          {/* Badge */}
          {villa.badge && (
            <div className="absolute top-4 left-4">
              <span className="px-3.5 py-1 text-[10px] font-sans uppercase tracking-[0.22em] text-haven-dark bg-haven-goldLight/95 backdrop-blur-md font-semibold rounded-full shadow-sm">
                {villa.badge}
              </span>
            </div>
          )}

          {/* Price Pill */}
          <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full shadow-md text-haven-deep flex items-baseline gap-1">
            <span className="font-serif text-lg font-bold text-haven-goldDark">{villa.price}</span>
            <span className="text-[10px] uppercase tracking-wider text-haven-muted font-sans">
              /{villa.pricePeriod || 'night'}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-7 sm:p-9">
          <span className="text-[10px] font-sans uppercase tracking-[0.24em] text-haven-goldDark block mb-2 font-medium">
            {villa.category} &middot; {villa.size}
          </span>

          <h3 className="font-serif text-2xl sm:text-3xl text-haven-deep font-normal mb-3 group-hover:text-haven-goldDark transition-colors">
            {villa.name}
          </h3>

          <p className="text-xs text-haven-deep/75 font-light leading-relaxed mb-6">
            {villa.description}
          </p>

          {/* Feature Bullets */}
          <ul className="space-y-2 mb-8 pt-4 border-t border-haven-stone/80">
            {villa.features.map((feat) => (
              <li key={feat} className="flex items-center gap-2.5 text-xs text-haven-deep/80 font-light">
                <svg className="w-3.5 h-3.5 text-haven-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Footer CTA */}
      <div className="px-7 sm:px-9 pb-8 pt-0">
        <button
          onClick={() => navigate(`/contact?villa=${encodeURIComponent(villa.name)}`)}
          className="w-full py-3.5 bg-haven-cream hover:bg-haven-gold hover:text-haven-dark text-haven-deep font-sans text-xs uppercase tracking-[0.22em] font-medium transition-all duration-300 rounded-lg text-center"
        >
          Check Villa Availability &rarr;
        </button>
      </div>
    </article>
  );
}

HavenVillaCard.propTypes = {
  villa: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    capacity: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    pricePeriod: PropTypes.string,
    image: PropTypes.string.isRequired,
    badge: PropTypes.string,
    description: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
