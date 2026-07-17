import { useState } from 'react';
import { Plus, Minus, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cookies, boxes, currency } from '@/data/cookies';
import { useCart } from '@/context/CartContext';

export default function Boxes() {
  const { addBoxToCart } = useCart();
  const [activeBox, setActiveBox] = useState(boxes[1]);
  const [boxSelection, setBoxSelection] = useState({});

  const boxCount = Object.values(boxSelection).reduce((a, b) => a + b, 0);
  const boxComplete = boxCount === activeBox.size;

  const addBoxCookie = (id, diff) => {
    setBoxSelection(prev => {
      const current = prev[id] || 0;
      const total = Object.values(prev).reduce((a, b) => a + b, 0);
      if (diff > 0 && total >= activeBox.size) return prev;
      const next = Math.max(0, current + diff);
      return { ...prev, [id]: next };
    });
  };

  const handleAddBox = () => {
    addBoxToCart(activeBox, boxSelection);
    setBoxSelection({});
  };

  return (
    <section className="max-w-7xl mx-auto px-5 py-14">
      <div className="rounded-[2rem] bg-white/80 border border-pink-100 shadow-xl p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6"><div className="h-12 w-12 rounded-2xl bg-pink-100 flex items-center justify-center"><Gift className="text-pink-600" /></div><div><h3 className="text-3xl font-black">Build Your Cookie Box</h3><p className="text-stone-500">Choose a 4, 6, 8, or 12 cookie box, then select the exact flavors inside.</p></div></div>
        <div className="grid md:grid-cols-4 gap-3 mb-7">{boxes.map(b => <button key={b.id} onClick={() => { setActiveBox(b); setBoxSelection({}); }} className={`rounded-3xl p-5 text-left border transition ${activeBox.id === b.id ? 'bg-pink-500 text-white border-pink-500 shadow-lg' : 'bg-white border-pink-100 hover:border-pink-300'}`}><p className="font-black">{b.name}</p><p className="text-sm opacity-80 mt-1">{currency(b.price)}</p><p className="text-xs opacity-75 mt-2">{b.desc}</p></button>)}</div>
        <div className="mb-4 flex justify-between items-center"><p className="font-bold">Selected: {boxCount} of {activeBox.size}</p><p className="text-sm text-stone-500">{boxComplete ? 'Box complete, ready to add.' : `${activeBox.size - boxCount} more needed`}</p></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">{cookies.map(c => <div key={c.id} className="rounded-3xl border border-pink-100 bg-pink-50/50 p-4 flex items-center justify-between gap-3"><div className="flex items-center gap-3"><div className="text-3xl">{c.img}</div><div><p className="font-bold text-sm">{c.name}</p><p className="text-xs text-stone-500">{c.flavor}</p></div></div><div className="flex items-center gap-2"><Button size="icon" variant="outline" className="rounded-full" onClick={() => addBoxCookie(c.id, -1)}><Minus className="h-4 w-4" /></Button><span className="w-5 text-center font-bold">{boxSelection[c.id] || 0}</span><Button size="icon" className="rounded-full bg-pink-500 hover:bg-pink-600" onClick={() => addBoxCookie(c.id, 1)}><Plus className="h-4 w-4" /></Button></div></div>)}</div>
        <Button onClick={handleAddBox} disabled={!boxComplete} className="mt-7 rounded-full bg-stone-900 hover:bg-stone-700 px-8 py-6 disabled:opacity-40">Add {activeBox.name} to Cart</Button>
      </div>
    </section>
  );
}
