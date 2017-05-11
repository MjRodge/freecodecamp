function confirmEnding(str, target) {
  var endingWith = str.substr((str.length-target.length), str.length-1);
  if (endingWith === target) {
    return true;
  } else {
    return false;
  }
}

confirmEnding("Open sesame", "pen");
