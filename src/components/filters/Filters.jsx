import { AiOutlineClose } from "react-icons/ai";
import Checkbox from "./Checkbox";
import InputRange from "./InputRange";
import InputRadio from "./InputRadio";

const checkboxCategories = [
  {
    name: "All Products",
    value: "all",
  },
  {
    name: "Vision",
    value: "vision",
  },
  {
    name: "Sunglasses",
    value: "sunglasses",
  },
  {
    name: "Sports",
    value: "sports",
  },
];

const ratings = [1, 2, 3, 4];
const FilterHeading = ({ text }) => <h2 className="text-xl mb-4">{text}</h2>;
const Filters = () => {
  return (
    <aside className="filtersContainer fixed left-0 top-0 h-screen z-10 flex flex-col p-3 gap-3 overflow-auto scrollbar">
      <div className="text-sm text-gray-600">Clear</div>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Filter Products</h1>
        <AiOutlineClose className="text-xl" />
      </div>

      <section className="py-3">
        <FilterHeading text="Category" />
        <div className="grid grid-rows-2 grid-cols-2 gap-2">
          {checkboxCategories.map((data, index) => (
            <Checkbox data={data} index={index} />
          ))}
        </div>
      </section>

      <section className="py-3">
        <FilterHeading text="Price Range" />
        <InputRange />
      </section>

      <section className="py-3 flex flex-col gap-2">
        <FilterHeading text="Rating" />
        {ratings.map((data) => (
          <InputRadio data={data} name="rating" />
        ))}
      </section>
    </aside>
  );
};

export default Filters;
