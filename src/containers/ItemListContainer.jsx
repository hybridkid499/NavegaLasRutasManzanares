import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../components/ItemList';
import { getProducts } from '../data/products.firebase';

function ItemListContainer({ greeting = 'Bienvenido a Kitsune Wear' }) {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    getProducts(categoryId)
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message || 'Error al cargar productos'))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <section style={{ padding: 16 }}>
      <h1 style={{ marginTop: 0 }}>{greeting}</h1>

      {categoryId
        ? <p>Listando productos de la categoría: <b>{categoryId}</b></p>
        : <p>Listando todos los productos</p>}

      {loading && <p>Cargando productos...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        products.length
          ? <ItemList products={products} />
          : <p>No hay productos para mostrar.</p>
      )}
    </section>
  );
}

export default ItemListContainer;