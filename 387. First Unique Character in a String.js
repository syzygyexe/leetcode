const firstUniqChar = (s) => {
    // Map with character and amount of times this character appears.
    let frequencies = {};
    // If it doesn't exist, return -1. 
    let result = -1;
    
    for (let char of s) {
        // First time seeing a character, set frequency to 1.
        if (frequencies[char] === undefined) {
            frequencies[char] = 1;
        } else {
            frequencies[char]++   
        }
    }
        
    // Loop through our string again and search for the character
    // with the frequency of 1.
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i);
          
        // if the character we are on, and it is frequency equals
        // to 1, return its index.
        if (frequencies[char] === 1) {
            return i;
        }
    }
    // No unique characters in a string. Return -1
    return  result;
};
