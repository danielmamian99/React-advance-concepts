import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import { Product } from "../interfaces/interface";

const product: Product = {
  id: "1",
  title: "Coffe Mug - Card",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
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
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title/>
          <ProductCard.Buttons/>
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons/>
        </ProductCard>
      </div>
    </div>
  );
};
