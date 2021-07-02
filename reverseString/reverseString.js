const reverseString = function(str) {
  reverse_str = "";
  for(let i = str.length; i >= 0; i--){
    reverse_str += str.charAt(i);
  }
  return reverse_str;
};

module.exports = reverseString;
