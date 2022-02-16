/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

/**
 * Given a string `s`, returns the length of the longest substring without repeating characters.
 *
 * @param s A string of characters.
 * @returns The length of the longest substring in `s` without repeating characters.
 */
// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  if (s.length < 2) return s.length;

  let test = '',
    max = 0;

  for (const c of s) {
    if (test.includes(c)) test = test.substring(test.indexOf(c) + 1);

    test += c;
    max = Math.max(max, test.length);
  }

  return max;
}
// @lc code=end

export { lengthOfLongestSubstring };
