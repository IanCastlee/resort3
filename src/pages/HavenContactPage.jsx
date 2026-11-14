import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import havenData from '../data/havenData';

export default function HavenContactPage() {
  const [searchParams] = useSearchParams();
  const preselectedVilla = searchParams.get('villa') || '';

  const { brand, villas } = havenData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    villa: preselectedVilla || villas[0]?.name || '',
    arrival: '2026-11-20',
    departure: '2026-11-23',
    adults: '2',
    children: '0',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedRef = 'EYHAN-' + Math.floor(100000 + Math.random() * 900000);
    setRefId(generatedRef);
    setSubmitted(true);
  };

  return (
    <div className="pt-36 sm:pt-40 pb-28 px-4 sm:px-8 lg:px-10 max-w-[1536px] mx-auto">
      <Helmet>
        <title>{`Reserve & Contact | ${brand.name}`}</title>
      </Helmet>

      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.32em] text-haven-goldDark font-semibold block">
          DIRECT SANCTUARY INQUIRY
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl text-haven-deep font-normal">
          Plan Your Stay with Us
        </h1>
        <p className="text-sm sm:text-base text-haven-deep/75 font-light leading-relaxed">
          Experience direct-booking privileges: zero middleman commissions, complimentary welcome champagne, and personalized concierge hosting.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Form Container */}
        <div className="lg:col-span-8 bg-white border border-haven-stone rounded-2xl p-8 sm:p-12 shadow-sm">
          {submitted ? (
            <div className="text-center py-12 space-y-6">
              <div className="w-16 h-16 rounded-full bg-haven-cream text-haven-goldDark flex items-center justify-center mx-auto text-2xl font-bold">
                ✓
              </div>
              <h3 className="font-serif text-3xl text-haven-deep font-normal">
                Reservation Request Received
              </h3>
              <p className="text-sm text-haven-deep/75 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-haven-deep">{formData.name}</strong>. Your inquiry for <strong className="text-haven-deep">{formData.villa}</strong> has been prioritized with our Front Desk Atelier.
              </p>
              <div className="inline-block bg-haven-cream px-6 py-3 rounded-lg border border-haven-stone">
                <span className="text-xs uppercase tracking-widest text-haven-muted block">Reservation Reference</span>
                <span className="font-sans font-bold text-lg text-haven-deep">{refId}</span>
              </div>
              <div className="pt-4">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3 bg-haven-gold text-haven-dark font-sans text-xs uppercase tracking-widest font-semibold rounded-lg"
                >
                  Send Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-wider text-haven-deep/80 mb-2 font-medium">
                    Guest Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Maria Santos"
                    className="w-full bg-haven-bg border border-haven-stone px-4 py-3 text-xs text-haven-deep rounded-lg focus:outline-none focus:border-haven-gold"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-wider text-haven-deep/80 mb-2 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    className="w-full bg-haven-bg border border-haven-stone px-4 py-3 text-xs text-haven-deep rounded-lg focus:outline-none focus:border-haven-gold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-wider text-haven-deep/80 mb-2 font-medium">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+63 9XX XXX XXXX"
                    className="w-full bg-haven-bg border border-haven-stone px-4 py-3 text-xs text-haven-deep rounded-lg focus:outline-none focus:border-haven-gold"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-wider text-haven-deep/80 mb-2 font-medium">
                    Select Residence / Villa *
                  </label>
                  <select
                    name="villa"
                    value={formData.villa}
                    onChange={handleChange}
                    className="w-full bg-haven-bg border border-haven-stone px-4 py-3 text-xs text-haven-deep rounded-lg focus:outline-none focus:border-haven-gold"
                  >
                    {villas.map((v) => (
                      <option key={v.id} value={v.name}>
                        {v.name} ({v.price}/night)
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <label className="block text-[10px] font-sans uppercase tracking-wider text-haven-deep/80 mb-1 font-medium">
                    Arrival Date *
                  </label>
                  <input
                    type="date"
                    name="arrival"
                    required
                    value={formData.arrival}
                    onChange={handleChange}
                    className="w-full bg-haven-bg border border-haven-stone px-3 py-2.5 text-xs text-haven-deep rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-sans uppercase tracking-wider text-haven-deep/80 mb-1 font-medium">
                    Departure Date *
                  </label>
                  <input
                    type="date"
                    name="departure"
                    required
                    value={formData.departure}
                    onChange={handleChange}
                    className="w-full bg-haven-bg border border-haven-stone px-3 py-2.5 text-xs text-haven-deep rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-sans uppercase tracking-wider text-haven-deep/80 mb-1 font-medium">
                    Adults
                  </label>
                  <select
                    name="adults"
                    value={formData.adults}
                    onChange={handleChange}
                    className="w-full bg-haven-bg border border-haven-stone px-3 py-2.5 text-xs text-haven-deep rounded-lg"
                  >
                    <option value="1">1 Adult</option>
                    <option value="2">2 Adults</option>
                    <option value="3">3 Adults</option>
                    <option value="4">4 Adults</option>
                    <option value="6">6+ Adults</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-sans uppercase tracking-wider text-haven-deep/80 mb-1 font-medium">
                    Children
                  </label>
                  <select
                    name="children"
                    value={formData.children}
                    onChange={handleChange}
                    className="w-full bg-haven-bg border border-haven-stone px-3 py-2.5 text-xs text-haven-deep rounded-lg"
                  >
                    <option value="0">0</option>
                    <option value="1">1 Child</option>
                    <option value="2">2 Children</option>
                    <option value="3">3+ Children</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-sans uppercase tracking-wider text-haven-deep/80 mb-2 font-medium">
                  Special Inclusions &amp; Celebrations
                </label>
                <textarea
                  name="notes"
                  rows="3"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Honeymoon setup, dietary preferences, catamaran charter request..."
                  className="w-full bg-haven-bg border border-haven-stone px-4 py-3 text-xs text-haven-deep rounded-lg focus:outline-none focus:border-haven-gold"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-haven-gold text-haven-dark font-sans text-xs uppercase tracking-[0.24em] font-semibold hover:bg-haven-goldLight transition-all rounded-lg shadow-md"
              >
                Submit Direct Reservation Inquiry &rarr;
              </button>
            </form>
          )}
        </div>

        {/* Right Info Box */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-haven-deep text-white rounded-2xl p-8 sm:p-10 shadow-lg space-y-6">
            <span className="text-[10px] font-sans uppercase tracking-[0.28em] text-haven-goldLight block font-semibold">
              FRONT DESK ATELIER
            </span>
            <h3 className="font-serif text-2xl text-white font-normal">
              Direct Inquiries
            </h3>
            <p className="text-xs text-haven-sand/80 font-light leading-relaxed">
              Our guest ambassadors answer reservations directly from our {brand.name} property in {brand.location}.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10 text-xs text-haven-sand/90">
              <div className="flex items-start gap-3">
                <span className="text-haven-gold font-bold">Location:</span>
                <span>{brand.location}</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-haven-gold font-bold">Hotline:</span>
                <span>{brand.phone}</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-haven-gold font-bold">Email:</span>
                <span>{brand.email}</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={`tel:${brand.phone.replace(/[^0-9+]/g, '')}`}
                className="block text-center py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-sans uppercase tracking-widest font-semibold transition-colors"
              >
                Call Front Desk Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
