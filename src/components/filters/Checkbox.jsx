import { useProductsContext } from "../../contexts";

const Checkbox = ({ data }) => {
  const {
    applyFilters,
    filters: { categories },
  } = useProductsContext();
  const checkboxHandler = (e) => {
    let catArr = categories;
    console.log(e.target.checked, e.target.value);
    if (e.target.checked) {
      catArr.push(e.target.value);
    } else {
      catArr = catArr.filter((cat) => cat !== e.target.value);
    }
    console.log({ catArr });
    applyFilters(e.target.name, catArr);
  };
  return (
    <label className="capitalize">
      <input
        className="accent-[--primary-text-color] me-2"
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
