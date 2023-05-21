const removeFromArray = function(array, ...args) {
    let newArray = array;
    for (let i = 0; i < args.length; i++){
       newArray = newArray.filter( arg => arg !== args[i]);
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
