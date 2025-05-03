import { useEffect, useState} from 'react';
import './ItemListContainer.css';
import Item from '../Item/Item';
import Loader from '../Loader/Loader';
import { fetchData } from '../../fetchData';
import { useParams } from 'react-router';


function ItemListContainer() {

  const [loader, setLoading] = useState(true);
  const [allProducts, setAllProducts] = useState(null)

  const {category} = useParams();

  useEffect(() => {
    if(!allProducts){
      console.log("Trayendo Items");
      fetchData()
      .then(response => {
        setAllProducts(response);
        setTimeout(()=> {
          setLoading(false);
        },500);
      })
      .catch(err => console.error(err));
    };
  },[category]);
  
  return (
    loader ? 
    <Loader/> 
    :
    <div>
      <div className="container-products">
        {
        category ? 
        allProducts.filter(el => el.category === category ).map(el => {
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
    </div>
  );
};

export default ItemListContainer

