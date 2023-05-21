const reverseString = function(string) {

    let reversed = '';
    for (let i = 1; i <= string.length; i++){
        reversed += string.at(-i);
    }

    return reversed === string;
};

// Do not edit below this line
module.exports = reverseString;
