function calcCylinderVol(radius,height) {
    var volume = Math.PI * (radius * radius) * height;
    return volume.toFixed(3);
}

console.log(calcCylinderVol(2,4));
console.log(calcCylinderVol(5,8));
console.log(calcCylinderVol(12,3));

require('readline')
    .createInterface(process.stdin, process.stdout)
    .question("Press [Enter] to exit...", function(){
        process.exit();
});
