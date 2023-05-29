import { useRef } from "react";
import { Banner, CategoryList, Footer, Trending } from "../components";

const Home = () => {
  const catRef = useRef(null);
  return (
    <>
      <Banner catRef={catRef} />
      <Trending />
      <CategoryList catRef={catRef} />
      <Footer />
    </>
  );
};

export default Home;
