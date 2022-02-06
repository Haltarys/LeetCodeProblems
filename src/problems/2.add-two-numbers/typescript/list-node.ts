/**
 * @constructor
 * @param val The value to store in the node.
 * @param next A reference to the next node of the list. `null` indicates the end of the list.
 */
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * Transforms a number into a linked list of its digits in reverse order.
 *
 * @param val The number to convert into a linked list of `ListNode`.
 * @returns A linked list of `ListNode` with the digits of `val`.
 */
export function buildLinkedListFromNumber(val: number): ListNode {
  if (val < 0 || val % 1 !== 0)
    throw new Error('Number must be a positive integer.');

  const array = Array.from(String(val), Number);

  // The array is guaranteed to have at least one digit,
  // so the callback will be called at least once.
  // Therefore the returned value is non-null, hence the assertion.
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return array.reduce<ListNode | null>(
    (previous, val) => new ListNode(val, previous),
    null,
  )!;
}
