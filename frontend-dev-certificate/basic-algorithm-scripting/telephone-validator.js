function telephoneCheck(str) {
  var regEx = /^(|1)( |)(\([0-9]{3}\)|[0-9]{3})(-| |)[0-9]{3}(-| |)[0-9]{4}$/;
  return regEx.test(str);
}

telephoneCheck("555-555-5555");
