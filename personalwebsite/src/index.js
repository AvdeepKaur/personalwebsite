import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import WindowsUI from "./components/window.js";
import TopBar from "./components/topbar.js";
import NavBar from "./components/navbar.js";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div class="overlay-container">
      <TopBar />
      <WindowsUI />
      <NavBar />
    </div>
  </React.StrictMode>
);

reportWebVitals();
