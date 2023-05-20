import Mockman from "mockman-js";

import { Login, ProductDetails, ProductListing, Signup } from "../pages";
import Cart from "../pages/Cart";

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
    path: "/product-listing",
    element: <ProductListing />,
  },

  {
    path: "/product-details/:productId",
    element: <ProductDetails />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/mockman",
    element: <Mockman />,
  },
];
export { authRoutes, contentRoutes };
