const repeatString = function(str, counter) {
  combine_str = "";
  for(let i= 0; i < counter; i++){
    combine_str+=str;
  }
  return combine_str;
};

module.exports = repeatString;
