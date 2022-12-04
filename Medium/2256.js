// 2256. Minimum Average Difference
// Problem Source:  https://leetcode.com/problems/minimum-average-difference/

var minimumAverageDifference = function (nums) {
  let totalSum = nums.reduce((x, y) => x + y); // Get the total sum of the array
  let sumFirstPart = 0; // Create a variable to store the sum of the first part
  let minAverageDifference = Number.MAX_SAFE_INTEGER; // Create a variable to store the minimum average difference
  let indexMinAverageDifference = 0; // Create a variable to store the index of the minimum average difference
  const size = nums.length; // Get the size of the array

  for (let i = 0; i < size; ++i) {
    sumFirstPart += nums[i]; // Add the current element to the sum of the first part
    let avarageFirstPart = Math.trunc(sumFirstPart / (i + 1)); // Get the average of the first part
    let avarageSecondPart =
      size - 1 - i > 0
        ? Math.trunc((totalSum - sumFirstPart) / (size - 1 - i))
        : 0; // Get the average of the second part

    if (Math.abs(avarageFirstPart - avarageSecondPart) < minAverageDifference) {
      // If the current average difference is less than the minimum average difference
      indexMinAverageDifference = i; // Update the index of the minimum average difference
      minAverageDifference = Math.abs(avarageFirstPart - avarageSecondPart); // Update the minimum average difference
    }
  }
  return indexMinAverageDifference;
};
