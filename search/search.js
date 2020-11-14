// 查找是否存在
var search = function (nums, target) {
    //使用多个坐标
    // 获取数组长度
    let l = 0, r = nums.length - 1;
    let c = Math.ceil(r / 2);
    let cl = c - 1, cr = c + 1;

    // 判断数组中是否存在
    while ((l !== cl || r !== cr) && l < r) {
        if (nums[l] === target) {
            return l;
        } else if (nums[r] === target) {
            return r;
        } else if (nums[cl] === target) {
            return cl;
        } else if (nums[cr] === target) {
            return cr;
        }
        l++, r--, cl--, cr++;
    }
    return false;
};