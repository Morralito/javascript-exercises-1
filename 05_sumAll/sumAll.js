const sumAll = function(a, b) {
    
    let first;
    let last;
    
    if (a < 0 || b < 0 ||  !Number.isInteger(a) || !Number.isInteger(b)) return 'ERROR';
    
    if ( a < b) {
      first = a;
      last = b;
    }
    else {
      first = b;
      last = a;
    }

    let sums = 0;
    for (let i = first; i <= last; i++){
      
      sums += i;
    }
    
    return sums;
    
};

// Do not edit below this line
module.exports = sumAll;
