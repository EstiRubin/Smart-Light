import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/product')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Product Showcase</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {products.map(product => (
          <div 
            key={product._id} 
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "20px",
              width: "300px",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
            }}
          >
            <h2>{product.nameOfProduct}</h2>
            <div style={{ marginBottom: "10px" }}>
              <img 
                src={product.images[0]} 
                alt={product.nameOfProduct} 
                style={{ width: "100%", borderRadius: "10px" }}
              />
            </div>
            <p>Price: {product.price.join(", ")}₪</p>
            <p>Watt: {product.watt.join(", ")}</p>
            <Link 
              to={`/product/${product._id}`} 
              style={{
                display: "inline-block",
                marginTop: "10px",
                padding: "10px 20px",
                backgroundColor: "#007BFF",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "5px"
              }}
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
