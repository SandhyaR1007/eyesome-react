export const sortByPrice = (type, data) => {
  if (type == "low_to_high") {
    return [...data].sort((a, b) => a.price - b.price);
  } else if (type === "high_to_low") {
    return [...data].sort((a, b) => b.price - a.price);
  }
  return data;
};

export const filterByGender = (selectedGender, data) => {
  if (selectedGender.toLowerCase() === "all") {
    return data;
  } else {
    return data.filter(
      ({ gender }) => gender.toLowerCase() === selectedGender.toLowerCase()
    );
  }
};

export const filterByPriceRange = (selectedRange, data) => {
  return data.filter(({ price }) => price <= selectedRange);
};

export const filterByRating = (selectedRating, data) => {
  return data.filter(({ rating }) => rating >= selectedRating);
};
export const filterByCheckbox = (selectedCategories, data) => {
  return data.filter(({ category }) =>
    selectedCategories.every(
      (cat) => cat.toLowerCase() === category.toLowerCase()
    )
  );
};

export const filterBySearch = (searchText, data) => {
  const searchLowerCased = searchText.toLowerCase();
  return data.filter(
    ({ name, brand }) =>
      name.toLowerCase().includes(searchLowerCased) ||
      brand.toLowerCase(searchLowerCased)
  );
};
