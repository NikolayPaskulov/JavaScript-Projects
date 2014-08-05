function compareChars(firstArray, secArray) {
    var lfa = firstArray.length;
    var lsa = secArray.length;

    var equal = true;


    if(lfa === lsa){
        for(i = 0; i < firstArray.length; i++) {
             if(firstArray[i] !== secArray[i]) {
                  equal = false;
             }
        }
    }
    else {
        equal = false;
    }

    if (equal == true) {
        console.log("Equal");
    }
    else {
        console.log("Not Equal");
    }
}

compareChars(['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'], ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']);
compareChars(['3', '5', 'g', 'd'], ['5', '3', 'g', 'd']);
compareChars(['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'], ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']);

require('readline')
    .createInterface(process.stdin, process.stdout)
    .question("Press [Enter] to exit...", function(){
        process.exit();
});