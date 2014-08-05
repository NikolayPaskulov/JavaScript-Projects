var date = new Date();
var hours = data.getHours();
var minutes = data.getMinutes();

if (minutes < 10) { 
	console.log(hours + ":" + "0" + minutes);
} else {
	console.log(hours + ":" + minutes);
}