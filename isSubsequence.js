/*
๐๋ค์ค ํฌ์ธํฐ ๋ฌธ์ 

์ด ๋ฌธ์ ๋ ๋งค๊ฐ๋ณ์๋ก ๋ค์ด์ค๋ ๋ฌธ์์ด array1๊ณผ array2 ์ค ์ฒซ๋ฒ์งธ ๋ฌธ์์ด์์ ์๋ ๋ฌธ์๋ค์ด 2๋ฒ ๋ฌธ์์ด์ ์ ๋ถ ํฌํจ์ด ๋๋๋๋ฅผ ์ฐพ๋ ๊ฒ์ด๋ฉฐ
๋ง์ฝ ์๋ค๋ฉด array1๊ณผ array2 ๋ ๊ฐ์ด ์ธ๋ฑ์ค๋ฅผ ์ฆ๊ฐ ์ํจํ array1์ ๋ค์ ๋ฌธ์๊ฐ array2๋ฌธ์์ด์ ์๋์ง ๋ ์ฐพ๋๋ฐ ์ฌ๊ธฐ์ ํต์ฌ์ 
์์์ด๋ค. ์ฆ ์์ด์ array2์ ์ธ๋ฑ์ค๋ฅผ ์ฆ๊ฐ์ํค๊ณ  ์ฐพ๋๋ค ํด๋ ๊ทธ๋ค์ ์ฐพ์์ผ ๋๋ arra1๋ฒ์งธ์ ๋ฌธ์๊ฐ array2์ ๋ฌธ์์ด์์ ์ง๋ ์ธ๋ฑ์ค๋ผ๋ฉด false
๋ฅผ ๋ฐํํด์ผ ๋๋ค. 

์ค๋ช์ด ๊ทธ์ง ๊ฐ๋ค ... ใ 
*/

function isSubsequence(array1, array2) {
  // good luck. Add any arguments you deem necessary.

  // ๋ฌธ์์ด ํ๋๋ฅผ ์ฐพ์ผ๋ฉด ๋๋ฒ์จฐ ๋ฌธ์์ด์์ ๋ถํฐ๋ ์ธ๋ฑ์ค +1 ํด์ค์ผ๋จ
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
์ ๋ต์ง 
๋์ ์ฐจ์ด์  : ๊ณต๊ฐ๋ณต์ก๋๋ฅผ ๋ ์ฌ์ฉํ๊ณ  , ๋ญ๊ฐ ๋ ๊ฐ๋จํ๊ฒ ๊ฐ๊ธฐ๋ ํ๋ค ? 
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
