import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/לוגו סמארטלייט.jpg";
import "../css/NavbarStyle.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" style={{ height: "60px" }} />
        </div>
        <ul className="nav-links">
        <li className="nav-item">
          <div className="dropdown">
            <a className="dropbtn">Light Fixtures</a>
            <div className="dropdown-content">
              <Link to="/AllProducts">Fixture 1</Link>
              <Link to="/AllProducts">Fixture 2</Link>
              <Link to="/AllProducts">Fixture 3</Link>
            </div>
          </div>
        </li>
          <li class="nav-item" role="presentation">
              <Link to="/">Home</Link>
          </li>
          <li class="nav-item" role="presentation">
            <Link to="/AllProducts">Products</Link>
          </li>
          <li class="nav-item" role="presentation">
            <Link to="/Projects">Projects</Link>
          </li>
          <li class="nav-item" role="presentation">
            <Link to="/About">About Us</Link>
          </li>
          <li class="nav-item" role="presentation">
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li class="nav-item" role="presentation">
            <Link to="/Cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
