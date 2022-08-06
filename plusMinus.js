function plusMinus(arr) {
  //counts represent numbers [positives, negatives, zeros]
  let counts = [0, 0, 0];

  arr.forEach((num) => {
    if (num > 0) counts[0] += 1;
    else if (num < 0) counts[1] += 1;
    else counts[2] += 1;
  });
  counts.forEach((num) => console.log((num / arr.length).toFixed(6)));
  return;
}
