// Visual metadata that doesn't need translation - paired with i18n copy by id/index.

export const menuVisuals: Record<string, { from: string; to: string; icon: 'coffee' | 'droplets' | 'leaf' | 'cookie' }> = {
  espresso: { from: '#2a3038', to: '#121820', icon: 'coffee' },
  alt: { from: '#323840', to: '#181e28', icon: 'droplets' },
  nocoffee: { from: '#2e343c', to: '#1e2530', icon: 'leaf' },
  sweets: { from: '#363c44', to: '#121820', icon: 'cookie' }
};

// Numbered professional drink photos from /public/assets
export const menuCarouselImages = [
  { id: '1', src: '/assets/1.JPG', alt: 'Drink 1' },
  { id: '4', src: '/assets/4.JPG', alt: 'Drink 4' },
  { id: '10', src: '/assets/10.JPG', alt: 'Drink 10' },
  { id: '18', src: '/assets/18.JPG', alt: 'Drink 18' },
  { id: '27', src: '/assets/27.jpg', alt: 'Drink 27' }
];

// Resized professional photos for hero interactive gallery
export const heroImages = [
  { id: '1001', src: '/assets/IMGL1001_resized.jpg', alt: '92° drink' },
  { id: '4819', src: '/assets/IMGL4819-2_resized.jpg', alt: '92° interior' },
  { id: '4826', src: '/assets/IMGL4826-2_resized.jpg', alt: '92° moment' },
  { id: '4866', src: '/assets/IMGL4866_resized.jpg', alt: '92° brew' },
  { id: '4916', src: '/assets/IMGL4916_resized.jpg', alt: '92° cup' },
  { id: '5021', src: '/assets/IMGL5021_resized.jpg', alt: '92° space' }
];

// Named atmosphere / carousel photos from /public/assets
export const galleryCarouselImages = [
  { id: 'inside-2', src: '/assets/inside_2.jpg', alt: 'Interior' },
  { id: 'inside-coffee', src: '/assets/inside_with_coffe.jpg', alt: 'Interior with coffee' },
  { id: 'inside-cafe', src: '/assets/inside_with_cofe.jpg', alt: 'Cafe interior' },
  { id: 'imgl-4819', src: '/assets/IMGL4819-2_resized.jpg', alt: '92° space' },
  { id: 'imgl-4826', src: '/assets/IMGL4826-2_resized.jpg', alt: '92° moment' },
  { id: 'imgl-4866', src: '/assets/IMGL4866_resized.jpg', alt: '92° brew' }
];

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
  mapLink: 'https://www.google.com/maps?q=41.311880,69.288568'
};
