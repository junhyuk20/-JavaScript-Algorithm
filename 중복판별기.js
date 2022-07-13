// 내가 푼거
function areThereDuplicates(item1, item2, item3, item4) {
  // good luck. (supply any arguments you deem necessary.)
  let arr = [];
  arr.push(item1);
  arr.push(item2);
  arr.push(item3);

  if (item4 != undefined) {
    arr.push(item4);
  }
  // 다중 포인터 이용 방법
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

/*
정답지

1. 빈도수로 푸는 방법

function areThereDuplicates() {
  let collection = {}
  for(let val in arguments){
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for(let key in collection){
    if(collection[key] > 1) return true
  }
  return false;
}

2. 다중 포인터로 푸는 방법 

function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
}
*/
