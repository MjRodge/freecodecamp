function bouncer(arr) {
  var notFalsy = arr.filter(function(value){
    if (value !== false || value !== null || value !== "" || value !== undefined) {
      return value;
    }
  });
  return notFalsy;
}

bouncer([7, "ate", "", false, 9]);
