
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let addOne = 0
    let sum = new ListNode('0');// 创建一个头链表用于保存结果
    let head = sum;// 保存头链表的位置用于最后的链表返回

    while (addOne || l1 || l2) {
        let val1 = l1 !== null ? l1.val : 0 // 优化点
        let val2 = l2 !== null ? l2.val : 0 //优化点
        let r1 = val1 + val2 + addOne //求和
        addOne = r1 >= 10 ? 1 : 0;
        sum.next = new ListNode(r1 % 10) //sum的下一个节点
        sum = sum.next //sum指向下一个节点
        if (l1) l1 = l1.next //l1指向下一个节点，以便计算第二个节点的值
        if (l2) l2 = l2.next //l2指向下一个节点，以便计算第二个节点的值
    }
    return head.next; //返回计算结果，之所以用head.next是因为head中保存的第一个节点是刚开始定义的"0"
};