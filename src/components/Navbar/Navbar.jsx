import './Navbar.css';

function Navbar(){
  return (
    <header>
      <nav className="nav-bar">
        <p className="logo">L O G O</p>
        <ul className="nav-bar-items">
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
        </ul>
  {/* Aca va el CartWidget*/} 
      </nav>
    </header>
  );
};
export default Navbar
