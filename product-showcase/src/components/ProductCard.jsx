import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(GlobalContext);

  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;