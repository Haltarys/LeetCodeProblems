function twoSum(nums: number[], target: number): number[] {
  // for each possible pair of numbers
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      // if the numbers add up to the target and are not the same element
      if (nums[i] + nums[j] == target && i != j) {
        return [i, j];
      }
    }
  }

  throw new Error('No solution found.');
}

export { twoSum };
