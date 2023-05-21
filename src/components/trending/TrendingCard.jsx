import { AiOutlinePlus } from "react-icons/ai";

const TrendingCard = ({ product }) => {
  return (
    <section className="flex flex-col    px-4 py-2 rounded-xl  bg-black/[.06] cursor-pointer gap-3 ">
      <div className="flex justify-between gap-3 xs:flex-wrap xs:justify-center sm:flex-nowrap sm:justify-between">
        <div>
          <h1 className="text-xl xs:text-base sm:text-xl font-bold">
            {product.name}
          </h1>
        </div>
        <div className="flex items-start ">
          <div>
            <h1 className=" text-lg xs:text-base sm:text-lg font-bold">
              ₹{product.price}
            </h1>
            <p className="text-gray-600 text-sm text-end">{product.category}</p>
          </div>

          <button className="p-1 custom-bg-gradient rounded-md ms-1">
            <AiOutlinePlus className="text-white font-bold text-sm" />
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={product.image}
          alt={product.name}
          className="w-32 h-20 xs:w-28 xs:h-16 sm:w-32 sm:h-20 py-2 object-cover"
        />
      </div>
    </section>
  );
};

export default TrendingCard;
