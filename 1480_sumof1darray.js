// nums is an array of numbers
const runningSum = (nums) => {
  // Push here
  let result = [];
  let currentSum = 0;

  for (let i = 0; i < nums.length; i++) {
    // current value
    let currentValue = num[i];
    currentSum += currentValue;

    result.push(currentSum);
  }

  return result;
};
