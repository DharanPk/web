import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      {/* NEWSLETTER */}
      <div className="newsletter">
        <h2>Subscribe To Our Newsletter</h2>
        <p>
          We recommend you to subscribe our newsletter, drop your email below.
        </p>

        <div className="newsletter-box">
          <input type="email" placeholder="Enter your email address" />
          <button>Subscribe</button>
        </div>
      </div>

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
