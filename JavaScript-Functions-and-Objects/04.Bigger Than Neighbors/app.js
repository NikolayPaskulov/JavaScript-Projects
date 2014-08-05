function biggerThanNeighbors(index, arr) {
    var l = arr.length;
    
    if(index >= l || index < 0) {
        return "invalid index";
    }
    
    if(index === 0 || index === (l - 1)) {
        return "only one neighbor";
    }

    for (var i = 0; i < l; i++) {
        if(arr[index] > arr[index + 1] && arr[index] > arr[index - 1]) {
            return "bigger";
        }
        else {
            return "not bigger";
        }
    }

} 

console.log(biggerThanNeighbors(2, [1, 2, 3, 3, 5]));
console.log(biggerThanNeighbors(2, [1, 2, 5, 3, 4]));
console.log(biggerThanNeighbors(5, [1, 2, 5, 3, 4]));
console.log(biggerThanNeighbors(0, [1, 2, 5, 3, 4]));




require('readline')
    .createInterface(process.stdin, process.stdout)
    .question("Press [Enter] to exit...", function(){
        process.exit();
});