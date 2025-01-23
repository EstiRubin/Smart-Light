import React from 'react';
import '../css/FooterStyle.css'; //

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>ליצירת קשר:</h3>
        <p>Email: example@example.com</p>
        <p>טלפון: +123 456 789</p>
      </div>
      <div className="footer-section">
        <h3>כתובת</h3>
        <p>טללים 26</p>
        <p>ירושלים</p>
      </div>
      <div className="footer-section">
        <h3>קטגוריות</h3>
        <p>לדים</p>
        <p>שקועי קיר</p>
      </div>

    </footer>
  );
};

export default Footer;
