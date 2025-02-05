import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/action/cartActions.js";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`http://localhost:3000/api/product/${id}`)
      .then(response => {
        setProduct(response.data);
        if (response.data.images && response.data.images.length > 0) {
          setMainImage(response.data.images[0]);
        }
      })
      .catch(error => console.error(error));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div style={{
      padding: "0",
      width: "100%",
      maxWidth: "100%",  // מתפרס על כל העמוד
      margin: "0 auto",
      fontFamily: "Arial, sans-serif",
      display: "flex",
      flexDirection: "column"
    }}>
      <h1 style={{
        margin: "0",
        textAlign: "center",
        fontSize: "38px", // הקטנתי את הגודל
        fontWeight: "bold",
        padding: "15px 0", // הורדתי את המסגרת
      }}>
        {product.nameOfProduct} 
      </h1>

      {/* קו מעל גלריית התמונות */}
      <hr style={{ border: "1px solid black", margin: "10px 0" }} />

      <div style={{ display: "flex", width: "100%" }}>
        {/* גלריה של תמונות נוספות */}
        <div style={{
          width: "20%",
          display: "flex",
          flexDirection: "column",
          borderRight: "1px solid black",
          paddingRight: "10px"
        }}>
          {product.images && product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`תמונה ${index + 1}`}
              style={{
                width: "100%",
                height: "100%", // תמונות בצד שמאל בריבוע מדויק
                cursor: "pointer",
                borderBottom: "1px solid black",
                objectFit: "cover"
              }}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>

        {/* קו בין התמונה הגדולה לצד ימין */}
        <hr style={{ border: "1px solid black", height: "100%", margin: "0 20px" }} />

        {/* תמונה ראשית */}
        <div style={{
          width: "60%",
          height: "auto",
          aspectRatio: "1/1", // שמירה על פרופורציות של ריבוע
          textAlign: "center",
          padding: "15px",
        }}>
          {mainImage && (
            <img src={mainImage} alt="מוצר ראשי" style={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }} />
          )}
        </div>

        {/* מידע וכפתור */}
        <div style={{
          width: "20%",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          textAlign: "right"
        }}>
          <p><strong>מק"ט:</strong> {product.sku || "N/A"}</p>
          <p><strong>צבעים:</strong> {product.colors?.join(", ") || "N/A"}</p>
          <p><strong>וואט:</strong> {product.watt || "N/A"}W</p>
          <p><strong>מחיר:</strong> {product.price || "N/A"}₪</p>
          <button
            onClick={() => dispatch(addToCart(product))}
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "12px 25px", // הקטנתי את הכפתור
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              width: "100%",
              marginTop: "auto"
            }}
          >
            הוסף לעגלה
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
