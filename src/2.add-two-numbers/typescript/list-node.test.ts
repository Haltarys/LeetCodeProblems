import { buildLinkedListFromNumber, ListNode } from './list-node';

describe('Build linked list from number', () => {
  it('should build a linked list from a number', () => {
    expect(buildLinkedListFromNumber(0)).toStrictEqual(new ListNode(0, null));
    expect(buildLinkedListFromNumber(1)).toStrictEqual(new ListNode(1, null));
    expect(buildLinkedListFromNumber(5)).toStrictEqual(new ListNode(5, null));
    expect(buildLinkedListFromNumber(10)).toStrictEqual(
      new ListNode(0, new ListNode(1, null)),
    );
    expect(buildLinkedListFromNumber(123)).toStrictEqual(
      new ListNode(3, new ListNode(2, new ListNode(1, null))),
    );
    expect(buildLinkedListFromNumber(1973)).toStrictEqual(
      new ListNode(3, new ListNode(7, new ListNode(9, new ListNode(1, null)))),
    );
  });

  it('should fail with a negative number', () => {
    expect(() => buildLinkedListFromNumber(-1)).toThrowError(
      'Number must be a positive integer.',
    );
  });

  it('should fail with a floating number', () => {
    expect(() => buildLinkedListFromNumber(3.14159)).toThrowError(
      'Number must be a positive integer.',
    );
  });
});
