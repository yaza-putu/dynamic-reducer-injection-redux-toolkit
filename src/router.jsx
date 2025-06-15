import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Layout from "./components/Layout.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // sama dengan path: "/"
        element: <Home />,
      },
      {
        path: "/about", // sama dengan path: "/"
        element: <About />,
      },
    ]
  },
]);
