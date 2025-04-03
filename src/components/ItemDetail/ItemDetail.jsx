import './ItemDetail.css';

function ItemDetail({product}){

    const {title, price, stock}= product

    return (
        <div className="card p-3">
            <h4 className='card-header'>{title}</h4>
            <h6 className='card-text p-2'>${price}</h6>
            <p>Quedan {stock} disponibles</p>
            <button className='btn btn-primary' onClick={() => console.log("Se agregó", product)}>Agregar al carrito</button>
            <button className='btn btn-primary my-1' onClick={() => console.log("Ver Detalle", product)}>Detalle del Producto</button>
        </div>
    );
};

export default ItemDetail;