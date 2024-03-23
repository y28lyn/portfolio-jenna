import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";

import "./index.css";

import Root from "./routes/root";
import ErrorPage from "./pages/Error";

import Accueil from "./pages/Accueil";
import Parcours from "./pages/Parcours";
import Experience from "./pages/Experience";
import Situation from "./pages/Situation";
import Certification from "./pages/Certification";
import Veille from "./pages/Veille";
import Contact from "./pages/Contact";

const container = document.createElement("div");
document.body.appendChild(container);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Accueil />,
      },
      {
        path: "/parcours",
        element: <Parcours />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
      {
        path: "/situation",
        element: <Situation />,
      },
      {
        path: "/certification",
        element: <Certification />,
      },
      {
        path: "/veille",
        element: <Veille />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
