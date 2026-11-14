import PropTypes from 'prop-types';

export default function HavenFeatureRibbon({ items = [] }) {
  const getIcon = (type) => {
    switch (type) {
      case 'home':
        return (
          <svg className="w-4 h-4 text-haven-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        );
      case 'spa':
        return (
          <svg className="w-4 h-4 text-haven-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      case 'pool':
        return (
          <svg className="w-4 h-4 text-haven-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M4 14c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2m-15 4c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2m-15 4c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2" />
          </svg>
        );
      case 'utensils':
        return (
          <svg className="w-4 h-4 text-haven-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      default:
        return (
          <svg className="w-4 h-4 text-haven-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        );
    }
  };

  return (
    <div
      id="feature-ribbon"
      className="w-full bg-white border-y border-haven-border/60 py-3 sm:py-5 px-2 sm:px-8 lg:px-10 shadow-sm"
    >
      <div className="max-w-[1536px] mx-auto flex flex-wrap items-center justify-center sm:justify-around gap-x-4 sm:gap-x-6 gap-y-2.5 sm:gap-y-0 text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.16em] sm:tracking-[0.22em] text-haven-slate/90">
        {items.map((item, idx) => (
          <div key={item.label} className="flex items-center gap-2 shrink-0">
            {getIcon(item.icon)}
            <span
              className={
                item.highlighted
                  ? 'text-haven-goldDark font-bold'
                  : 'font-medium'
              }
            >
              {item.label}
            </span>
            {idx < items.length - 1 && (
              <span className="hidden lg:inline-block ml-6 text-gray-300 font-light">|</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

HavenFeatureRibbon.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.string,
      highlighted: PropTypes.bool,
    })
  ).isRequired,
};
