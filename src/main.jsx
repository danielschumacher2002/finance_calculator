import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Homepage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/",
    element: <></>, // Nav 1
  },
  {
    path: "/",
    element: <></>, // Nav 2
  },
  {
    path: "/",
    element: <></>, // Nav 3
  },
  {
    path: "*",
    element: <></>, // NotFound.jsx
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
