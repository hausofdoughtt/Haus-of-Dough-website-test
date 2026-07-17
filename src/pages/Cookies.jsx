import { useMemo, useState } from 'react';
import { Search, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cookies, currency } from '@/data/cookies';
import { useCart } from '@/context/CartContext';

export default function Cookies() {
  const { addCookie } = useCart();
  const [query, setQuery] = useState('');

  const filteredCookies = useMemo(() => {
    return cookies.filter(c => `${c.name} ${c.desc} ${c.flavor}`.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  return (
    <section className="max-w-7xl mx-auto px-5 py-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-7">
        <div><h3 className="text-3xl font-black">Signature Cookies</h3><p className="text-stone-500 mt-2">Premium flavors customers can add directly to cart.</p></div>
        <div className="relative max-w-sm w-full"><Search className="absolute left-4 top-3.5 h-4 w-4 text-stone-400" /><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search flavors" className="w-full rounded-full border border-pink-100 bg-white px-11 py-3 outline-none focus:ring-2 focus:ring-pink-200" /></div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredCookies.map(cookie => <Card key={cookie.id} className="rounded-3xl border-pink-100 shadow-sm overflow-hidden"><CardContent className="p-6"><div className="flex justify-between items-start"><div className="text-6xl">{cookie.img}</div><span className="rounded-full bg-pink-100 text-pink-700 px-3 py-1 text-xs font-bold">{cookie.tag}</span></div><h4 className="mt-5 text-xl font-black">{cookie.name}</h4><p className="mt-2 text-sm text-stone-500 min-h-[44px]">{cookie.desc}</p><div className="mt-5 flex items-center justify-between"><span className="font-black text-lg">{currency(cookie.price)}</span><Button onClick={() => addCookie(cookie)} className="rounded-full bg-stone-900 hover:bg-stone-700"><Plus className="h-4 w-4 mr-2" /> Add</Button></div></CardContent></Card>)}
      </div>
    </section>
  );
}
