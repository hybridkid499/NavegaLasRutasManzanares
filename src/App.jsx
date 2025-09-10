import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import CartContainer from './containers/CartContainer';
import Footer from './components/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
     
      <main className="container">
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenido a Kitsune Wear" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="*" element={<h2>404 • Página no encontrada</h2>} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}
