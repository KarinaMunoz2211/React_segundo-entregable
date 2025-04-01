import { useEffect, useState} from 'react';
import './ItemListContainer.css';
import { products } from '../../Products'
import Item from '../Item/Item';
import Loader from '../Loader/Loader';
import { fetchData } from '../../fetchData';

function ItemListContainer() {

  const [loader, setLoading] = useState(true);

  useEffect(() => {
    fetchData(true)
    .then(response => console.log(response))
    .catch(err => console.error(err))

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

