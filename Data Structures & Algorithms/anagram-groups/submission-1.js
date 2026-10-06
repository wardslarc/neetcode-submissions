class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {}; 

        for(let s of strs){
            const sSorted = s.split('').sort().join('');

            if(!res[sSorted]){
                res[sSorted] = [];
            }
            res[sSorted].push(s);
        }
        return Object.values(res);
    }
}
