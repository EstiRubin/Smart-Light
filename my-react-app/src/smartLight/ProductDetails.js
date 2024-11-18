import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
    const { id } = useParams(); // מזהה המוצר מהנתיב
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_URL = `http://localhost:3000/api/products/${id}`;

    useEffect(() => {
        axios.get(API_URL)
            .then((response) => {
                setProduct(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>{product.nameOfProduct}</h1>
            <p><strong>Price:</strong> {product.price} ₪</p>
            {product.images && product.images.map((img, idx) => (
                <img key={idx} src={img} alt={`Product Image ${idx + 1}`} />
            ))}
        </div>
    );
};

export default ProductDetails;
