//https://leetcode.com/problems/set-matrix-zeroes/description/

let setZeroes = matrix => {
  //remember if top needs to be cleared (use top row to store info about the columns)
  let clearTop = matrix[0].some(el => el === 0);

  for (let i = 1; i < matrix.length; i++) {
    if (matrix[i].some(el => el === 0)) {
      for (let j = 0; j < matrix[i].length; j++) {
        //store 0 in top to mark that column needs to be cleared
        if (matrix[i][j] === 0) {
          matrix[0][j] = 0;
        } else {
          matrix[i][j] = 0;
        }
      }
    }
  }

  //use info from top row to clear columns
  matrix[0].forEach((el, i) => {
    if (el === 0) {
      for (let j = 1; j < matrix.length; j++) {
        matrix[j][i] = 0;
      }
    }
  });

  if (clearTop) {
    matrix[0].forEach((_, i) => (matrix[0][i] = 0));
  }
};
