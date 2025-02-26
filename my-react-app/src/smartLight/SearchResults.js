import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../css/ALLproduct.css";
import ProductCard from "./Product/ProductCard";
import productImage from "../img/Products.png";

const SearchResults = () => {
  const [products, setProducts] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    if (searchTerm) {
      axios
        .get(`http://localhost:3000/api/product/search/${searchTerm}`)
        .then((response) => setProducts(response.data))
        .catch((error) => {
          console.error(error);
          setProducts([]);
        });
    }
  }, [searchTerm]);

  return (
    <div>
      <h1>תוצאות חיפוש עבור: {searchTerm}</h1>
      <div className="product-list-container">
        <div className="product-cards-container">
          {products.length > 0 ? (
            products.map((product) => <ProductCard key={product._id} product={product} />)
          ) : (
            <p>No products found for this category.</p>
          )}
        </div><div className="img-product">
          <img src={productImage} alt="products" />
        </div>
      </div>
      
    </div>
  );
};

export default SearchResults;
