const N = 50;
let arr = [];

for (let i = 0; i < N; i++) {
  arr.push(Math.floor(Math.random() * 51));
}

console.log("Початковий масив:");
console.log(arr);


function bubbleSortDescending(array) {
  let n = array.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (array[j] < array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}

bubbleSortDescending(arr);

console.log("Відсортований масив (за спаданням):");
console.log(arr);
