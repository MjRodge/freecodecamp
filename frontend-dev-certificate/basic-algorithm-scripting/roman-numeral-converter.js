var romanConversionArray = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
];

function convertToRoman(num) {
  if (num === 0) {
    return '';
  }
  for (var i = 0; i < romanConversionArray.length; i++) {
    if (num >= romanConversionArray[i][0]) {
      return romanConversionArray[i][1] + convertToRoman(num - romanConversionArray[i][0]);
    }
  }
}

convertToRoman(4579)
