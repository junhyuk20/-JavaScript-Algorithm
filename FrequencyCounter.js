function sameFrequency(arr1, arr2) {
  // good luck. Add any arguments you deem necessary.

  // 매개변수로 들어온 숫자들 문자열로 바꾸자
  arr1 = String(arr1);
  arr2 = String(arr2);
  //  먼저 두배열의 길이가 같은지 부터 판별
  if (arr1.length != arr2.length) return false;

  // 같으면 두개의 배열중 하나의 배열에서 인덱스를 뽑아서 비교 할 수 있는 객체 생성
  let compareObj = {};
  for (let i = 0; i < arr1.length; i++) {
    let property = arr1[i];
    // compareObj 객체 초기화
    compareObj[property]
      ? (compareObj[property] = compareObj[property] + 1)
      : (compareObj[property] = 1);
  }

  // 비교 가능한 객체를 초기화 한 후 나머지 배열의 요소들을 비교해서 똑같은 녀석이 있으면 -1,  없으면 false를 반환하자.
  for (let j = 0; j < arr2.length; j++) {
    let property = arr2[j];
    if (compareObj[property]) {
      compareObj[property] = compareObj[property] - 1;
    } else {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));

/*
정답지

function sameFrequency(num1, num2){
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if(strNum1.length !== strNum2.length) return false;
  
  let countNum1 = {};
  let countNum2 = {};
  
  for(let i = 0; i < strNum1.length; i++){
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
  }
  
  for(let j = 0; j < strNum1.length; j++){
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
  }
  
  for(let key in countNum1){
    if(countNum1[key] !== countNum2[key]) return false;
  }
 
  return true;
}
*/
