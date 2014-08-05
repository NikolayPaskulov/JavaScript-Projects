function calcSupply(age,ageMax,food) {

    var text = "kg of chocolate would be enough until I am 118 years old.";

    return (((ageMax - age) * 365) * food) + text;
}

console.log(calcSupply(38,118,0.5));
console.log(calcSupply(20,87,2));
console.log(calcSupply(16,102,1.1));

require('readline')
    .createInterface(process.stdin, process.stdout)
    .question("Press [Enter] to exit...", function(){
        process.exit();
});
