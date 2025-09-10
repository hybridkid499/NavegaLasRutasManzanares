import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useCart } from "../context/CartContext";


export default function CheckoutForm({ onCreated }) {
  const { items, totalPrice, clear } = useCart();
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!items.length) return alert("El carrito está vacío");
    setLoading(true);
    try {
      const order = {
        buyer: form,
        items: items.map(i => ({ id: i.id, title: i.title, price: i.price, qty: i.qty })),
        total: totalPrice,
        date: serverTimestamp(),
      };
      const ref = await addDoc(collection(db, "orders"), order);
      onCreated?.(ref.id);   
      clear();
    } catch (err) {
      console.error(err);
      alert("Hubo un problema creando la orden.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card" style={{ marginTop: 16, display:'grid', gap:12, maxWidth: 420 }}>
      <h3>Datos del comprador</h3>
      <input name="name"  placeholder="Nombre" value={form.name}  onChange={(e)=>setForm(f=>({...f, name:e.target.value}))} required />
      <input name="email" type="email" placeholder="Email" value={form.email} onChange={(e)=>setForm(f=>({...f, email:e.target.value}))} required />
      <input name="phone" placeholder="Teléfono" value={form.phone} onChange={(e)=>setForm(f=>({...f, phone:e.target.value}))} required />
      <button disabled={loading}>{loading ? "Procesando..." : "Confirmar compra"}</button>
    </form>
  );
}