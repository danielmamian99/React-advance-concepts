import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import "../styles/custom-styles.css";
import { useShoppingCart } from "../hooks/useShoppingCart";
import { products } from "../data/products";




export const ShoppingPage = () => {

  const {shoppingCart, onProductCountChange} = useShoppingCart();

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
