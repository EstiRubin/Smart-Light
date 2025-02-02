export const addToCart = (product) => ({
    type: "ADD_TO_CART",
    payload: product,
  });
  
  export const updateQuantity = (productId, quantity) => ({
    type: "UPDATE_QUANTITY",
    payload: { _id: productId, quantity },
  });
  
  export const removeFromCart = (productId) => ({
    type: "REMOVE_FROM_CART",
    payload: productId,
  });
  
  export const removeAllFromCart = () => ({
    type: "REMOVE_ALL_FROM_CART",
  });
  