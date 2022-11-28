// 1235.

// Problem Source: https://leetcode.com/problems/maximum-profit-in-job-scheduling/

var jobScheduling = function (startTime, endTime, profit) {
  let n = startTime.length; // n is the length of the startTime array
  let jobs = []; // jobs array
  for (let i = 0; i < n; i++) {
    // loop through the startTime array
    jobs.push([startTime[i], endTime[i], profit[i]]); // push the startTime, endTime and profit into the jobs array
  }
  jobs.sort((a, b) => a[1] - b[1]); // sort the jobs array by the endTime
  let dp = new Array(n).fill(0); // create a dp array with the length of the startTime array and fill it with 0's
  dp[0] = jobs[0][2]; // set the first index of the dp array to the profit of the jobs at index 0
  for (let i = 1; i < n; i++) {
    // loop through the startTime array
    let currProfit = jobs[i][2]; // set the currProfit to the profit of the jobs at index i
    let l = 0; // set l to 0
    let r = i - 1; // set r to i - 1
    while (l <= r) {
      // while l is less than or equal to r
      let mid = Math.floor((l + r) / 2); // set mid to the floor of l + r divided by 2
      if (jobs[mid][1] <= jobs[i][0]) {
        // if the endTime of the jobs at mid is less than or equal to the startTime of the jobs at index i
        if (jobs[mid + 1][1] <= jobs[i][0]) {
          // if the endTime of the jobs at mid + 1 is less than or equal to the startTime of the jobs at index i
          l = mid + 1; // set l to mid + 1
        } else {
          // else
          currProfit += dp[mid]; // set the currProfit to the currProfit + the dp at mid
          break; // break
        }
      } else {
        // else
        r = mid - 1; // set r to mid - 1
      }
    }
    dp[i] = Math.max(currProfit, dp[i - 1]); // set the dp at index i to the max of the currProfit and the dp at index i - 1
  }
  return dp[n - 1]; // return the dp at the last index
};

// Time Complexity: O(nlogn) - Sort jobs array
// Space Complexity: O(n) - Create dp array
