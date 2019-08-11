// https://codeburst.io/throttling-and-debouncing-in-javascript-b01cad5c8edf

const throttle = (func, limit) => {
  let throttled = false;

  return function() {
    const args = arguments;
    const context = this;

    if (!throttled) {
      func.apply(context, args);
      throttled = true;
      setTimeout(() => (throttled = false), limit);
    }
  };
};

function hi() {
  let a = throttle(
    () => console.log("time", Math.floor(Date.now() / 1000)),
    1000
  );

  a();

  setTimeout(a, 1000);
  setTimeout(a, 2004);
}

hi();
