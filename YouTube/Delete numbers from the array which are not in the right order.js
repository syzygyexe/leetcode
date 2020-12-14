function sort(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      arr.splice(i, 1);
      // Since one element is being deleted from the array we need to substract 1 from the index.
      i--;
    }
  }
}

// input = [5, 18, 2, -7, 88, 20, 109]
// expected output = [5, 18, 88, 109]
