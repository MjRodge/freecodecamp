function titleCase(str) {
  var array = str.toLowerCase().split(' ');
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i].split('');
    array[i][0] = array[i][0].toUpperCase();
    array[i] = array[i].join('')
  }
  return array.join(' ');
}

titleCase("I'm a little tea pot");
