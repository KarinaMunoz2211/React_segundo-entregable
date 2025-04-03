import './ItemDetail.css';

function ItemDetail({product}){

    const {title, price,stock,category,description} = product;

    return (
        <div className="card p-3">
            <h4 className='card-header'>{title}</h4>

            <div className='card-body'>
                <h6 className='card-text p-2'>${price}</h6>
                <p>Quedan {stock} disponibles</p>
                <h6>Categoría: {category}</h6>
                <h6>Descripción: {description}</h6>
                <button className='btn btn-primary' onClick={() => console.log("Se agregó", product)}>Agregar al carrito</button>
                <button className='btn btn-primary my-1' onClick={() => console.log("Volver al Inicio", product)}>Volver al Inicio</button>
            </div>
        </div>
    );
};

export default ItemDetail;