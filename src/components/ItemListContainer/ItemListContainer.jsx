import { useEffect } from 'react';
import './ItemListContainer.css';
import { products } from '../Products';
import Item from '../Item/Item';

function ItemListContainer() {

 /* useEffect(() => {
    console.log("lista de productos", products);
  },[] );*/

  return (
    <div className="container-products">
      {
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

