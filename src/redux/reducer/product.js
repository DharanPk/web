const initialState = {
  cartproduct: [],
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
      return {
        ...state,
        cartproduct: state.cartproduct
          .map((item) =>
            item.id === action.payload
              ? { ...item, qty: item.qty - 1 }
              : item
          )
          .filter((item) => item.qty > 0),
      };
    }

    default:
      return state;
  }
};

export default product;
