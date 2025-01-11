import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../img/לוגו סמארטלייט.jpg";
import logout from '../img/logoutpng.png'
import '../css/NavbarStyle.css';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar">
       
        <ul className="nav-links">
        <li className="nav-item">
          <div className="dropdown">
            <a className="dropbtn">קטגוריות</a>
            <div className="dropdown-content">
              <Link to="/AllProducts">Fixture 1</Link>
              <Link to="/AllProducts">Fixture 2</Link>
              <Link to="/AllProducts">Fixture 3</Link>
            </div>
          </div>
        </li>
          <li class="nav-item" role="presentation">
              <Link to="/">בית</Link>
          </li>
          <li class="nav-item" role="presentation">
            <Link to="/AllProducts">מוצרים</Link>
          </li>
          <li class="nav-item" role="presentation">
            <Link to="/Projects">פרויקטים</Link>
          </li>
          <li class="nav-item" role="presentation">
            <Link to="/About">אודות</Link>
          </li>
          <li class="nav-item" role="presentation">
            <Link to="/Contact">צור קשר</Link>
          </li>
          <li class="nav-item" role="presentation">
            <Link to="/Cart">Cart</Link>
          </li>
        </ul>
        <img src={logout} alt="Logo" onClick={navigate("/")} style={{ height: "30px" }} />
        <div className="logo">
          <img src={logo} alt="Logo" style={{ height: "60px" }} />
        </div>
      </nav>
    </>
  );
}
