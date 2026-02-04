import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-about">
          <h2 className="footer-logo">Foodie.</h2>
          <p>
            Delicious food delivered fast to your doorstep.
            Fresh ingredients, great taste, every time.
          </p>

          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>

        <div className="footer-links">
          <h4>Company</h4>
          <p>Home</p>
          <p>About Us</p>
          <p>Delivery</p>
          <p>Privacy Policy</p>
        </div>

        {/* RIGHT */}
        <div className="footer-contact">
          <h4>Get In Touch</h4>
          <p>+91 98765 43210</p>
          <p>support@foodie.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2024 Foodie.com — All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
