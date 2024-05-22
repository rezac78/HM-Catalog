import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import 'react-lazy-load-image-component/src/effects/blur.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
