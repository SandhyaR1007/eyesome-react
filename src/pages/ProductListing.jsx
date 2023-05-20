import { BiFilter } from "react-icons/bi";

import bannerImg from "../assets/bannerHero.jpg";
import loadingGif from "../assets/loading.gif";
import { Filters, SingleProduct } from "../components";
import { glassesData } from "../data/productsData";
import { useProductsContext } from "../contexts";
import { useState } from "react";

const ProductListing = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { allProducts, loading } = useProductsContext();

  return (
    <>
      {loading ? (
        <div className="">
          <span>
            <img width={200} src={loadingGif} alt="loading..." />
          </span>
        </div>
      ) : (
        <div>
          <header className="mb-3">
            <img
              src={bannerImg}
              alt="bannerImg"
              className="rounded-md h-full"
            />
          </header>
          <section className="py-3 flex justify-between">
            <h1 className="text-2xl font-bold">Glasses for You!</h1>
            <div className="flex items-center gap-2">
              <Filters
                isFilterOpen={isFilterOpen}
                setIsFilterOpen={setIsFilterOpen}
              />
              <label>
                <select
                  name="sortBy"
                  className="w-max py-1 px-2 rounded-md cursor-pointer shadow-md   hover:shadow-lg "
                >
                  <option value="" selected disabled>
                    Sort By
                  </option>
                  <option value="low" className="">
                    Low to High
                  </option>
                  <option value="high" className="">
                    High to Low
                  </option>
                </select>
              </label>
              <button
                className="flex py-1 px-2 rounded-md shadow-md items-center  gap-1 hover:bg-[--primary-text-color] hover:text-white hover:shadow-lg"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <BiFilter className="text-lg" />
                <span className="text-sm">Filters</span>
              </button>
            </div>
          </section>

          <main className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {allProducts.map((glass) => (
              <SingleProduct key={glass.id} product={glass} />
            ))}
          </main>
        </div>
      )}
    </>
  );
};

export default ProductListing;
