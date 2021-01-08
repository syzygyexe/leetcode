const rotate = (nums, k) => {
    // In order to speed up the reverse process, when k value is
    // higher than the nums.length
    k = k % nums.length;
    
    // reverse the entire array. Array/starting point/final point
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
}

const reverse = (nums, start, end) => {
    while (start < end) {
        // first element
        let temp = nums[start];
        // replace first element with the last element
        nums[start] = nums[end];
        // replace last element with the first element
        // that we saved in the temp variable
        nums[end] = temp;
        start++;
        end--;
    }
}
