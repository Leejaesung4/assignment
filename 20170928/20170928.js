function triangle(line) {
  for (var i = 1; i <= line; i++) {
    var result = '';
    for (var m = i; m <= line; m++) {
      result += ' '; //공백=#;
    }
    for (var s = 1; s <= i * 2 - 1; s++) {
      result += '*';
    }
    console.log('정 삼각형 : ' + result); //result += '\n';
  }
  // return result;
}
triangle(10);
//console.log(triangle(10));


//역삼각형
var reTriangle = function(line) {
  for (var i = 1; i <= line; i++) {
    var result = '';
    for (var m = 1; m <= i; m++) {
      result += ' '; //공백=#
    }
    for (var s = 1; s <= line * 2 - ((i * 2) - 1); s++) {
      result += '*';
    }
    console.log('역 삼각형 : ' + result);
  }
};
reTriangle(10);