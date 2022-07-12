import { findMedianSortedArrays } from './median-of-two-sorted-arrays';

describe('Median of Two Sorted Arrays', () => {
  it('should return the median of the two sorted arrays', () => {
    expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
    expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
    expect(findMedianSortedArrays([3], [-2, -1])).toBe(-1);
    expect(
      findMedianSortedArrays([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6, 7, 8]),
    ).toBe(4);
    expect(findMedianSortedArrays([1, 2, 3, 4, 5], [1, 2, 3, 5, 6, 7, 8])).toBe(
      3.5,
    );
  });

  it('should work if one array is empty', () => {
    expect(findMedianSortedArrays([1, 2, 3], [])).toBe(2);
    expect(findMedianSortedArrays([], [-2, -1, 3])).toBe(-1);
  });

  it('should fail if both input arrays are empty', () => {
    expect(() => findMedianSortedArrays([], [])).toThrowError(
      'Invalid input: both arrays cannot be empty.',
    );
  });
});
