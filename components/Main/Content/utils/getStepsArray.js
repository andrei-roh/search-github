export const getStepsArray = (array, repositories) => {
  let step = 4;
  for (let i = 0; i < repositories / 4; i += 1) {
    array.push(step);
    step += 4;
  }
};
