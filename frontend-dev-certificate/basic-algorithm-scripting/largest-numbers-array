function largestOfFour(arr) {
  var largest = 0;
  var largestArray = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > largest){
        largest = arr[i][j];
      }
    }
    largestArray.push(largest);
    largest = 0;
  }
  return largestArray;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
