// Visual metadata that doesn't need translation - paired with i18n copy by id/index.

export const menuVisuals: Record<string, { from: string; to: string; icon: 'coffee' | 'droplets' | 'leaf' | 'cookie' }> = {
  espresso: { from: '#3d2c1e', to: '#201509', icon: 'coffee' },
  alt: { from: '#33291c', to: '#1c150c', icon: 'droplets' },
  nocoffee: { from: '#2f2416', to: '#19130a', icon: 'leaf' },
  sweets: { from: '#3a2418', to: '#1d130b', icon: 'cookie' }
};

export const galleryVisuals = [
  { from: '#40301f', to: '#1c1409' },
  { from: '#382a1c', to: '#19120a' },
  { from: '#3b2a19', to: '#1a1109' },
  { from: '#2f2313', to: '#160f07' },
  { from: '#362a1c', to: '#18120b' },
  { from: '#3e2c1a', to: '#1c1309' }
];

export const contact = {
  phone: '+998 90 123 45 67',
  instagram: 'https://instagram.com/92degrees.coffee',
  telegram: 'https://t.me/92degrees_coffee',
  // Amir Temur St. 15, Mirzo Ulugbek district, Tashkent
  mapEmbedUrl:
    'https://www.google.com/maps?q=Amir+Temur+Street+15,+Mirzo+Ulugbek+district,+Tashkent,+Uzbekistan&z=16&output=embed',
  mapLink:
    'https://www.google.com/maps/search/?api=1&query=Amir+Temur+Street+15,+Mirzo+Ulugbek+district,+Tashkent,+Uzbekistan'
};
