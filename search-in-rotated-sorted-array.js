/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // Check if the target number is lower than the current number
    if (nums[nums.length - 1] >=  target) {
        // Go forward
        for (let i = nums.length - 1; i > -1; i--) {
            if (nums[i] === target) {
                return i
            } else if (nums[i] > nums[i + 1]) {
                break
            }
        }
    } else {
        // Go backward
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === target) {
                return i
            } else if (nums[i] < nums[i - 1]) {
                break
            }
        }
    }   
    
    return -1
};

console.log(search([4,5,6,7,0,1,2], 4))