class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        //create a map for storing difference
        const prevMap = new Map();
        //for loop to iterate on all the values 
        for(let i = 0; i < nums.length; i++){
        //if the diff is the same with the tas
            let diff = target - nums[i];

            if(prevMap.has(diff)){
                return[prevMap.get(diff), i];
            }

            prevMap.set(nums[i], i);
        }
    }
}
