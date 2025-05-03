import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import { BrowserRouter,Route, Routes } from 'react-router';
import ItemListContainer  from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetail from './components/ItemDetail/ItemDetail.jsx';


function App() {

  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path = "/" element={<ItemListContainer/>}/>
          <Route path = "/category/:category" element={<ItemListContainer/>}/>
          <Route path = "/details/:id" element={<ItemDetail/>}/>
          <Route path = "*" element={<p><b>404 Not Found</b></p>}/>
        </Routes>
      </BrowserRouter>
  );
};

export default App
 