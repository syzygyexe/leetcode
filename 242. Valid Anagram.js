const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  let letterCount = {};

  // Checking every letter whether it is inside of the letterCount or not.
  // If we have never seen it before, we are going to add it.
  for (let letter of s) {
    if (letterCount[letter] === undefined) {
      letterCount[letter] = 1;
    } else {
      // If we already encountered this letter add 1 value to it.
      letterCount[letter]++;
    }
  }
  for (let letter of t) {
    // if there is letter that does not exist in the "s", they are not anagrams.
    if (letterCount[letter] === undefined) {
      return false;
    }
    // Check whether the count of this letter exceeds the count of this letter in the first word.
    if (letterCount[letter] < 1) {
      return false;
    }
    // Decrement that letter
    letterCount[letter]--;
  }
    
    return true;
};
