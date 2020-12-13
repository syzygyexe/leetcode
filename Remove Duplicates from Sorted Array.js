const removeDuplicates = (nums) => {
  if (nums.length === 0) {
    return 0;
  }

  let pointer1 = 0;

  for (let pointer2 = 1; pointer2 < nums.length; pointer2++) {
    if (nums[pointer1] !== nums[pointer2]) {
      pointer1++;
      nums[pointer1] = nums[pointer2];
    }
  }
  // Add 1 to pointer1 in order to calculate all unique values in the array.
  return pointer1 + 1;
};
