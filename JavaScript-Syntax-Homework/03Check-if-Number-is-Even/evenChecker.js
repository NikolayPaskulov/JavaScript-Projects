function evenNumber(value) {
    if(value % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(evenNumber(3));
console.log(evenNumber(127));
console.log(evenNumber(588));

require('readline')
    .createInterface(process.stdin, process.stdout)
    .question("Press [Enter] to exit...", function(){
        process.exit();
});