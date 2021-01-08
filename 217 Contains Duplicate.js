const containsDuplicate = (nums) => {
    let numbers = new Set();
    
    for (let num of nums) {
        // if the Set does not have a number
        // add it to it        
        if(!numbers.has(num)) {
            numbers.add(num);
        } else {
            return true;
        }
    }
    
    return false;
};
