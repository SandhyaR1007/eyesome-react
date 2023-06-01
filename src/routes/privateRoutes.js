import { Cart, Wishlist, Checkout, Profile, Orders } from "../pages";

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
    path: "/orders",
    element: <Orders />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
];
export { privateRoutes };
