const findTheOldest = function(arr) {
    let newArray = [];   
    arr.forEach(item => {
        if (!('yearOfDeath' in item)){
            newArray.push(new Date().getFullYear() - item.yearOfBirth);
        }
        else {
            newArray.push(item.yearOfDeath - item.yearOfBirth);
        }
    });
    return arr[newArray.indexOf(Math.max(...newArray))];
};

// Do not edit below this line
module.exports = findTheOldest;
