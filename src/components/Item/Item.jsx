import './Item.css';

function Item({product}){

    const {tittle, price, stock}= product

    return (
        <div>
            <h4>{tittle}</h4>
            <h6>${price}</h6>
            <p>Quedan {stock} disponibles</p>
            <button>Agregar al carrito</button>
        </div>
    );
};

export default Item;

