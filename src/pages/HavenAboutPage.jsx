import { Helmet } from 'react-helmet-async';
import havenData from '../data/havenData';
import HavenCommitmentSection from '../components/HavenCommitmentSection';

export default function HavenAboutPage() {
  const { brand, commitment } = havenData;

  return (
    <div className="pt-36 sm:pt-40 pb-28">
      <Helmet>
        <title>{`About Our Sanctuary | ${brand.name}`}</title>
      </Helmet>

      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10 text-center mb-20 space-y-4">
        <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.32em] text-haven-goldDark font-semibold block">
          OUR STORY &amp; ETHOS
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl text-haven-deep font-normal leading-tight">
          Where True Nature Meets Refined Hospitality
        </h1>
        <p className="text-sm sm:text-base text-haven-deep/75 font-light leading-relaxed max-w-2xl mx-auto">
          Born from a passion to preserve the unspoiled coastal beauty of {brand.location}, {brand.name} was envisioned as an architectural sanctuary where travelers slow down, breathe, and reconnect.
        </p>
      </div>

      {/* Featured Architecture Photo */}
      <div className="max-w-[1536px] mx-auto px-5 sm:px-8 lg:px-10 mb-24">
        <div className="h-96 sm:h-[480px] rounded-3xl overflow-hidden shadow-xl border border-haven-stone">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85"
            alt={`${brand.name} Architecture`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Commitment Section (The 4 Arch Cards) */}
      <HavenCommitmentSection commitment={commitment} />
    </div>
  );
}
