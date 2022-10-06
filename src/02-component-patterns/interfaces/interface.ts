import { ReactElement } from 'react';

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}
export interface ProductContextProps {
  counter: number;
  increaseBy: (n: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): ReactElement;
    Title: ({ title }: {title?: string}) => ReactElement;
    Image: ({ img }: {img?: string}) => ReactElement;
    Buttons: () => ReactElement;
}
