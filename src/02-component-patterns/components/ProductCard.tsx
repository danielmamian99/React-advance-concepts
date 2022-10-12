import { ReactElement, CSSProperties } from "react";

import { createContext } from "react";

import { useProduct } from "../hooks/useProduct";
import { InitialValues, OnChangeArgs, Product, ProductContextProps } from '../interfaces/interface';

import styles from "../styles/styles.module.css";

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?:(args:OnChangeArgs)=>void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product, className, style, onChange ,value, initialValues }: Props) => {
  const { counter, increaseBy } = useProduct({ onChange, product, value, initialValues });
  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
