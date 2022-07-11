/*
 * @lc app=leetcode id=4 lang=typescript
 *
 * [4] Median of Two Sorted Arrays
 */

import { findMedianOfSortedArray } from './median-of-sorted-array';

/**
 * Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, returns the median of the two sorted arrays.
 * @param nums1 A sorted array of up to 1000 elements.
 * @param nums2 A sorted array of up to 1000 elements.
 */
// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  // Callback needed in .sort() to override the default lexicographical sort
  const nums = nums1.concat(...nums2).sort((a, b) => a - b);

  return findMedianOfSortedArray(nums);
}
// @lc code=end

export { findMedianSortedArrays };
