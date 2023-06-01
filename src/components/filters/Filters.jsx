import { AiOutlineClose } from "react-icons/ai";
import Checkbox from "./Checkbox";
import InputRange from "./InputRange";
import InputRadio from "./InputRadio";
import InputRadioType2 from "./InputRadioType2";
import { useProductsContext } from "../../contexts";

const checkboxCategories = ["vision", "sunglasses", "sports"];

const gendersList = ["all", "men", "women", "unisex"];

const ratings = [1, 2, 3, 4];
const FilterHeading = ({ text }) => <h2 className="text-xl mb-4">{text}</h2>;
const Filters = ({ isFilterOpen, setIsFilterOpen }) => {
  const { clearFilters } = useProductsContext();

  return (
    <aside
      className={`filtersContainer fixed  top-0 h-screen z-10 flex flex-col p-3 gap-3 overflow-auto
    transition-all ease-in-out duration-300  ${
      isFilterOpen ? "left-0 " : "-left-96"
    }
    `}
    >
      <div
        className="text-sm text-gray-600 underline cursor-pointer"
        onClick={clearFilters}
      >
        Clear
      </div>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Filter Products</h1>
        <AiOutlineClose
          className="text-xl cursor-pointer"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        />
      </div>
      <section className="py-3">
        <FilterHeading text="Type" />
        <div className="grid grid-rows-2 grid-cols-2 gap-2">
          {gendersList.map((data, index) => (
            <InputRadioType2 data={data} key={index} />
          ))}
        </div>
      </section>
      <section className="py-3">
        <FilterHeading text="Price Range" />
        <InputRange />
      </section>
      <section className="py-3">
        <FilterHeading text="Categories" />
        <div className="flex flex-col gap-2">
          {checkboxCategories.map((data, index) => (
            <Checkbox data={data} key={index} />
          ))}
        </div>
      </section>

      <section className="py-3 flex flex-col gap-2">
        <FilterHeading text="Rating" />
        {ratings.map((data, index) => (
          <InputRadio data={data} key={index} name="rating" />
        ))}
      </section>
    </aside>
  );
};

export default Filters;
