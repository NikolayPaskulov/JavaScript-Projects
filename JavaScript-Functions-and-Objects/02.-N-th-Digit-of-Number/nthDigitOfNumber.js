function findNthDigit(arr) {
    var firstDigit = arr[0];
    var secDigit = arr[1];
    
    secDigit = secDigit.toString().replace('.','').replace('-','');

    
    if (secDigit.length < firstDigit) {
        return "The number doesn’t have " + firstDigit + " digits";
    }


    secDigit = Number(secDigit);

    for(var i = 0; i < firstDigit - 1; i++) {
        secDigit /= 10;

    }

        return Math.floor(secDigit % 10);
   
}

console.log(findNthDigit([1, 6]));
console.log(findNthDigit([2, -55]));
console.log(findNthDigit([6, 923456]));
console.log(findNthDigit([3, 1451.78]));
console.log(findNthDigit([6, 888.88]));


require('readline')
    .createInterface(process.stdin, process.stdout)
    .question("Press [Enter] to exit...", function(){
        process.exit();
});