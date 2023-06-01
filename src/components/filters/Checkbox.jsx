import { useProductsContext } from "../../contexts";

const Checkbox = ({ data }) => {
  const {
    applyFilters,
    filters: { categories },
  } = useProductsContext();
  const checkboxHandler = (e) => {
    let catArr = categories;

    if (e.target.checked) {
      catArr.push(e.target.value);
    } else {
      catArr = catArr.filter((cat) => cat !== e.target.value);
    }

    applyFilters(e.target.name, catArr);
  };
  return (
    <label className="capitalize cursor-pointer">
      <input
        className="accent-[--primary-text-color] me-2 cursor-pointer"
        type="checkbox"
        name="categories"
        checked={categories.includes(data)}
        value={data}
        onChange={checkboxHandler}
      />
      {data}
    </label>
  );
};

export default Checkbox;
