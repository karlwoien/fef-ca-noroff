import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/index.jsx";
import Home from "../pages/Home.jsx";
import Contact from "../pages/Contact.jsx";
import Checkout from "../pages/Checkout.jsx";
import CheckoutSuccess from "../pages/CheckoutSuccess.jsx";
import ProductDetails from "../pages/ProductDetails.jsx";
import Error from "../pages/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/checkout-success",
        element: <CheckoutSuccess />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

export default router;
