import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import "../css/ALLproduct.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      axios.get(`http://localhost:3000/api/product/category/${category}`)
        .then(response => setProducts(response.data))
        .catch(error => {
          console.error(error);
          setProducts([]);
        });
    }
  }, [category]);

  return (
    <>
    <div className="products-header">
      <div className="search-box">
        <input type="text" placeholder="Search..." />
        <button>
          <img src="search-icon.png" alt="Search" /> {/* או SVG */}
        </button>
      </div>
      <div className="title">
{category}      </div>
      
    </div>
    <div className="product-list-container">
      <div className="product-cards-container">
        {products.length > 0 ? (
          products.map(product => (
            <Link key={product._id} to={`/product/${product._id}`} className="product-link">
              <div className="product-card">
                <img src={product.images[0]} alt={product.nameOfProduct} className="product-image" />
                <div className="product-divider"></div>
                <div className="product-info">
                  <span className="product-name">{product.nameOfProduct}</span>
                  <div className="product-colors">
                    {product.colors.map((color, index) => (
                      <div key={index} className="color-circle" style={{ backgroundColor: color }}></div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>
    </div>
    </>
  );
}

export default ProductList;
