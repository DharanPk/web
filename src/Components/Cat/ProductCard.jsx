import React from "react";

function ProductCard({ product }) {
  if (!product) return null;

  return (
    <div style={styles.card}>
      <div style={styles.imageWrapper}>
        <img
          src={product.image}
          alt={product.name}
          style={styles.image}
          loading="lazy"
        />
      </div>

      <h4 style={styles.name}>{product.name}</h4>
      <p style={styles.price}>₹{product.price}</p>

      <button style={styles.btn}>Add</button>
    </div>
  );
}


const styles = {
  card: {
    width: "180px",
    background: "#fff",
    borderRadius: "12px",
    padding: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  imageWrapper: {
    width: "100%",
    height: "120px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "cover",
  },
  name: {
    fontSize: "14px",
    margin: "8px 0",
  },
  price: {
    fontWeight: "bold",
  },
  btn: {
    marginTop: "6px",
    padding: "6px 10px",
    borderRadius: "6px",
    border: "none",
    background: "black",
    color: "white",
    cursor: "pointer",
  },
};

export default ProductCard;
