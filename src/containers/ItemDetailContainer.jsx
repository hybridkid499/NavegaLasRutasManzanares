import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail';
import { getProductById } from '../data/products';

function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    getProductById(id)
      .then(setProduct)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]); // importante: dependencias con params

  if (loading) return <section style={{ padding:16 }}><p>Cargando detalle...</p></section>;
  if (error)   return <section style={{ padding:16 }}><p>Error: {error}</p></section>;
  if (!product) return <section style={{ padding:16 }}><p>No se encontró el producto.</p></section>;

  return (
    <section style={{ padding:16 }}>
      <ItemDetail product={product} />
    </section>
  );
}

export default ItemDetailContainer;