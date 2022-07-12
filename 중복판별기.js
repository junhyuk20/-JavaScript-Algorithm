function areThereDuplicates(item1, item2, item3, item4) {
  // good luck. (supply any arguments you deem necessary.)
  let arr = [];
  arr.push(item1);
  arr.push(item2);
  arr.push(item3);

  if (item4 != undefined) {
    arr.push(item4);
  }
  let x = 0;
  let y = arr.length - 1;

  while (x < y) {
    if (arr[x] === arr[y]) {
      return true;
    }
    x++;
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates("a", "b", "c", "a"));
