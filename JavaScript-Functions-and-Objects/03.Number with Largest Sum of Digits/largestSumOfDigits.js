function findLargestBySumOfDigits(arr) {
    
    var currentNumber = 0;
    var cnl = 0;
    var lastNumber = 0;
    var fullNumber = 0;
    var result = {};

    for(var i = 0, l = arr.length;i < l; i++) {
        if (typeof(arr[i]) === "number") {
             currentNumber = arr[i]; 
             if (currentNumber < 0) {
                 currentNumber *= -1;
             }
             currentNumber = currentNumber.toString();
             cnl = currentNumber.length; 
             currentNumber = Number(currentNumber);     
             
             for(var j = 0; j < cnl; j++) {
                 lastNumber = currentNumber % 10;
                 currentNumber = Math.floor(currentNumber / 10);
                 fullNumber += lastNumber;
             }
             currentNumber = arr[i];
             result[currentNumber] = fullNumber;
             fullNumber = 0;
        }
        else {
              return "undefined";
        }
     }

    var currentV = 0;
    var currentN = 0;
    var max = 0;
    var rl = Object.keys(result).length
    for(var k = 0; k < l; k++) {
        currentNumber = arr[k];
        currentN = result[currentNumber];
        if (currentN > max) {
            max = currentN;
            currentV = arr[k];
        }
    }
    
    return currentV;
}

console.log(findLargestBySumOfDigits([5, 10, 15, 111]));
console.log(findLargestBySumOfDigits([33, 44, -99, 0, 20]));
console.log(findLargestBySumOfDigits(['hello']));
console.log(findLargestBySumOfDigits([5, 3.3]));



require('readline')
    .createInterface(process.stdin, process.stdout)
    .question("Press [Enter] to exit...", function(){
        process.exit();
});