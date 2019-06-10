// Max Area of Island
// LeetCode (Medium)
// Amazon, Google, Facebook

const maxAreaOfIsland = grid => {
  let max = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        max = Math.max(max, dfs(grid, i, j));
      }
    }
  }
  return max;
};

const dfs = (grid, i, j) => {
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[i].length ||
    grid[i][j] === 0
  ) {
    return 0;
  }

  grid[i][j] = 0;
  let count = 1;

  count += dfs(grid, i + 1, j);
  count += dfs(grid, i - 1, j);
  count += dfs(grid, i, j + 1);
  count += dfs(grid, i, j - 1);

  return count;
};

let grid1 = [
  [1, 1, 0],
  [0, 1, 0],
  [1, 1, 1],
  [1, 1, 1],
  [0, 0, 1],
  [0, 0, 0],
  [1, 1, 1]
];

let test1 = maxAreaOfIsland(grid1);
console.log("test1:", test1);
