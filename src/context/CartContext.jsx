import { createContext, useContext, useMemo, useState } from 'react';
import { cookies } from '@/data/cookies';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addCookie = (cookie) => {
    setCart(prev => {
      const found = prev.find(i => i.id === cookie.id && i.type === 'cookie');
      if (found) return prev.map(i => i.id === cookie.id && i.type === 'cookie' ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...cookie, type: 'cookie', qty: 1 }];
    });
  };

  const addBoxToCart = (activeBox, boxSelection) => {
    const total = Object.values(boxSelection).reduce((a, b) => a + b, 0);
    if (total !== activeBox.size) return;
    const selectionText = cookies
      .filter(c => boxSelection[c.id])
      .map(c => `${boxSelection[c.id]} x ${c.name}`)
      .join(', ');
    setCart(prev => [...prev, {
      id: `${activeBox.id}-${Date.now()}`,
      type: 'box',
      name: activeBox.name,
      desc: selectionText,
      price: activeBox.price,
      qty: 1,
      img: '🎁'
    }]);
  };

  const updateQty = (cartId, diff) => {
    setCart(prev => prev.map(item => item.id === cartId ? { ...item, qty: item.qty + diff } : item).filter(item => item.qty > 0));
  };

  const removeItem = (cartId) => setCart(prev => prev.filter(item => item.id !== cartId));

  const subtotal = useMemo(() => cart.reduce((sum, item) => sum + item.price * item.qty, 0), [cart]);

  const value = { cart, addCookie, addBoxToCart, updateQty, removeItem, subtotal };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
