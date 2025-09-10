import { useCart } from '../context/CartContext';

export default function CartContainer() {
  const { items, removeItem, clear, totalQty, totalPrice } = useCart();

  if (!items.length) return <section style={{ padding:16 }}><h2>Carrito vacío</h2></section>;

  return (
    <section style={{ padding:16 }}>
      <h2>Carrito</h2>
      <ul>
        {items.map(p => (
          <li key={p.id} style={{ margin:'8px 0' }}>
            {p.title} — ${p.price} x {p.qty}
            <button onClick={() => removeItem(p.id)} style={{ marginLeft:8 }}>Quitar</button>
          </li>
        ))}
      </ul>
      <p>Total ítems: <b>{totalQty}</b></p>
      <p>Total a pagar: <b>${totalPrice}</b></p>
      <button onClick={clear}>Vaciar</button>
    </section>
  );
}