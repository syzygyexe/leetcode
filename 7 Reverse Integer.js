const reverse = (x) => {
    let negative = x < 0;
    // Store reversed value
    let reversed = 0;
    
    if (negative) {
        x *= -1
    }
    
    while (x > 0) {
        reversed = (reversed * 10) + (x % 10);
        x = Math.floor(x / 10);
    }
    
    if (reverse > (2 ** 31 - 1)) {
        return 0;
    }
    
    return negative ? (reversed * - 1) : reversed;
};