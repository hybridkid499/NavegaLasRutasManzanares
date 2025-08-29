import Item from './Item';

function ItemList({ products }) {
  if (!products?.length) return <p>No hay productos para mostrar.</p>;

  return (
    <div style={{
      display:'grid',
      gridTemplateColumns:'repeat(auto-fill, minmax(220px, 1fr))',
      gap:16
    }}>
      {products.map(p => <Item key={p.id} product={p} />)}
    </div>
  );
}
export default ItemList;