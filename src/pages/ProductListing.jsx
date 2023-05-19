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
              {isFilterOpen && <Filters />}
              <label>
                <select name="sortBy">
                  <option value="" selected disabled>
                    Sort By
                  </option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </label>
              <button
                className="flex py-1 px-2 rounded-md shadow-sm items-center bg-white gap-1 hover:bg-[--primary-text-color] hover:text-white"
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
