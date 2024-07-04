function getMinValueFromArray(myArray, i) {
  // this loop will find min
  const length = myArray.lenght;
  let minIndex = i;
  for (let j = i + 1; j < length; j++) {
    if (myArray[j] < myArray[minIndex]) {
      minIndex = j;
    }
  }
  return minIndex;
}
function getSwapArray(myArray, minValue, i) {
  if (minValue !== i) {
    let temp = myArray[i];
    myArray[i] = myArray[minValue];
    myArray[minValue] = temp;
  }
  return myArray;
}

function selectionsort(array) {
  let lenght = array.length;
  for (i = 0; i <= lenght - 1; i++) {
    let min = getMinValueFromArray(array, i);
    array = getSwapArray(array,min,i);
  }
  return array;
}

const array = [64, 25, 12, 22, 11];
console.log(selectionsort(array));
