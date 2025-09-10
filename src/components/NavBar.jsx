import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
import logo from '../assets/logo.png';

export default function NavBar() {
  const active = ({ isActive }) => (isActive ? { textDecoration: 'underline' } : undefined);

  return (
    <nav style={{ borderBottom: '1px solid #333' }}>
      <div className="container nav-inner">
        
        <h2 className="nav-brand" style={{ display:'flex', alignItems:'center', gap:8, margin:0 }}>
          <img src={logo} alt="Kitsune Wear logo" style={{ height:40 }} />
          <Link to="/">Kitsune Wear</Link>
        </h2>

        
        <ul className="nav-links">
          <li><NavLink to="/" end style={active}>Inicio</NavLink></li>
          <li><NavLink to="/category/remeras" style={active}>Remeras</NavLink></li>
          <li><NavLink to="/category/hoodies" style={active}>Hoodies</NavLink></li>
          <li><NavLink to="/category/accesorios" style={active}>Accesorios</NavLink></li>
        </ul>

        
        <div className="nav-cart">
          <CartWidget />
        </div>
      </div>
    </nav>
  );
}