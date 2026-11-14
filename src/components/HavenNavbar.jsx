import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';

export default function HavenNavbar({ brand, navigation }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';
  const showDarkHeader = !isHome || isScrolled || mobileOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[110] transition-[background-color,padding,border-color,box-shadow] duration-300 ${
        showDarkHeader
          ? 'bg-haven-dark/95 backdrop-blur-md border-b border-white/10 shadow-xl py-2.5 sm:py-3.5'
          : 'bg-transparent border-b border-transparent shadow-none py-3 sm:py-5'
      }`}
    >
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-10 flex items-center justify-between">
        {/* Brand Logo with Botanical / Wave mark */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2.5 sm:gap-3 text-left group focus:outline-none"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-haven-gold flex items-center justify-center text-haven-gold group-hover:scale-105 transition-transform">
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
          </div>
          <div>
            <span className="font-sans text-sm sm:text-xl font-bold tracking-[0.16em] sm:tracking-[0.22em] text-white block">
              {brand?.name || 'E-YHAN'}
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-sans uppercase tracking-[0.18em]">
          {navigation?.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`transition-colors py-1 relative ${
                  isActive
                    ? 'text-haven-gold font-semibold'
                    : 'text-white/90 hover:text-haven-gold'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-haven-gold rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Reserve Now Pill Button (like the Haven template) */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={() => navigate('/contact')}
            className="px-6 py-2.5 bg-haven-gold text-haven-dark font-sans text-xs uppercase tracking-[0.22em] font-medium hover:bg-haven-goldLight transition-all duration-300 shadow-lg"
          >
            Reserve Now
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-white hover:text-haven-gold focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-haven-dark/98 backdrop-blur-2xl border-b border-white/10 px-8 py-6 space-y-4 shadow-2xl">
          {navigation?.map((item) => (
            <button
              key={item.path}
              onClick={() => {
                setMobileOpen(false);
                navigate(item.path);
              }}
              className="block w-full text-left text-xs uppercase tracking-[0.24em] text-haven-sand hover:text-haven-gold py-2.5 border-b border-white/5"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileOpen(false);
                navigate('/contact');
              }}
              className="w-full py-3 bg-haven-gold text-haven-dark text-xs uppercase tracking-[0.22em] font-medium"
            >
              Reserve Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

HavenNavbar.propTypes = {
  brand: PropTypes.object.isRequired,
  navigation: PropTypes.array.isRequired,
};
