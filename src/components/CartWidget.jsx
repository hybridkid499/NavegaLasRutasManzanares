import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function CartWidget() {
  const { totalQty } = useCart();
  return (
    <Link to="/cart" style={{ border:'1px solid #555', padding:'6px 10px', borderRadius:8, display:'inline-block' }}>
      🛒 <span style={{ marginLeft:6 }}>{totalQty}</span>
    </Link>
  );
}