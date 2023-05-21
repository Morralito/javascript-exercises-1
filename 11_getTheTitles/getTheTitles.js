const getTheTitles = function(books) {
    let newArray = [];   
    books.forEach(item => newArray.push(item.title));
    return newArray;
};

// Do not edit below this line
module.exports = getTheTitles;
