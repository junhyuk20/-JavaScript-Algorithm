/*
👓다중 포인터 문제

이 문제는 매개변수로 들어오는 문자열 array1과 array2 중 첫번째 문자열안에 있는 문자들이 2번 문자열에 전부 포함이 되는냐를 찾는 것이며
만약 있다면 array1과 array2 는 같이 인덱스를 증가 시킨후 array1의 다음 문자가 array2문자열에 있는지 또 찾는데 여기서 핵심은 
순서이다. 즉 없어서 array2의 인덱스를 증가시키고 찾는다 해도 그다음 찾아야 되는 arra1번째의 문자가 array2의 문자열에서 지난 인덱스라면 false
를 반환해야 된다. 

설명이 그지 같네 ... ㅠ
*/

function isSubsequence(array1, array2) {
  // good luck. Add any arguments you deem necessary.

  // 문자열 하나를 찾으면 두번쨰 문자열에서 부터는 인덱스 +1 해줘야됨
  let a = 0;
  let b = 0;
  let answer = array1.length;
  while (b < array2.length) {
    if (array1[a] !== array2[b]) {
      b++;
    } else {
      a++;
      b++;
      answer--;
    }
    if (answer === 0) return true;
  }
  return false;
}

console.log(isSubsequence("hello", "hello world"));
console.log(isSubsequence("abc", "acb"));

/*
정답지 
나와 차이점 : 공간복잡도를 덜 사용하고 , 뭔가 더 간단한것 같기도 하다 ? 
function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}
*/
