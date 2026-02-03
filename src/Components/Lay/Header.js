import { Link } from "react-router-dom";
import "./Header.css";
import image from "./food.png"; // correct path confirm pannu

function Header() {
  return (
    <header className="head">
      <div className="pic">
        <img src={image} alt="img" />
      </div>

      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/cart" className="cart">
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
