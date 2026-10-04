class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const same = new Set();

        for(let num of nums){
            if(same.has(num)){
                return true;
            }
            same.add(num);
        }
        return false;
    }
}
