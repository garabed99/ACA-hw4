function sumOfTwo(arr, target) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[j] + arr[i] === target) {
        return `pair found (${arr[i]},${arr[j]})`;
      }
    }
  }
}

console.log(sumOfTwo([8, 7, 2, 5, 3, 1], 6));
