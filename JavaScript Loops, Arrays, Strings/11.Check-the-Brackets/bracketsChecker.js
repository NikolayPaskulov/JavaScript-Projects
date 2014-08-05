function checkBrackets(arr) {
    var result = 'correct';
    var counter = 0;

    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === '(') {
            counter++;
        } else if(arr[i] == ')') {
            counter--;
        }
    }

    if(arr[0] === ')') {
        result = 'incorrect';
    } else if(arr[arr.length] === '(') {
        result = 'incorrect';
    } else if (counter !== 0) {
        result = 'incorrect';
    }

    console.log(result);
}

checkBrackets('( ( a + b ) / 5 – d )');
checkBrackets(') ( a + b ) )');
checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )');

require('readline')
    .createInterface(process.stdin, process.stdout)
    .question("Press [Enter] to exit...", function(){
        process.exit();
});