import { useMemo } from "react";
import { Film } from "../services/interfaces";

export const useFilterData = (data: Film[], filters: Record<string, any>) => {
  let filteredData = useMemo(() => {
    return data.filter((movie) => {
      let isValid: boolean[] = [];
      Object.entries(movie).forEach(([key, value]) => {
        if (typeof value === "number") {
          if (!filters[key]) {
            isValid.push(true);
          } else {
            if (value >= (filters[key] as number)) {
              isValid.push(true);
            } else {
              isValid.push(false);
            }
          }
        } else if (typeof value === "string") {
          if (!filters[key]) {
            isValid.push(true);
          } else {
            if (filters[key].includes(value)) {
              isValid.push(true);
            } else if (value.toLowerCase().includes(filters[key])) {
              isValid.push(true);
            } else {
              isValid.push(false);
            }
          }
        }
      });
      return isValid.every((check) => !!check);
    });
  }, [data, filters]);

  return filteredData;
};
