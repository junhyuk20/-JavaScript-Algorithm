/*
π κΈ°μ€μ  κ° μ΄λ λ°°μ΄ ν¨ν΄ μκ³ λ¦¬μ¦ !! 
*/

// 2. μ¬λΌμ΄λ© μλμ°λ₯Ό μ μ©ν λ°©μ!  O(N)
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) {
    return null;
  }
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

// 1. μμ μ½λ (μμ’μ μ½λ) O(N2)
/* 
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity; //λ§€κ°λ³μμ λ°°μ΄μ΄ μ λΆ μμμ΄λ©΄ λͺ¨λ λν΄λ κ°μ₯ ν°κ°μ μμ μ΄λ―λ‘ -μΈνΌλν° ν΄μ€
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
    console.log(temp, max);
  }
  return max;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);*/
