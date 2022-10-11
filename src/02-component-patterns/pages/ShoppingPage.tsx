import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import "../styles/custom-styles.css";
import { Product } from "../interfaces/interface";
import { useState } from "react";

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

const products: Product[] = [product, product2];

interface ProductInCart extends Product {
  count: number;
}

export const ShoppingPage = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCart((oldShoppingCart) => {
      if (count === 0) {
        // delete oldShoppingCart[product.id] one solution
        const { [product.id]: toDelete, ...rest } = oldShoppingCart;
        return rest;
      }
      return {
        ...oldShoppingCart,
        [product.id]: { ...product, count },
      };
    });
  };

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard
              product={product}
              className="bg-dark text-white "
              onChange={onProductCountChange}
              value={shoppingCart[product.id]?.count || 0} //opcional el || 0,ya que por defecto si llega un defined el value es 0
            >
              <ProductImage
                className="custom-image"
                style={{
                  boxShadow: "10px 10px 10px rgba(0,0,0,0.2)",
                }}
              />
              <ProductTitle className="text-bold" />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
          </div>
        ))}
      </div>
      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => {
          return (
            <ProductCard
              className="bg-dark text-white "
              key={key}
              product={product}
              style={{ width: "100px" }}
              value={product.count}
              onChange={onProductCountChange}
            >
              <ProductImage
                className="custom-image"
                style={{
                  boxShadow: "10px 10px 10px rgba(0,0,0,0.2)",
                }}
              />
              <ProductButtons
                className="custom-buttons"
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              />
            </ProductCard>
          );
        })}
      </div>
    </div>
  );
};
