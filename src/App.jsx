import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import ItemListContainer  from './components/ItemListContainer/ItemListContainer.jsx';


function App() {
  return (
    <>
    <Navbar/>
    <ItemListContainer karySayHi ="Hola !!, Mucho gusto, me llamo Eliot" />
    </>
  );
};

export default App
