import './ItemCount.css';

function ItemCount ({stock, count, setCount}) {


    function modifyCount(operation){
        if (operation === "+") {
            if (count < stock){
                setCount(count + 1);
            };
        } else {
            if (count > 1){
                setCount(count - 1);
            };
        };
    };


    return (
        <div style ={{display:"flex",flexDirection:"column",padding:"1rem"}}>
            <div style ={{display:"flex",width:"10rem",padding:"2rem",justifyContent:"space-around",alignItems:"center"}}>
                <button className="btn btn-primary" onClick={() => modifyCount("-")}>-</button>
                <p style={{backgroundColor:"#3BAC66",alignContent:"center",margin:"0"}}>{count}</p>
                <button className="btn btn-primary" onClick={() => modifyCount("+")}>+</button>
            </div>


        </div>
    );
;}

export default ItemCount;
