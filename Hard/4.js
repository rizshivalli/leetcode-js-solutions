// 4. Median of Two Sorted Arrays

var findMedianSortedArrays = function (nums1, nums2) {
  let arr = nums1.concat(nums2); // Concatenate the two arrays
  arr.sort((a, b) => a - b); // Sort the array
  let len = arr.length; // Get the length of the array
  if (len % 2 == 0) {
    // If the length is even
    return (arr[len / 2] + arr[len / 2 - 1]) / 2; // Return the average of the two middle numbers
  } else {
    // If the length is odd
    return arr[Math.floor(len / 2)]; // Return the middle number
  }
};
