const sumOddLengthSubarrays = (arr) => {
  let result = 0;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let start = n - i;
    let end = i + 1;
    let total = start * end;
    let odd = Math.floor(total / 2);
    if (total % 2 == 1) {
      odd++;
    }
    result += odd * arr[i];
  }
  return result;
};
