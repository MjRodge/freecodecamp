function destroyer(arr) {
  var args = Array.from(arguments);
  args.splice(0,1);
  var destroyed = arr.filter(function(target){
    return args.indexOf(target) === -1;
  });
  return destroyed;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
