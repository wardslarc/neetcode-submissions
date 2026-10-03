class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        //Set where we can log all those numbers that we will use in for of loop 
        const duplicate = new Set();
        //to iterate to all numbes in the set 
        for(const num of nums){
            if(duplicate.has(num)){
                return true;
            }
            duplicate.add(num);
        }
        return false;
    }
}
