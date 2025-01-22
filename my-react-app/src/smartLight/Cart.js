import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const [cart, setCart] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_URL = "http://localhost:3001/api/cart";
    const EMAIL_API_URL = "http://localhost:3001/api/cart/send-email";

    useEffect(() => {
        axios.get(API_URL)
            .then((response) => {
                console.log(response.data); 
                setCart(response.data); 
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setError(error);
                setLoading(false);
            });
    }, []);

    const handleRemoveItem = (cartId, itemId) => {
        axios
            .delete(`${API_URL}/${cartId}/items/${itemId}`)
            .then(() => {
                setCart((prevCart) =>
                    prevCart.map((cartItem) =>
                        cartItem._id === cartId
                            ? {
                                ...cartItem,
                                items: cartItem.items.filter((item) => item._id !== itemId),
                            }
                            : cartItem
                    )
                );
            })
            .catch((error) => {
                console.error("Error removing item:", error);
            });
    };

    const handleSendCartToEmail = (cartId, userEmail) => {
        axios
            .post(EMAIL_API_URL, { cartId, email: userEmail })
            .then((response) => {
                alert("Your order details have been sent successfully. Our representatives will contact you shortly.");
            })
            .catch((error) => {
                console.error("Error sending cart:", error);
                alert("Failed to send cart. Please try again.");
            });
    };
    

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!cart) return <div>No cart found.</div>;

    return (
        <div style={styles.cartContainer}>
            <h1>Your Cart</h1>
            {cart.map((cartItem) => (
                <div key={cartItem._id} style={styles.cartCard}>
                    <div style={styles.cartHeader}>
                        <h2>Cart ID: {cartItem._id}</h2>
                        <button
                            style={styles.sendButton}
                            onClick={() => {
                            const userEmail = prompt("Enter your email:");
                            if (userEmail) {
                                handleSendCartToEmail(cartItem._id, userEmail);
                            } else {
                                alert("Email is required to complete the order.");
                            }
                        }}
                    >
                    Complete Order
                </button>

                    </div>
                    {cartItem.items && cartItem.items.length > 0 ? (
                        <ul style={styles.itemList}>
                            {cartItem.items.map((item) => (
                                <li key={item._id} style={styles.item}>
                                    <div>
                                        <strong>Product ID:</strong> {item.productId} <br />
                                        <strong>Quantity:</strong> {item.quantity} <br />
                                        <strong>Customization:</strong>
                                        <ul>
                                            <li><strong>Color:</strong> {item.customization?.color || "N/A"}</li>
                                            <li><strong>Light Color:</strong> {item.customization?.lightColor || "N/A"}</li>
                                            <li><strong>Watt:</strong> {item.customization?.watt || "N/A"}</li>
                                            <li><strong>Other Options:</strong> {item.customization?.otherOptions || "N/A"}</li>
                                        </ul>
                                    </div>
                                    <button
                                        style={styles.removeButton}
                                        onClick={() => handleRemoveItem(cartItem._id, item._id)}
                                    >
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No items in this cart.</p>
                    )}
                </div>
            ))}
        </div>
    );
};

const styles = {
    cartContainer: {
        padding: "20px",
        backgroundColor: "#f4f4f4",
        minHeight: "100vh",
    },
    cartCard: {
        backgroundColor: "#fff",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "20px",
        marginBottom: "20px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    cartHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    itemList: {
        listStyleType: "none",
        padding: 0,
    },
    item: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 0",
        borderBottom: "1px solid #ddd",
    },
    removeButton: {
        backgroundColor: "#ff4d4f",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        padding: "5px 10px",
        cursor: "pointer",
    },
    sendButton: {
        backgroundColor: "#4caf50",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        padding: "10px 15px",
        cursor: "pointer",
        fontSize: "16px",
    },
};

export default Cart;