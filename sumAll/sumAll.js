const sumAll = function(first_num, second_num) {
  let highest_num;
  let lowest_num;
  sum = 0;
  
  if((typeof first_num != 'number' || typeof second_num != 'number') || (first_num < 0 || second_num < 0)){
    return 'ERROR';
  }
  
  if(first_num > second_num){
    highest_num = first_num;
    lowest_num = second_num;
  }else if(first_num < second_num){
    highest_num = second_num;
    lowest_num = first_num;
  }
  
  
  for(let i = lowest_num; i <= highest_num; i++){
    sum += i;
  }
  
  return sum;
  
};

module.exports = sumAll;
