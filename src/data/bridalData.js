// Data Source for Luxury Bridal Makeup Artist Website

export const EMAILJS_CONFIG = {
  // ─────────────────────────────────────────────────────────────────────────
  // HOW TO SET UP (free at https://www.emailjs.com):
  // 1. Create an account → Dashboard → Add Email Service → copy Service ID
  // 2. Create an Email Template → copy Template ID
  // 3. Go to Account → API Keys → copy Public Key
  // ─────────────────────────────────────────────────────────────────────────
  SERVICE_ID: 'YOUR_SERVICE_ID',    // e.g. 'service_abc123'
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID', // e.g. 'template_xyz456'
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY',   // e.g. 'ABCDE12345FGHij'
};

export const ARTIST_INFO = {
  name: "AYESHA MALIK",
  title: "BRIDAL MAKEUP ARTIST",
  headline: "Your Dream Bridal Look, Beautifully Yours.",
  subtitle: "Professional bridal makeup and styling crafted to make your wedding day unforgettable.",
  yearsExperience: "5+",
  happyBrides: "500+",
  rating: "4.9",
  reviewsCount: "280+",
  phone: "+91 98765 43210",
  whatsappNumber: "919876543210",
  email: "contact@ayeshamalikbridal.com",
  studioName: "Ayesha Malik Bridal Studio",
  address: "Suite 402, Luxury Promenade, Bandra West, Mumbai, Maharashtra 400050",
  hours: "Mon - Sun: 10 AM - 7 PM",
  mapsUrl: "https://maps.google.com/?q=Bandra+West+Mumbai",
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    pinterest: "https://pinterest.com"
  }
};

export const TRUST_STATS = [
  {
    id: "rating",
    value: "4.9",
    unit: "Rating",
    label: "4.9 Google Rating",
    subtitle: "Based on 280+ Verified Reviews",
    icon: "Star"
  },
  {
    id: "brides",
    value: "500+",
    unit: "Brides",
    label: "Happy Brides",
    subtitle: "Across India & Destination Weddings",
    icon: "Heart"
  },
  {
    id: "experience",
    value: "5+",
    unit: "Years",
    label: "Years Experience",
    subtitle: "High Fashion & Bridal Mastery",
    icon: "Award"
  },
  {
    id: "personalized",
    value: "100%",
    unit: "Custom",
    label: "Personalized Styling",
    subtitle: "Custom Skin Prep & Outfit Draping",
    icon: "Sparkles"
  }
];

export const BRIDAL_FEATURE = {
  eyebrow: "BRIDAL MAKEUP",
  headline: "Your Wedding Day Deserves Your Best Look.",
  description: "We create personalized bridal looks that enhance your natural beauty while ensuring long-lasting, camera-ready perfection for every ritual from pheras to reception.",
  highlights: [
    {
      title: "HD & Premium Makeup",
      detail: "Ultra-fine high-definition formulations that blend seamlessly for flawless skin texture."
    },
    {
      title: "Airbrush Techniques",
      detail: "Sweat-proof, light-as-air coverage designed to last over 16+ hours under intense lighting."
    },
    {
      title: "Bridal Hair Styling & Draping",
      detail: "Customized hair extensions, traditional floral placements, and precision dupatta draping."
    }
  ],
  startingPrice: "₹18,000",
  image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1000&q=85"
};

export const SERVICES = [
  {
    id: "bridal",
    title: "Bridal",
    subtitle: "Traditional & Contemporary Luxury Bridal Look",
    description: "Complete bridal makeover including HD/Airbrush makeup, intricate hairstyling, dupatta draping, and jewelry setting for your main wedding ceremony.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    tags: ["HD Makeup", "Dupatta Draping", "Lashes Included"]
  },
  {
    id: "pre-wedding",
    title: "Pre-Wedding",
    subtitle: "Mehendi, Haldi & Sangeet Ceremonies",
    description: "Vibrant, dewy, and effortless styling tailored for festive pre-wedding functions that shine in daylight and dance photos.",
    image: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?auto=format&fit=crop&w=800&q=80",
    tags: ["Dewy Finish", "Floral Hair", "Long Lasting"]
  },
  {
    id: "engagement",
    title: "Engagement",
    subtitle: "Sophisticated Soft Glam & Modern Ring Ceremony",
    description: "Soft romantic glam with subtle shimmer and soft contoured features designed to complement couture gowns and lehengas.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    tags: ["Soft Glam", "Radiant Glow", "Custom Lip Color"]
  },
  {
    id: "party",
    title: "Party",
    subtitle: "Reception, Bridesmaid & Festive Styling",
    description: "High-impact evening looks with striking eyes or bold lips for wedding guests, sisters of the bride, and reception galas.",
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80",
    tags: ["High Impact", "Smokey Eyes", "Glam Finish"]
  },
  {
    id: "hair",
    title: "Hair",
    subtitle: "Couture Braids, Sleek Buns & Dupatta Draping",
    description: "Expert hair design using premium extensions, fresh floral gajras, decorative accessories, and double dupatta pinning.",
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80",
    tags: ["Hair Extensions", "Gajra Setting", "Secure Draping"]
  }
];

export const PORTFOLIO_CATEGORIES = ["All", "Bridal", "Pre-Wedding", "Engagement", "Party"];

export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Royal Crimson Bridal Look",
    category: "Bridal",
    aspectRatio: "portrait", // 3:4 ratio
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=85",
    description: "Classic red bridal lehenga look with gold winged liner and nude glossy lips."
  },
  {
    id: 2,
    title: "Pastel Radiance Sangeet",
    category: "Pre-Wedding",
    aspectRatio: "square", // 1:1 ratio
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=85",
    description: "Soft rose blush tones and romantic curls for a sunlit Sangeet ceremony."
  },
  {
    id: 3,
    title: "Champagne Velvet Engagement",
    category: "Engagement",
    aspectRatio: "landscape", // 4:3 ratio
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=85",
    description: "Monochromatic champagne glam with soft contouring and nude lips."
  },
  {
    id: 4,
    title: "Contemporary Ivory Bride",
    category: "Bridal",
    aspectRatio: "portrait",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=85",
    description: "Minimalist ivory lehenga styling with glass skin finish and defined lashes."
  },
  {
    id: 5,
    title: "Sunset Haldi Glow",
    category: "Pre-Wedding",
    aspectRatio: "landscape",
    image: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?auto=format&fit=crop&w=900&q=85",
    description: "Waterproof dewy makeup with fresh marigold floral crown braid."
  },
  {
    id: 6,
    title: "Midnight Reception Glam",
    category: "Party",
    aspectRatio: "square",
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=85",
    description: "Smokey emerald eye detail with sculpted highlighters for evening reception."
  },
  {
    id: 7,
    title: "Traditional South Silk Bride",
    category: "Bridal",
    aspectRatio: "portrait",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=85",
    description: "Kanjeevaram silk pairing with matte complexion and antique gold jewelry setting."
  },
  {
    id: 8,
    title: "Modern Cocktail Reception",
    category: "Party",
    aspectRatio: "landscape",
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=900&q=85",
    description: "Hollywood waves with bold red lip accent for black-tie reception."
  }
];

export const PACKAGES = [
  {
    id: "essential",
    name: "ESSENTIAL",
    price: "₹18,000",
    popular: false,
    badge: null,
    description: "Perfect for intimate weddings & classic bridal styling.",
    features: [
      "HD Premium Waterproof Makeup",
      "Classic Bridal Hair Styling",
      "Single Dupatta Draping",
      "Standard Silk False Lashes",
      "Basic Skin Preparation",
      "On-Venue Artist Travel"
    ],
    ctaText: "Check Availability"
  },
  {
    id: "signature",
    name: "SIGNATURE",
    price: "₹28,000",
    popular: true,
    badge: "MOST REQUESTED",
    description: "Our signature luxury experience for the bride who wants flawless airbrush perfection.",
    features: [
      "Ultra-HD Airbrush & HD Blended Makeup",
      "Advanced Couture Hair Extensions & Styling",
      "Double Dupatta & Heavy Jewelry Draping",
      "3D Premium Mink Lashes",
      "Pre-Bridal Skin & Hair Consultation",
      "Personalized Touch-Up Kit Included",
      "On-Venue Dedicated Team"
    ],
    ctaText: "Check Availability"
  },
  {
    id: "luxury",
    name: "LUXURY",
    price: "₹45,000",
    popular: false,
    badge: "FULL WEDDING VIP",
    description: "Complete multi-event VIP package with trial session & assistant touch-up service.",
    features: [
      "Luxury HD / Airbrush Bridal Makeup",
      "Full Bridal Trial Session at Studio",
      "2 Pre-Wedding Function Looks (Haldi/Mehendi)",
      "Assistant On-Site for Pheras & Reception Touch-ups",
      "Luxury Skin Prep & Facial Massage",
      "Mother of Bride Complementary Express Look"
    ],
    ctaText: "Check Availability"
  }
];

export const ABOUT_ARTIST = {
  eyebrow: "MEET YOUR MAKEUP ARTIST",
  statement: "Creating Bridal Looks That Feel Like You.",
  description: "With over 5+ years of experience in high-fashion and luxury bridal artistry, my approach blends modern precision techniques with timeless elegance. Every bride possesses a unique aura; my signature style is designed to amplify your authentic beauty so you feel confident, radiant, and completely yourself on your special day.",
  portrait: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=85",
  contactEmail: "ayesha@ayeshamalikbridal.com", // receives course enquiries
  stats: [
    { value: "5+", label: "Years Experience" },
    { value: "500+", label: "Happy Brides" },
    { value: "100%", label: "Certified Artist" }
  ]
};

export const MAKEUP_CLASSES = [
  {
    id: "foundation",
    title: "Foundation Makeup Course",
    badge: "BEGINNER FRIENDLY",
    badgeColor: "gold",
    tagline: "Start your beauty journey with solid professional skills.",
    duration: "3 Weeks",
    sessions: "12 Sessions",
    sessionLength: "2 hrs / session",
    price: "₹12,000",
    popular: false,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Skin Types & Undertone Theory",
      "Primer, Foundation & Concealer Techniques",
      "Eye Shadow Blending (Day & Night Looks)",
      "Contouring & Highlighting Basics",
      "Lip Art & Colour Theory",
      "HD Camera-Ready Finish",
      "Product Knowledge & Brand Guide",
      "Kit List & Hygiene Protocols"
    ]
  },
  {
    id: "advanced-bridal",
    title: "Advanced Bridal Makeup Course",
    badge: "MOST POPULAR",
    badgeColor: "rose",
    tagline: "Master the art of luxury bridal styling across all traditions.",
    duration: "6 Weeks",
    sessions: "24 Sessions",
    sessionLength: "3 hrs / session",
    price: "₹28,000",
    popular: true,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "HD & Airbrush Bridal Makeup (All Skin Tones)",
      "South Indian, North Indian & Muslim Bridal Looks",
      "Dupatta Draping & Jewelry Setting",
      "Pre-Bridal Skin Prep & Facial Protocols",
      "Advanced Eye Techniques (Cut-crease, Smokey, Lash Placement)",
      "Sangeet, Mehendi & Haldi Function Styling",
      "Bridal Hair Extensions & Gajra Setting",
      "Client Communication & Booking Strategy",
      "Live Model Practice Sessions",
      "Professional Portfolio Shoot Included"
    ]
  },
  {
    id: "professional-artist",
    title: "Professional Artist Certification",
    badge: "CAREER PROGRAM",
    badgeColor: "gold",
    tagline: "Launch your full-time career as a certified makeup artist.",
    duration: "12 Weeks",
    sessions: "48 Sessions",
    sessionLength: "3 hrs / session",
    price: "₹55,000",
    popular: false,
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Complete Foundation + Advanced Bridal Curriculum",
      "Editorial & High-Fashion Makeup",
      "Film, TV & Photoshoot Makeup",
      "Special FX & Body Art Basics",
      "Airbrush Machine Training & Maintenance",
      "Business Setup, Pricing & Client Contracts",
      "Instagram & Social Media Portfolio Strategy",
      "5 Live Bridal Practice Sessions",
      "Certification & Letter of Recommendation",
      "Post-Course Mentorship (3 Months)"
    ]
  }
];
