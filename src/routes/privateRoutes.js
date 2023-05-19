import { Checkout, Profile } from "../pages";

const privateRoutes = [
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
