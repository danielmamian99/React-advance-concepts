import { Product } from "../interfaces/interface";

const product: Product = {
    id: "1",
    title: "Coffe Mug - Card",
    img: "./coffee-mug.png",
  };
  
  const product2: Product = {
    id: "2",
    title: "Coffe Mug - Card",
    img: "./coffee-mug2.png",
  };
  
  export const products: Product[] = [product, product2];