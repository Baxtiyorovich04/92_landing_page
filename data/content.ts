// Visual metadata that doesn't need translation - paired with i18n copy by id/index.

export const menuVisuals: Record<string, { from: string; to: string; icon: 'coffee' | 'droplets' | 'leaf' | 'cookie' }> = {
  espresso: { from: '#2a3038', to: '#121820', icon: 'coffee' },
  alt: { from: '#323840', to: '#181e28', icon: 'droplets' },
  nocoffee: { from: '#2e343c', to: '#1e2530', icon: 'leaf' },
  sweets: { from: '#363c44', to: '#121820', icon: 'cookie' }
};

// Numbered professional drink photos from /public/assets
export const menuCarouselImages = [
  { id: '1', src: '/assets/1.webp', alt: 'Drink 1' },
  { id: '4', src: '/assets/4.webp', alt: 'Drink 4' },
  { id: '10', src: '/assets/10.webp', alt: 'Drink 10' },
  { id: '18', src: '/assets/18.webp', alt: 'Drink 18' },
  { id: '27', src: '/assets/27.webp', alt: 'Drink 27' }
];

// Resized professional photos for hero interactive gallery
export const heroImages = [
  { id: '0418', src: '/assets/IMGL0418-3_resized.webp', alt: '92° detail' },
  { id: '1001', src: '/assets/IMGL1001_resized.webp', alt: '92° drink' },
  { id: '4786', src: '/assets/IMGL4786_resized.webp', alt: '92° atmosphere' },
  { id: '4819', src: '/assets/IMGL4819-2_resized.webp', alt: '92° interior' },
  { id: '4826', src: '/assets/IMGL4826-2_resized.webp', alt: '92° moment' },
  { id: '4866', src: '/assets/IMGL4866_resized.webp', alt: '92° brew' },
  { id: '4897', src: '/assets/IMGL4897-2_resized.webp', alt: '92° signature drink' },
  { id: '4916', src: '/assets/IMGL4916_resized.webp', alt: '92° cup' },
  { id: '5012', src: '/assets/IMGL5012_resized.webp', alt: '92° table moment' },
  { id: '5021', src: '/assets/IMGL5021_resized.webp', alt: '92° space' },
  { id: '5058', src: '/assets/IMGL5058_resized.webp', alt: '92° coffee scene' }
];

// Named atmosphere / carousel photos from /public/assets
export const galleryCarouselImages = [
  { id: 'inside-2', src: '/assets/inside_2.webp', alt: 'Interior' },
  { id: 'inside-coffee', src: '/assets/inside_with_coffe.webp', alt: 'Interior with coffee' },
  { id: 'inside-cafe', src: '/assets/inside_with_cofe.webp', alt: 'Cafe interior' },
  { id: 'imgl-4819', src: '/assets/IMGL4819-2_resized.webp', alt: '92° space' },
  { id: 'imgl-4826', src: '/assets/IMGL4826-2_resized.webp', alt: '92° moment' },
  { id: 'imgl-4866', src: '/assets/IMGL4866_resized.webp', alt: '92° brew' }
];

export const galleryVideos = [
  { id: 'video-1', src: '/videos/video_1.mp4', label: 'Inside 92°' },
  { id: 'video-2', src: '/videos/video_2.mp4', label: '92° vibe' },
  { id: 'video-about', src: '/videos/video_about_92.mp4', label: 'Coffee mood' }
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
  menuUrl: 'https://92-menu.vercel.app/',
  // Buyuk Ipak Yoʻli mahalla fuqarolar yigʻini, 2, Mirzo Ulugʻbek tumani, Toshkent
  lat: 41.31188,
  lng: 69.288568,
  mapEmbedUrl:
    'https://www.openstreetmap.org/export/embed.html?bbox=69.283568%2C41.30688%2C69.293568%2C41.31688&layer=mapnik&marker=41.31188%2C69.288568',
  mapLink: 'https://yandex.uz/maps/?ll=69.288568%2C41.31188&mode=search&pt=69.288568,41.31188&z=17'
};
