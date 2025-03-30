import { useEffect } from 'react';
import './ItemListContainer.css';
import { products } from '../Products';

function ItemListContainer({karySayHi}) {

  useEffect(() => {
    console.log("lista de productos",products);
  },[] );

  return (
    <>
    <h1 className="greetings">{karySayHi}</h1>
    </>
  );
};

export default ItemListContainer

