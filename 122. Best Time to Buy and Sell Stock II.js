const maxProfit = (prices) => {
    let profit = 0;
    
    // i = 1, because we are comparing the second number with the
    // first number(the number on the left).
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i -1]) {
            // add difference between two
            profit += prices[i] - prices[i - 1];
        }
    }
    
    return profit;
};
