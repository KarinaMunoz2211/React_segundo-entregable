  import { products } from "./Products";

export const fetchData =() => new Promise ((resolve, reject) =>{
  setTimeout(() => {
    resolve(products);
  },1500 );
});
