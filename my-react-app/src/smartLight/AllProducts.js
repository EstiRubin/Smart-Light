import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "../css/ALLproduct.css";
import search from "../img/search.jpg";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      axios
        .get(`http://localhost:3000/api/product/category/${category}`)
        .then((response) => setProducts(response.data))
        .catch((error) => {
          console.error(error);
          setProducts([]);
        });
    }
  }, [category]);
  const removeUnderscores = (str) => {
    return str.replace(/_/g, " "); // Replaces all underscores with a space
  };
  const colorMap = {
    פליז:"#B5A642",
    עץ:"#A67B5B",
    רוז_גולד:"linear-gradient(45deg, #B76E79, #E6C7C2)",
    שחור: "black",
    בזלת: "darkgray",
    אפור: "gray",
    אפור_כהה: "darkgray",
    אפור_בהיר: "lightgray",
    לבן: "white",
    כחול: "blue",
    כחול_כהה: "darkblue",
    כחול_בהיר: "lightblue",
    תכלת: "skyblue",
    ירוק: "green",
    ירוק_כהה: "darkgreen",
    ירוק_בהיר: "lightgreen",
    צהוב: "yellow",
    צהוב_כהה: "#CCCC00",
    צהוב_בהיר: "#FFFF99",
    כתום: "orange",
    כתום_כהה: "#FF8C00",
    כתום_בהיר: "#FFD580",
    אדום: "red",
    אדום_כהה: "darkred",
    אדום_בהיר: "#FF6666",
    בורדו: "#800000",
    ורוד: "pink",
    ורוד_כהה: "deeppink",
    ורוד_בהיר: "lightpink",
    סגול: "purple",
    סגול_כהה: "darkpurple",
    סגול_בהיר: "#D8BFD8",
    חום: "brown",
    חום_כהה: "#8B4513",
    חום_בהיר: "#D2B48C",
    בז: "beige",
    שמנת: "#FFF5E1",
    זהב: "linear-gradient(45deg, #FFD700, #E6BE8A, #CBA135)",
    כסף: "silver",
    ברונזה: "#CD7F32",
    טורקיז: "turquoise",
    טורקיז_כהה: "#008B8B",
    טורקיז_בהיר: "lightseagreen",
    מנטה: "#98FF98",
    זית: "olive",
    חרדל: "#FFDB58",
    קורל: "coral",
    סלמון: "salmon",
    חציל: "#311432",
  };

  return (
    <>
      <div className="products-header">
        <div className="search-box">
          {/* <input type="text" placeholder="Search..." />
          <button>
            <img src={search} alt="Search" /> 
          </button> */}
        </div>
        <div className="title">
          <h1>{removeUnderscores(category)}</h1>
        </div>
      </div>
      <div className="product-list-container">
        <div className="product-cards-container">
          {products.length > 0 ? (
            products.map((product) => (
              <Link
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
                key={product._id}
                to={`/product/${product._id}`}
                className="product-link"
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
                      {product.colors.map((color, index) => {
                        const colors = color.split(" "); // פיצול הצבעים
                        const color1 = colorMap[colors[0].trim()] || "gray"; // אם לא נמצא, יהיה אפור
                        const color2 = colors[1]
                          ? colorMap[colors[1].trim()] || "gray"
                          : color1; // אם אין צבע שני, משכפל את הראשון

                        return (
                          <div
                            key={index}
                            className="color-circle"
                            style={{
                              background:
                                colors.length > 1
                                  ? `linear-gradient(to right, ${color1} 50%, ${color2} 50%)`
                                  : color1, // אם יש רק צבע אחד, פשוט רקע רגיל
                              width: "20px",
                              height: "20px",
                              borderRadius: "50%",
                             // margin: "2px",
                              border: color.includes("לבן")
                                ? "1px solid black"
                                : "none", // מסגרת אם יש צבע לבן
                            }}
                          ></div>
                        );
                      })}
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
};

export default ProductList;
