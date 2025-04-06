import {useState} from 'react';
import './ItemCount.css';

function ItemCount ({stock,title}) {
    const [count, setCount] = useState (1);

    function modifyCount(operation){
        if (operation === "+") {
            if (contador < stock){
                setCount(count + 1);
            };
        } else {
            if (count > 1){
                setCount(count - 1);
            };
        };
    };

    function addToCart (){
        console.log(`Agregaste ${count} unidades de ${title}`);
        setCount(1);
    };

    return (
        <div style ={{display:"flex",flexDirection:"column",padding:"2rem"}}>
            <div style ={{display:"flex",width:"10rem",padding:"2rem",justifyContent:"space-around",alignItems:"center"}}>
                <button className="btn btn-primary" onClick={() => modifyCount("-")}>-</button>
                <p style={{backgroundColor:"#3BAC66",alignContent:"center"}}>{count}</p>
                <button className="btn btn-primary" onClick={() => modifyCount("+")}>+</button>
            </div>


        </div>
    );
;}

export default ItemCount;
