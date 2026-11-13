import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";
import logo from "/img/barrostudio/barro_logo_hq.png";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <Link to={"/"}>
          <img src={logo} alt="logo react" />
          <span>Barro Studio</span>
        </Link>
      </div>
      <Nav />
    </header>
  );
};
