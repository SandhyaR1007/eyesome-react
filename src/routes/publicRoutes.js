import Mockman from "mockman-js";

import { Login, ProductDetails, ProductListing, Signup } from "../pages";

const authRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
];

const contentRoutes = [
  {
    path: "/products",
    element: <ProductListing />,
  },

  {
    path: "/product/:productId",
    element: <ProductDetails />,
  },

  {
    path: "/mockman",
    element: <Mockman />,
  },
];
export { authRoutes, contentRoutes };
