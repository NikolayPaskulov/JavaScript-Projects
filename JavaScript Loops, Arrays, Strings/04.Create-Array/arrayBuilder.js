function createArray() {
   var arr = new Array(20);
    for(i = 0; i < arr.length; i++) {
       arr[i] = i * 5;
       }
    console.log(arr.join(", "));
}

createArray();

require('readline')
    .createInterface(process.stdin, process.stdout)
    .question("Press [Enter] to exit...", function(){
        process.exit();
});