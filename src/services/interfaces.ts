export interface Film {
  title: string;
  rating: number;
  category: string;
}
export interface Filters {
  title: string;
  rating: number;
  category: string[];
}
export interface FiltersStateType {
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  filters: Filters;
}
