function sum(){
	var sum = 0;
	for(var i = 0; i< arguments.length; i++){
		sum += arguments[i];
	}
	console.log(sum);
	return sum;
		
}

total1 = sum(1,4);
total2 = sum(5,3,1,2);
console.log(total1);
console.log(total2);
document.getElementById("sum1").innerHTML = total1;
document.getElementById("sum2").innerHTML = total2;