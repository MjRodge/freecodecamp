function mutation(arr) {
  var firstString = arr[0].toLowerCase();
  var checkString = arr[1].toLowerCase();
  for (var i=0; i<checkString.length; i++) {
    if (firstString.indexOf(checkString[i]) < 0)
      return false;
  }
  return true;
}

mutation(["hello", "hey"]);
