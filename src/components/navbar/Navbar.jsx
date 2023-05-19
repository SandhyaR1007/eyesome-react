import { Link } from "react-router-dom";
import { BsBookmarkHeart } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import defaultUser from "../../assets/defaultUser.png";
import MenuDropdown from "./MenuDropdown";
import Logo from "./Logo";
import { useProductsContext } from "../../contexts";

const Navbar = () => {
  const { cart } = useProductsContext();
  return (
    <nav className="flex flex-col sm:flex-row py-4 max-w-screen mb-3">
      <div className="flex justify-between w-full items-center">
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

        <section className="hidden  sm:flex items-center md:w-1/4 sm:w-1/3 bg-black/[0.075] px-3 rounded-full text-sm">
          <input
            className="w-full py-2 px-3 bg-transparent focus:outline-none"
            type="text"
            placeholder="Search Glasses"
          />
          <CiSearch />
        </section>

        <ul className=" hidden md:flex justify-between text-2xl ">
          <li className="bg-gray-200  p-2 rounded-full hover:bg-yellow-800 hover:text-white cursor-pointer mx-2 transition">
            <BsBookmarkHeart />
          </li>
          <li className="relative bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-800 cursor-pointer mx-2 transition">
            <HiOutlineShoppingBag />
            {cart.length > 0 && (
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-rose-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
                {cart.length}
              </div>
            )}
          </li>
        </ul>
        <section className="md:hidden cursor-pointer relative">
          <RxHamburgerMenu className="text-lg" />
          <MenuDropdown />
        </section>
      </div>
      <section className="sm:hidden  flex items-center  mt-4 bg-black/[0.075] px-3 rounded-full text-sm">
        <input
          className="w-full py-2 px-3 bg-transparent focus:outline-none"
          type="text"
          placeholder="Search Glasses"
        />
        <CiSearch />
      </section>
    </nav>
  );
};

export default Navbar;
