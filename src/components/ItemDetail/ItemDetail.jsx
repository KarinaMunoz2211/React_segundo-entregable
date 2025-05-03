import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { fetchData } from '../../fetchData';
import Loader from '../Loader/Loader';

function ItemDetail(){

    const {id}= useParams ();

    const [loader,setLoading] = useState(true);
    const [product, setProduct] = useState(null); 
    const [count, setCount] = useState (1);
    
    function addToCart(prod){
        const newProduct ={
            ...prod,
            amount: count,
        };
        console.log("Vas a agregar", newProduct);
        setCount(1)
    };

    useEffect(() => {fetchData
            fetchData(true)
            .then(response => {
                const productToShow = response.find(el => el.id === parseInt(id));
                setProduct(productToShow);
                setTimeout(()=> {
                    setLoading(false);
                },500);              
            })
            .catch(err => console.error(err));        
    }, []);

    return (

        loader ? 
            <Loader/>
            : 
            <div className="card p-3">
                {
                    product ?
                        <>
                            <h4 className='card-header'>{product.title}</h4>
                            <div className='card-body'>
                                <h6 className='card-text p-2'>Precio:${product.price}</h6>
                                <p>Quedan {product.stock} disponibles</p>
                                <h6>Categoría: {product.category}</h6>
                                <h6>Descripción: {product.description}</h6>
    
                                <ItemCount stock={product.stock} count={count} setCount={setCount}/>
    
                                <button className='btn btn-primary' onClick={() => addToCart(product)}>Agregar al carrito</button>
                                <Link to="/">
                                <button className='btn btn-primary my-1'>Volver al Inicio</button>
                                </Link>
                            </div>
                        </>
                        :
                        <p>Producto no encontrado con el id {id}</p>
                }
                

            </div>
    );
};

export default ItemDetail;