const calculate = (arr) => {
  result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0 && arr[i] > 0) {
      result += arr[i];
    }
  }
  return result;
};

// input = [5, 18, 2, -7, 88, 20, 109]
// expected output = 114

// OR
const calculate = (arr) => {
  return arr.reduce((accumulate, element) => {
    if (element > 0 && element % 2 !== 0) {
      accumulate += element;
    }
    return accumulate;
  }, 0);
};


// OR
const calculate = (arr) => {
  return arr.reduce(
    (accumulate, element) =>
      // We do not need to write (element % 2 !== 0), because if the value is going to be 0, it is going to be false.
      element > 0 && element % 2 ? accumulate + element : accumulate,
    0
  );
};

