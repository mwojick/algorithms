var flipAndInvertImage = function(A) {
  for (let i in A) {
    let k = A[i].length - 1;
    for (let j = 0; j < k; j++, k--) {
      let temp = A[i][j];
      A[i][j] = A[i][k];
      A[i][k] = temp;
    }
    for (let j = 0; j < A[i].length; j++) {
      A[i][j] === 0 ? (A[i][j] = 1) : (A[i][j] = 0);
    }
  }
  return A;
};
