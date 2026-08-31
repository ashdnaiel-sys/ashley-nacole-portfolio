export type ImageCategory =
  | 'Beauty'
  | 'Commercial'
  | 'Fashion'
  | 'Lifestyle'
  | 'Fitness'
  | 'Swim'
  | 'Skincare'
  | 'Hair'
  | 'E-Commerce'
  | 'Editorial';

export type PortfolioImage = {
  id: string;
  src?: string;
  alt: string;
  category: ImageCategory;
  orientation: 'portrait' | 'landscape' | 'square';
  featured: boolean;
  order: number;
  visible: boolean;
  width?: number;
  height?: number;
  focalPoint?: string;
};

export type DigitalImage = {
  id: string;
  src?: string;
  alt: string;
  label: string;
  orientation: 'portrait' | 'landscape' | 'square';
  order: number;
  visible: boolean;
  width?: number;
  height?: number;
};

export type MovementVideo = {
  id: string;
  title: string;
  type: 'mp4' | 'youtube' | 'vimeo';
  src?: string;
  poster?: string;
  visible: boolean;
  order: number;
};

export const modelData = {
  name: 'Ashley Nacole',
  role: 'Model',
  siteUrl: 'https://ashleynacole.com',
  email: 'REPLACE_WITH_PROFESSIONAL_EMAIL',
  instagramHandle: '@ashleynacole011',
  instagramUrl: 'https://www.instagram.com/ashleynacole011/',
  heroLine: 'Texas • New York • Los Angeles • Available Internationally',
  location: 'Texas, USA',
  passport: 'United States',
  representation: {
    agency: 'Neal Hamil Agency',
    market: 'Texas',
    status: 'Nonexclusive',
  },
  availability:
    'Available for travel and temporary placement in U.S. and international markets',
  stats: {
    height: { imperial: `5'8"`, metric: 'approximately 173 cm' },
    bust: { imperial: '32.5"', metric: 'approximately 83 cm' },
    waist: { imperial: '25.5"', metric: 'approximately 65 cm' },
    hips: { imperial: '37"', metric: 'approximately 94 cm' },
    dress: 'US 4–6',
    shoe: 'US 9 / approximately EU 40',
    hair: 'Dark Brown',
    eyes: 'Brown',
  },
  biography: [
    'Ashley Nacole is a Texas-based model with experience in commercial modeling, independent brand work, runway, and creative test shoots. Her work spans commercial beauty, lifestyle, fashion, e-commerce, skincare, hair, swim, and active/fitness modeling.',
    'An experienced athlete, Ashley also brings natural movement ability to fitness and wellness work, with experience in yoga, Pilates, boxing, running, and general athletics.',
    'Currently represented nonexclusively by Neal Hamil Agency in Texas, Ashley is available for bookings, agency meetings, travel, and temporary placement in additional U.S. and international markets.',
  ],
  specialties: [
    'Commercial Modeling',
    'Fashion & E-Commerce',
    'Beauty / Skincare',
    'Hair',
    'Lifestyle',
    'Swim',
    'Fitness & Wellness',
    'Runway',
    'Creative Editorial',
  ],
  athleticSkills: ['Yoga', 'Pilates', 'Boxing', 'Running', 'General Sports / Athletic Movement'],
  credits: [] as string[],
  compCard: {
    label: 'Download Comp Card',
    path: '/ashley-nacole-comp-card.pdf',
    enabled: false,
  },
  seo: {
    title: 'Ashley Nacole | Model',
    description:
      'Official modeling portfolio of Ashley Nacole. Commercial, beauty, lifestyle, fashion, swim, fitness and international modeling.',
    portfolioTitle: 'Ashley Nacole | Portfolio',
    digitalsTitle: 'Ashley Nacole | Current Digitals',
    ogImage: '/images/portfolio/fashion-fur-color.jpeg',
  },
} as const;

export const portfolioImages: PortfolioImage[] = [
  {
    id: 'hero',
    src: '/images/portfolio/fashion-fur-color.jpeg',
    alt: 'Ashley Nacole in a fur coat photographed in an urban fashion editorial',
    category: 'Fashion',
    orientation: 'portrait',
    featured: true,
    order: 1,
    visible: true,
    width: 1024,
    height: 1536,
    focalPoint: '50% 38%',
  },
  {
    id: 'fashion-denim-fullbody',
    src: '/images/portfolio/fashion-denim-fullbody.jpeg',
    alt: 'Ashley Nacole in a denim fashion look in a clean studio full-body portrait',
    category: 'Fashion', orientation: 'portrait', featured: true, order: 2, visible: true,
    width: 1660, height: 2490,
  },
  {
    id: 'fashion-industrial-portrait',
    src: '/images/portfolio/fashion-industrial-portrait.jpeg',
    alt: 'Ashley Nacole in a black tank and striped trousers in an industrial fashion portrait',
    category: 'Fashion', orientation: 'portrait', featured: false, order: 5, visible: true,
    width: 1024, height: 1536,
  },
  {
    id: 'fashion-accessory-close',
    src: '/images/portfolio/fashion-accessory-close.jpeg',
    alt: 'Ashley Nacole in a clean studio accessory fashion portrait with a black tote',
    category: 'Fashion', orientation: 'portrait', featured: true, order: 10, visible: true,
    width: 1365, height: 2048,
  },
  {
    id: 'fashion-cream-lockbridge',
    src: '/images/portfolio/fashion-cream-lockbridge.jpeg',
    alt: 'Ashley Nacole in a flowing cream dress in an outdoor fashion editorial on a lock-covered bridge',
    category: 'Fashion', orientation: 'portrait', featured: true, order: 9, visible: true,
    width: 1024, height: 1536,
  },
  {
    id: 'fashion-bw-fence',
    src: '/images/portfolio/fashion-bw-fence.jpeg',
    alt: 'Ashley Nacole in a black dress in a black-and-white urban fashion portrait',
    category: 'Fashion', orientation: 'portrait', featured: true, order: 10, visible: true,
    width: 1024, height: 1536,
  },
  {
    id: 'fashion-cream-garden',
    src: '/images/portfolio/fashion-cream-garden.jpeg',
    alt: 'Ashley Nacole in a cream dress photographed among greenery in a soft outdoor fashion portrait',
    category: 'Fashion', orientation: 'portrait', featured: false, order: 31, visible: true,
    width: 1024, height: 1536,
  },
  {
    id: 'fashion-city-seated',
    src: '/images/portfolio/fashion-city-seated.jpeg',
    alt: 'Ashley Nacole seated in an urban fashion editorial wearing a patterned dress and boots',
    category: 'Fashion', orientation: 'portrait', featured: false, order: 10, visible: true,
    width: 1024, height: 1536,
  },
  {
    id: 'fashion-industrial-lean',
    src: '/images/portfolio/fashion-industrial-lean.jpeg',
    alt: 'Ashley Nacole in a dynamic low-angle industrial fashion pose',
    category: 'Fashion', orientation: 'portrait', featured: false, order: 11, visible: true,
    width: 1024, height: 1536,
  },
  {
    id: 'fashion-fur-bw',
    src: '/images/portfolio/fashion-fur-bw.jpeg',
    alt: 'Ashley Nacole in a black-and-white fur fashion portrait with windblown hair',
    category: 'Fashion', orientation: 'portrait', featured: false, order: 12, visible: true,
    width: 1024, height: 1536,
  },
  {
    id: 'fashion-sheer-side',
    src: '/images/portfolio/fashion-sheer-side.jpeg',
    alt: 'Ashley Nacole in a sheer black fashion look photographed in profile',
    category: 'Fashion', orientation: 'portrait', featured: false, order: 13, visible: true,
    width: 1660, height: 2490,
  },
  {
    id: 'fashion-city-transit',
    src: '/images/portfolio/fashion-city-transit.jpeg',
    alt: 'Ashley Nacole in an urban fashion portrait beside city transit',
    category: 'Fashion', orientation: 'portrait', featured: false, order: 14, visible: true,
    width: 1024, height: 1536,
  },
  {
    id: 'fashion-city-fullbody',
    src: '/images/portfolio/fashion-city-fullbody.jpeg',
    alt: 'Ashley Nacole in a full-length urban fashion editorial wearing a patterned dress',
    category: 'Fashion', orientation: 'portrait', featured: false, order: 15, visible: true,
    width: 1024, height: 1536,
  },
  {
    id: 'fashion-sheer-back',
    src: '/images/portfolio/fashion-sheer-back.jpeg',
    alt: 'Ashley Nacole in a sheer black fashion look in a three-quarter studio pose',
    category: 'Fashion', orientation: 'portrait', featured: false, order: 16, visible: true,
    width: 1660, height: 2490,
  },
  {
    id: 'fashion-sheer-front',
    src: '/images/portfolio/fashion-sheer-front.jpeg',
    alt: 'Ashley Nacole in a sheer black fashion look in a front-facing studio pose',
    category: 'Fashion', orientation: 'portrait', featured: false, order: 17, visible: true,
    width: 1660, height: 2490,
  },
  {
    id: 'fashion-industrial-close',
    src: '/images/portfolio/fashion-industrial-close.jpeg',
    alt: 'Ashley Nacole in a close low-angle industrial fashion portrait',
    category: 'Fashion', orientation: 'portrait', featured: false, order: 18, visible: true,
    width: 1024, height: 1536,
  },
  {
    id: 'fashion-accessory-crouch',
    src: '/images/portfolio/fashion-accessory-crouch.jpeg',
    alt: 'Ashley Nacole in a crouched studio fashion pose featuring a black tote and ankle boots',
    category: 'Fashion', orientation: 'portrait', featured: false, order: 19, visible: true,
    width: 1365, height: 2048,
  },
  {
    id: 'fashion-white-lace-door',
    src: '/images/portfolio/fashion-white-lace-door.jpeg',
    alt: 'Ashley Nacole in a white lace dress in an urban doorway fashion editorial',
    category: 'Fashion', orientation: 'portrait', featured: false, order: 20, visible: true,
    width: 1024, height: 1536,
  },
  {
    id: 'fashion-white-lace-street',
    src: '/images/portfolio/fashion-white-lace-street.jpeg',
    alt: 'Ashley Nacole in a white lace dress in a street fashion portrait',
    category: 'Fashion', orientation: 'portrait', featured: false, order: 21, visible: true,
    width: 1024, height: 1536,
  },
  {
    id: 'fashion-cream-grass',
    src: '/images/portfolio/fashion-cream-grass.jpeg',
    alt: 'Ashley Nacole reclining in a cream dress in an outdoor fashion editorial',
    category: 'Fashion', orientation: 'portrait', featured: false, order: 22, visible: true,
    width: 1024, height: 1536,
  },
  {
    id: 'fashion-denim-beauty-close',
    src: '/images/portfolio/fashion-denim-beauty-close.jpeg',
    alt: 'Ashley Nacole in a clean denim fashion beauty portrait with wet-look hair',
    category: 'Fashion', orientation: 'portrait', featured: true, order: 5, visible: true,
    width: 1365, height: 2048,
    focalPoint: '50% 38%',
  },
  {
    id: 'fashion-black-bodysuit-seated',
    src: '/images/portfolio/fashion-black-bodysuit-seated.jpeg',
    alt: 'Ashley Nacole seated in a minimal black bodysuit studio fashion portrait',
    category: 'Fashion', orientation: 'portrait', featured: false, order: 49, visible: true,
    width: 1151, height: 1536,
  },
  {
    id: 'fashion-bw-ribbed-standing',
    src: '/images/portfolio/fashion-bw-ribbed-standing.jpeg',
    alt: 'Ashley Nacole in a black-and-white ribbed tank studio fashion portrait',
    category: 'Fashion', orientation: 'portrait', featured: false, order: 50, visible: true,
    width: 1152, height: 1536,
  },
  {
    id: 'fashion-bw-ribbed-motion',
    src: '/images/portfolio/fashion-bw-ribbed-motion.jpeg',
    alt: 'Ashley Nacole in a dynamic black-and-white studio fashion portrait with wet-look hair',
    category: 'Fashion', orientation: 'portrait', featured: false, order: 51, visible: true,
    width: 1152, height: 1536,
  },
  {
    id: 'fashion-denim-body-full',
    src: '/images/portfolio/fashion-denim-body-full.jpeg',
    alt: 'Ashley Nacole in a minimal denim styling full-body studio fashion portrait',
    category: 'Fashion', orientation: 'portrait', featured: false, order: 52, visible: true,
    width: 1365, height: 2048,
  },
  {
    id: 'fashion-denim-stool-pose',
    src: '/images/portfolio/fashion-denim-stool-pose.jpeg',
    alt: 'Ashley Nacole in an oversized denim jacket and jeans in a seated studio fashion pose',
    category: 'Fashion', orientation: 'portrait', featured: false, order: 53, visible: true,
    width: 1024, height: 1280,
  },
  {
    id: 'fashion-denim-shoulder-close',
    src: '/images/portfolio/fashion-denim-shoulder-close.jpeg',
    alt: 'Ashley Nacole in an oversized denim jacket in a dramatic close studio fashion portrait',
    category: 'Fashion', orientation: 'portrait', featured: false, order: 54, visible: true,
    width: 1024, height: 1536,
  },
  {
    id: 'lifestyle-black-smile-close',
    src: '/images/portfolio/lifestyle-black-smile-close.jpeg',
    alt: 'Ashley Nacole smiling in a black fashion look in a clean lifestyle portrait',
    category: 'Lifestyle', orientation: 'portrait', featured: false, order: 23, visible: true,
    width: 1024, height: 1536,
    focalPoint: '50% 32%',
  },
  {
    id: 'lifestyle-black-smile-fullbody',
    src: '/images/portfolio/lifestyle-black-smile-fullbody.jpeg',
    alt: 'Ashley Nacole smiling in a black fashion look in a full-length lifestyle portrait',
    category: 'Lifestyle', orientation: 'portrait', featured: false, order: 24, visible: true,
    width: 1024, height: 1536,
  },
  {
    id: 'lifestyle-green-front',
    src: '/images/portfolio/lifestyle-green-front.jpeg',
    alt: 'Ashley Nacole smiling in a green coordinated casual set in a clean lifestyle full-body portrait',
    category: 'Lifestyle', orientation: 'portrait', featured: false, order: 25, visible: true,
    width: 1179, height: 1714,
  },
  {
    id: 'lifestyle-green-playful',
    src: '/images/portfolio/lifestyle-green-playful.jpeg',
    alt: 'Ashley Nacole smiling in a green coordinated casual set in a playful lifestyle pose',
    category: 'Lifestyle', orientation: 'portrait', featured: false, order: 26, visible: true,
    width: 1023, height: 1536,
  },
  {
    id: 'lifestyle-green-arms-up',
    src: '/images/portfolio/lifestyle-green-arms-up.jpeg',
    alt: 'Ashley Nacole in a green coordinated casual set in a relaxed lifestyle pose',
    category: 'Lifestyle', orientation: 'portrait', featured: false, order: 27, visible: true,
    width: 1179, height: 1743,
  },
  {
    id: 'lifestyle-bw-seated',
    src: '/images/portfolio/lifestyle-bw-seated.jpeg',
    alt: 'Ashley Nacole seated in a black-and-white lifestyle studio portrait',
    category: 'Lifestyle', orientation: 'portrait', featured: false, order: 28, visible: true,
    width: 1152, height: 1536,
  },
  {
    id: 'fitness-studio-tying-shoe',
    src: '/images/portfolio/fitness-studio-tying-shoe.jpeg',
    alt: 'Ashley Nacole in an athletic studio portrait kneeling to adjust her sneaker',
    category: 'Fitness', orientation: 'portrait', featured: true, order: 7, visible: true,
    width: 1152, height: 1536,
    focalPoint: '50% 42%',
  },
  {
    id: 'fitness-studio-seated-sneakers',
    src: '/images/portfolio/fitness-studio-seated-sneakers.jpeg',
    alt: 'Ashley Nacole seated in an athletic studio look with sneakers',
    category: 'Fitness', orientation: 'portrait', featured: false, order: 27, visible: true,
    width: 1024, height: 1536,
  },
  {
    id: 'fitness-leopard-seated-smile',
    src: '/images/portfolio/fitness-leopard-seated-smile.jpeg',
    alt: 'Ashley Nacole smiling in a leopard-print activewear set in a seated fitness portrait',
    category: 'Fitness', orientation: 'portrait', featured: false, order: 28, visible: true,
    width: 1024, height: 1536,
  },
  {
    id: 'fitness-leopard-dynamic',
    src: '/images/portfolio/fitness-leopard-dynamic.jpeg',
    alt: 'Ashley Nacole in a leopard-print activewear set in a playful dynamic fitness pose',
    category: 'Fitness', orientation: 'portrait', featured: false, order: 29, visible: true,
    width: 1025, height: 1536,
  },
  {
    id: 'fitness-leopard-standing',
    src: '/images/portfolio/fitness-leopard-standing.jpeg',
    alt: 'Ashley Nacole smiling in a leopard-print activewear set in a clean full-length fitness portrait',
    category: 'Fitness', orientation: 'portrait', featured: false, order: 30, visible: true,
    width: 1179, height: 1724,
  },

  {
    id: 'skincare-serum-neutral',
    src: '/images/portfolio/skincare-serum-neutral.jpeg',
    alt: 'Ashley Nacole in a clean commercial skincare beauty test portrait holding a serum bottle',
    category: 'Skincare', orientation: 'portrait', featured: true, order: 3, visible: true,
    width: 1365, height: 2048,
    focalPoint: '50% 34%',
  },
  {
    id: 'beauty-mascara-smile',
    src: '/images/portfolio/beauty-mascara-smile-01.jpeg',
    alt: 'Ashley Nacole smiling in a clean commercial beauty test portrait with a mascara wand',
    category: 'Beauty', orientation: 'portrait', featured: true, order: 6, visible: true,
    width: 1365, height: 2048,
    focalPoint: '50% 34%',
  },
  {
    id: 'beauty-bw-playful-close',
    src: '/images/portfolio/beauty-bw-playful-close.jpeg',
    alt: 'Ashley Nacole in a playful black-and-white beauty close-up with wet-look hair',
    category: 'Beauty', orientation: 'portrait', featured: false, order: 32, visible: true,
    width: 1152, height: 1536,
  },
  {
    id: 'skincare-serum-smile',
    src: '/images/portfolio/skincare-serum-smile.jpeg',
    alt: 'Ashley Nacole smiling in a clean commercial skincare beauty test portrait holding a serum bottle',
    category: 'Skincare', orientation: 'portrait', featured: false, order: 33, visible: true,
    width: 1304, height: 1921,
  },
  {
    id: 'beauty-mascara-smile-02',
    src: '/images/portfolio/beauty-mascara-smile-02.jpeg',
    alt: 'Ashley Nacole smiling in a commercial beauty test portrait with a mascara wand',
    category: 'Beauty', orientation: 'portrait', featured: false, order: 34, visible: true,
    width: 1365, height: 2048,
  },
  {
    id: 'beauty-mascara-smile-03',
    src: '/images/portfolio/beauty-mascara-smile-03.jpeg',
    alt: 'Ashley Nacole in a bright commercial beauty test close-up with a mascara wand',
    category: 'Beauty', orientation: 'portrait', featured: false, order: 35, visible: true,
    width: 1234, height: 1762,
  },
  {
    id: 'beauty-mascara-laugh-01',
    src: '/images/portfolio/beauty-mascara-laugh-01.jpeg',
    alt: 'Ashley Nacole laughing in a bright commercial beauty test portrait with a mascara wand',
    category: 'Beauty', orientation: 'portrait', featured: false, order: 36, visible: true,
    width: 1365, height: 2048,
  },
  {
    id: 'beauty-mascara-laugh-02',
    src: '/images/portfolio/beauty-mascara-laugh-02.jpeg',
    alt: 'Ashley Nacole laughing naturally in a commercial beauty test portrait with a mascara wand',
    category: 'Beauty', orientation: 'portrait', featured: false, order: 37, visible: true,
    width: 1365, height: 2048,
  },
  {
    id: 'beauty-direct-clean-close',
    src: '/images/portfolio/beauty-direct-clean-close.jpeg',
    alt: 'Ashley Nacole in a clean direct beauty close-up against a bright studio background',
    category: 'Beauty', orientation: 'portrait', featured: false, order: 60, visible: true,
    width: 1061, height: 1600,
    focalPoint: '50% 34%',
  },
  {
    id: 'beauty-black-jacket-smile',
    src: '/images/portfolio/beauty-black-jacket-smile.jpeg',
    alt: 'Ashley Nacole smiling in a soft beauty portrait with a high ponytail and textured black jacket',
    category: 'Beauty', orientation: 'portrait', featured: false, order: 61, visible: true,
    width: 1179, height: 1365,
    focalPoint: '50% 34%',
  },


  {
    id: 'lifestyle-denim-stool-laugh',
    src: '/images/portfolio/lifestyle-denim-stool-laugh.jpeg',
    alt: 'Ashley Nacole laughing naturally in a relaxed denim lifestyle portrait',
    category: 'Lifestyle', orientation: 'portrait', featured: true, order: 4, visible: true,
    width: 1152, height: 1536,
    focalPoint: '50% 36%',
  },
  {
    id: 'lifestyle-denim-floor-serious',
    src: '/images/portfolio/lifestyle-denim-floor-serious.jpeg',
    alt: 'Ashley Nacole in a relaxed denim lifestyle portrait seated on the floor',
    category: 'Lifestyle', orientation: 'portrait', featured: false, order: 40, visible: true,
    width: 1152, height: 1536,
  },
  {
    id: 'lifestyle-denim-stool-soft-smile',
    src: '/images/portfolio/lifestyle-denim-stool-soft-smile.jpeg',
    alt: 'Ashley Nacole softly smiling in a relaxed denim lifestyle portrait',
    category: 'Lifestyle', orientation: 'portrait', featured: false, order: 41, visible: true,
    width: 1152, height: 1536,
  },
  {
    id: 'lifestyle-denim-jacket-smile',
    src: '/images/portfolio/lifestyle-denim-jacket-smile.jpeg',
    alt: 'Ashley Nacole smiling in an oversized denim jacket in a clean lifestyle portrait',
    category: 'Lifestyle', orientation: 'portrait', featured: false, order: 42, visible: true,
    width: 1365, height: 2048,
  },
  {
    id: 'lifestyle-denim-jacket-close',
    src: '/images/portfolio/lifestyle-denim-jacket-close.jpeg',
    alt: 'Ashley Nacole in an oversized denim jacket in a close lifestyle portrait',
    category: 'Lifestyle', orientation: 'portrait', featured: false, order: 43, visible: true,
    width: 1365, height: 2048,
  },
  {
    id: 'lifestyle-leopard-chair',
    src: '/images/portfolio/lifestyle-leopard-chair.jpeg',
    alt: 'Ashley Nacole in a leopard-print dress in a warm interior lifestyle editorial',
    category: 'Lifestyle', orientation: 'portrait', featured: false, order: 44, visible: true,
    width: 1365, height: 2048,
  },
  {
    id: 'lifestyle-denim-seated-full',
    src: '/images/portfolio/lifestyle-denim-seated-full.jpeg',
    alt: 'Ashley Nacole seated in a relaxed double-denim lifestyle portrait',
    category: 'Lifestyle', orientation: 'portrait', featured: false, order: 45, visible: true,
    width: 1024, height: 1536,
  },
  {
    id: 'lifestyle-denim-back-close',
    src: '/images/portfolio/lifestyle-denim-back-close.jpeg',
    alt: 'Ashley Nacole in a close denim lifestyle portrait with wet-look hair',
    category: 'Lifestyle', orientation: 'portrait', featured: false, order: 46, visible: true,
    width: 1024, height: 1536,
  },
  {
    id: 'lifestyle-cream-brick-alley',
    src: '/images/portfolio/lifestyle-cream-brick-alley.jpeg',
    alt: 'Ashley Nacole moving through a brick passage in a flowing cream lifestyle look',
    category: 'Lifestyle', orientation: 'portrait', featured: false, order: 47, visible: true,
    width: 1024, height: 1536,
  },
  {
    id: 'lifestyle-cream-lounge',
    src: '/images/portfolio/lifestyle-cream-lounge.jpeg',
    alt: 'Ashley Nacole reclining in a warm interior cream lace lifestyle portrait',
    category: 'Lifestyle', orientation: 'portrait', featured: false, order: 48, visible: true,
    width: 1024, height: 1536,
  },
  {
    id: 'swim-brasil-bikini',
    src: '/images/portfolio/swim-brasil-bikini.jpeg',
    alt: 'Ashley Nacole in a green and yellow swim look in a warm studio portrait',
    category: 'Swim', orientation: 'portrait', featured: true, order: 8, visible: true,
    width: 1067, height: 1600,
    focalPoint: '50% 38%',
  },
  {
    id: 'swim-leaf-close',
    src: '/images/portfolio/swim-leaf-close.jpeg',
    alt: 'Ashley Nacole in a warm-toned swim editorial portrait with a tropical leaf',
    category: 'Swim', orientation: 'portrait', featured: false, order: 57, visible: true,
    width: 1037, height: 1600,
  },
  {
    id: 'swim-leaf-fullbody',
    src: '/images/portfolio/swim-leaf-fullbody.jpeg',
    alt: 'Ashley Nacole in a full-length warm-toned swim editorial with a tropical leaf',
    category: 'Swim', orientation: 'portrait', featured: false, order: 58, visible: true,
    width: 1067, height: 1600,
  },
  {
    id: 'swim-leaf-standing',
    src: '/images/portfolio/swim-leaf-standing.jpeg',
    alt: 'Ashley Nacole in a warm-toned standing swim editorial with a tropical leaf',
    category: 'Swim', orientation: 'portrait', featured: false, order: 59, visible: true,
    width: 1113, height: 1600,
  },
];

export const digitalImages: DigitalImage[] = [
  { id: 'digital-front-closeup', label: 'Natural front close-up', alt: 'Current unretouched natural front close-up of Ashley Nacole', orientation: 'portrait', order: 1, visible: true },
  { id: 'digital-smiling-closeup', label: 'Smiling close-up', alt: 'Current unretouched smiling close-up of Ashley Nacole', orientation: 'portrait', order: 2, visible: true },
  { id: 'digital-three-quarter', label: '3/4 face', alt: 'Current unretouched three-quarter face digital of Ashley Nacole', orientation: 'portrait', order: 3, visible: true },
  { id: 'digital-profile', label: 'Side profile', alt: 'Current unretouched side profile digital of Ashley Nacole', orientation: 'portrait', order: 4, visible: true },
  { id: 'digital-full-front', label: 'Full-length front', alt: 'Current unretouched full-length front digital of Ashley Nacole', orientation: 'portrait', order: 5, visible: true },
  { id: 'digital-full-side', label: 'Full-length side', alt: 'Current unretouched full-length side digital of Ashley Nacole', orientation: 'portrait', order: 6, visible: true },
  { id: 'digital-full-back', label: 'Full-length back', alt: 'Current unretouched full-length back digital of Ashley Nacole', orientation: 'portrait', order: 7, visible: true },
  { id: 'digital-swim-front', label: 'Optional swim front', alt: 'Current unretouched swim front digital of Ashley Nacole', orientation: 'portrait', order: 8, visible: false },
  { id: 'digital-swim-side', label: 'Optional swim side', alt: 'Current unretouched swim side digital of Ashley Nacole', orientation: 'portrait', order: 9, visible: false },
];

export const movementVideos: MovementVideo[] = [
  { id: 'movement-reel', title: 'Modeling Movement Reel', type: 'mp4', visible: true, order: 1 },
  { id: 'walk-turn', title: 'Walk / Turn', type: 'mp4', visible: true, order: 2 },
  { id: 'fitness-movement', title: 'Fitness Movement', type: 'mp4', visible: true, order: 3 },
];

export const primaryStats = [
  ['Height', `${modelData.stats.height.imperial} / ${modelData.stats.height.metric}`],
  ['Bust', `${modelData.stats.bust.imperial} / ${modelData.stats.bust.metric}`],
  ['Waist', `${modelData.stats.waist.imperial} / ${modelData.stats.waist.metric}`],
  ['Hips', `${modelData.stats.hips.imperial} / ${modelData.stats.hips.metric}`],
  ['Dress', modelData.stats.dress],
  ['Shoe', modelData.stats.shoe],
] as const;

export const secondaryStats = [
  ['Hair', modelData.stats.hair],
  ['Eyes', modelData.stats.eyes],
  ['Location', modelData.location],
  ['Passport', modelData.passport],
  ['Representation', `${modelData.representation.agency} — ${modelData.representation.market} · ${modelData.representation.status}`],
  ['Availability', modelData.availability],
] as const;
