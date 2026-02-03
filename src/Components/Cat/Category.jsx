import React from "react";
import { categories } from "../../Data/data";

function Category({ setSelected, selected }) {
  return (
    <div style={styles.row}>
      {categories.map((cat) => (
        <div
          key={cat.id}
          style={{
            ...styles.circle,
            border:
              selected === cat.name
                ? "3px solid black"
                : "3px solid transparent",
          }}
          onClick={() => setSelected(cat.name)}
        >
          <img src={cat.image} alt={cat.name} style={styles.image} />
          <p style={styles.text}>{cat.name}</p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  row: {
    display: "flex",
    gap: "16px",
    overflowX: "auto",
    padding: "10px",
  },

  circle: {
    minWidth: "90px",
    height: "90px",
    borderRadius: "50%",
    background: "#fff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "0.2s",
  },

  image: {
    width: "45px",
    height: "45px",
    objectFit: "cover",
    borderRadius: "50%",
  },

  text: {
    fontSize: "12px",
    marginTop: "6px",
    textAlign: "center",
  },
};

export default Category;
