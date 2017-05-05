function factorialise(num) {
  if (num === 1 || num === 0){
    return 1;
  }
  for (var i = num-1; i >= 1; i--) {
    num *= i;
  }
  return num;
}

factorialise(25);
