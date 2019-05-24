// input: "([{})]"
// output: false

const solution = brackets => {
  // Type your solution here
  let stack = [];
  let mapping = { "}": "{", "]": "[", ")": "(" };
  let keys = Object.keys(mapping);

  if (keys.includes(brackets[0])) return false;

  for (let i = 0; i < brackets.length; i++) {
    let ch = brackets[i];

    if (keys.includes(ch)) {
      let topEl = stack.pop();
      if (topEl !== mapping[ch]) return false;
    } else {
      stack.push(ch);
    }
  }

  return stack.length === 0;
};
