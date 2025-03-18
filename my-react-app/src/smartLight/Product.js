import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/action/cartActions.js";
import arrow from "../img/חץ.png";
import { getProductsById, getSimilarProducts } from './api.js';
import '../css/Product.css';
import ColorCircle from "./Product/ColorCircle";

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
    setTimeout(() => setShowPopup(false), 5000);
  };

  const handleNext = () => {
    if (product.images.length > 4) {
      setStartIndex(prevIndex => (prevIndex + 1 < product.images.length - 3 ? prevIndex + 1 : prevIndex));
    }
  };

  const handlePrev = () => {
    setStartIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  return (
    <>
      <h1 className="product-title">{product.nameOfProduct}</h1>

      <div className="product-container">
        <div className="gallery">
          <button onClick={handlePrev} disabled={startIndex === 0} className="arrow-button">
            <img src={arrow} alt="חץ" className="arrow-img rotated" />
          </button>
          {product.images?.slice(startIndex, startIndex + 4).map((img, index) => (
            <img key={index} src={img} alt={`תמונה ${index + 1}`} className="thumbnail" onClick={() => setMainImage(img)} />
          ))}
          <button onClick={handleNext} disabled={startIndex >= product.images.length - 4} className="arrow-button">
            <img src={arrow} alt="חץ" className="arrow-img" />
          </button>
        </div>

        <div className="main-image-container">
          {mainImage && <img src={mainImage} alt="מוצר ראשי" className="main-image" />}
        </div>

        <div className="product-details">
          {product._id && <p><strong>מק"ט:</strong> {product._id}</p>}
          {product.colors?.length > 0 && <p><strong>צבע גימור:</strong> {product.colors.join(", ")}</p>}
          {product.watt?.length > 0 && <p><strong>מקור אור:</strong> {product.watt.join(", ")}</p>}
          {product.lightColors && <p><strong>גוון אור:</strong> {Array.isArray(product.lightColors) ? product.lightColors.join(", ") : product.lightColors}</p>}
          <button onClick={handleAddToCart} className="add-to-cart">הוסף לעגלה</button>
        </div>
      </div>

      <h3 className="product-details-title">מוצרים דומים</h3>
      <div className="similar-products">
  {similarProducts.map(similar => (
    <Link key={similar._id} to={`/product/${similar._id}`} className="card">
      <img src={similar.images[0]} alt={similar.nameOfProduct} className="card-img" />
      <div className="card-divider"></div>
      <p>{similar.nameOfProduct}</p>
      <div className="product-colors">
        {similar.colors.map((color, index) => (
          <ColorCircle key={index} color={color} />
        ))}
      </div>
    </Link>
  ))}
</div>

      {showPopup && (
        <div className="popup">
          <button onClick={() => navigate("/cart")} className="popup-button">מעבר לעגלה 🛒</button>
          ✅ המוצר נוסף לעגלה!
        </div>
      )}
    </>
  );
};

export default ProductDetail;
