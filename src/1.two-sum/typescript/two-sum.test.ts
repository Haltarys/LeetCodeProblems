import { twoSum } from './two-sum';

describe('Two Sum', () => {
  it('should return the indices of 2 numbers that add up to the target', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
  });

  it('should not return the same index twice #1', () => {
    expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2]);
  });

  it('should not return the same index twice #2', () => {
    expect(twoSum([3, 3], 6)).toStrictEqual([0, 1]);
  });

  it('should fail with an empty input', () => {
    expect(() => twoSum([], 2)).toThrowError('No solution found.');
  });

  it('should fail with no solution', () => {
    expect(() => twoSum([2, 9, 11], 2)).toThrowError('No solution found.');
    expect(() => twoSum([2, 9, 11], 7)).toThrowError('No solution found.');
  });
});
