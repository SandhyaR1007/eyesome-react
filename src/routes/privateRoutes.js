import { Cart, Wishlist, Checkout, Profile } from "../pages";

const privateRoutes = [
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
];
export { privateRoutes };
