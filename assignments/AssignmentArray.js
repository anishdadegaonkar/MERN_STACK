// Sum of all element in array 
Arr1 = [1,2,3];
function sumofarray(arr){
    len = arr.length;
    sum = 0;
    for(var i =0; i<len;i++)
    {
        sum += arr[i];
    }
    return sum;
}
sumofarray(Arr1);