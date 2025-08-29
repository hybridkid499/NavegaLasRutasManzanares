import ItemCount from './ItemCount';

function ItemDetail({ product }) {
  if (!product) return null;
  const { title, price, img, category, stock } = product;

  return (
    <section style={{ display:'grid', gap:16, gridTemplateColumns:'1fr 1.2fr', alignItems:'start' }}>
      <div style={{ aspectRatio:'1/1', background:'#1e1e1e', borderRadius:12, display:'grid', placeItems:'center' }}>
        <span style={{ color:'#888' }}>{img || 'imagen'}</span>
      </div>

      <div>
        <h2 style={{ marginTop:0 }}>{title}</h2>
        <p>Categoría: <b>{category}</b></p>
        <p>Precio: <b>${price}</b></p>
        <p>Stock: {stock}</p>

        <ItemCount
          initial={1}
          min={1}
          max={stock ?? 10}
           onAdd={(qty) => console.log('Agregar al carrito:', { id: product.id, qty })}
        />
      </div>
    </section>
  );
}

export default ItemDetail;