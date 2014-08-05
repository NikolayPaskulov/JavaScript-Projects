function printNumbers(n) {
    var arr = new Array();
    for (i = 1; i <= n; i++) {
        if(i % 4 === 0) {
        }
        if(i % 5 === 0) {
        }
        else {
            arr.push(i);
        }
    }
            arr.join(", ");
            console.log(arr);
}

printNumbers(20);
printNumbers(5);
printNumbers(13);

require('readline')
    .createInterface(process.stdin, process.stdout)
    .question("Press [Enter] to exit...", function(){
        process.exit();
});