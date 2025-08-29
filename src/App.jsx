import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenido a Kitsune Wear" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="Catálogo filtrado" />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<h2 style={{ padding:16 }}>404 • Página no encontrada</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;