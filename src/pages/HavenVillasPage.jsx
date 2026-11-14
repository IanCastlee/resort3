import { Helmet } from 'react-helmet-async';
import havenData from '../data/havenData';
import HavenVillaCard from '../components/HavenVillaCard';
import HavenReveal from '../components/HavenReveal';

export default function HavenVillasPage() {
  const { brand, villas } = havenData;

  return (
    <div className="pt-36 sm:pt-40 pb-28 px-5 sm:px-8 lg:px-10 max-w-[1536px] mx-auto">
      <Helmet>
        <title>{`Private Pool Villas & Suites | ${brand.name}`}</title>
      </Helmet>

      <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
        <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.32em] text-haven-goldDark font-semibold block">
          THE RESIDENCES
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl text-haven-deep font-normal">
          The Private Villa Collection
        </h1>
        <p className="text-sm sm:text-base text-haven-deep/75 font-light leading-relaxed">
          Crafted with indigenous teak, local volcanic stone, and expansive glass portals, our four private villas offer absolute sanctuary along {brand.location}.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {villas.map((villa, idx) => (
          <HavenReveal key={villa.id} delay={(idx % 2) * 150}>
            <HavenVillaCard villa={villa} />
          </HavenReveal>
        ))}
      </div>
    </div>
  );
}
