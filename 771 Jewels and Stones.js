const numJewelsInStones = (j, s) => {
  const jStones = j.split("");
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    let stone = s[i];

    if (jStones.includes(stone)) {
      count++;
    }
  }
  return count;
};
