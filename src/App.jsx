import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a Byte Store" />
      <h1>Mi tienda React</h1>
    </>
  );
}

export default App;