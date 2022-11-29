// 380. Insert Delete GetRandom O(1)

// Problem Link : https://leetcode.com/problems/insert-delete-getrandom-o1/

var RandomizedSet = function () {
  this.set = new Set(); // Create a set
};

RandomizedSet.prototype.insert = function (val) {
  if (this.set.has(val)) return false; // If the set already has the value, return false
  this.set.add(val); // Add the value to the set
  return true; // Return true
};

RandomizedSet.prototype.remove = function (val) {
  if (!this.set.has(val)) return false; // If the set does not have the value, return false
  this.set.delete(val); // Delete the value from the set
  return true; // Return true
};

RandomizedSet.prototype.getRandom = function () {
  let arr = Array.from(this.set); // Create an array from the set
  return arr[Math.floor(Math.random() * arr.length)]; // Return a random element from the array
};

// time complexity : O(1)
// space complexity : O(n)
