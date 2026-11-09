import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";
import logo from "/img/footwear/footshop-logo.png";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <Link to={"/"}>
          <img src={logo} alt="logo react" />
          <span>Shoe Store</span>
        </Link>
      </div>
      <Nav />
    </header>
  );
};
