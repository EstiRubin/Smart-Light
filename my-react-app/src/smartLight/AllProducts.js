import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import "../css/ALLproduct.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);  // Initial state is an empty array
  const { category } = useParams();  // Getting the category from the URL

  useEffect(() => {
    // Fetch the products for the current category
    if (category) {
      axios.get(`http://localhost:3001/api/product/category/${category}`)
        .then(response => {
          // Update the state with the fetched products
          setProducts(response.data);
        })
        .catch(error => {
          console.error(error);
          setProducts([]);  // If there's an error, reset the products state
        });
    }
  }, [category]);  // The effect runs whenever the category changes

  return (
    <div className="product-list-container">
      <div className="product-cards-container">
        {products.length > 0 ? (
          products.map(product => (
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
          ))
        ) : (
          <p>No products found for this category.</p>  // Show this message if no products are found
        )}
      </div>
    </div>
  );
}

export default ProductList;
