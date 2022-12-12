// 70. https://leetcode.com/problems/climbing-stairs/

function climbStairs(n) {
  if (n <= 0) {
    return 0;
  }

  // Create an array to store the number of ways to reach each step
  const ways = [0, 1, 2];

  // Calculate the number of ways to reach each step by adding the number of ways
  // to reach the previous two steps
  for (let i = 3; i <= n; i++) {
    ways[i] = ways[i - 1] + ways[i - 2];
  }

  // Return the number of ways to reach the top of the staircase
  return ways[n];
}
//   This solution uses dynamic programming to solve the problem. It starts by creating an array called ways to store the number of ways to reach each step. The first two elements of the array are initialized to 1 and 2, because there is only one way to reach step 1 (by taking one step from the bottom) and two ways to reach step 2 (by taking one step from step 1 or two steps from the bottom).

//   Next, the solution uses a loop to calculate the number of ways to reach each subsequent step. For each step i, the number of ways to reach that step is equal to the number of ways to reach the previous step plus the number of ways to reach the step before that. This is because the number of ways to reach step i is equal to the number of ways to reach step i - 1 by taking one step plus the number of ways to reach step i - 2 by taking two steps.

//   Finally, the solution returns the number of ways to reach the top of the staircase, which is stored in the last element of the ways array.

//   This is just one possible solution to the problem, and there may be other ways to solve it as well.
