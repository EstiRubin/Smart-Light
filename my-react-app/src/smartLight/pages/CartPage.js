import React, { useState } from "react";
import { removeFromCart, updateQuantity,removeAllFromCart } from "../../redux/action/cartActions.js";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // ניווט בין עמודים
import "./CartPage.css"; // קובץ עיצוב חדש

const CartPage = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");

  const handleUpdateQuantity = (productId, quantity) => {
    if (quantity >= 1) {
      dispatch(updateQuantity(productId, quantity));
    } else {
      dispatch(removeFromCart(productId));
    }
  };

  const handleRemoveAllFromCart = () => {
    dispatch(removeAllFromCart());
  };

  const handleSendOrder = async () => {
    if (!userEmail) {
      alert("נא להזין כתובת אימייל");
      return;
    }
  
    const orderDetails = {
      userEmail,
      cart,
    };
  
    try {
      const response = await fetch("http://localhost:3000/api/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderDetails),
      });
  
      if (response.ok) {
        alert("✔ ההזמנה נשלחה בהצלחה!");
        dispatch(removeAllFromCart());
      } else {
        alert("❌ שגיאה בשליחת ההזמנה.");
      }
    } catch (error) {
      console.error("❌ Error:", error);
      alert("❌ אירעה שגיאה.");
    }
  };
  

  return (
    <div className="cart-container">
      <h2>🛒 העגלה שלי</h2>
      {cart.length > 0 ? (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>תמונה</th>
                <th>שם מוצר</th>
                <th>Watt</th>
                <th>צבעים</th>
                <th>כמות</th>
                <th>פעולות</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item._id}>
                  <td>
                    <img src={item.images[0]} alt={item.nameOfProduct} className="cart-img" />
                  </td>
                  <td>{item.nameOfProduct}</td>
                  <td>{item.watt.join(", ")}</td>
                  <td>{item.colors.join(", ")}</td>
                  <td>
                    <button className="quantity-btn" onClick={() => handleUpdateQuantity(item._id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button className="quantity-btn" onClick={() => handleUpdateQuantity(item._id, item.quantity + 1)}>+</button>
                  </td>
                  <td>
                    <button className="delete-btn" onClick={() => dispatch(removeFromCart(item._id))}>❌</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>סה"כ מוצרים: {cart.reduce((acc, item) => acc + item.quantity, 0)}</h3>

          <input
            type="email"
            placeholder="הזן כתובת מייל לקבלת ההזמנה"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />

          <button className="order-btn" onClick={handleSendOrder}>📩 סיום הזמנה</button>
          <button className="clear-btn" onClick={handleRemoveAllFromCart}>🗑️ מחיקת כל העגלה</button>
        </>
      ) : (
        <p>העגלה ריקה.</p>
      )}
      
      <button className="back-btn" onClick={() => navigate("/")}>🔙 חזור לחנות</button>
    </div>
  );
};

export default CartPage;
