// input: "><<><"
// output: "<><<><>>" (added "<" to beginning and ">> to end")

const solution = angles => {
  // Type your solution here
  rightArrows = 0;
  leftArrows = 0;

  for (let i = 0; i < angles.length; i++) {
    if (angles[i] === "<") {
      rightArrows++;
    } else if (rightArrows !== 0) {
      rightArrows--;
    }

    if (angles[angles.length - i - 1] === ">") {
      leftArrows++;
    } else if (leftArrows !== 0) {
      leftArrows--;
    }
  }

  return "<".repeat(leftArrows) + angles + ">".repeat(rightArrows);
};
