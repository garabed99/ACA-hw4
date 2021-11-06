function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j;
    for (j = i - 1; arr[j] > current && j >= 0; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = current;
  }
  return arr;
}

//not required in task but liked to add this too
function reversedInsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j;
    for (j = i - 1; current > arr[j] && j >= 0; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = current;
  }
  return arr;
}

let array = [3, 1, 4, 2, 5];

console.log("array: ");
console.log(array);

console.log("ascending order: ");
console.log(insertionSort(array));

console.log("descending order: ");
console.log(reversedInsertionSort(array));
