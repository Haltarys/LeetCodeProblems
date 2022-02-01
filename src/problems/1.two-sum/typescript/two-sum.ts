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

export { twoSum };
