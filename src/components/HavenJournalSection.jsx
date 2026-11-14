import PropTypes from 'prop-types';
import HavenReveal from './HavenReveal';
import { useNavigate } from 'react-router-dom';

export default function HavenJournalSection({ journal }) {
  const navigate = useNavigate();

  return (
    <section className="py-24 sm:py-32 bg-white border-b border-haven-border/40">
      <div className="max-w-[1536px] mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section Heading */}
        <div className="max-w-2xl mb-16 sm:mb-20 space-y-4">
          <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.32em] text-haven-goldDark font-semibold block">
            {journal.eyebrow}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-haven-deep font-normal leading-tight">
            {journal.heading}
          </h2>
          <p className="text-sm text-haven-deep/75 font-light leading-relaxed">
            {journal.subtitle}
          </p>
        </div>

        {/* 3-Column Magazine Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {journal.articles.map((article, idx) => (
            <HavenReveal key={article.id} delay={idx * 140}>
              <article className="group cursor-pointer flex flex-col justify-between h-full bg-haven-bg border border-haven-stone/70 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500">
                <div>
                  <div className="relative h-60 overflow-hidden bg-haven-stone">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 rounded-full text-[9px] font-sans uppercase tracking-widest text-haven-deep font-semibold shadow-sm">
                      {article.category}
                    </div>
                  </div>

                  <div className="p-7">
                    <span className="text-[10px] text-haven-muted tracking-wider uppercase block mb-2 font-sans">
                      {article.readTime}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-haven-deep font-normal mb-3 group-hover:text-haven-goldDark transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-xs text-haven-deep/70 font-light leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <button
                    onClick={() => navigate('/journal')}
                    className="text-xs font-sans uppercase tracking-[0.22em] text-haven-goldDark hover:text-haven-deep font-semibold inline-flex items-center gap-2 group-hover:translate-x-1 transition-all"
                  >
                    Read Journal &rarr;
                  </button>
                </div>
              </article>
            </HavenReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

HavenJournalSection.propTypes = {
  journal: PropTypes.object.isRequired,
};
