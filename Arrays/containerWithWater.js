const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

// max
// i = 0; we look through the array. If min(i and j) * j - i > max, new max

var maxArea = function(height) {
  let max = 0;
  let leftVal = 0;
  for (let i = 0; i < height.length - 1; i++) {
    if (height[i] > leftVal) {
      leftVal = height[i];
      for (let j = i + 1; j < height.length; j++) {
        if (Math.min(height[i], height[j]) * (j - i) > max) {
          max = Math.min(height[i], height[j]) * (j - i);
          num = [height[i], height[j], i, j];
        }
      }
    }
  }
  return max;
};

console.log(maxArea(height));
