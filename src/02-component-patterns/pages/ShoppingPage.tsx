import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import '../styles/custom-styles.css'
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
        <ProductCard 
        product={product}
        className="bg-dark text-white "
        >
          <ProductCard.Image className="custom-image"/>
          <ProductCard.Title className="text-bold"/>
          <ProductCard.Buttons className="custom-buttons"/>
        </ProductCard>

        <ProductCard 
          product={product}
          className="bg-dark text-white "
        >
          <ProductImage className="custom-image" style={{
            boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
          }}/>
          <ProductTitle className="text-bold"/>
          <ProductButtons className="custom-buttons"/>
        </ProductCard>

        <ProductCard 
          product={product}
          className="bg-dark text-white "
          style={{
            backgroundColor: '#70D', 
          }}
        >
          <ProductImage className="custom-image" style={{
            boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
          }}/>
          <ProductTitle className="text-bold" style={{
            fontWeight:'bold'
          }}/>
          <ProductButtons className="custom-buttons" style={{
            display: 'flex',
            justifyContent: 'end'
          }}/>
        </ProductCard>
      </div>
    </div>
  );
};