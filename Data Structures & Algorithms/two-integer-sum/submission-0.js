class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const prevMap = new Map();

        for(let i = 0; i < nums.length; i++){
            let prod = target - nums[i];

            if(prevMap.has(prod)){
                return [prevMap.get(prod), i];
            }
            prevMap.set(nums[i], i);
        }
        return [];
    }
}
