import { useContext } from 'react';

import { ProductContext } from './ProductCard';

import styles from "../styles/styles.module.css";


export const ProductTitle = ({ title }: { title?: string }) => {
    const {product} = useContext(ProductContext);
    const titleToshow = title ? title : product.title;
  return <span className={styles.productDescription}> {titleToshow}</span>;
};
