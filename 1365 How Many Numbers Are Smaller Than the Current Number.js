const smallerNumbersThanCurrent = (nums) => {
    let result = [];
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
      let cv = nums[i];

      for (let j = 0; j < nums.length; j++) {
         num = nums[j]
         if (cv > num) {
           count++;
         }
      }
    result.push(count);
    count = 0;
    }
    return result;
};
