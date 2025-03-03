import React from "react";
import { Link } from "react-router-dom";
import ColorCircle from "./ColorCircle";

const ProductCard = ({ product }) => {
  if (!product || !product.images || product.images.length === 0) {
    return <div>No product data available</div>;
  }
  return (
    <Link key={product._id} to={`/product/${product._id}`} className="product-link">
      <div className="product-card">
        <img src={product.images[0]} alt={product.nameOfProduct} className="product-image" />
        <div className="product-divider"></div>
        <div className="product-info">
          <span className="product-name">{product.nameOfProduct}</span>
          <div className="product-colors">
            {product.colors.map((color, index) => (
              <ColorCircle key={index} color={color} />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
