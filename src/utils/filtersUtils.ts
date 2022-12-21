import { Filters } from "../services/interfaces";

export const changeTitleFilter = (
  setFilters: React.Dispatch<React.SetStateAction<Filters>>,
  newTitle: string
) => {
  setFilters((prev) => ({ ...prev, title: newTitle }));
};

export const changeCategoryFilter = (
  setFilters: React.Dispatch<React.SetStateAction<Filters>>,
  newCategory: string
) => {
  setFilters((prev) => ({
    ...prev,
    category: prev.category.includes(newCategory)
      ? prev.category.filter((category) => category !== newCategory)
      : [...prev.category, newCategory],
  }));
};

export const changeRatingFilter = (
  setFilters: React.Dispatch<React.SetStateAction<Filters>>,
  newRating: number
) => {
  setFilters((prev) => ({
    ...prev,
    rating: newRating,
  }));
};

export const clearCategoryFilter = (
  setFilters: React.Dispatch<React.SetStateAction<Filters>>
) => {
  setFilters((prev) => ({ ...prev, category: [] }));
};

export const clearRatingFilter = (
  setFilters: React.Dispatch<React.SetStateAction<Filters>>
) => {
  setFilters((prev) => ({ ...prev, rating: 0 }));
};
