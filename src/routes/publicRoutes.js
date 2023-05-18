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
    path: "/product-listing",
    element: <ProductListing />,
  },

  {
    path: "/product-details",
    element: <ProductDetails />,
  },
];
export { authRoutes, contentRoutes };
