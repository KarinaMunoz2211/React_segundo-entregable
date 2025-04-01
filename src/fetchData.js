  import { products } from "./Products";

export const fetchData =(data) => new Promise ((resolve, reject) =>{
    if(data){
        resolve("Hello");
    } else {
        reject ("Goodbye");
    };
  });