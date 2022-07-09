/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
 */

import { ListNode } from './list-node';

/**
 * Add two linked lists together and returns the result as a new linked list.
 *
 * @param l1 The first number whose digits are stored in a linked list in reverse order
 * @param l2 The second number whose digits are stored in a linked list in reverse order
 * @returns The sum of `l1` and `l2` in the form of a linked list
 */
// @lc code=start
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  function f(
    l1: ListNode | null,
    l2: ListNode | null,
    carry = 0,
  ): ListNode | null {
    if (!l1 && !l2 && !carry) return null;

    const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = Math.floor(sum / 10);

    return new ListNode(
      sum % 10,
      f(l1 ? l1.next : null, l2 ? l2.next : null, carry),
    );
  }
  return f(l1, l2);
}
// @lc code=end

export { addTwoNumbers };
