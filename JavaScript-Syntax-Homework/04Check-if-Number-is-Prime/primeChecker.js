function isPrime(value) {
    for (var i = 2; i <= Math.sqrt(value); i++) {
        if (value % i == 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(7));
console.log(isPrime(254));
console.log(isPrime(587));

require('readline')
    .createInterface(process.stdin, process.stdout)
    .question("Press [Enter] to exit...", function(){
        process.exit();
});