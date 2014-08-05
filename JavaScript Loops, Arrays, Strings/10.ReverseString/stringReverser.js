function reverseString(value) { 
    var str = value.split("").reverse().join("");
    console.log(str);
}

reverseString('sample');
reverseString('softUni');
reverseString('java script');

require('readline')
    .createInterface(process.stdin, process.stdout)
    .question("Press [Enter] to exit...", function(){
        process.exit();
});