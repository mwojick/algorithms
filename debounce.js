//https://davidwalsh.name/javascript-debounce-function

// simplified version:
function debounce(func, wait) {
  var timeout;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(func, wait);
  };
}

function hi() {
  console.log("time1", Math.floor(Date.now() / 1000));

  let a = debounce(
    () => console.log("time2", Math.floor(Date.now() / 1000)),
    1000
  );
  a();
  setTimeout(a, 4099);
  setTimeout(a, 1899);
  setTimeout(a, 999);
  // setTimeout(a, 999);
  // setTimeout(a, 999);
  // setTimeout(a, 999);
}

hi();
