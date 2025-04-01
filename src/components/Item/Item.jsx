import './Item.css';

function Item({product}){

    const {title, price, stock}= product

    return (
        <div className="card p-3">
            <h4 className='card-header'>{title}</h4>
            <h6 className='card-text p-2'>${price}</h6>
            <p>Quedan {stock} disponibles</p>
            <button className='btn btn-primary'>Agregar al carrito</button>
        </div>
    );
};

export default Item;

