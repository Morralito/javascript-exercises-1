const fibonacci = function(n) {
      
    let number = parseInt(n);
    if (n < 0) return 'OOPS';
    if (n === 0) return 0;
    
  
    if (n > 2) {
    let minus1 = 1; 
    let minus2 = 0; 
  
    for (let i = 1; i < n; i++){
      let temp = minus1;
      minus1 = minus1 + minus2; 
      minus2 = temp;
    }
    return  minus1; 
    }
  return 1;
};
  

// Do not edit below this line
module.exports = fibonacci;
