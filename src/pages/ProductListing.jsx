import bannerImg from "../assets/bannerHero.jpg";
import glassCategory1 from "../assets/glassCategory1.png";
import glassCategory2 from "../assets/glassCategory2.png";
import glassCategory3 from "../assets/glassCategory3.png";
import { SingleProduct } from "../components";
const glasses = [
  {
    id: 1,
    name: "Classic Aviator",
    price: 49.99,
    category: "sunglasses",
    rating: 4.5,
    image: glassCategory1,
    description:
      "These classic aviator sunglasses are perfect for any occasion.",
  },
  {
    id: 2,
    name: "Retro Round",
    price: 39.99,
    category: "vision",
    rating: 4.2,
    image: glassCategory2,
    description: "Achieve a retro look with these stylish round sunglasses.",
  },
  {
    id: 3,
    name: "Sporty Wraparound",
    price: 59.99,
    category: "sports",
    rating: 4.8,
    image: glassCategory3,
    description:
      "Get a sporty and trendy vibe with these wraparound sunglasses.",
  },
  {
    id: 4,
    name: "Wayfarer Style",
    price: 54.99,
    category: "sunglasses",
    rating: 4.6,
    image: glassCategory1,
    description: "Embrace the classic wayfarer style with these sunglasses.",
  },
  {
    id: 5,
    name: "Cat Eye",
    price: 44.99,
    category: "vision",
    rating: 4.4,
    image: glassCategory2,
    description: "Add a touch of elegance with these cat eye sunglasses.",
  },
  {
    id: 6,
    name: "Polarized Sport",
    price: 69.99,
    category: "sports",
    rating: 4.9,
    image: glassCategory3,
    description: "Enjoy enhanced vision with these polarized sport sunglasses.",
  },
  {
    id: 7,
    name: "Round Metal",
    price: 59.99,
    category: "sunglasses",
    rating: 4.7,
    image: glassCategory1,
    description:
      "Achieve a sophisticated look with these round metal sunglasses.",
  },
  {
    id: 8,
    name: "Oversized Square",
    price: 79.99,
    category: "vision",
    rating: 4.5,
    image: glassCategory2,
    description:
      "Make a bold statement with these oversized square sunglasses.",
  },
  {
    id: 9,
    name: "Vintage Clubmaster",
    price: 49.99,
    category: "sunglasses",
    rating: 4.3,
    image: glassCategory1,
    description: "Channel the vintage vibe with these clubmaster sunglasses.",
  },
  {
    id: 10,
    name: "Classic Wayfarer",
    price: 54.99,
    category: "sports",
    rating: 4.8,
    image: glassCategory3,
    description: "Stay stylish with these classic",
  },
];

const ProductListing = () => {
  return (
    <div>
      <header className="mb-3">
        <img src={bannerImg} alt="bannerImg" className="rounded-md h-full" />
      </header>
      <section className="py-3">
        <h1 className="text-2xl font-bold">Glasses for You!</h1>
      </section>
      <main className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {glasses.map((glass) => (
          <SingleProduct key={glass.id} glass={glass} />
        ))}
      </main>
    </div>
  );
};

export default ProductListing;
