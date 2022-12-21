import { useMemo } from "react";

// Basically slices number to array that contains only ones,
// one uncompleted element 0 < x < 1, and zeros.
// Example num = 6.5 iterations = 10
// Out [1,1,1,1,1,1,0.5,0,0,0] => Useful thing for stars

export const useSliceByOne = (num: number, iterations: number) => {
  const stars: any[] = useMemo(() => {
    let arr: any = [];
    let amount = num;
    while (arr.length < iterations) {
      if (amount >= 1) {
        arr.push(1);
      } else if (amount > 0 && amount < 1) {
        arr.push(amount);
      } else {
        arr.push(0);
      }
      amount--;
    }
    return arr;
  }, [num]);
  return stars;
};
