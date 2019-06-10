// Frog Jump
// LeetCode (Hard)
// Amazon, Google, Facebook

const canCross = stones => {
  for (let i = 3; i < stones.length; i++) {
    if (stones[i] > stones[i - 1] * 2) {
      return false;
    }
  }
  let stonePositions = new Set();
  for (let i of stones) {
    stonePositions.add(i);
  }
  let lastStone = stones[stones.length - 1];
  let positions = [];
  let jumps = [];
  positions.push(0);
  jumps.push(0);
  while (positions.length !== 0) {
    let position = positions.pop();
    let jumpDistance = jumps.pop();
    for (let i = jumpDistance - 1; i <= jumpDistance + 1; i++) {
      if (i <= 0) {
        continue;
      }
      let nextPos = position + i;
      if (nextPos === lastStone) {
        return true;
      } else if (stonePositions.has(nextPos)) {
        positions.push(nextPos);
        jumps.push(i);
      }
    }
  }

  return false;
};

let test1 = canCross([0, 1, 3, 5, 6, 8, 12, 17]);
console.log(test1);
