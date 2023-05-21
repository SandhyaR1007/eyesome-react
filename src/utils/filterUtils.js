export const sortByPrice = (type, data) => {
  if (type == "low_to_high") {
    return [...data].sort((a, b) => a.newPrice - b.newPrice);
  } else if (type === "high_to_low") {
    return [...data].sort((a, b) => b.newPrice - a.newPrice);
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
    ? data.filter(({ newPrice }) => newPrice <= selectedRange)
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
  return searchText
    ? data.filter(({ name }) => name.toLowerCase().includes(searchLowerCased))
    : data;
};
