import { Link } from 'react-router';
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';

function Navbar(){ 
  return (
    <header>
      <nav className="nav-bar">
        <img className="logo" src={"../src/assets/20250427_1709102.jpg"} alt="LOGO"/>
        <ul className="nav-bar-items">
          <Link to="/">
            <li>Inicio</li>
          </Link>
          <Link to="/category/Cuadernos">
            <li>Cuadernos</li>
          </Link>         
          <Link to="/category/Escritorio">
            <li>Escritorio</li>
          </Link>
          <Link to="/category/Escritura">
            <li>Escritura</li>
          </Link>
        </ul>
        <Link to="/carrito">
          <CartWidget cantidad={CartWidget.length}/>
        </Link>
      </nav>
    </header>
  );
};
export default Navbar
