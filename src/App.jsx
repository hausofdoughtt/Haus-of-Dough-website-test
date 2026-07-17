import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Cookies from '@/pages/Cookies';
import Boxes from '@/pages/Boxes';
import Order from '@/pages/Order';

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/boxes" element={<Boxes />} />
            <Route path="/order" element={<Order />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}
