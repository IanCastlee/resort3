import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export default function HavenFooter({ brand, navigation }) {
  const navigate = useNavigate();

  return (
    <footer className="bg-haven-dark text-haven-stone pt-20 pb-12 border-t border-haven-slate">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-10">
        {/* Top Newsletter / Circle Bar */}
        <div className="pb-16 border-b border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-2">
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              Join the {brand.name} Circle
            </h3>
            <p className="text-xs sm:text-sm text-haven-sand/70 font-light">
              Receive private villa privileges, seasonal retreat guides, and invitations to new coastal sanctuaries.
            </p>
          </div>
          <div className="lg:col-span-6">
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address..."
                className="bg-haven-deep/90 border border-white/15 px-5 py-3 text-xs text-white placeholder-haven-muted focus:outline-none focus:border-haven-gold rounded-lg flex-grow"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-haven-gold text-haven-dark font-sans text-xs uppercase tracking-widest font-semibold hover:bg-haven-goldLight transition-colors rounded-lg shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Middle Navigation & Contact Details */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-haven-gold flex items-center justify-center text-haven-gold">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </div>
              <span className="font-sans text-xl font-bold tracking-[0.24em] text-white">
                {brand.name}
              </span>
            </div>
            <p className="text-xs text-haven-sand/70 font-light max-w-sm leading-relaxed">
              {brand.shortDescription}
            </p>
            <div className="text-xs text-haven-goldLight space-y-1 pt-2 font-light">
              <p>{brand.location}</p>
              <p>{brand.phone} &middot; {brand.email}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[10px] font-sans uppercase tracking-[0.28em] text-haven-gold block font-semibold">
              Sanctuary
            </span>
            <ul className="space-y-2.5 text-xs text-haven-sand/80 font-light">
              {navigation.map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => navigate(item.path)}
                    className="hover:text-haven-gold transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Experiences */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[10px] font-sans uppercase tracking-[0.28em] text-haven-gold block font-semibold">
              Experiences
            </span>
            <ul className="space-y-2.5 text-xs text-haven-sand/80 font-light">
              <li>Private Ocean Plunge &amp; Sunset Villas</li>
              <li>Volcanic Hydrothermal Spa Therapies</li>
              <li>Catamaran Expeditions to Uninhabited Islands</li>
              <li>Bespoke Candlelit Sandbar Dining</li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-haven-sand/50 gap-4">
          <p>&copy; {new Date().getFullYear()} {brand.name} Sanctuary &amp; Private Reserve. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-haven-gold transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-haven-gold transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-haven-gold transition-colors cursor-pointer">Guest Guidelines</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

HavenFooter.propTypes = {
  brand: PropTypes.object.isRequired,
  navigation: PropTypes.array.isRequired,
};
