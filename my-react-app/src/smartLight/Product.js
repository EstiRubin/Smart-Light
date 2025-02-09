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
    <>      <h1 style={{textAlign:"right",paddingRight:"11%",paddingBottom:"1%"}}>{product.nameOfProduct}</h1>

    <div style={{
      width: "100%",
      maxWidth: "1200px",
      margin: "0 auto",
      fontFamily: "Arial, sans-serif",
      display: "grid",
      gridTemplateColumns: "1fr 3fr 1fr",
      border: "2px solid black",
      // height: "80vh"
    }}>
      {/* גלריית תמונות צד שמאל */}
      <div style={{
        display: "flex",
        alignItems: "center",
        borderRight: "2px solid black",
        paddingRight: "10px",
        height: "100%",
        flexDirection: "column",
        justifyContent: "end",
      }}>
        {product.images && product.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`תמונה ${index + 1}`}
            style={{
              width: "100%",
              height: "100%", // כל תמונה תופסת 1/5 מהעמוד
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
       // padding: "10px"

      }}>
        <p style={{paddingRight: "10px"}}><strong>מק"ט:</strong> {product.sku || "N/A"}</p>
        <p style={{paddingRight: "10px"}}><strong>צבעים:</strong> {product.colors?.join(", ") || "N/A"}</p>
        <p style={{paddingRight: "10px"}}><strong>וואט:</strong> {product.watt || "N/A"}W</p>
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
          }}
        >
          הוסף לעגלה
        </button>
      </div>

      {/* מוצרים דומים
      <div style={{
        gridColumn: "span 3",
        borderTop: "2px solid black",
        marginTop: "20px",
        paddingTop: "10px"
      }}>
        <h2 style={{ textAlign: "center" }}>מוצרים דומים</h2>
        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          {product.relatedProducts && product.relatedProducts.map((related, index) => (
            <div key={index} style={{
              textAlign: "center",
              border: "1px solid black",
              padding: "10px",
              width: "150px"
            }}>
              <img src={related.image} alt={related.name} style={{ width: "100%", height: "100px", objectFit: "cover" }} />
              <p>{related.name}</p>
            </div>
          ))}
        </div>
      </div> */}

    </div></>
  );
};

export default ProductDetail;
