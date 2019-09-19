function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

function validateForm() {
	    var radios = document.getElementsByName("question1");
	    var formValid = false;

	    var i = 0;
	    while (!formValid && i < radios.length) {
	        if (radios[i].checked) {formValid = true;
	        break;
	        }
	        i++;        
	    }

	   if (!formValid) alert("must check one option");
	   return formValid;
	    
	}

function setCookie(response,exdays) {
	  var cname="responses";
	  var d = new Date();
	  d.setTime(d.getTime() + (exdays*24*1000));
	  var expires = "expires=" + d.toGMTString();
	  document.cookie = cname+ "=" + response + ";" + expires + ";path=/";
}

function getCookie(cname) {
	  var name = cname + "=";
	  var decodedCookie = decodeURIComponent(document.cookie);
	  var ca = decodedCookie.split(';');
	  for(var i = 0; i < ca.length; i++) {
	    var c = ca[i];
	    while (c.charAt(0) == ' ') {
	      c = c.substring(1);
	    }
	    if (c.indexOf(name) == 0) {
	      return c.substring(name.length, c.length);
	    }
	  }
	  return "";
}

function validateAns(q){
	x=q;
	a=getCookie('responses');
	a=a+" ";
	setCookie(a,1);
	 readTextFile("people.json", function(text){
		    var myObj = JSON.parse(text);
		    var chechedAns = document.getElementsByName('question1');
		    var ischecked_method = false;
		    loop:for ( var i = 0; i < chechedAns.length; i++) {
		        if(chechedAns[i].checked) {
		            if(i==myObj[x].correctIndex){
		            	a=a+1;
		            	setCookie(a,1);
		            	alert("Correct Answer");
		            	return;
		            }
		        }
		    }a=a+0;
		    setCookie(a,1);
		   alert('Wrong answer');  
		});
}

var xmlhttp = new XMLHttpRequest();
myObj="";
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    myObj = JSON.parse(this.responseText);
  }
};
function  quiz() {

    if( typeof quiz.counter == 'undefined' ) {
        quiz.counter = 2;
    }
    quiz.counter++;
    document.write(quiz.counter+"<br />");
   console.log( quiz.counter);
}

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

function fetchQuestion(q){
 x=q;
 readTextFile("questions.json", function(text){
    var myObj = JSON.parse(text);
    
    crctanswer=myObj[x].correctIndex;
    
    console.log(myObj[x].question);
    
    document.getElementById("queDiv").innerHTML =  myObj[x].question;
    document.getElementById("option1").innerHTML = myObj[x].answers[0];
    document.getElementById("option2").innerHTML = myObj[x].answers[1];
    document.getElementById("option3").innerHTML = myObj[x].answers[2];
    document.getElementById("option4").innerHTML = myObj[x].answers[3];
    
});
}

function score(cname){
	  var name = cname + "=";
	  var decodedCookie = decodeURIComponent(document.cookie);
	  var ca = decodedCookie.split(';');
	  for(var i = 0; i < ca.length; i++) {
	    var c = ca[i];
	    while (c.charAt(0) == ' ') {
	      c = c.substring(1);
	    }
	    if (c.indexOf(name) == 0) {
	    	b=c.substring(name.length, c.length);
	    	var numb=0;
	    	for(i=0; i<b.length;i+=2){
	    		numb+=parseInt(b[i]);
	    	}
			alert('score:'+numb);
	      return c.substring(name.length, c.length);
	    }
	  }alert("not found");
	  return "";
	  
	  
}

xmlhttp.open("GET", "questions.json", true);
xmlhttp.send();