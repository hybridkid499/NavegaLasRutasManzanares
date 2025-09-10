import { useState } from 'react';
import { useCart } from '../context/CartContext';
import CheckoutForm from "../components/CheckoutForm";

export default function CartContainer() {
  const { items, removeItem, clear, totalQty, totalPrice } = useCart();
  const [orderId, setOrderId] = useState(null);

  return (
    <section style={{ padding:16 }}>
      <h2>Carrito</h2>

      
      {orderId && (
        <div className="card" style={{ marginTop: 16 }}>
          <h3>¡Gracias por tu compra!</h3>
          <p>Tu ID de orden es:</p>
          <code>{orderId}</code>
        </div>
      )}

      
      {items.length === 0 && !orderId && (
        <p>Carrito vacío. Agregá productos desde el catálogo.</p>
      )}

     
      {items.length > 0 && (
        <>
          <div className="products-grid">
            {items.map(p => (
              <article key={p.id} className="card">
                <div className="thumb">
                  {p.img ? <img src={p.img} alt={p.title} /> : <span className="thumb-ph">Sin imagen</span>}
                </div>
                <h3 style={{ margin: '12px 0 6px' }}>{p.title}</h3>
                <p style={{ margin: 0 }}>Precio: ${p.price}</p>
                <p style={{ margin: 0 }}>Cantidad: <b>{p.qty}</b></p>
                <p style={{ marginTop: 6 }}>Subtotal: <b>${p.price * p.qty}</b></p>
                <button onClick={() => removeItem(p.id)} style={{ marginTop: 10 }}>Quitar</button>
              </article>
            ))}
          </div>

          <div className="card" style={{ marginTop: 16 }}>
            <h3 style={{ marginTop: 0 }}>Resumen</h3>
            <p>Total ítems: <b>{totalQty}</b></p>
            <p>Total a pagar: <b>${totalPrice}</b></p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button onClick={clear}>Vaciar carrito</button>
            </div>
          </div>

          
          <CheckoutForm onCreated={(id) => setOrderId(id)} />
        </>
      )}
    </section>
  );
}