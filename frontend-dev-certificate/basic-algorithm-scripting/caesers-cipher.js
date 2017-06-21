function rot13(str) { // LBH QVQ VG!
  var codeArray = [];
  for (var i=0; i<str.length; i++) {
    var decode = str.charCodeAt(i);
    if (decode<65 || decode>90) {
      codeArray.push(String.fromCharCode(decode));
    }
    else if (decode < 78) {
      codeArray.push(String.fromCharCode(decode+13));
    }
    else {
      codeArray.push(String.fromCharCode(decode-13));
    }
  }
  return codeArray.join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
