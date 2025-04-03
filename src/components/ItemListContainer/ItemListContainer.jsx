import { useEffect, useState} from 'react';
import './ItemListContainer.css';
import Item from '../Item/Item';
import Loader from '../Loader/Loader';
import { fetchData } from '../../fetchData';
import ItemDetail from '../ItemDetail/ItemDetail';


function ItemListContainer() {

  const [loader, setLoading] = useState(true);
  const [allProducts, setAllProducts] = useState(null)

  const [choosenProduct, setChoosenProduct] = useState(null)

  useEffect(() => {

    fetchData(true)
    .then(response => {
      setAllProducts(response);
      console.log(response);
      setLoading(false);
    })
    .catch(err => console.error(err))
  },[])
  
  return (
    <div className="container-products">
      {
        loader ? 
        <Loader/> 
        :
        allProducts.map(el => {
          return(
           <Item key={el.id} product={el}/>
          );
        })
      }

      {
        choosenProduct && <ItemDetail product={choosenProduct}/>
      }
    </div>
  );
};

export default ItemListContainer

