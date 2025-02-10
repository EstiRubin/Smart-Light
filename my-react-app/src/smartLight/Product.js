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
        if (response.data.images?.length > 0) {
          setMainImage(response.data.images[0]);
        }
      })
      .catch(error => console.error(error));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <>
      <h1 style={{ textAlign: "right", paddingRight: "11%", paddingBottom: "1%" }}>{product.nameOfProduct}</h1>

      <div style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
        display: "grid",
        gridTemplateColumns: "1fr 3fr 1fr",
        border: "2px solid black",
      }}>
        
        {/* גלריית תמונות */}
        <div style={{
          display: "flex",
          alignItems: "center",
          borderRight: "2px solid black",
          paddingRight: "10px",
          flexDirection: "column",
          justifyContent: "end",
        }}>
          {product.images?.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`תמונה ${index + 1}`}
              style={{
                width: "100%",
                objectFit: "cover",
                cursor: "pointer",
                borderBottom: "1px solid black"
              }}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>

        {/* תמונה ראשית */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRight: "2px solid black"
        }}>
          {mainImage && (
            <img src={mainImage} alt="מוצר ראשי" style={{
              width: "100%",
              maxHeight: "100%",
              objectFit: "contain"
            }} />
          )}
        </div>

        {/* פרטי מוצר */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          textAlign: "right",
          direction: "rtl",
        }}>
          {product._id && <p style={{ paddingRight: "10px" }}><strong>מק"ט:</strong> {product._id}</p>}
          {product.colors?.length > 0 && <p style={{ paddingRight: "10px" }}><strong>צבע גימור:</strong> {product.colors.join(", ")}</p>}
          {product.watt?.length>0 && <p style={{ paddingRight: "10px" }}><strong>מקור אור:</strong> {product.watt.join(", ")}</p>}
          {product.lightColors && <p style={{ paddingRight: "10px" }}><strong>גוון אור:</strong> {Array.isArray(product.lightColors) ? product.lightColors.join(", ") : product.lightColors}</p>}
          {product.Diameter && <p style={{ paddingRight: "10px" }}><strong>קוטר:</strong> {Array.isArray(product.Diameter) ? product.Diameter.join(", ") : product.Diameter}</p>}
          {product.Height && <p style={{ paddingRight: "10px" }}><strong>גובה:</strong> {Array.isArray(product.Height) ? product.Height.join(", ") : product.Height}</p>}
          {product.Depth && <p style={{ paddingRight: "10px" }}><strong>עומק:</strong> {Array.isArray(product.Depth) ? product.Depth.join(", ") : product.Depth}</p>}
          {product.Width && <p style={{ paddingRight: "10px" }}><strong>רוחב:</strong> {Array.isArray(product.Width) ? product.Width.join(", ") : product.Width}</p>}
          {product.Length && <p style={{ paddingRight: "10px" }}><strong>אורך:</strong> {Array.isArray(product.Length) ? product.Length.join(", ") : product.Length}</p>}
          {product.drill && <p style={{ paddingRight: "10px" }}><strong>קדח:</strong> {Array.isArray(product.drill) ? product.drill.join(", ") : product.drill}</p>}
          {product.IP && (
  <p style={{ paddingRight: "10px", direction: "rtl", textAlign: "right" }}>
    <strong>IP:</strong>
    <span style={{ direction: "ltr", display: "inline-block" }}>
      {product.IP}
    </span>
  </p>
)}
       <button
        onClick={() => dispatch(addToCart(product))}
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "12px",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
          marginTop: "10px",
          display: "block",
          width: "100%",
          // margin: "20px auto"
        }}
      >
        הוסף לעגלה
      </button> </div>
      </div>

      {/* כפתור הוספה לעגלה */}
      
    </>
  );
};

export default ProductDetail;
