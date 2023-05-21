import { Link, useNavigate } from "react-router-dom";
import { BsBookmarkHeart } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";

import { RxHamburgerMenu } from "react-icons/rx";
import defaultUser from "../../assets/defaultUser.png";
import MenuDropdown from "./MenuDropdown";
import Logo from "./Logo";
import { useProductsContext } from "../../contexts";
import { useEffect, useState } from "react";
import Search from "../filters/Search";

const Navbar = () => {
  const { cart } = useProductsContext();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex flex-col sm:flex-row py-4 max-w-screen mb-3">
      <div className="flex xs:justify-between w-full items-center">
        <section className="relative flex">
          <Link to="/profile">
            <img
              className="rounded-full border-2  bg-yellow-300 me-3 hover:bg-yellow-500 cursor-pointer"
              src={defaultUser}
              alt="userProfileImage"
              width={40}
            />
          </Link>
          <Link to="/">
            <Logo />
          </Link>
        </section>
        <div className="hidden  sm:block sm:w-1/3 relative">
          <Search />
        </div>

        <section className="flex items-center">
          <Link
            to="/product-listing"
            className="mx-2 px-3 py-1 shadow-sm rounded-md text-white bg-yellow-700 text-sm hover:bg-yellow-800 transition"
          >
            Explore
          </Link>
          <ul className=" hidden md:flex justify-between text-2xl ps-1">
            <li
              className="bg-gray-200  p-2 rounded-full hover:bg-yellow-800 hover:text-white cursor-pointer mx-2 transition"
              onClick={() => navigate("/wishlist")}
            >
              <BsBookmarkHeart />
            </li>
            <li
              className="relative bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-800 cursor-pointer mx-2 transition"
              onClick={() => navigate("/cart")}
            >
              <HiOutlineShoppingBag />
              {cart.length > 0 && (
                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-rose-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
                  {cart.length}
                </div>
              )}
            </li>
          </ul>
          <section className="md:hidden cursor-pointer relative">
            <RxHamburgerMenu
              className="text-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
            {isMenuOpen && <MenuDropdown navigate={navigate} />}
          </section>
        </section>
      </div>

      <section className="mt-4 sm:hidden relative">
        <Search />
      </section>
    </nav>
  );
};

export default Navbar;
