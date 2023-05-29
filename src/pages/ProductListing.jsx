import { BiFilter } from "react-icons/bi";

import bannerImg from "../assets/bannerHero.jpg";
import loadingGif from "../assets/loading.gif";

import { Filters, SingleProduct, SortBy } from "../components";

import { useProductsContext } from "../contexts";
import { useState } from "react";
import { useFilter } from "../hooks/filtersHook";

const ProductListing = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const { loading } = useProductsContext();
  const productsList = useFilter();

  return (
    <>
      {loading ? (
        <div className="h-[70vh] w-full flex items-center justify-center overflow-hidden ">
          <span>
            <img width={250} src={loadingGif} alt="loading..." />
          </span>
        </div>
      ) : (
        <div>
          <header className="mb-3">
            <img
              src={bannerImg}
              alt="bannerImg"
              className="rounded-md h-full min-h-[10rem] object-cover"
            />
          </header>
          <section className="py-3 flex flex-col md:flex-row gap-2 justify-between">
            <h1 className="text-2xl font-bold">Glasses for You!</h1>
            <div className="flex items-center gap-2">
              <Filters
                isFilterOpen={isFilterOpen}
                setIsFilterOpen={setIsFilterOpen}
              />
              <SortBy />
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
            {productsList.map((glass) => (
              <SingleProduct key={glass.id} product={glass} />
            ))}
          </main>
        </div>
      )}
    </>
  );
};

export default ProductListing;
