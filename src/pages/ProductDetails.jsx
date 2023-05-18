import glassCategory1 from "../assets/glassCategory1.png";
import { GiRoundStar } from "react-icons/gi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsBookmarkHeart } from "react-icons/bs";

const ProductDetails = () => {
  const product = {
    id: 1,
    name: "Classic Aviator",
    price: 4999.99,
    category: "sunglasses",
    rating: 4.5,
    image: glassCategory1,
    description:
      "These classic aviator sunglasses are perfect for any occasion.",
  };
  return (
    <div className="md:min-h-[80vh] flex justify-center items-center py-3">
      <main className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-10 ">
        <section className="p-10 bg-black/[0.075] max-h-screen flex items-center rounded-lg">
          <img src={glassCategory1} alt="" className="w-full " />
        </section>

        <section className="p-7 px-10 rounded-md shadow-sm bg-white/[0.7] flex flex-col gap-6 ">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold">{product.name}</h1>
            <p className=" text-gray-600 text-lg">{product.description}</p>
            <div className="flex items-center gap-1">
              {new Array(5).fill().map((i) => (
                <GiRoundStar className=" text-yellow-400 mb-1" />
              ))}

              <span className="text-xs text-gray-400">
                ({product.rating}) Rating
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2  ">
            <h2 className="  text-lg">About Product</h2>
            <ul>
              <li>
                <span className="text-gray-500 text-sm">Brand: </span>Some Brand
              </li>
              <li>
                <span className="text-gray-500 text-sm">Category: </span>
                {product.category}
              </li>
              <li>
                <span className="text-gray-500">Heavy: </span>200g
              </li>
            </ul>
          </div>

          <div className="flex flex-col ">
            <span className="text-2xl text-amber-600">₹{product.price}</span>
            <span className="text-sm text-gray-600 line-through">
              {product.price + 100}
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <button className="btn-primary text-lg">
              <AiOutlineMinus />
            </button>
            <span className="h-full w-14 bg-black/[0.075]  rounded-sm flex items-center justify-center">
              0
            </span>
            <button className="btn-primary text-lg">
              <AiOutlinePlus />
            </button>
            <div>
              <span className="text-gray-500">Stock: </span>15
            </div>
          </div>
          <div className="w-full py-2   flex gap-4 items-center">
            <button className="btn-rounded-secondary flex items-center gap-2 md:text-sm lg:text-base">
              <HiOutlineShoppingBag /> Add to Bag
            </button>
            <button className="btn-rounded-primary rounded-full flex items-center gap-2 md:text-sm lg:text-base">
              <BsBookmarkHeart /> <span>Wishlist Item</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductDetails;
