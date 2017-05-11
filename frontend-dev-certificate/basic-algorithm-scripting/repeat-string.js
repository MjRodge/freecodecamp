function repeatStringNumTimes(str, num) {
  var output = "";
  for (i = 0; i < num; i++) {
    output += str;
  }
  return output;
}

repeatStringNumTimes("abc", 3);
