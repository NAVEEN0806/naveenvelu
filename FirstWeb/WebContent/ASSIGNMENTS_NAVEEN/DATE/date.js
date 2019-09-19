Date = class extends Date {
	  nextDate(){
		this.tom = new Date();
		this.tom.setDate(this.tom.getDate()+1);
		return (this.tom);
	}
}

var date = new Date();
console.log(date);
console.log(date.nextDate());
document.getElementById("today").innerHTML = date;
document.getElementById("tomo").innerHTML = date.nextDate();
