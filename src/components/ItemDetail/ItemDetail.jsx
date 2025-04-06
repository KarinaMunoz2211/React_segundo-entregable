import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';

function ItemDetail({product,goToStart}){

    const [count, setCount] = useState (1);

    const {title, price,stock,category,description} = product;

    function addToCart(prod){
        const newProduct ={
            ...prod,
            amount: count,
        };
        console.log("Vas a agregar", newProduct);
        setCount(1)
    };

    return (
        <div className="card p-3">
            <h4 className='card-header'>{title}</h4>

            <div className='card-body'>
                <h6 className='card-text p-2'>Precio:${price}</h6>
                <p>Quedan {stock} disponibles</p>
                <h6>Categoría: {category}</h6>
                <h6>Descripción: {description}</h6>

                <ItemCount stock={stock} count={count} setCount={setCount}/>

                <button className='btn btn-primary' onClick={() => addToCart(product)}>Agregar al carrito</button>
                <button className='btn btn-primary my-1' onClick={goToStart}>Volver al Inicio</button>
            </div>
        </div>
    );
};

export default ItemDetail;