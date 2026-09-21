// Visual metadata that doesn't need translation - paired with i18n copy by id/index.

export const menuVisuals: Record<string, { from: string; to: string; icon: 'coffee' | 'droplets' | 'leaf' | 'cookie' }> = {
  espresso: { from: '#2a3038', to: '#121820', icon: 'coffee' },
  alt: { from: '#323840', to: '#181e28', icon: 'droplets' },
  nocoffee: { from: '#2e343c', to: '#1e2530', icon: 'leaf' },
  sweets: { from: '#363c44', to: '#121820', icon: 'cookie' }
};

// Numbered professional drink photos from /public/assets
export const menuCarouselImages = [
  { id: '1', src: '/assets/1.webp', alt: 'Signature coffee drink at 92° specialty coffee house in Tashkent' },
  { id: '4', src: '/assets/4.webp', alt: 'Iced specialty coffee served at 92° in Tashkent' },
  { id: '10', src: '/assets/10.webp', alt: 'Layered coffee drink from the 92° menu' },
  { id: '18', src: '/assets/18.webp', alt: 'Espresso-based drink prepared at 92° coffee house' },
  { id: '27', src: '/assets/27.webp', alt: 'House specialty beverage at 92° Tashkent' }
];

// Resized professional photos for hero interactive gallery
export const heroImages = [
  { id: '0418', src: '/assets/IMGL0418-3_resized.webp', label: 'Detail', alt: 'Close-up of a specialty coffee at 92° in Tashkent' },
  { id: '1001', src: '/assets/IMGL1001_resized.webp', label: 'Drink', alt: 'Crafted coffee drink served at 92° coffee house' },
  { id: '4786', src: '/assets/IMGL4786_resized.webp', label: 'Atmosphere', alt: 'Atmosphere inside 92° specialty coffee house, Tashkent' },
  { id: '4819', src: '/assets/IMGL4819-2_resized.webp', label: 'Interior', alt: 'Interior of 92° coffee house in Mirzo Ulugbek, Tashkent' },
  { id: '4826', src: '/assets/IMGL4826-2_resized.webp', label: 'Moment', alt: 'Guests and coffee culture at 92° Tashkent' },
  { id: '4866', src: '/assets/IMGL4866_resized.webp', label: 'Brew', alt: 'Fresh brew prepared at 92 degrees' },
  { id: '4897', src: '/assets/IMGL4897-2_resized.webp', label: 'Signature', alt: 'Signature 92° drink with latte art' },
  { id: '4916', src: '/assets/IMGL4916_resized.webp', label: 'Cup', alt: 'Coffee cup at 92° specialty coffee house' },
  { id: '5012', src: '/assets/IMGL5012_resized.webp', label: 'Table', alt: 'Table setting at 92° coffee house in Tashkent' },
  { id: '5021', src: '/assets/IMGL5021_resized.webp', label: 'Space', alt: 'Seating and interior design of 92° Tashkent' },
  { id: '5058', src: '/assets/IMGL5058_resized.webp', label: 'Scene', alt: 'Coffee scene at 92° specialty coffee house' }
];

// Named atmosphere / carousel photos from /public/assets
export const galleryCarouselImages = [
  { id: 'inside-2', src: '/assets/inside_2.webp', alt: 'Interior of 92° specialty coffee house in Tashkent' },
  { id: 'inside-coffee', src: '/assets/inside_with_coffe.webp', alt: 'Coffee served inside 92° cafe in Tashkent' },
  { id: 'inside-cafe', src: '/assets/inside_with_cofe.webp', alt: 'Cafe interior and bar at 92° Tashkent' },
  { id: 'imgl-4819', src: '/assets/IMGL4819-2_resized.webp', alt: 'Seating space at 92° coffee house' },
  { id: 'imgl-4826', src: '/assets/IMGL4826-2_resized.webp', alt: 'Moment inside 92° specialty coffee house' },
  { id: 'imgl-4866', src: '/assets/IMGL4866_resized.webp', alt: 'Brewing coffee at 92° in Tashkent' }
];

export const galleryVideos = [
  { id: 'video-1', src: '/videos/video_1.mp4', label: 'Inside 92° coffee house in Tashkent' },
  { id: 'video-2', src: '/videos/video_2.mp4', label: 'Atmosphere and vibe at 92° Tashkent' },
  { id: 'video-3', src: '/videos/video_3.mp4', label: 'Coffee being prepared at 92°' }
];

export const yandexReviews = {
  rating: 4.8,
  ratingsCount: 16,
  reviewsCount: 14,
  url: 'https://yandex.uz/maps/org/92degree/51966742093/reviews/',
  items: [
    {
      name: 'Maruan Oweid',
      text: "To be honest, as a foreigner living here in Tashkent, it's the best coffee you can find in this city, and the staff is very friendly, polite, and attentive."
    },
    {
      name: 'Julia Drzymala',
      text: 'New spot, new vibe, something very different in Tashkent, a lot of cool drinks and the aesthetic 10/10.'
    },
    {
      name: 'Рухшона Адилова',
      text: 'Кофейня супер атмосферная, большой плюс за необычный интерьер, персонал любезный и дружелюбный.'
    },
    {
      name: 'Н А',
      text: 'Очень люблю кофейню 92. Всегда уютно и вкусно. Мои фавориты — спаниш латте, карамельный фраппе и Ice Special 92.'
    },
    {
      name: 'Малика Абдурахимова',
      text: 'Очень атмосферное место. Бариста готовит нереальные напитки — особенно Special 92 и карамельный фрапп.'
    },
    {
      name: 'Madina Burieva',
      text: 'Лучшее кофе, которое я пробовала в Ташкенте. Уютная атмосфера, приветливый сервис, pet friendly.'
    }
  ]
};

export const galleryVisuals = [
  { from: '#2a3038', to: '#121820' },
  { from: '#323840', to: '#181e28' },
  { from: '#2e343c', to: '#1e2530' },
  { from: '#363c44', to: '#121820' },
  { from: '#30363e', to: '#181e28' },
  { from: '#3a4048', to: '#1e2530' }
];

export const contact = {
  phone: '+998 90 123 45 67',
  instagram: 'https://www.instagram.com/92degree.c1/',
  telegram: 'https://t.me/92degrees_coffee',
  menuUrl: 'https://92-page.vercel.app/',
  // Buyuk Ipak Yoʻli mahalla fuqarolar yigʻini, 2, Mirzo Ulugʻbek tumani, Toshkent
  lat: 41.31188,
  lng: 69.288568,
  mapEmbedUrl:
    'https://www.openstreetmap.org/export/embed.html?bbox=69.283568%2C41.30688%2C69.293568%2C41.31688&layer=mapnik&marker=41.31188%2C69.288568',
  mapLink: 'https://yandex.uz/maps/?ll=69.288568%2C41.31188&mode=search&pt=69.288568,41.31188&z=17'
};
