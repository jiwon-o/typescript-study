/**
 * map 메서드
 */

const arr = [1, 2, 3];
const newArr = arr.map((i) => i * 2); // [2, 4, 6]

function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

map(arr, (i) => i * 2);
map(["hi", "hello"], (i) => parseInt(i));

/**
 * forEach
 */

const arr2 = [1, 2, 3];
arr2.forEach((i) => console.log(i));

function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach(arr2, (i) => {
  console.log(i.toFixed());
});

forEach(["abc", "def"], (i) => {
  console.log(i.toUpperCase());
});
