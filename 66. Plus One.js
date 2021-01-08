const plusOne = digits => {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] !== 9) {
            digits[i]++;
            return digits
        } else {
            // If number or numbers(not all) are equal to 9
            // for example: 1999
            digits[i] = 0;
        }
    }
    
    // if all numbers are 9
    // for example: 9999
    digits.unshift(1);
    return digits
};
