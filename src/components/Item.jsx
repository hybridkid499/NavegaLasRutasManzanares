import { Link } from 'react-router-dom';

function Item({ product }) {
  const { id, title, price, img } = product;

  return (
    <article className="card">
      
      <div className="thumb">
        {img ? (
          <img src={img} alt={title} />
        ) : (
          <span className="thumb-ph">Sin imagen</span>
        )}
      </div>

      
      <h3 style={{ margin: '12px 0 6px' }}>{title}</h3>
      <p style={{ margin: 0 }}>${price}</p>

      
      <div style={{ marginTop: 12 }}>
        <Link to={`/item/${id}`} className="btn">
          Ver detalle
        </Link>
      </div>
    </article>
  );
}

export default Item;