const singleNumber = (nums) => {
    result = 0;
    for(let i = 0; i < nums.length; i++) {
        // XOR of elements in the array one by one
        // When loop is finished XOR will be stored in the result.
        // When similar numbers appear the value of those two will be 0.
        // If the number appears only once his value will be stored in the result variable.
        result ^= nums[i];
    }
     return result;
};
