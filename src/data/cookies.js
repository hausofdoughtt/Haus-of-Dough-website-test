export const cookies = [
  { id: 'classic-chip', name: 'Classic Chocolate Chip', price: 28, tag: 'Best Seller', desc: 'Golden brown cookie loaded with premium chocolate chunks.', flavor: 'Chocolate', img: '🍪' },
  { id: 'red-velvet', name: 'Red Velvet Cheesecake', price: 32, tag: 'Premium', desc: 'Soft red velvet cookie with creamy cheesecake-style filling.', flavor: 'Creamy', img: '❤️' },
  { id: 'biscoff', name: 'Biscoff Cookie Butter', price: 34, tag: 'Signature', desc: 'Rich cookie butter center with a caramelized biscuit crumble.', flavor: 'Caramel', img: '✨' },
  { id: 'oreo', name: 'Cookies & Cream', price: 30, tag: 'Popular', desc: 'A soft gourmet cookie packed with cookies-and-cream pieces.', flavor: 'Creamy', img: '🖤' },
  { id: 'double-choc', name: 'Double Chocolate Fudge', price: 32, tag: 'Rich', desc: 'Deep cocoa cookie with molten chocolate pockets.', flavor: 'Chocolate', img: '🍫' },
  { id: 'strawberry', name: 'Strawberry Shortcake', price: 34, tag: 'Limited', desc: 'Light strawberry notes, vanilla crumble, and a premium soft bite.', flavor: 'Fruity', img: '🍓' }
];

export const boxes = [
  { id: 'box-4', name: '4 Cookie Box', size: 4, price: 110, desc: 'Perfect sampler for one or a small gift.' },
  { id: 'box-6', name: '6 Cookie Box', size: 6, price: 160, desc: 'Our most popular personal treat box.' },
  { id: 'box-8', name: '8 Cookie Box', size: 8, price: 210, desc: 'Ideal for sharing with friends or family.' },
  { id: 'box-12', name: '12 Cookie Box', size: 12, price: 300, desc: 'Premium party box for events, gifting, or office treats.' }
];

export function currency(n) {
  return `TT$${n.toFixed(2)}`;
}
