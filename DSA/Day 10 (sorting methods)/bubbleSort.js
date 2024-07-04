const myArray = [5,1,4,2,8,9];

function bubbleSort(array){
    const n = array.length;
    for (let i=0; i<n-1; i++){
        for (let j=0; j<n-i-1; j++){
            if (myArray[j] > myArray[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;   
}
console.log("Sorted array: ",bubbleSort(myArray));