import React from "react";
import colorMap from "./colorMap";

const ColorCircle = ({ color }) => {
  if (!color) return null; // במקרה ואין צבע כלל

  // ניקוי שם הצבע - מחליף קווים תחתונים ברווחים כדי להתאים ל-map
  const normalizedColor = color.trim().replace(/_/g, " ");

  // פיצול צבעים במקרה של שני צבעים
  const colors = normalizedColor.split(" ");
  const color1 = colorMap[colors[0]] || "gray"; // צבע ראשון או אפור
  const color2 = colors[1] ? colorMap[colors[1]] || "gray" : color1; // צבע שני אם קיים

  
  return (
    <div
      className="color-circle"
      style={{
        background:
          colors.length > 1
            ? `linear-gradient(to right, ${color1} 50%, ${color2} 50%)`
            : color1,
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        border: normalizedColor.includes("לבן") ? "1px solid black" : "none",
      }}
    ></div>
  );
};

export default ColorCircle;
