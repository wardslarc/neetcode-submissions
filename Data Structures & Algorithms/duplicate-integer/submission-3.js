class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numSort = nums.sort();

        for(let i = 0; i < nums.length; i++){
            if(numSort[i] == numSort[i + 1]){
                return true;
            }
           
        }
         return false;
    }
}
