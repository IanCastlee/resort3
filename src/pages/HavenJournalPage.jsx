import { Helmet } from 'react-helmet-async';
import havenData from '../data/havenData';
import HavenJournalSection from '../components/HavenJournalSection';

export default function HavenJournalPage() {
  const { brand, journal } = havenData;

  return (
    <div className="pt-36 sm:pt-40 pb-28">
      <Helmet>
        <title>{`The Journal & Retreat Stories | ${brand.name}`}</title>
      </Helmet>

      <div className="text-center max-w-3xl mx-auto mb-16 px-5 sm:px-8 lg:px-10 space-y-4">
        <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.32em] text-haven-goldDark font-semibold block">
          DISPATCHES &amp; ESSAYS
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl text-haven-deep font-normal">
          The {brand.name} Journal
        </h1>
        <p className="text-sm sm:text-base text-haven-deep/75 font-light leading-relaxed">
          Stories on sustainable living, volcanic hot spring wellness, architecture, and secret island destinations around {brand.location}.
        </p>
      </div>

      <HavenJournalSection journal={journal} />
    </div>
  );
}
