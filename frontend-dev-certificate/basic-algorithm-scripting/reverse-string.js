function reverseString(str) {
  var strLength = str.length;
  var array = [];
  for (var i = 0; i < strLength; i++) {
    array.push([str.charAt(i)]);
  }
  var reversedArr = array.reverse();
  var reversedStr = reversedArr.join('');
  return reversedStr;
}

reverseString("hello");
