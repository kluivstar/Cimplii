import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./App.css";

// Bootstraps React - Enable routing - Mount App
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Turn routing on - enable URL-based navigation - allow Routes, Route work */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
