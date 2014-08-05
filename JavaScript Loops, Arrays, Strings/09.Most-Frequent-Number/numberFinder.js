function findMostFreqNum(arr) {
    var newArrayWithKeyValue = {}; 
    var maxCount = 0;
    var maxValue = 0;
    var currentElement = 0;
    
    for(var i = 0, len = arr.length; i<len; i++) {
        currentElement = arr[i];

        if(!newArrayWithKeyValue.hasOwnProperty(currentElement)) {
            newArrayWithKeyValue[currentElement] = 0;
        }

        ++newArrayWithKeyValue[currentElement];

        if(newArrayWithKeyValue[currentElement] > maxCount) {
            maxCount = newArrayWithKeyValue[currentElement];
            maxValue = currentElement;
        }
    }
    return maxValue + " (" + maxCount + " times)";
}

console.log(findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]));
console.log(findMostFreqNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]));
console.log(findMostFreqNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]));


require('readline')
    .createInterface(process.stdin, process.stdout)
    .question("Press [Enter] to exit...", function(){
        process.exit();
});