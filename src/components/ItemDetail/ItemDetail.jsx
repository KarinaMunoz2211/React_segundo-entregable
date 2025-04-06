import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail({product,goToStart}){

    const {title, price,stock,category,description} = product;

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

            <div className='card-body'>
                <h6 className='card-text p-2'>Precio:${price}</h6>
                <p>Quedan {stock} disponibles</p>
                <h6>Categoría: {category}</h6>
                <h6>Descripción: {description}</h6>

                <ItemCount/>

                <button className='btn btn-primary' onClick={() => addToCart(product)}>Agregar al carrito</button>
                <button className='btn btn-primary my-1' onClick={goToStart}>Volver al Inicio</button>
            </div>
        </div>
    );
};

export default ItemDetail;