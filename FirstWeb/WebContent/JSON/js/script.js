function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
readTextFile("data/emp.json", function(text){
    var data = JSON.parse(text);
    var txt = "";
    for (x in data){
    	txt += "Name : "+ data[x].name + "<br>";
    	
    }
    
    document.getElementById("demo").innerHTML = txt;
});