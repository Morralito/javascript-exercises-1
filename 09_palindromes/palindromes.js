const palindromes = function (word) {
  
    let letterArray = [];
    letterArray =  word.toLowerCase().split("").filter(filterNonAlphanumeric);
     
      function filterNonAlphanumeric(value) {
       let code = value.charCodeAt(0);
       if((code > 47 && code < 58) ||
           (code > 64 && code < 91) || 
           (code > 96 && code < 123)) { 
         return value;
       }
    }
     return letterArray.join("") === letterArray.reverse().join("");
   };

// Do not edit below this line
module.exports = palindromes;
