/* 
👀 다중 포인터를 이용한 배열의 고유값이 몇개인지 알아보는 알고리즘 !!
🎉 유의점 : 이 알고리즘을 사용하려면 해당 배열이 정령이 되어 있어야 한다. 그 이유로는 아래의 코드를 보면서 확인 하겠다. 
*/

function countUniqueValues(arr) {
  //아래의 조건문을 안하고 진행하면 빈배열이 와도 마지막 return문에 의해 0+1 이 반환 되므로 기본 조건을 주어야 됨
  if (arr.length === 0) {
    return false;
  }
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    // 이 조건문을 잘 보면 위에서 언급한 유의점을 알 수 있다.
    if (arr[i] != arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1; // 위 반복문을 진행 후 i의 인덱스 번째에 +1 해주어야 된다. why? 배열은 0 부터 시작하니깐!
}

console.log(countUniqueValues([1, 2, 5, 6, 6, 7, 99]));
