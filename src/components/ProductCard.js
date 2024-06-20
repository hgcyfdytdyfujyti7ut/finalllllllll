import React from "react";

const ProductCard = ({ product, onClick }) => (
  <div className="product-card" onClick={() => onClick(product.id)}>
    <img src={product.image} alt={product.title} style={{ width: '100px' }} />
    <h2>{product.title}</h2>
    <p>${product.price}</p>
  </div>
);

export default ProductCard;