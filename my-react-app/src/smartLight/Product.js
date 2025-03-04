import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/action/cartActions.js";
import arrow from "../img/חץ.png"
import { getSimilarProducts } from './api.js';
const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/product/${id}`)
      .then(response => {
        setProduct(response.data);
        getSimilarProducts(id).then(setSimilarProducts);

        if (response.data.images?.length > 0) {
          setMainImage(response.data.images[0]);
        }
      })
      .catch(error => console.error(error));
  }, [id]);
  if (!product) return <p>Loading...</p>;
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 5000);
  };
  const handleNext = () => {
    if (product.images.length > 4) {
      setStartIndex((prevIndex) =>
        prevIndex + 1 < product.images.length - 3 ? prevIndex + 1 : prevIndex
      );
    }
  };
  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };
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
        
        {/* גלריית תמונות עם חצים */}
        <div style={{
          display: "flex",
          alignItems: "center",
          borderRight: "2px solid black",
          paddingRight: "10px",
          flexDirection: "column",
          justifyContent: "center",
        }}>
          <button onClick={handlePrev} disabled={startIndex === 0} style={{ cursor: "pointer",background:"transparent", border:"none"}}><img src={arrow} alt=" חץ" style={{width: "10px" ,transform:"rotate(180deg)" }}></img></button>
          {product.images?.slice(startIndex, startIndex + 4).map((img, index) => (
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
          <button onClick={handleNext} className='arrow' disabled={startIndex >= product.images.length - 4} style={{ cursor: "pointer" ,background:"transparent", border:"none"}}> <img src={arrow} alt=" חץ" style={{width: "10px" }}></img></button>
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
          {product.Diameter && <p style={{ paddingRight: "10px" }}><strong>קוטר:</strong> {Array.isArray(product.Diameter) ? product.Diameter.join(", ") : product.Diameter}MM</p>}
          {product.Height && <p style={{ paddingRight: "10px" }}><strong>גובה:</strong> {Array.isArray(product.Height) ? product.Height.join(", ") : product.Height}MM</p>}
          {product.Depth && <p style={{ paddingRight: "10px" }}><strong>עומק:</strong> {Array.isArray(product.Depth) ? product.Depth.join(", ") : product.Depth}MM</p>}
          {product.Width && <p style={{ paddingRight: "10px" }}><strong>רוחב:</strong> {Array.isArray(product.Width) ? product.Width.join(", ") : product.Width}MM</p>}
          {product.Length && <p style={{ paddingRight: "10px" }}><strong>אורך:</strong> {Array.isArray(product.Length) ? product.Length.join(", ") : product.Length}MM</p>}
          {product.drill && <p style={{ paddingRight: "10px" }}><strong>קדח:</strong> {Array.isArray(product.drill) ? product.drill.join(", ") : product.drill}MM</p>}
          {product.CylinderDiameter && <p style={{ paddingRight: "10px" }}><strong>קוטר צילינדר:</strong> {Array.isArray(product.CylinderDiameter) ? product.CylinderDiameter.join(", ") : product.CylinderDiameter}MM</p>}
          {product.IP && (
            <p style={{ paddingRight: "10px", direction: "rtl", textAlign: "right" }}>
              <strong>IP:</strong>
              <span style={{ direction: "ltr", display: "inline-block" }}>
                {product.IP}
              </span>
            </p>
          )}
             

          <button
            onClick={handleAddToCart}
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
            }}
          >
            הוסף לעגלה
          </button>
        </div>
      </div>
      <h3>מוצרים דומים:</h3>
            <div className="similar-products">
                {similarProducts.map(similar => (
                    <a key={similar._id} href={`/product/${similar._id}`} className="card">
                        <img src={similar.images[0]} alt={similar.nameOfProduct} />
                        <p>{similar.nameOfProduct}</p>
                    </a>
                ))}
            </div>

      {showPopup && (
        <div style={{
          position: "fixed",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "#000000FF",
          color: "white",
          padding: "15px 30px",
          borderRadius: "8px",
          boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}>
          <button 
            style={{
              background: "white",
              color: "#000000FF",
              border: "none",
              padding: "5px 10px",
              borderRadius: "5px",
              cursor: "pointer"
            }} 
            onClick={() => navigate("/cart")}
          >
            מעבר לעגלה 🛒
          </button>
          ✅ המוצר נוסף לעגלה!
        </div>
      )}
    </>
  );
};

export default ProductDetail;
