class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        //if anagram same number of characters if not possibly not anagram
        if(s.length !== t.length){
            return false;
        }
        
        let sSort = s.split('').sort().join();
        let tSort = t.split('').sort().join();

        return sSort == tSort;

    }
}
