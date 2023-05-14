import glassCategory1 from "../../assets/glassCategory1.png";
import glassCategory2 from "../../assets/glassCategory2.png";
import glassCategory3 from "../../assets/glassCategory3.png";
import TrendingCard from "./TrendingCard";

const TrendingList = () => {
  const trendingProducts = [
    {
      id: 1,
      name: "Studio",
      category: "Vision",
      price: "223",
      img: glassCategory1,
    },
    {
      id: 2,
      name: "Boost",
      category: "Sports",
      price: "459",
      img: glassCategory2,
    },
    {
      id: 3,
      name: "Rim",
      category: "Sunglass",
      price: "175",
      img: glassCategory3,
    },
    {
      id: 4,
      name: "Rim",
      category: "Sunglass",
      price: "175",
      img: glassCategory3,
    },
    {
      id: 5,
      name: "Rim",
      category: "Sunglass",
      price: "175",
      img: glassCategory3,
    },
  ];
  return (
    <section className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3   lg:grid-cols-4 gap-4  py-4 mt-10">
      <h1 className="text-4xl lg:text-5xl  break-words flex items-center ">
        Trending Products
      </h1>

      {trendingProducts.map((product) => (
        <TrendingCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default TrendingList;
