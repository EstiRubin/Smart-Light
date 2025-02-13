import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../img/לוגו סמארטלייט.jpg";
import cart from '../img/cart.svg';
import search from "../img/search.jpg"
import '../css/NavbarStyle.css';
import arrow from "../img/חץ.png"
export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); // Change here
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleSearch = () => {
    if (searchTerm) {
      navigate(`/product/search/${searchTerm}`); // Change here
    }
  };
  return (
    <div className="navbar-container">
      {/* קו שחור עבה למעלה */}
      <div className="navbar-top"></div>

      {/* שורה ראשונה */}
      <div className="navbar-top-section">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="nav-icons">
          {isSearchVisible && (
            <input
              type="text"
              placeholder="חיפוש..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleSearch} // הוסף את המאזין לאירוע כאן
              style={{ marginRight: "10px" }}
            />
          )}
          <img
            src={search}
            onClick={() => setIsSearchVisible(!isSearchVisible)}
            alt="Search"
          />
          <Link to="/cart"><img src={cart} alt="Logout" /></Link>
        </div>
      </div>

      {/* שורה שנייה */}
      <div className="navbar-bottom-section">
        <ul className="nav-links">
          <li 
            className="dropdown"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <a className={`dropbtn ${selectedLink=== 'Product'  ? 'active-link' : ''}`}>מוצרים  <img src={arrow} style={{width:"10px", marginRight:"5px"}}alt="חץ מטה"></img></a>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <div className="column">
                  <h4> <Link to="/AllProducts/Indoor_lighting"  style={{fontSize:"18px"}}  onClick={() => {setSelectedLink('Product');}}>תאורת פנים</Link></h4>
                  <Link to="/AllProducts/Hanging_lighting_fixtures"   onClick={() => {setSelectedLink('Product');}}>גופי תאורה תלויים</Link>
                  <div className="category">
                    <Link to="/AllProducts/Ceiling_mounted" onClick={() => {setSelectedLink('Product');}}>צמודי תקרה <img src={arrow} style={{width:"10px", marginRight:"5px"}}alt="חץ מטה"></img> </Link>
                    <div className="dropdown-absolute">
                      <Link to="/AllProducts/Cylinders"  onClick={() => {setSelectedLink('Product');}}>צילינדרים</Link>
                      <Link to="/AllProducts/Ceiling_fixtures"  onClick={() => {setSelectedLink('Product');}}>גופי תאורה צמוד לתקרה</Link>
                    </div>
                  </div>
                  <Link to="/AllProducts/Ceiling_recessed"  onClick={() => {setSelectedLink('Product');}}>שקועי תקרה</Link>
                  <Link to="/AllProducts/Wall_recessed" onClick={() => {setSelectedLink('Product');}}>שקועי קיר</Link>
                  <div className="category">
                    <Link to="/AllProducts/Wall_mounted"  onClick={() => {setSelectedLink('Product');}}>צמודי קיר <img src={arrow} style={{width:"10px", marginRight:"5px"}}alt="חץ מטה"></img> </Link>
                    <div className="dropdown-absolute">
                      <Link to="/AllProducts/Night_lamps"  onClick={() => {setSelectedLink('Product');}}>מנורת לילה</Link>
                      <Link to="/AllProducts/Shabbat_lamps"  onClick={() => {setSelectedLink('Product');}}>מנורת שבת</Link>
                      <Link to="/AllProducts/Wall_mounted"  onClick={() => {setSelectedLink('Product');}}>גופי תאורה צמודי קיר</Link>

                      </div>
                </div>
                <div className="category">
                  <Link to="/AllProducts/Profiles">פרופילים <img src={arrow} style={{width:"10px", marginRight:"5px"}}alt="חץ מטה"></img>  </Link>
                  <div className="dropdown-absolute">
                    <Link to="/AllProducts/LED_profiles">פרופילי לד</Link>
                    <Link to="/AllProducts/Concealed_lighting">תאורה נסתרת</Link>
                    <Link to="/AllProducts/Mashrabiya">משרביה</Link>
                  </div>
                </div>
                <Link to="/AllProducts/Magnetic_Profiles_and_Parts">פס מגנטי</Link>
                
                </div>
                <div className="column">
                  <h4> <Link to="/AllProducts/Outdoor_lighting"   onClick={() => {setSelectedLink('Product');}} style={{fontSize:"18px"}}>תאורת חוץ</Link></h4>
                  <Link to="/AllProducts/Ceiling_mounted_IP54"  onClick={() => {setSelectedLink('Product');}}>צמודי תקרה</Link>
                  <Link to="/AllProducts/Wall_mounted_IP54"  onClick={() => {setSelectedLink('Product');}}>צמודי קיר</Link>
                  <Link to="/AllProducts/Recessed_wall_IP54"  onClick={() => {setSelectedLink('Product');}}>שקועי קיר</Link>
                  <Link to="/AllProducts/Floor_recessed_lights"  onClick={() => {setSelectedLink('Product');}}>שקועי רצפה</Link>
                  <Link to="/AllProducts/Garden_lighting"  onClick={() => {setSelectedLink('Product');}}>תאורת גינה</Link>
                </div>
              </div>
            )}
          </li>
          
          <li><Link to="/Projects"  onClick={() => setSelectedLink('Projects')} 
      className={selectedLink === 'Projects' ? 'active-link' : ''}>פרויקטים</Link></li>
          <li><Link to="/About"onClick={() => setSelectedLink('About')} 
      className={selectedLink === 'About' ? 'active-link' : ''}>אודות</Link></li>
          <li><Link to="/Contact"onClick={() => setSelectedLink('Contact')} 
      className={selectedLink === 'Contact' ? 'active-link' : ''}>צור קשר</Link></li>
        </ul>
      </div>
    </div>
  );
}
