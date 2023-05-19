import { BsArrowDownRightCircle } from "react-icons/bs";

import bannerImg from "../../assets/bannerImg.png";
import { useNavigate } from "react-router";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <main className=" flex justify-between items-center py-3 mb-5  relative">
      <section className="max-w-xl mx-auto sm:mx-0  w-full py-3  lg:w-1/3">
        <h1 className="text-8xl  md:text-7xl lg:text-8xl font-semibold  py-3 w-full ">
          Glasses & Lens
        </h1>
        <p className="py-3 text-md  text-gray-600">
          Buy the best high-quality sunglasses from us.
          <br />
          More than 100 types of assortment.
        </p>
        <section className="flex items-center">
          <button
            className="btn-primary"
            onClick={() => navigate("/product-listing")}
          >
            Start Shopping
          </button>
          <button className="p-3 flex items-center">
            <span className="mx-2">Explore More</span>{" "}
            <BsArrowDownRightCircle className="text-lg" />
          </button>
        </section>
      </section>
      <section className="hidden w-1/2 lg:flex justify-end">
        <img src={bannerImg} alt="bannerImg" className="w-2/3 h-full" />
      </section>
    </main>
  );
};

export default Banner;
