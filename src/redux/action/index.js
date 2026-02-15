
export const add = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,//ADD
  };
};

export const remove = (id) => {
  return {
    type: "REMOVE_FROM_CART",//REMOVE FROM CART
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
