const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const myArray = [5, 1, 4, 2, 8, 9];

function mainmenu() {
  console.log('************ Sorting Techniques *****************');
  console.log('1. Bubble Sort \n2. Selection Sort \n3. Exit');
  rl.question('Enter your choice: ', (choice) => {
    switch (choice) {
      case '1':
        console.log("Sorted array: ", bubbleSort([...myArray])); // Use a copy of the array
        break;
      case '2':
        console.log("Sorted array: ", selectionSort([...myArray])); // Use a copy of the array
        break;
      case '3':
        exit();
        return;
      default:
        console.log('Invalid choice. Other sorting techniques coming soon');
        break;
    }
    mainmenu();
  });
}

function bubbleSort(array) {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}

function exit() {
  console.log("Exiting the program.");
  rl.close();
}

mainmenu();
