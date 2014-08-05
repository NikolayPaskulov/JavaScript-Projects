function findPalindromes(str) {
    var input = str.split(/[^a-zA-z]+/);
    var result = [];

    for(i = 0; i < input.length - 1; i++) {
        var word = input[i];
        var reversedWord = word.split("").reverse().join("");
        if(word.toLowerCase() === reversedWord.toLowerCase()) {
            result.push(word);
        }
    }

    console.log(result);
} 

findPalindromes('There is a man, his name was Bob.');

require('readline')
    .createInterface(process.stdin, process.stdout)
    .question("Press [Enter] to exit...", function(){
        process.exit();
});