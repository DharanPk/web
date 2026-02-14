import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h2 className="logo">Foodie.</h2>
          <p>
            Delicious food delivered fast to your doorstep.
            Fresh ingredients, great taste, every time.
          </p>
          <div className="icon">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>
        <div className="link">
          <h4>Company</h4>
          <p>Home</p>
          <p>About Us</p>
          <p>Delivery</p>
          <p>Privacy Policy</p>
        </div>
        <div className="contact">
          <h4>Get In Touch</h4>
          <p>+91 9751794574</p>
          <p>foodie@gmail.com</p>
        </div>
      </div>

      <div className="bottom">
        © 2026 Foodie.com — All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
