import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import ItemListContainer  from './components/ItemListContainer/ItemListContainer.jsx';
import { BrowserRouter,Route, Routes } from 'react-router';
import ItemDetail from './components/ItemDetail/ItemDetail.jsx';


function App() {

  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path = "/" element={<ItemListContainer/>}/>
          <Route path = "/categoria/:categoria" element={<ItemListContainer/>}/>
          <Route path = "/detalles/:id" element={<ItemDetail/>}/>
          <Route path = "*" element={<p><b>404 Not Found</b></p>}/>
        </Routes>
      </BrowserRouter>
  );
};

export default App
 