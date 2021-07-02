const removeFromArray = function(arr, args1,args2,args3,args4,args5){
  let i = 0;
  let args_array = Array.from(arguments);
  args_array.shift();
  
  while(i < arr.length){
    console.log(args_array.includes(arr[i]), i)
    if(args_array.includes(arr[i])){
      arr.splice(i,1);
      i = 0;
      continue;
    }
    i++;
  }
  return arr;
};

module.exports = removeFromArray;
