import { NavLink, Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import logo from '../assets/logo.png';

function NavBar() {
  const active = ({ isActive }) => (isActive ? { textDecoration: 'underline' } : undefined);

  return (
    <nav style={{ display:'flex', gap:16, alignItems:'center', padding:'12px 16px', borderBottom:'1px solid #333' }}>

      
       <h2 style={{ marginRight:24, display:'flex', alignItems:'center', gap:8 }}>
        <img src={logo} alt="Kitsune Wear logo" style={{ height:40 }} />
        <Link to="/">Kitsune Wear</Link>
      </h2>

      <ul style={{ display:'flex', gap:12, listStyle:'none', margin:0, padding:0 }}>
        <li><NavLink to="/" style={active} end>Inicio</NavLink></li>
        <li><NavLink to="/category/remeras" style={active}>Remeras</NavLink></li>
        <li><NavLink to="/category/hoodies" style={active}>Hoodies</NavLink></li>
        <li><NavLink to="/category/accesorios" style={active}>Accesorios</NavLink></li>
      </ul>

      <div style={{ marginLeft:'auto' }}>
        <CartWidget />
      </div>
    </nav>
  );
}
export default NavBar;