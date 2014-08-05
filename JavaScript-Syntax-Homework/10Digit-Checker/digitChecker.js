function checkDigit(value) {
    var number = Math.floor(value / 100);

    if(number % 10 === 3) {
        return true;
    }
    else {
        return false;
    }
}

console.log(checkDigit(1235));
console.log(checkDigit(25368));
console.log(checkDigit(123456));


require('readline')
    .createInterface(process.stdin, process.stdout)
    .question("Press [Enter] to exit...", function(){
        process.exit();
});