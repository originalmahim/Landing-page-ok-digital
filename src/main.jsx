import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./routers/Router.jsx";
import { RouterProvider } from "react-router-dom";
import ThemeProvider from "./components/ThemeProvider";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
