const kidsWithCandies = (candies, extraCandies) => {
    const max = Math.max(...candies)
    let result = [];
    
    for (let i = 0; i < candies.length; i++) {
        let cv = candies[i];
        
        result.push(cv + extraCandies >= max)
    }
    
    return result;
};
