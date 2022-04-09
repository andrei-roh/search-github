export const firstNumberItems = (array, page) => {
  if (!array[page - 1]) {
    return 1;
  }
  return array[page - 1];
};
