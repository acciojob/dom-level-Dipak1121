//your JS code here. If required.
let elemet = document.getElementById("level");
let level = 0;
while(element.parentNode){
	level++;
	element = elemet.parentNode;
}
alert("The level of the element is: ${level}");