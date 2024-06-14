function findSecondLargest(arr) {
  let largest = arr[0];
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

const array = [12, 35, 1, 10, 34, 1];
const secondLargest = findSecondLargest(array);
console.log("The second largest Number is ", secondLargest);
