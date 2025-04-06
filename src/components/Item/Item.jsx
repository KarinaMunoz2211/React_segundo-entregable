import {useState} from 'react';
import './Item.css';

function Item({product, chooseProduct}){


    const {title, price, stock}= product;
    
    function addToCart(prod){
        const newProduct ={
            ...prod,
            amount: 1,
        };

        console.log("Vas a agregar", newProduct);
    };

    return (
        <div className="card p-3">
            <h4 className='card-header'>{title}</h4>
            <h6 className='card-text p-2'>${price}</h6>
            <p>Quedan {stock} disponibles</p>
            <button className='btn btn-primary' onClick={() => addToCart(product)}>Agregar al carrito</button>
            <button className='btn btn-primary my-1' onClick={() => chooseProduct(product)>("Ver Detalle", product)}>Detalle del Producto</button>
        </div>
    );
};

export default Item;

