function hideNumbers(str) {
  var len = str.length - 4;
  var arr = '';
  for (var i = 0; i < len; i++) {
    arr += "*";
  }
  return arr + str.substring(len); //substring(str.length-4)와 같다. 문자열+ 문자열 을 통해 반환
}

console.log(hideNumbers('01033334444')); // *******4444
console.log(hideNumbers('027778888')); // *****8888

//정수변환
function strToInt(str) {
  return parseInt(str);
}

console.log(strToInt('1234')); // 1234
console.log(strToInt('-1234')); // -1234


/// 수밧수바숩사부사부사붓
function waterMelon(n) {
  var str = '';
  for (var i = 0; i < n; i++) {
    str += (i % 2 === 0) ? '수' : '박';
  }
  return str;
}

console.log('n이 3인 경우: ' + waterMelon(3));
console.log('n이 4인 경우: ' + waterMelon(4));



function nextSqaure(n) {
  var met = Math.sqrt(n);
  var result = '';
  if (parseInt(met) === met) {
    result += (met + 1) * (met + 1);
  } else {
    result += 'no';
  }
  return result;
}

console.log(nextSqaure()); // no
console.log(nextSqaure(0)); // 1
console.log(nextSqaure(1)); // 4
console.log(nextSqaure(2)); // no
console.log(nextSqaure(3)); // no
console.log(nextSqaure(121)); // 144
console.log(nextSqaure(165)); // no
console.log(nextSqaure(400)); // 441

function checkPalindrom(str) {
  return str === str.split('').reverse().join('');
}

console.log(checkPalindrom('dad')); // true
console.log(checkPalindrom('mom')); // true
console.log(checkPalindrom('palindrom')); // false
console.log(checkPalindrom('s')); // false


function sumDivisor(num) {
  var result = 0;
  for (var i = 1; i <= num; i++) {
    if (num % i === 0) result += i;
  }
  return result;
}

console.log(sumDivisor(12)); // 28