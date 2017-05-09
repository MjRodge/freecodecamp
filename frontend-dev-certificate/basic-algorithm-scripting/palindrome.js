function palindrome(str) {
  var newStr = str.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
  var comparisionStr = newStr.split('').reverse().join('');
  if (comparisionStr === newStr) {
    return true;
  } else {
    return false;
  }
}

palindrome("eye");
