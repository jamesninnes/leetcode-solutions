/**
 * @description An improved version,
 * using a two pointer approach
 *
 * @param {number[]} heights
 * @return {number}
 */
let maxArea = function(heights) {
    let largestArea = 0, left = 0, right = heights.length - 1;
    while (left < right) {
        largestArea = Math.max(largestArea, Math.min(heights[left], heights[right]) * (right - left));
        if (heights[left] < heights[right])
            left++;
        else
            right--;
    }
    return largestArea;
};

/**
 * @description This was my first submission,
 * the time and space complexity was not
 * good enough with a brute force approach
 *
 * @param {number[]} heights
 * @return {number}
 */
let maxAreaBruteForce = function(heights) {
    let largestArea = 0
    for (let i = 0; i < heights.length; i++) {
        for (let j = i + 1; j < heights.length; j++) {
            const lower = Math.min(heights[i], heights[j])
            const area = (j - i) * lower
            if (area > largestArea) {
                largestArea = area
            }
        }
    }
    return largestArea
};

const area = maxArea([1,8,6,2,5,4,8,3,7])
console.log(area)