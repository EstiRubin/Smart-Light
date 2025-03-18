import React from "react";
import "../css/FooterStyle.css";
import { Link } from "react-router-dom";
import Logo from "../img/לוגו סמארטלייט.jpg";
import whatsapp from "../img/whatsapp.png";

const Footer = () => {
  const whatsappNumber = "972527134164";

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={Logo} style={{ width: "250px" }} alt="logo" />
        </div>

        <div className="footer-section">
          <h3>מפעל ייצור</h3>
          <p>
            <strong>כתובת:</strong> חלוצי התעשייה 14, קרית מלאכי
          </p>
          <p>
            <strong>שעות פתיחה:</strong> 08:00 - 16:00
          </p>
        </div>

        <div className="footer-section">
          <h3>צור קשר</h3>
          <p>
            <strong>טלפון משרד:</strong>{" "}
            <a className="a-footer" href="tel:025712483">
              02-5712483
            </a>
          </p>
          <p>
            <strong>וואטסאפ שירות:</strong>{" "}
            <a
              href={`https://wa.me/${whatsappNumber}?text=שלום!%20אני%20מתעניין/ת%20בתאורה%20אפשר%20לקבל%20פרטים%20נוספים?`}
              target="_blank"
              rel="noopener noreferrer"
              className="a-footer"
            >
              <img
                src={whatsapp}
                alt="WhatsApp Icon"
                className="whatsapp-icon"
              />
              052-7134164
            </a>
          </p>
          <p>
            <strong>כתובת:</strong> טללים 21, ירושלים
          </p>
          <p>
            <a
              className="a-footer"
              href="mailto:5712483@gmail.com?subject=היי, הגעתי דרך האתר ואני מתעניינת ב..."
            >
              5712483@gmail.com
            </a>
            <strong> : מייל </strong>{" "}
          </p>
        </div>

        <div className="footer-section">
          <h3>קטגוריות</h3>
          <p>
            {" "}
            <Link className="a-footer" to="/AllProducts/Indoor_lighting">
              תאורת פנים
            </Link>{" "}
          </p>
          <p>
            {" "}
            <Link className="a-footer" to="/AllProducts/Outdoor_lighting">
              תאורת חוץ
            </Link>
          </p>
          <p>
            <Link className="a-footer" to="/AllProducts/Garden_lighting">
              תאורת גינה
            </Link>
          </p>
        </div>

        <div className="footer-section">
          <h3>
            {" "}
            <Link className="a-footer" to="/">
              ראשי
            </Link>
          </h3>
          <p>
            <Link className="a-footer" to="/Projects">
              פרויקטים
            </Link>
          </p>
          <p>
            <Link className="a-footer" to="/About">
              אודותותינו
            </Link>
          </p>
          <p>
            <Link className="a-footer" to="/Contact">
              צור קשר
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
