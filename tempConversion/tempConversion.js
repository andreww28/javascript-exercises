function isInt(value){
  return /^[0-9]+$/.test(String(value))
}

const ftoc = function(f) {
  //(f-32) * 5/9
  if(typeof f != 'number'){
    return 0;
  }
  
  celcius = (f-32) * 5/9
  if(isInt(celcius)) return celcius;
  
  return parseFloat(celcius.toFixed(1));
};

const ctof = function(c) {
  //(C * 9/5) + 32
  if(typeof c != 'number'){
    return 0;
  }
  
  farenheit = (c * 9/5) + 32
  
  if(isInt(farenheit)) return farenheit;
  
  return parseFloat(farenheit.toFixed(1));
};


module.exports = {
  ftoc,
  ctof
};
