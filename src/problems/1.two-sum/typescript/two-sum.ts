/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

/**
 * Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.
 *
 * @param nums An array of integers.
 * @param target The target integer.
 * @returns The indices of the 2 integers in `nums` that add up to `target`.
 */
// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const map: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    // if the current value is in the hashmap
    if (map[nums[i]] !== undefined) {
      // return its complement's index from the hashmap and the current index
      return [map[nums[i]], i];
    }
    // else, associate the current index to the value's complement
    map[target - nums[i]] = i;
  }

  throw new Error('No solution found.');
}
// @lc code=end

export { twoSum };
