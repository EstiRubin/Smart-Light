import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "../css/ALLproduct.css";
import productImage from "../img/Products.png";
import ColorCircle from "./Product/ColorCircle";
import { getProductsBycategory } from "./api";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      getProductsBycategory(category).then(setProducts);
    }
  }, [category]);

  const removeUnderscores = (str) => str.replace(/_/g, " ");

  return (
    <>
      <div className="products-header">
        <div className="title">
          <h1>{removeUnderscores(category)}</h1>
        </div>
      </div>
      <div className="product-list-container">
        <div className="product-cards-container">
          {products.length > 0 ? (
            products.map((product) => (
              <Link
                key={product._id}
                to={`/product/${product._id}`}
                className="product-link"
                style={{ color: "black", textDecoration: "none" }}
              >
                <div className="product-card">
                  <img
                    src={product.images[0]}
                    alt={product.nameOfProduct}
                    className="product-image"
                  />
                  <div className="product-divider"></div>
                  <div className="product-info">
                    <span className="product-name">
                      {product.nameOfProduct}
                    </span>
                    <div className="product-colors">
                      {product.colors.map((color, index) => (
                        <ColorCircle key={index} color={color} />
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p>אין מוצרים להצגה</p>
          )}
        </div>
        <div className="img-product">
          <img src={productImage} alt="products"/>
        </div>
      </div>
    </>
  );
};

export default ProductList;
