function countSubstringOccur(arr){
	var	inp = arr[1].toLowerCase();
	var sub = arr[0].toLowerCase();
	var result = 0;
    for(var i = 0; i < inp.length - sub.length;i++) {
        var subString = inp.substr(i, sub.length);
        if(sub == subString) {
            result++;
        }
    }
    console.log(result);
}


countSubstringOccur(["in", "We are living in a yellow submarine. We don't have anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days."]);
countSubstringOccur(['your', 'No one heard a single word you said. They should have seen it in your eyes. What was going around your head.']);
countSubstringOccur(['but', 'But you were living in another world tryin\' to get your message through.']);

require('readline')
    .createInterface(process.stdin, process.stdout)
    .question("Press [Enter] to exit...", function(){
        process.exit();
});