/**
 * 
 */var num = 10,
    name = "Sachin",
    obj1 = {
      value: "first value"
    },
    obj2 = {
     value: "second value"
    },
    obj3 = obj2;
 
function modify(num, name, obj1, obj2) {
    num = num * 10; 
    name = "Dravid";
    obj1 = obj2;
    obj2.value = "new value";
}
 
modify(num, name, obj1, obj2);
 
console.log(num); 
console.log(name); 
console.log(obj1.value);
console.log(obj2.value);
console.log(obj3.value);

