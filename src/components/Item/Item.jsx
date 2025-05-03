import './Item.css';
import { Link } from 'react-router';

function Item({product}){


    const {id, title, price, stock}= product;
    
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
           
            <Link to={`/details/${id}`}>
                <button className='btn btn-primary my-1'>Ver Detalle</button>
            </Link>
        </div>
    );
};

export default Item;

