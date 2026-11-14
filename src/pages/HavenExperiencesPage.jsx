import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import havenData from '../data/havenData';
import HavenReveal from '../components/HavenReveal';

export default function HavenExperiencesPage() {
  const navigate = useNavigate();
  const { brand } = havenData;

  const experiences = [
    {
      id: 'e1',
      title: 'Private Catamaran Sunset Sail',
      category: 'OCEAN SAFARI',
      duration: '3 Hours',
      description: 'Glide across the azure waters of Sorsogon on our private catamaran, paired with champagne, fresh tropical fruits, and dolphins.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
    },
    {
      id: 'e2',
      title: 'Geothermal Mineral Body Ritual',
      category: 'SPA & WELLNESS',
      duration: '90 Minutes',
      description: 'Ancient healing using warm volcanic basalt stones, coconut milk exfoliation, and natural sulfur mineral spring pools.',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=85',
    },
    {
      id: 'e3',
      title: 'Candlelit Sandbar Dining',
      category: 'CULINARY ARTISTRY',
      duration: 'Evening Exclusive',
      description: 'An intimate table set on a secluded tidal sandbar under the Pacific stars, with an 8-course tasting menu crafted by our Executive Chef.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85',
    },
    {
      id: 'e4',
      title: 'Bulusan Rainforest & Lake Expedition',
      category: 'NATURE ADVENTURE',
      duration: 'Half Day',
      description: 'Guided kayaking through mystical emerald waters surrounded by dense prehistoric ferns and canopy birdwatching.',
      image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=85',
    },
  ];

  return (
    <div className="pt-36 sm:pt-40 pb-28 px-5 sm:px-8 lg:px-10 max-w-[1536px] mx-auto">
      <Helmet>
        <title>{`Curated Experiences & Adventures | ${brand.name}`}</title>
      </Helmet>

      <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
        <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.32em] text-haven-goldDark font-semibold block">
          CURATED ADVENTURES
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl text-haven-deep font-normal">
          Unforgettable Coastal Moments
        </h1>
        <p className="text-sm sm:text-base text-haven-deep/75 font-light leading-relaxed">
          From tranquil volcanic water rituals to private catamaran expeditions along {brand.location}, every experience is designed around your pace.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {experiences.map((exp, idx) => (
          <HavenReveal key={exp.id} delay={(idx % 2) * 150}>
            <div className="bg-white border border-haven-stone rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col justify-between">
              <div className="h-72 overflow-hidden bg-haven-stone">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[10px] font-sans uppercase tracking-widest text-haven-goldDark mb-2">
                    <span>{exp.category}</span>
                    <span className="text-haven-muted">{exp.duration}</span>
                  </div>
                  <h3 className="font-serif text-2xl text-haven-deep mb-3 font-normal">
                    {exp.title}
                  </h3>
                  <p className="text-xs text-haven-deep/70 font-light leading-relaxed mb-6">
                    {exp.description}
                  </p>
                </div>
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full py-3 bg-haven-cream hover:bg-haven-gold hover:text-haven-dark text-haven-deep font-sans text-xs uppercase tracking-widest font-semibold transition-colors rounded-lg text-center"
                >
                  Inquire Experience &rarr;
                </button>
              </div>
            </div>
          </HavenReveal>
        ))}
      </div>
    </div>
  );
}
