//이 문제는 정답지를 그대로 가져옴... 너무 for문에 취중해서 풀려고 해서 안되겠다 싶어 문제 풀이를 보게 됬슴둥 ㅠ
function averagePair(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  //for문으로 풀려고 했을 때 for문안의 값은 계속 증가 되므로 아래의 else if 와 else 처럼 조건을 줄 수가 없었음 ㅠ
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === num) return true;
    else if (avg < num) start++;
    else end--;
  }
  return false;
}
