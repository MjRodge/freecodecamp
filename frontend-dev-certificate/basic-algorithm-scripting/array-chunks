function chunkArrayInGroups(arr, size) {
  var chunkArrayOutput = [];
  var iterations = Math.floor(arr.length/size);
  for (var i=0; i<iterations; i++){
    chunkArrayOutput.push(arr.splice(0, size));
  }
  if (arr.length !== 0){
    chunkArrayOutput.push(arr);
  }
  return chunkArrayOutput;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
