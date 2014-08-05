function replaceSpaces(str) {
   result =  str.replace(/\s/g, "");

    console.log(result);
}

replaceSpaces("But you were living in another world tryin' to get your message through");

require('readline')
    .createInterface(process.stdin, process.stdout)
    .question("Press [Enter] to exit...", function(){
        process.exit();
});