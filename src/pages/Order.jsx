import { useState } from 'react';
import { Truck, MapPin, Plus, Minus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { currency } from '@/data/cookies';
import { useCart } from '@/context/CartContext';

export default function Order() {
  const { cart, updateQty, removeItem, subtotal } = useCart();
  const [fulfillment, setFulfillment] = useState('Pickup');

  return (
    <section className="max-w-7xl mx-auto px-5 py-12 grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 rounded-[2rem] bg-white border border-pink-100 shadow-sm p-6">
        <h3 className="text-2xl font-black mb-5">Your Cart</h3>
        {cart.length === 0 ? <p className="text-stone-500">Your cart is empty. Add cookies or build a box to start an order.</p> : <div className="space-y-4">{cart.map(item => <div key={item.id} className="flex items-start justify-between gap-4 border-b border-pink-50 pb-4"><div className="flex gap-3"><div className="text-3xl">{item.img}</div><div><p className="font-black">{item.name}</p><p className="text-sm text-stone-500 max-w-xl">{item.desc}</p><p className="font-bold mt-1">{currency(item.price)}</p></div></div><div className="flex items-center gap-2"><Button size="icon" variant="outline" className="rounded-full" onClick={() => updateQty(item.id, -1)}><Minus className="h-4 w-4" /></Button><span className="font-bold w-5 text-center">{item.qty}</span><Button size="icon" variant="outline" className="rounded-full" onClick={() => updateQty(item.id, 1)}><Plus className="h-4 w-4" /></Button><Button size="icon" variant="ghost" onClick={() => removeItem(item.id)}><X className="h-4 w-4" /></Button></div></div>)}</div>}
      </div>
      <div className="rounded-[2rem] bg-stone-900 text-white p-6 shadow-xl h-fit">
        <h3 className="text-2xl font-black">Checkout</h3>
        <div className="mt-5 grid grid-cols-2 gap-2">
          {['Pickup','Delivery'].map(f => <button key={f} onClick={() => setFulfillment(f)} className={`rounded-2xl px-4 py-3 text-sm font-bold ${fulfillment === f ? 'bg-pink-400 text-stone-900' : 'bg-white/10'}`}>{f === 'Pickup' ? <MapPin className="inline h-4 w-4 mr-1" /> : <Truck className="inline h-4 w-4 mr-1" />}{f}</button>)}
        </div>
        <div className="mt-6 space-y-3 text-sm"><div className="flex justify-between"><span>Subtotal</span><span>{currency(subtotal)}</span></div><div className="flex justify-between"><span>{fulfillment}</span><span>{fulfillment === 'Pickup' ? 'Free' : 'Calculated at checkout'}</span></div><div className="border-t border-white/20 pt-3 flex justify-between font-black text-lg"><span>Total</span><span>{currency(subtotal)}</span></div></div>
        <Button disabled={cart.length === 0} className="w-full mt-6 rounded-full bg-pink-400 hover:bg-pink-300 text-stone-900 py-6 disabled:opacity-40">Place Order</Button>
        <p className="mt-4 text-xs text-white/60">Prototype note: connect this checkout to Square Online, WooCommerce, or another payment/order platform before launch.</p>
      </div>
    </section>
  );
}
