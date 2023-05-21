export const sortByPrice = (type, data) => {
  if (type == "low_to_high") {
    return [...data].sort((a, b) => a.price - b.price);
  } else if (type === "high_to_low") {
    return [...data].sort((a, b) => b.price - a.price);
  }
  return data;
};

export const filterByGender = (selectedGender, data) => {
  if (!selectedGender || selectedGender.toLowerCase() === "all") {
    return data;
  } else {
    return data.filter(
      ({ gender }) => gender.toLowerCase() === selectedGender.toLowerCase()
    );
  }
};

export const filterByPriceRange = (selectedRange, data) => {
  return selectedRange
    ? data.filter(({ price }) => price <= selectedRange)
    : data;
};

export const filterByRating = (selectedRating, data) => {
  return data.filter(({ rating }) => rating >= selectedRating);
};

export const filterByCheckbox = (selectedCategories, data) => {
  return selectedCategories.length
    ? data.filter(({ category }) =>
        selectedCategories.includes(category.toLowerCase())
      )
    : data;
};

export const filterBySearch = (searchText, data) => {
  const searchLowerCased = searchText.toLowerCase();
  return data.filter(
    ({ name, brand }) =>
      name.toLowerCase().includes(searchLowerCased) ||
      brand.toLowerCase(searchLowerCased)
  );
};
