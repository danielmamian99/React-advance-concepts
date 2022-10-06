import { useContext } from 'react';

import { ProductContext } from "./ProductCard";

import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";


export const ProductImage = ({ img = "" }) => {
    const {product} = useContext(ProductContext);
    const imgToShow:string = img ? img : product.img || ''; 
  return (
    <img
      className={styles.productImg}
      src={imgToShow ? imgToShow : noImage}
      alt="Product"
    />
  );
};