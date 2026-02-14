import { loadCartFromStorage } from "../cartStorage";

const initialState = {
  cartproduct: loadCartFromStorage(),
  orders:[]
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const exist = state.cartproduct.find(
        (item) => item.id === action.payload.id
      );

      if (exist) {
        return {
          ...state,
          cartproduct: state.cartproduct.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item
          ),
        };
      }

      return {
        ...state,
        cartproduct: [...state.cartproduct, { ...action.payload, qty: 1 }],
      };
    }

    case "REMOVE_FROM_CART": {
      const item = state.cartproduct.find(
        (item) => item.id === action.payload
      );

      if (item.qty === 1) {
        return {
          ...state,
          cartproduct: state.cartproduct.filter(
            (item) => item.id !== action.payload
          ),
        };
      }
      

      return {
        ...state,
        cartproduct: state.cartproduct.map((item) =>
          item.id === action.payload
            ? { ...item, qty: item.qty - 1 }
            : item
        ),
      };
    }
case "ADD_ORDER":
  return {
    ...state,
    orders: [...state.orders, action.payload]
  };

case "CLEAR_CART":
  return {
    ...state,
    cartproduct: []
  };


    default:
      return state;
  }
};

export default product;
