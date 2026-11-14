import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import havenData from '../data/havenData';
import HavenHero from '../components/HavenHero';
import HavenFeatureRibbon from '../components/HavenFeatureRibbon';
import HavenCommitmentSection from '../components/HavenCommitmentSection';
import HavenScrollytelling from '../components/HavenScrollytelling';
import HavenVillaCard from '../components/HavenVillaCard';
import HavenJournalSection from '../components/HavenJournalSection';
import HavenTestimonials from '../components/HavenTestimonials';
import HavenReveal from '../components/HavenReveal';

export default function HavenHome() {
  const navigate = useNavigate();
  const { brand, hero, ribbonItems, commitment, scrollytelling, villas, journal, testimonials } = havenData;

  return (
    <>
      <Helmet>
        <title>{`${brand.name} | ${brand.tagline}`}</title>
        <meta name="description" content={brand.shortDescription} />
      </Helmet>

      {/* Hero Section */}
      <HavenHero hero={hero} brand={brand} />

      {/* Horizontal Feature Ribbon directly under Hero */}
      <HavenFeatureRibbon items={ribbonItems} />

      {/* The 4 Arch Commitment Cards Section from the user mockup */}
      <HavenCommitmentSection commitment={commitment} />

      {/* Scrollytelling Section: Interactive Day in the Haven Sanctuary */}
      {scrollytelling && <HavenScrollytelling scrollytelling={scrollytelling} />}

      {/* Private Pool Villas Showcase */}
      <section className="py-24 sm:py-32 bg-haven-bg border-b border-haven-border/40">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl space-y-3">
              <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.32em] text-haven-goldDark font-semibold block">
                OUR RESIDENCES
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-haven-deep font-normal">
                Curated Private Villas
              </h2>
              <p className="text-sm text-haven-deep/70 font-light leading-relaxed">
                Each secluded villa at {brand.name} is designed with floor-to-ceiling glass, private plunge pools, and uninterrupted horizons of coastal Sorsogon.
              </p>
            </div>
            <button
              onClick={() => navigate('/villas')}
              className="px-8 py-3.5 border border-haven-slate text-haven-deep font-sans text-xs uppercase tracking-[0.22em] font-medium hover:bg-haven-deep hover:text-white transition-all rounded-lg shrink-0"
            >
              View All 4 Villas &rarr;
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {villas.slice(0, 2).map((villa, idx) => (
              <HavenReveal key={villa.id} delay={idx * 150}>
                <HavenVillaCard villa={villa} />
              </HavenReveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Journal: Inspiration for your Next Retreat */}
      <HavenJournalSection journal={journal} />

      {/* What Our Guests Say */}
      <HavenTestimonials testimonials={testimonials} />

      {/* Reserve CTA Banner */}
      <section className="py-28 px-4 sm:px-8 lg:px-10 bg-haven-deep text-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <span className="text-[10px] font-sans uppercase tracking-[0.32em] text-haven-goldLight block font-semibold">
            YOUR SECLUDED GETAWAY
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal leading-tight">
            Begin Your Retreat at {brand.name}
          </h2>
          <p className="text-sm sm:text-base text-haven-sand/80 font-light leading-relaxed max-w-xl mx-auto">
            Book directly through our private concierge for guaranteed best rates, complimentary daily breakfast, and customized island excursions.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto px-10 py-4 bg-haven-gold text-haven-dark font-sans text-xs uppercase tracking-[0.24em] font-semibold hover:bg-haven-goldLight transition-all rounded-lg shadow-xl"
            >
              Inquire Private Stay
            </button>
            <button
              onClick={() => navigate('/villas')}
              className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-sans text-xs uppercase tracking-[0.24em] hover:bg-white/10 transition-all rounded-lg"
            >
              Explore Residences
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
