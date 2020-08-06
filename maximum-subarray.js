/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0], sum = 0
    for (const num of nums) {
        if (sum < 0) {
            sum = num
        } else {
            sum += num
        }

        if (sum > max) {
            max = sum
        }
    }
    console.log(max)
    return max
};

maxSubArray([-2, -1, -3])