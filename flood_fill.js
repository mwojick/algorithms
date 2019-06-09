// Flood Fill
// LeetCode (Easy)
// Amazon

const floodFill = (image, sr, sc, newColor) => {
  // source is already same as new color, so return original one
  if (image[sr][sc] === newColor) return image;

  fill(image, sr, sc, image[sr][sc], newColor);
  return image;
};

const fill = (image, i, j, color, newColor) => {
  if (
    i < 0 ||
    i >= image.length ||
    j < 0 ||
    j >= image[i].length ||
    image[i][j] !== color
  )
    return;

  image[i][j] = newColor;
  fill(image, i + 1, j, color, newColor);
  fill(image, i - 1, j, color, newColor);
  fill(image, i, j + 1, color, newColor);
  fill(image, i, j - 1, color, newColor);
};

let arr1 = [[1, 1, 2], [2, 2, 2], [2, 3, 3]];
let test1 = floodFill(arr1, 0, 2, 4);
console.log(test1);
