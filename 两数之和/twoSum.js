/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let obj = {},numsLenth = nums.length;
    for (let i = 0; i < numsLenth; i++) {
        const num = nums[i]
        // obj 中 num 是否符合差
        if (num in obj) {
            // 如果符合 上一个下标 与 当前下标 和 为 $target
            return [obj[num], i]
        } else {
            // 将 差 储存起来。
            obj[target - num] = i
        }
    }
};