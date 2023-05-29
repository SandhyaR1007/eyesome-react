import { BsBookmarkHeart } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";

const MenuDropdown = ({ navigate }) => {
  return (
    <div className="absolute right-0 z-10  bg-amber-50 font-semibold   rounded-lg shadow w-max  overflow-hidden transition-all">
      <ul className="text-sm  ">
        <li onClick={() => navigate("/wishlist")}>
          <span className="flex items-center px-5 py-3 hover:bg-amber-100 ">
            <BsBookmarkHeart className="text-lg me-3" /> Wishlist
          </span>
        </li>
        <li onClick={() => navigate("/cart")}>
          <span className="flex items-center px-5 py-3 hover:bg-amber-100 ">
            <HiOutlineShoppingBag className="text-lg me-3" /> Bag
          </span>
        </li>
      </ul>
    </div>
  );
};

export default MenuDropdown;
