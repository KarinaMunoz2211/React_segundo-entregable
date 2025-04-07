import { Link } from 'react-router';
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';

function Navbar(){
  return (
    <header>
      <nav className="nav-bar">
        <p className="logo">L O G O</p>
        <ul className="nav-bar-items">
          <Link to="/">
            <li>Inicio</li>
          </Link>
          <Link to="/categoria/cuadernos">
            <li>Cuadernos</li>
          </Link>         
          <Link to="/categoria/escritorio">
            <li>Escritorio</li>
          </Link>
          <Link to="/categoria/escritura">
            <li>Escritura</li>
          </Link>
        </ul>
        <CartWidget/>
      </nav>
    </header>
  );
};
export default Navbar
