function sortArray(value) {
    var arr = new Array();

    arr = value.sort(function compare(a, b) {return a - b;});
    console.log(arr);
}

sortArray([5, 4, 3, 2, 1]);
sortArray([12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]);

require('readline')
    .createInterface(process.stdin, process.stdout)
    .question("Press [Enter] to exit...", function(){
        process.exit();
});

//    function removeA(arr) {
//          var what, a = arguments, L = a.length, ax;
//          while (L > 1 && arr.length) {
//           what = a[--L];
//           while ((ax= arr.indexOf(what)) !== -1) {
//            arr.splice(ax, 1);
//           }
//           }
//                   return arr;
//            } 