function displayProperties() {
    var prop = [];
    for (var p in document) {
        prop.push(p);
    }
    prop.sort();
}

console.log(displayProperties());

require('readline')
    .createInterface(process.stdin, process.stdout)
    .question("Press [Enter] to exit...", function(){
        process.exit();
});
