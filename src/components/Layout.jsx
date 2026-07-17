import { Outlet, Link, useLocation } from 'react-router-dom';
import { Cookie, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

const navItems = [
  { to: '/cookies', label: 'Cookies' },
  { to: '/boxes', label: 'Build a Box' },
  { to: '/order', label: 'Order' },
];

export default function Layout() {
  const { cart } = useCart();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-100 text-stone-900 flex flex-col">
      <header className="sticky top-0 z-30 backdrop-blur-xl bg-white/75 border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-2xl bg-pink-200 flex items-center justify-center shadow-sm"><Cookie className="text-pink-700" /></div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">Haus of Dough</h1>
              <p className="text-xs text-stone-500">Premium gourmet cookies</p>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
            {navItems.map(item => (
              <Link
                key={item.to}
                to={item.to}
                className={location.pathname === item.to ? 'text-pink-600 font-semibold' : 'hover:text-stone-900'}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link to="/order">
            <Button className="rounded-full bg-stone-900 hover:bg-stone-700 text-white"><ShoppingBag className="mr-2 h-4 w-4" /> Cart {cart.length}</Button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="max-w-7xl mx-auto px-5 py-10 text-center text-sm text-stone-500">
        <p>Made for Haus of Dough with a light pink premium bakery aesthetic. Fresh cookies, curated boxes, pickup and delivery.</p>
      </footer>
    </div>
  );
}
