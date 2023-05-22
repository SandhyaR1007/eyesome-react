import { useProductsContext } from "../../contexts";
import TrendingCard from "./TrendingCard";

const TrendingList = () => {
  const { trendingProducts } = useProductsContext();
  return (
    <section className="grid  grid-cols-1 xs:grid-cols-2 md:grid-cols-3   lg:grid-cols-4 gap-4  py-4 mt-10">
      <h1 className="text-3xl md:text-4xl lg:text-5xl  break-words flex items-center ">
        Trending Products
      </h1>

      {trendingProducts.map((product) => (
        <TrendingCard key={product._id} product={product} />
      ))}
    </section>
  );
};

export default TrendingList;
