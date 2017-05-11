function truncateString(str, num) {
  if (num < str.length && num > 3){
    return str.slice(0, num-3) + "...";
  } else if (num < str.length && num <= 3){
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

truncateString("A-", 1);
