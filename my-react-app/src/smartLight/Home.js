import React from "react";
import "../css/Home.css";
import leftImage from"../img/SMARTLIGHT.png" ;  // תמונה ל-1/4 מהעמוד
import rightImage from "../img/home.jpg"; // תמונה ל-3/4 מהעמוד

export default function Home() {
  return (
    <div className="home-container">
      <div className="image-side left">
        <img src={leftImage} alt="Left Image" />
      </div>
      <div className="image-side right">
        <img src={rightImage} alt="Right Image" />
      </div>
    </div>
  );
}
