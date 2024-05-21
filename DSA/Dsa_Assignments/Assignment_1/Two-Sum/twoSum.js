var twoSum = function(nums, target) {
    for(i=0;i<=nums.length-1;i++)
    {
            for(j=i+1;j<=nums.length-1;j++)
            {
                const sum = Number(nums[i])+Number(nums[j]);
                if(sum === target)
                {
                    return [i,j];
                }
            }
              
    }
};
var nums = [2, 7, 11, 15];
var target = 9;
var result = twoSum(nums, target);
console.log("Index Numbers are : "+result);