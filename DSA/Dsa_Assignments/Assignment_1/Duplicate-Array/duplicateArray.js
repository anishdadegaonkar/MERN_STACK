var removeDuplicates = function(nums) {
    let k = 1;
    for (let i = 0; i < nums.length - 1; i++) {
       if (nums[i] !== nums[i + 1]) {
           nums[k] = nums[i + 1]; 
           k++; 
       }
   }
   
   return k;
};
var nums = [1,2,3,3,6,6,4,2,1,4];
var k = removeDuplicates(nums);
console.log("New length:", k); 
console.log("Modified array:", nums.slice(0, k)); 