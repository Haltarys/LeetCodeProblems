import { lengthOfLongestSubstring } from './longest-substring-without-repeating-characters';

describe('Longest Substring Without Repeating Characters', () => {
  it('should return the length of the longest substring without repeating characters.', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  });

  it('should return zero with empty input', () => {
    expect(lengthOfLongestSubstring('')).toBe(0);
  });
});
