const havenData = {
  brand: {
    name: 'E-YHAN',
    tagline: 'Coastal Eco-Luxury Sanctuary & Private Pool Villas',
    location: 'Guyabano, Sorsogon · Philippines',
    phone: '+63 (2) 8899-EYHAN',
    mobile: '+63 917 888 EYHAN',
    email: 'reservations@e-yhan.ph',
    conciergeEmail: 'concierge@e-yhan.ph',
    shortDescription:
      'A serene eco-luxury coastal sanctuary where panoramic Pacific infinity pools, sustainable architecture, and warm hospitality come together in effortless harmony.',
  },

  navigation: [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Our Villas', path: '/villas' },
    { label: 'Experiences', path: '/experiences' },
    { label: 'The Journal', path: '/journal' },
    { label: 'Contact', path: '/contact' },
  ],

  hero: {
    eyebrow: 'WELCOME TO E-YHAN',
    heading: 'Nature, Comfort and True Luxury',
    subtitle:
      'Discover luxury villas and private pool suites in Sorsogon’s most stunning coastal sanctuary, where untouched nature and refined comfort meet in perfect harmony.',
    cta: {
      label: 'EXPLORE VILLAS',
      path: '/villas',
    },
    reserveCta: {
      label: 'RESERVE NOW',
      path: '/contact',
    },
    // High-res daytime tropical pool with ocean and palms, matching the Haven mockup
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=2200&q=88',
  },

  ribbonItems: [
    { label: 'BEACHFRONT SUITES', icon: 'home' },
    { label: 'WORLD-CLASS SPA', icon: 'spa' },
    { label: 'PRIVATE POOL VILLAS', icon: 'pool', highlighted: true },
    { label: 'FINE DINING EXPERIENCE', icon: 'utensils' },
    { label: 'ECO-LUXURY SANCTUARY', icon: 'leaf' },
  ],

  commitment: {
    eyebrow: 'OUR COMMITMENT',
    heading: 'A More Meaningful Way to Travel',
    description:
      'We are committed to creating extraordinary stays that respect nature, celebrate local heritage, and deliver genuine Filipino hospitality. Every experience is intentionally designed to leave a positive impact for our guests, our communities, and the protected paradise we call home.',
    cards: [
      {
        id: 'c1',
        title: 'PEOPLE',
        subtitle: 'Meaningful Connections',
        description: 'Warm, intuitive hosting deeply rooted in genuine Bicolano warmth and care.',
        icon: 'leaf',
      },
      {
        id: 'c2',
        title: 'PLACES',
        subtitle: 'Extraordinary Destinations',
        description: 'Preserved coastline overlooking volcanic horizons and lush coastal flora.',
        icon: 'sun',
      },
      {
        id: 'c3',
        title: 'EXPERIENCES',
        subtitle: 'Moments That Last',
        description: 'Private catamaran sails, secret lagoon dips, and bespoke shorefront dining.',
        icon: 'heart',
      },
      {
        id: 'c4',
        title: 'A BRIGHTER TOMORROW',
        subtitle: 'Sustainable Hospitality',
        description: 'Solar microgrid power, zero single-use plastics, and marine habitat stewardship.',
        icon: 'sprout',
      },
    ],
  },

  scrollytelling: {
    eyebrow: 'SCROLL-TRIGGERED RETREAT JOURNEY',
    heading: 'A Day in the Haven Sanctuary',
    subtitle:
      'Scroll through the natural rhythm of our coastal eco-reserve—where slow living and refined comfort unfold across the day.',
    chapters: [
      {
        id: 'haven-ch1',
        step: '01',
        time: '07:00 AM',
        title: 'Morning Sun & Private Plunge Pool',
        subtitle: 'A Gentle Awakening by the Shoreline',
        description:
          'Wake up to birdsong and gentle Pacific waves. Step straight from your timber-lined bedroom into your private plunge pool, followed by organic tropical dragonfruit and cold-pressed coconut elixir.',
        highlights: [
          'Direct Villa Plunge Pool Immersion',
          'Freshly Harvested Organic Farm Breakfast',
          'Open-Air Coral Stone Sun Terrace',
        ],
        quote: '“The quiet morning breeze here feels like a gentle exhale from the world.”',
        image:
          'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1600&q=88',
      },
      {
        id: 'haven-ch2',
        step: '02',
        time: '11:30 AM',
        title: 'Volcanic Spa & Botanical Alchemy',
        subtitle: 'Natural Rejuvenation Under Swaying Palms',
        description:
          'Experience soothing geothermal stone therapy using heated minerals from Mount Bulusan, blended with indigenous ylang-ylang oils and deep lymphatic bamboo massages.',
        highlights: [
          'Geothermal Mineral Soaking Springs',
          'Wild Botanical Body Infusions',
          'Open-Air Garden Bathing Grottos',
        ],
        quote: '“Ancient volcanic minerals restore what modern life depletes.”',
        image:
          'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=88',
      },
      {
        id: 'haven-ch3',
        step: '03',
        time: '03:30 PM',
        title: 'Island Catamaran Trails & Snorkeling',
        subtitle: 'Sailing Crystalline Emerald Lagoons',
        description:
          'Set sail on our eco-catamaran to explore hidden sandbars and secluded coves along the Sorsogon coastline. Float over vibrant coral reefs in absolute serenity.',
        highlights: [
          'Zero-Emission Eco-Catamaran Cruising',
          'Guided Coral Sanctuary Exploration',
          'Gourmet Island Picnic Basket',
        ],
        quote: '“Emerald seas, untouched sands, and time measured only by the tide.”',
        image:
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=88',
      },
      {
        id: 'haven-ch4',
        step: '04',
        time: '07:30 PM',
        title: 'Candlelit Sandbar Dining & Stargazing',
        subtitle: 'Farm-to-Table Gastronomy Under the Stars',
        description:
          'Gather under lantern-lit palm canopies for a multi-course tasting dinner featuring ocean catch and organic regional ingredients, serenaded by gentle acoustic island melodies.',
        highlights: [
          'Bespoke Candlelit Sand Pavilion',
          'Sustainable Farm-to-Table Menu',
          'Stargazing by the Shoreline Fire Pit',
        ],
        quote: '“Where good food, warm laughter, and ocean breezes create everlasting memories.”',
        image:
          'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=88',
      },
    ],
  },

  villas: [
    {
      id: 'villa-ocean-pool',
      name: 'The Ocean Horizon Pool Villa',
      category: 'Signature Private Villa',
      size: '185 sqm / 1,990 sqft',
      capacity: '2 to 4 Guests',
      price: '$420',
      pricePeriod: 'per night',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=85',
      badge: 'Best Seller',
      description:
        'A light-filled sanctuary featuring an outdoor plunge pool, open-air sun deck, panoramic glass facades, and direct access to pristine private sand.',
      features: [
        'Private 10m Freshwater Plunge Pool',
        'Direct Oceanfront Beach Access',
        'Handcrafted Teak Daybeds & Outdoor Rain Shower',
        'Dedicated Stay Concierge',
      ],
    },
    {
      id: 'villa-cliffside-haven',
      name: 'The Cliffside Sunset Haven',
      category: 'Presidential Estate',
      size: '260 sqm / 2,800 sqft',
      capacity: 'Up to 6 Guests',
      price: '$550',
      pricePeriod: 'per night',
      image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1400&q=85',
      badge: 'Exclusive',
      description:
        'Elevated above the coastline with dramatic 270-degree sunset horizons over the Pacific, expansive entertainment lounge, and infinity edge hot tub.',
      features: [
        'Cantilevered Infinity Spa & Pool',
        'Sunset Wine Cellar & Barbecue Deck',
        'Private Butler & In-Villa Chef On Demand',
        'Bose Acoustic Surround Throughout',
      ],
    },
    {
      id: 'villa-palm-grove',
      name: 'The Palm Grove Eco-Suite',
      category: 'Garden & Pool Suite',
      size: '120 sqm / 1,290 sqft',
      capacity: '2 Guests',
      price: '$320',
      pricePeriod: 'per night',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=85',
      badge: 'Romantic Retreat',
      description:
        'Nestled amidst lush indigenous palms and fragrant frangipani trees, offering intimate seclusion, an open-concept stone bathtub, and private terrace.',
      features: [
        'Deep Soaking Volcanic Stone Tub',
        'Private Tropical Courtyard Garden',
        'Complimentary Daily Organic Breakfast',
        'Yoga Mats & Essential Oil Diffusers',
      ],
    },
    {
      id: 'villa-beachfront-sanctuary',
      name: 'The Grand Beachfront Residence',
      category: 'Multi-Bedroom Family Villa',
      size: '340 sqm / 3,660 sqft',
      capacity: 'Up to 8 Guests',
      price: '$780',
      pricePeriod: 'per night',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=85',
      badge: 'VIP Residence',
      description:
        'Our largest private estate with two master wings, double living pavilions, private beach cabana, and extensive infinity pool with sunken lounge.',
      features: [
        'Two King Master Bedrooms + Kids Loft',
        'Private Beachfront Cabana & Kayaks',
        'Complimentary Roundtrip Airport Chauffeur',
        'Dedicated Private Chef Service',
      ],
    },
  ],

  journal: {
    eyebrow: 'THE JOURNAL',
    heading: 'Inspiration for your Next Retreat',
    subtitle: 'Tips, stories, and travel guides to enrich your journey with E-YHAN.',
    articles: [
      {
        id: 'j1',
        title: 'The Art of Slow Living: Reconnecting by the Pacific Shore',
        category: 'WELLNESS & RETREAT',
        readTime: '4 min read',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
        excerpt:
          'How taking an unhurried pause in nature calms the nervous system and reawakens creativity.',
      },
      {
        id: 'j2',
        title: 'Volcanic Mineral Healing: The Secret Beneath Mount Bulusan',
        category: 'NATURAL WONDERS',
        readTime: '6 min read',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=85',
        excerpt:
          'Tracing the geothermal waters that naturally nourish our coastal mineral pools and spa treatments.',
      },
      {
        id: 'j3',
        title: 'Private Catamaran Island Trails: Secret Beaches of Sorsogon',
        category: 'EXPEDITIONS',
        readTime: '5 min read',
        image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=85',
        excerpt:
          'An insider guide to hidden tidal caves, pink sand sandbars, and emerald waters inaccessible by road.',
      },
    ],
  },

  testimonials: [
    {
      id: 't1',
      author: 'Sophia & Marc Davies',
      location: 'Singapore',
      quote:
        'E-YHAN is the true definition of effortless paradise. Waking up to the ocean breeze and enjoying our morning coffee in the private pool was transcendent.',
      stayed: 'Ocean Horizon Pool Villa',
    },
    {
      id: 't2',
      author: 'Elena Rostova',
      location: 'Geneva, Switzerland',
      quote:
        'The commitment to nature and genuine Filipino warmth blew us away. The architecture blends seamlessly with the palms, and the food was Michelin-caliber fresh.',
      stayed: 'The Cliffside Sunset Haven',
    },
  ],

  footer: {
    newsletterTitle: 'Join the E-YHAN Circle',
    newsletterSubtitle: 'Receive seasonal retreat announcements and exclusive villa privileges.',
    copyright: `© 2026 E-YHAN Resort & Private Sanctuary. All rights reserved.`,
  },
};

export default havenData;
