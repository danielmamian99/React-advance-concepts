import { CSSProperties, useContext } from 'react';

import { ProductContext } from "./ProductCard";

import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

export interface Props{
  img?: string;
  className?: string;
  style?: CSSProperties;
}
export const ProductImage = ({ img, className, style }:Props) => {
    const {product} = useContext(ProductContext);
    const imgToShow:string = img ? img : product.img || ''; 
  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={imgToShow ? imgToShow : noImage}
      alt="Product"
      style={style}
    />
  );
};