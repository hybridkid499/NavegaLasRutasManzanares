import ItemCount from './ItemCount';
import { useCart } from '../context/CartContext';

function ItemDetail({ product }) {
  if (!product) return null;
  const { title, price, img, category, stock } = product;

  const { addItem } = useCart();
  const handleAdd = (qty) => {
    addItem(product, qty);
   
  };

  return (
    <section className="detail">
      
      <div className="detail-media">
        {img ? (
          <img src={img} alt={title} />
        ) : (
          <span className="thumb-ph">Sin imagen</span>
        )}
      </div>

      
      <div className="detail-info">
        <h2 style={{ marginTop: 0 }}>{title}</h2>
        <p>Categoría: <b>{category}</b></p>
        <p>Precio: <b>${price}</b></p>
        <p>Stock: {stock}</p>

        <ItemCount
          initial={1}
          min={1}
          max={stock ?? 10}
          onAdd={handleAdd}
        />
      </div>
    </section>
  );
}

export default ItemDetail;