/*
 * @lc app=leetcode id=4 lang=typescript
 *
 * [4] Median of Two Sorted Arrays
 */
/**
 * Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, returns the median of the two sorted arrays.
 * @param nums1 A sorted array of up to 1000 elements.
 * @param nums2 A sorted array of up to 1000 elements.
 * @returns The median value of the two sorted arrays.
 */
// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const length = nums1.length + nums2.length;
  const half = Math.floor(length / 2);

  // If there is an odd number of values, return the value at halfpoint
  if (length % 2 == 1) return kth(nums1, nums2, half);
  // Else, return an average of the two
  else return (kth(nums1, nums2, half - 1) + kth(nums1, nums2, half)) / 2;
}

/**
 * Finds the value at index `k` in a merged sorted array composed of `nums1` and `nums2`.
 * @param nums1 A sorted array of up to 1000 elements.
 * @param nums2 A sorted array of up to 1000 elements.
 * @param k The index of an element to find in the merged sorted arrays.
 * @returns The element at index `k` in the merged sorted arrays.
 */
function kth(nums1: number[], nums2: number[], k: number): number {
  if (nums1.length === 0 && nums2.length === 0)
    throw new Error('Invalid input: both arrays cannot be empty.');
  // If either array is empty, return the kth element in the other.
  if (nums1.length === 0) return nums2[k];
  if (nums2.length === 0) return nums1[k];

  // Take the index and the value of the median for each array
  const i1 = Math.floor(nums1.length / 2),
    i2 = Math.floor(nums2.length / 2);
  const m1 = nums1[i1],
    m2 = nums2[i2];

  // Only true if both arrays have an odd number of elements
  // When k is bigger than the sum of nums1 and nums2's median indices
  if (i1 + i2 < k) {
    // if nums1's median is bigger than nums2's, nums2's first half doesn't include k
    if (m1 < m2) return kth(nums1.slice(i1 + 1), nums2, k - i1 - 1);
    else return kth(nums1, nums2.slice(i2 + 1), k - i2 - 1);
  } else {
    // if nums1's median is bigger than nums2's, nums1's second half doesn't include k
    if (m1 < m2) return kth(nums1, nums2.slice(0, i2), k);
    else return kth(nums1.slice(0, i1), nums2, k);
  }
}
// @lc code=end

export { findMedianSortedArrays };
