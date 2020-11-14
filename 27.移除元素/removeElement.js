/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function (nums, val) {
    let i = 0;
    while (true) {
        if (nums.length == i) {
            break;
        }
        if (nums[i] !== val) {
            i++;
            continue;
        }
        nums.splice(i, 1)
    }
    return nums.length;
};

//执行用时：100 ms


/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    var len = nums.length;
    for (let i=0;i<len;i++) {
        if (nums[i] == val) {
            nums.splice(i,1);
            i--;
        }
    };
    return nums.length;
};

// 执行用时：86 ms


/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    var j = nums.length,i = 0;
    while(j > i){
        if(nums[i] === val){
            // 不考虑数组中超出新长度后面的元素。 所以直接覆盖当前元素。
            nums[i] = nums[j - 1]; // 覆盖
            j--;
        }else{
            i++;
        }
    }
    nums.length = j;
    return j;
};