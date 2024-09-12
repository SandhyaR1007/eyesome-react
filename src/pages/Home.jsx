import { useRef } from "react";
import { Banner, CategoryList, Footer, Trending } from "../components";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const catRef = useRef(null);
  return (
    <>
     <Helmet>
        <title>Home | eyesome</title>
        <meta name="description" content="" />
      </Helmet>
      <Banner catRef={catRef} />
      <Trending />
      <CategoryList catRef={catRef} />
      <Footer />
    </>
  );
};

export default Home;
