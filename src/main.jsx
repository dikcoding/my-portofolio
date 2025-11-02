import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectDetail from "./components/pages/DetailProject.jsx";

const router = createBrowserRouter([
  {
    path: "/", // URL untuk halaman utama (http://localhost:5173/)
    element: <App />, // Komponen yang ditampilkan adalah App.jsx
  },
  {
    path: "/project/:projectId", // URL dinamis untuk detail proyek
    element: <ProjectDetail />, // Komponen yang ditampilkan adalah DetailProject.jsx
  },
]);

// 2. Render aplikasi menggunakan RouterProvider, bukan App langsung
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
