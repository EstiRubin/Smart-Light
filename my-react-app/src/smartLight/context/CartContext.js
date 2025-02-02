import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const userId = "123"; // סימולציה למשתמש מחובר

  // טעינת העגלה בהפעלת האפליקציה
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/api/cart/${userId}`);
        setCart(data.items || []);
      } catch (error) {
        console.error("שגיאה בטעינת העגלה:", error);
      }
    };
    fetchCart();
  }, []);

  // פונקציה להוספת מוצר לעגלה
  const addToCart = async (product) => {
    try {
      const { data } = await axios.post("http://localhost:3000/api/cart", {
        userId,
        productId: product.id,
        name: product.name,
        quantity: 1, // מוסיפים כמות 1 כברירת מחדל
      });
      setCart(data.items);
    } catch (error) {
      console.error("שגיאה בהוספת מוצר:", error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// פונקציה לשימוש בקונטקסט בעמודים אחרים
export const useCart = () => useContext(CartContext);
