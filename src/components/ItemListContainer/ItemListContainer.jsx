import { useEffect, useState} from 'react';
import './ItemListContainer.css';
import Item from '../Item/Item';
import Loader from '../Loader/Loader';
import { fetchData } from '../../fetchData';
import ItemDetail from '../ItemDetail/ItemDetail';


function ItemListContainer() {

  const [loader, setLoading] = useState(true);
  const [allProducts, setAllProducts] = useState(null)

  const [choosenProduct, setChoosenProduct] = useState(null);

  useEffect(() => {

    fetchData(true)
    .then(response => {
      setAllProducts(response);
      setTimeout(()=> {
        console.log(response);
        setLoading(false);
      },500);
      
    })
    .catch(err => console.error(err))
  },[])
  
  return (
    loader ? 
    <Loader/> 
    :
    <div>

      <div className="container-products">
        {allProducts.map(el => {
          return(
            <Item key={el.id} product={el} chooseProduct = {setChoosenProduct}/>
              ); 
          })}
      </div>
      {
        choosenProduct && <ItemDetail product={choosenProduct} goToStart={() => setChoosenProduct(null)}/>
      }
    </div>
  );
};

export default ItemListContainer

