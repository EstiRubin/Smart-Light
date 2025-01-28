import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../css/ALLproduct.css"
const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/product')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="product-list-container">
      <div className="product-cards-container">
        {products.map(product => (
          <div key={product._id} className="product-card">
            <h2 className="product-name">{product.nameOfProduct}</h2>
            <div className="product-image-container">
              <img 
                src={product.images[0]} 
                alt={product.nameOfProduct} 
                className="product-image" 
              />
            </div>
            <p className="product-price">Price: {product.price.join(", ")}₪</p>
            <p className="product-watt">Watt: {product.watt.join(", ")}</p>
            <Link 
              to={`/product/${product._id}`} 
              className="view-details-btn"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
