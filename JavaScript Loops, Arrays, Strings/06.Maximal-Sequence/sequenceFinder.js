function findMaxSequence(value) {
    var currSeq = [value[0]];
    var maxSeq = [value[0]];

    for(var i = 0; i < value.length; i++) {
        var currentElement = value[i];
        var prevElement = value[i - 1];

        if(currentElement === prevElement) {
            currSeq.push(currentElement);
        }

        else {
            if(currSeq.length >= maxSeq.length) {
                maxSeq = currSeq;
            }

            currSeq = [currentElement];
        }
    }

    console.log(maxSeq);
}

findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
findMaxSequence(['happy']);
findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']);

require('readline')
    .createInterface(process.stdin, process.stdout)
    .question("Press [Enter] to exit...", function(){
        process.exit();
});