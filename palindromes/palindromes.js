const palindromes = function (str) {
  let original = str.split(/[^(A-Z)^(a-z)]/).join('');
  let reverse = function() {
    let base = original.split('');
    let reverse_str = "";
    
    for(let i = base.length - 1; i >= 0; i--){
      reverse_str += base[i];
    }
    return reverse_str;
  };
  
  console.log(original.toLowerCase());
  console.log(reverse().toLowerCase());
 
  return original.toLowerCase() === reverse().toLowerCase();
};

module.exports = palindromes;
