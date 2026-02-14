export const loadCartFromStorage = () => {
  try {
    const data = sessionStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    return [];
  }
};

export const saveCartToStorage = (cart) => {
  try {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  } catch (err) {
    console.log("SessionStorage error", err);
  }
};
