export const getValuesByKey = (arr: any, givenKey: string): any[] => {
  let uniqueValues: any[] = [];

  arr.forEach((obj: any) =>
    Object.entries(obj).forEach(([key, value]) => {
      if (key !== givenKey.toLowerCase()) return;
      else {
        if (Array.isArray(value)) {
          value.forEach(
            (el) => !uniqueValues.includes(el) && uniqueValues.push(el)
          );
        } else if (!uniqueValues.includes(value) && !Array.isArray(value)) {
          uniqueValues.push(value);
        }
      }
    })
  );

  return uniqueValues;
};
