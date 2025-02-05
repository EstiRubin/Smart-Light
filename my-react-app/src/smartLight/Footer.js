import React from "react";
import "../css/FooterStyle.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* לוגו */}
        <div className="footer-logo">
          <h2>
            <span className="smart">SMART</span>
            <span className="light">LIGHT</span>
          </h2>
        </div>

        {/* מפעל ייצור */}
        <div className="footer-section">
          <h3>מפעל ייצור</h3>
          <p>
            <strong>כתובת:</strong> חילזון התעשייה 14, קרית מלאכי
          </p>
          <p>
            <strong>שעות פתיחה:</strong> 08:00 - 16:00
          </p>
        </div>

        {/* צור קשר */}
        <div className="footer-section">
          <h3>צור קשר</h3>
          <p>
            <strong>טלפון משרד:</strong> 02-5712483
          </p>
          <p>
            <strong>וואטסאפ שירות:</strong> 052-7134164
          </p>
          <p>
            <strong>כתובת:</strong> טללים 21, ירושלים
          </p>
          <p>
           5712483@gmail.com
           <strong> : מייל </strong> </p>
        </div>

        {/* קטגוריות */}
        <div className="footer-section">
          <h3>קטגוריות</h3>
          <p> <Link to="/AllProducts/Indoor_lighting">תאורת פנים</Link> </p>
          <p> <Link to="/AllProducts/Outdoor_lighting">תאורת חוץ</Link></p>
          <p>תאורה לבית</p>
          <p><Link to="/AllProducts/Garden_lighting">תאורת גינה</Link></p>
          <p>גופי תאורה תעשייתיים</p>
          <p>גופי תאורה לעסקים</p>
        </div>

        {/* ראשי */}
        <div className="footer-section">
          <h3>  <Link to="/">ראשי</Link></h3>
          <p><Link to="/Projects">פרויקטים</Link></p>
          <p>אדריכלים</p>
          <p><Link to="/About">אודותותינו</Link></p>
          <p><Link to="/Contact">צור קשר</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
