import { AiOutlinePlus } from "react-icons/ai";

const TrendingCard = ({ product }) => {
  return (
    <section className="flex flex-col   p-4 rounded-xl  bg-black/[.06] cursor-pointer gap-3">
      <div className="flex justify-between ">
        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-gray-600 text-sm">{product.category}</p>
        </div>
        <div className="flex items-start ">
          <h1 className="mx-1 text-2xl font-bold">${product.price}</h1>
          <button className="p-1 custom-bg-gradient rounded-md mx-1">
            <AiOutlinePlus className="text-white font-bold" />
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={product.img}
          alt={product.name}
          className="w-2/3 h-100 py-2"
        />
      </div>
    </section>
  );
};

export default TrendingCard;
