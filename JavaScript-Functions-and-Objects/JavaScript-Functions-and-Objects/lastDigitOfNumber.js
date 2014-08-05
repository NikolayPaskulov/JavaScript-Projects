function lastDigitAsText(number) {
    var lastDigit = number % 10;

    if (lastDigit < 0) {
        lastDigit *= -1;
    }

    switch(lastDigit) {
        case 1: console.log("One"); break;
        case 2: console.log("Two"); break;
        case 3: console.log("Three"); break;
        case 4: console.log("Four"); break;
        case 5: console.log("Five"); break;
        case 6: console.log("Six"); break;
        case 7: console.log("Seven"); break;
        case 8: console.log("Eight"); break;
        case 9: console.log("Nine"); break;
    }
}

lastDigitAsText(-55);
lastDigitAsText(6);
lastDigitAsText(133);
lastDigitAsText(14567);

require('readline')
    .createInterface(process.stdin, process.stdout)
    .question("Press [Enter] to exit...", function(){
        process.exit();
});