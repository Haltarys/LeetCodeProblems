import { addTwoNumbers } from './add-two-numbers';
import { buildLinkedListFromNumber } from './list-node';

describe('Add Two Numbers', () => {
  it('should add two numbers together', () => {
    const values: { a: number; b: number }[] = [
      { a: 1, b: 2 },
      { a: 1, b: 0 },
      { a: 0, b: 2 },
      { a: 0, b: 0 },
      { a: 11, b: 2 },
      { a: 18, b: 2 },
      { a: 189, b: 231 },
      { a: 189, b: 12 },
      { a: 189, b: 1552 },
    ];

    values.forEach(({ a, b }) =>
      expect(
        addTwoNumbers(
          buildLinkedListFromNumber(a),
          buildLinkedListFromNumber(b),
        ),
      ).toStrictEqual(buildLinkedListFromNumber(a + b)),
    );
  });

  it('should work with empty lists', () => {
    expect(addTwoNumbers(null, buildLinkedListFromNumber(3))).toStrictEqual(
      buildLinkedListFromNumber(3),
    );
    expect(addTwoNumbers(buildLinkedListFromNumber(12), null)).toStrictEqual(
      buildLinkedListFromNumber(12),
    );
    expect(addTwoNumbers(null, null)).toBeNull();
  });
});
