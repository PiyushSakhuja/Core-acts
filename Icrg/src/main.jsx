import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // import your App.jsx
import "./index.css"; // optional global resets if you use index.css

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
