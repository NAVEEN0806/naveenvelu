var jsonObj = '{"name":"NAVEEN", "age": 22, "city":"ERODE"}';
var myObj = JSON.parse(jsonObj);
var txt = "";
for (x in myObj){
	txt += myObj[x] +"<br>";
	console.log(txt);
}

document.getElementById("demo").innerHTML = txt;

