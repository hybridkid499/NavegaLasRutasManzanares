import CartWidget from './CartWidget';

function NavBar() {
  return (
    <nav>
      <h2>Byte Store</h2>
      <ul>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;