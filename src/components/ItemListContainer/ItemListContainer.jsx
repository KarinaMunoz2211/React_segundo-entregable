import { useEffect, useState} from 'react';
import './ItemListContainer.css';
import Item from '../Item/Item';
import Loader from '../Loader/Loader';
import { fetchData } from '../../fetchData';
import { useParams } from 'react-router';


function ItemListContainer() {

  const [loader, setLoading] = useState(true);
  const [allProducts, setAllProducts] = useState(null)

  const {categoria} = useParams();

  useEffect(() => {
    if (!allProducts){
      fetchData()
      .then(response => {
        setAllProducts(response);
        setTimeout(()=> {
          setLoading(false);
        },500);
      })
      .catch(err => console.error(err));
    };
  },[categoria]);
  
  return (
    loader ? 
    <Loader/> 
    :
    <div>

      <div className="container-products">
        {
        categoria ? 

        allProducts.filter(el => el.categoria === categoria).map(el =>{
          return(
            <Item key={el.id} product={el} />
              ); 
          })

        :
        allProducts.map(el => {
          return(
            <Item key={el.id} product={el} />
              ); 
          })}
      </div>
      {/*
        choosenProduct && <ItemDetail product={choosenProduct} goToStart={() => setChoosenProduct(null)}/>
      */}
    </div>
  );
};

export default ItemListContainer

