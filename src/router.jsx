import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import App from "./App";
import Admin from "./components/Admin";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail"; // Ajoutez cette ligne

export default createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,  // Route par défaut sous le layout
        element: <App />,
      },
      {
        path: "admin",
        element: <Admin />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "product/:id", // route detail produit avec nouveau lien
        element: <ProductDetail />,
      }
    ]
  }
]);