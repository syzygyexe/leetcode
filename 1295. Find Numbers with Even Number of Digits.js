const findNumbers = (nums) => {
  matches = 0;
  for (let num of nums) {
    if (num.toString().length % 2 == 0) {
      matches++;
    }
  }
  return matches;
};
