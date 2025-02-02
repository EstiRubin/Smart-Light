const initialState = {
    items: [],
  };
  
  export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        const existingProductIndex = state.items.findIndex(
          (item) => item._id === action.payload._id
        );
        if (existingProductIndex >= 0) {
          const updatedItems = [...state.items];
          updatedItems[existingProductIndex].quantity += 1;
          return { ...state, items: updatedItems };
        } else {
          return { 
            ...state, 
            items: [...state.items, { ...action.payload, quantity: 1 }] 
          };
        }
  
      case "UPDATE_QUANTITY":
        const updatedCart = state.items
          .map((item) =>
            item._id === action.payload._id
              ? { ...item, quantity: action.payload.quantity }
              : item
          )
          .filter((item) => item.quantity > 0); // מוחק מוצרים עם כמות 0
        return { ...state, items: updatedCart };
  
      case "REMOVE_FROM_CART":
        return {
          ...state,
          items: state.items.filter((item) => item._id !== action.payload),
        };
  
      case "REMOVE_ALL_FROM_CART":
        return {
          ...state,
          items: [],
        };
  
      default:
        return state;
    }
  };
  