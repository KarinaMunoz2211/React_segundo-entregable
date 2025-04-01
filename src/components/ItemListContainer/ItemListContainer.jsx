import { useEffect, useState} from 'react';
import './ItemListContainer.css';
import { products } from '../Products';
import Item from '../Item/Item';
import Loader from '../Loader/Loader';

function ItemListContainer() {

  const [loader, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    },1500);
  },[])

  
 
  return (
    <div className="container-products">
      {
        loader ? 
        <Loader/> 
        :
        products.map(el => {
          return(
           <Item key={el.id} product={el}/>
          )
        })
      }
    </div>
  );
};

export default ItemListContainer

