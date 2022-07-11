import { findMedianSortedArrays } from './median-of-two-sorted-arrays';

describe('Two Sum', () => {
  it('Median of Two Sorted Arrays', () => {
    expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
    expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
    expect(findMedianSortedArrays([3], [-2, -1])).toBe(-1);
  });
});
