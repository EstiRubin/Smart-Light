import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/לוגו סמארטלייט.jpg";
import logout from '../img/logoutpng.png';
import '../css/NavbarStyle.css';

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-links">
          <li className="nav-item" role="presentation">
            <Link to="/">בית</Link>
          </li>
    
          <li className="dropdown">
            <a className="dropbtn">מוצרים</a>
            <div className="dropdown-content">
              <div className="column">
                <h4> <Link to="/AllProducts/Indoor_lighting">תאורת פנים</Link></h4>
                <Link to="/AllProducts/Hanging_lighting_fixtures">גופי תאורה תלויים</Link>
                <div className="category">
                  <Link to="/AllProducts/Ceiling_mounted">צמודי תקרה - </Link>
                  <div className="dropdown-absolute">
                    <Link to="/AllProducts/Cylinders">צילינדרים</Link>
                    <Link to="/AllProducts/Ceiling_fixtures">גופי תאורה צמוד לתקרה</Link>
                  </div>
                </div>
                <Link to="/AllProducts/Ceiling_recessed">שקועי תקרה</Link>
                <Link to="/AllProducts/Wall_recessed">שקועי קיר</Link>
                <div className="category">
                  <Link to="/AllProducts/Wall_mounted">צמודי קיר - </Link>
                  <div className="dropdown-absolute">
                    <Link to="/AllProducts/Night_lamps">מנורת לילה</Link>
                    <Link to="/AllProducts/Shabbat_lamps">מנורת שבת</Link>
                  </div>
                </div>
                <div className="category">
                  <Link to="/AllProducts/Profiles">פרופילים - </Link>
                  <div className="dropdown-absolute">
                    <Link to="/AllProducts/LED_profiles">פרופילי לד</Link>
                    <Link to="/AllProducts/Concealed_lighting">תאורה נסתרת</Link>
                    <Link to="/AllProducts/Mashrabiya">משרביה</Link>
                  </div>
                </div>
                <Link to="/AllProducts/Magnetic_Profiles_and_Parts">פס מגנטי</Link>
                <div className="category">
                  <Link to="/AllProducts/IP54">מוגני מים - </Link>
                  <div className="dropdown-absolute">
                    {/* <Link to="/AllProducts/wall-mounted">צמודי קיר!</Link>
                    <Link to="/AllProducts/spotlights">ספוטים!</Link>
                    <Link to="/AllProducts/recessed-ceiling">שקועי תקרה!</Link> */}
                  </div>
                </div>
              </div>
              <div className="column">
                <h4> <Link to="/AllProducts/Outdoor_lighting">תאורת חוץ</Link></h4>
                <Link to="/AllProducts/Ceiling_mounted_IP54">צמודי תקרה</Link>
                <Link to="/AllProducts/Wall_mounted_IP54">צמודי קיר</Link>
                <Link to="/AllProducts/Recessed_wall_IP54">שקועי קיר</Link>
                <Link to="/AllProducts/Floor_recessed_lights">שקועי רצפה</Link>
                <Link to="/AllProducts/Garden_lighting">תאורת גינה</Link>
              </div>
            </div>
          </li>
          <li className="nav-item" role="presentation">
            <Link to="/Projects">פרויקטים</Link>
          </li>
          <li className="nav-item" role="presentation">
            <Link to="/About">אודות</Link>
          </li>
          <li className="nav-item" role="presentation">
            <Link to="/Contact">צור קשר</Link>
          </li>
          <li className="nav-item" role="presentation">
            <Link to="/Cart">לעגלה שלי</Link>
          </li>
        </ul>
        <img 
          src={logout} 
          alt="Logout" 
          style={{ height: "30px" }} 
        />
        <div className="logo">
          <img src={logo} alt="Logo" style={{ height: "60px" }} />
        </div>
      </nav>
    </>
  );
}
