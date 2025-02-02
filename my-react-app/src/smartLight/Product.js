import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/action/cartActions.js"; 
// import { useDispatch } from 'react-redux';
// import { addToCart } from './cartReducer';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();  // ייבוא של useDispatch

  const handleAddToCart = () => {
    dispatch(addToCart(product));  // קריאה לפונקציית ה-action
  };
//   const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`http://localhost:3001/api/product/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!product) return <p>Loading...</p>;

//   const handleAddToCart = () => {
//     dispatch(addToCart(product));
//   };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>{product.nameOfProduct}</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <div>
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={product.nameOfProduct}
              style={{ width: "200px", borderRadius: "10px", marginBottom: "10px" }}
            />
          ))}
        </div>
        <div>
          <p><strong>Price:</strong> {product.price.join(", ")}₪</p>
          <p><strong>Watt:</strong> {product.watt.join(", ")}</p>
          <p><strong>Colors:</strong> {product.colors.join(", ")}</p>
          <p><strong>Light Colors:</strong> {product.lightColors.join(", ")}</p>
          <p><strong>Beam Angle:</strong> {product.beamAngle}</p>
          <p><strong>IP Rating:</strong> {product.IP}</p>
          <p><strong>DIM:</strong> {product.DIM}</p>
          <button onClick={handleAddToCart}>הוסף לעגלה</button>  {/* כפתור ההוספה */}

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
