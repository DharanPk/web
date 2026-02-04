import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      {/* FOOTER */}
      <footer className="footer">
        <div>
          <h3 className="logo">Foodie.</h3>
          <p>
            We will fill your tummy with delicious food with fast delivery.
          </p>
        </div>

        <div>
          <h4>Our Menu</h4>
          <p>Special</p>
          <p>Popular</p>
        </div>

        <div>
          <h4>Company</h4>
          <p>Why Foodie</p>
          <p>FAQ</p>
        </div>

        <div>
          <h4>Support</h4>
          <p>Account</p>
          <p>Support Center</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
