import { GiRoundStar } from "react-icons/gi";
import { BsBookmarkHeart } from "react-icons/bs";

const SingleProduct = ({ product }) => {
  return (
    <div
      key={product.id}
      className="flex flex-col  bg-white/[0.5] rounded-lg shadow-md border-2 border-black/[0.05] overflow-hidden"
    >
      <div className="flex items-center justify-center p-10 bg-black/[0.075] h-1/2">
        <img
          src={product.image}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-3 flex flex-col justify-between gap-2 mt-2 h-1/2">
        <div>
          <div className=" flex justify-between">
            <div className="flex flex-col">
              <span className="text-xl font-medium">{product.name}</span>
              <span className="flex items-center gap-1">
                <span>{product.rating}</span>

                <GiRoundStar className=" text-yellow-400 mb-1" />
                <span className="text-xs text-gray-400">Rating</span>
              </span>
            </div>

            <div className="flex flex-col items-end">
              <span className="text-amber-600">${product.price}</span>
              <span className="text-sm text-gray-600 line-through">
                {product.price + 100}
              </span>
            </div>
          </div>
          <p className="text-sm text-gray-600">{product.brand}</p>
        </div>
        <div className="w-full pt-2 border-t flex justify-between items-center">
          <button className="border border-[--primary-text-color]  py-1.5 text-sm  rounded-full px-6 hover:bg-[--primary-text-color] hover:text-white transition">
            Add to Cart
          </button>
          <button>
            <BsBookmarkHeart className="text-xl hover:text-rose-600 transition" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
