import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <button className='fixed right-12 top-4'>Toggle</button>
    <App />
  </React.StrictMode>
);
