import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartActions";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <button onClick={handleAddToCart}>הוסף לעגלה</button>
    </div>
  );
};

export default ProductCard;
