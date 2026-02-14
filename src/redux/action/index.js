// ADD TO CART
export const add = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};

// REMOVE FROM CART (decrease qty or remove)
export const remove = (id) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: id,
  };
};

export const addOrder = (order) => ({
  type: "ADD_ORDER",
  payload: order
});

export const clearCart = () => ({
  type: "CLEAR_CART"
});
