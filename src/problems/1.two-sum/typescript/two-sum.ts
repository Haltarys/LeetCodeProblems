function twoSum(nums: number[], target: number): number[] {
  // for each possible pair of numbers
  for (let i = 0; i < nums.length; i++) {
    // excluding using the same elements more than once (main diagonal)
    // and symmetrical of pairs ([a, b] == [b, a])
    for (let j = i + 1; j < nums.length; j++) {
      // if the numbers add up to the target and are not the same element
      if (nums[i] + nums[j] == target && i != j) {
        return [i, j];
      }
    }
  }

  throw new Error('No solution found.');
}

export { twoSum };
