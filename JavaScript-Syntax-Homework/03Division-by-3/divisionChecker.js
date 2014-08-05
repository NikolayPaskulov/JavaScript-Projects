function divisionBy3(value) {
    var yes = "the number is divided by 3 without remainder";
    var no = "the number is not divided by 3 without remainder";

    var sum = 0;

    while(value > 0){
        sum += value % 10;
        value = Math.floor(value / 10);
    }

    if(sum % 3 == 0) {
        return yes;
    }
    else {
        return no;
    }
}

console.log(divisionBy3(12));
console.log(divisionBy3(188));
console.log(divisionBy3(591));

require('readline')
    .createInterface(process.stdin, process.stdout)
    .question("Press [Enter] to exit...", function(){
        process.exit();
});