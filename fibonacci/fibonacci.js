const fibonacci  = function(n){
  let arr = [1,1]
  
  if(n == 1) return 1;
  if(n < 1) return "OOPS";
  
  for(let i = 0; i < (n - 2); i++){
    arr.push(arr[arr.length -1] + arr[arr.length -2]);
    console.log(arr);
  }
  return arr[arr.length -1];
};

module.exports = fibonacci;
