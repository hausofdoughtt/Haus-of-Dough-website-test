import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cookies } from '@/data/cookies';

export default function Home() {
  return (
    <section className="max-w-7xl mx-auto px-5 py-16 grid lg:grid-cols-2 gap-10 items-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
        <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm border border-pink-100 text-sm text-pink-700 font-semibold mb-6">
          <Star className="h-4 w-4 fill-pink-300" /> Freshly baked, premium, made to order
        </div>
        <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">Gourmet cookies that feel like a luxury treat.</h2>
        <p className="mt-6 text-lg text-stone-600 max-w-xl">Browse signature cookies, build your own premium box, and place orders for pickup or local delivery.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/cookies"><Button className="rounded-full bg-pink-500 hover:bg-pink-600 text-white px-7 py-6 text-base">Shop Cookies</Button></Link>
          <Link to="/boxes"><Button variant="outline" className="rounded-full border-pink-200 px-7 py-6 text-base">Build a Box</Button></Link>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .6 }} className="relative">
        <div className="rounded-[2.5rem] bg-pink-200/70 p-8 shadow-2xl border border-white">
          <div className="bg-white rounded-[2rem] p-8 grid grid-cols-2 gap-4">
            {cookies.slice(0,4).map(c => <div key={c.id} className="rounded-3xl bg-gradient-to-br from-pink-50 to-rose-100 p-5 text-center shadow-sm"><div className="text-5xl mb-3">{c.img}</div><p className="font-bold text-sm">{c.name}</p></div>)}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
