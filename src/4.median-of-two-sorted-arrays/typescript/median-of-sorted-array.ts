/**
 * Given a sorted array `nums`, returns its median value.
 * @param nums Sorted array of numbers. Must not be empty.
 * @returns The median value of the `nums` array.
 */
export function findMedianOfSortedArray(nums: number[]): number {
  if (nums.length === 0)
    throw new Error('Invalid input: array cannot be empty.');

  // If there is an odd number of values the middle one divides them equally
  if (nums.length % 2) {
    return nums[Math.floor(nums.length / 2)];
  } else {
    // Else, take the average of the two middle ones
    return (nums[nums.length / 2 - 1] + nums[nums.length / 2]) / 2;
  }
}
