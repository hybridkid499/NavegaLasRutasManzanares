import { Link } from 'react-router-dom';

function Item({ product }) {
  const { id, title, price, img } = product;
  return (
    <article style={{ border:'1px solid #333', borderRadius:10, padding:12 }}>
      <div style={{ aspectRatio:'1/1', background:'#1e1e1e', borderRadius:8,
                    display:'grid', placeItems:'center', marginBottom:8 }}>
        <span style={{ color:'#888', fontSize:12 }}>{img || 'imagen'}</span>
      </div>
      <h3 style={{ margin:'0 0 8px' }}>{title}</h3>
      <p style={{ margin:'0 0 12px' }}>${price}</p>
      <Link to={`/item/${id}`} style={{ border:'1px solid #555', padding:'6px 10px', borderRadius:8 }}>
        Ver detalle
      </Link>
    </article>
  );
}
export default Item;