import { BsBookmarkHeart } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";

const MenuDropdown = () => {
  return (
    <div className="absolute right-0 z-10  bg-amber-100 font-semibold   rounded-lg shadow w-max  overflow-hidden">
      <ul className="text-sm text-current dark:text-gray-200">
        <li>
          <span className="flex items-center px-5 py-3 hover:bg-amber-200 ">
            <BsBookmarkHeart className="text-lg me-3" /> Wishlist
          </span>
        </li>
        <li>
          <span className="flex items-center px-5 py-3 hover:bg-amber-200 ">
            <HiOutlineShoppingBag className="text-lg me-3" /> Bag
          </span>
        </li>
      </ul>
    </div>
  );
};

export default MenuDropdown;
