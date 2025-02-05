import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom"; // הוסף את זה
import store from "./redux/store";
import reportWebVitals from "./reportWebVitals";

// יצירת root
const root = ReactDOM.createRoot(document.getElementById("root"));

// הרצת ה-app עם Redux Provider ו-BrowserRouter
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// אם תרצי למדוד ביצועים, הוסיפי כאן פונקציה כמו reportWebVitals(console.log)
reportWebVitals();
