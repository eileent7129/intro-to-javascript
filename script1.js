
// Create a conditional statement that compares two numbers. You can 
// choose if those numbers will be equal, less than, greater than, 
// less than or equal to, or greater than or equal to each other. 
// Include an if, else if, and else statement. Create an alert 
// that gives your user feedback based on the number. Test your
//  statement with different numbers to make sure all alerts work.


let numOne = 5;
let numTwo = 10;

if (numOne == numTwo){
	alert("The numbers are equal.")
}
else if (numOne > numTwo){
	alert(numOne + " is greater than " + numTwo);
}

else {
	alert(numTwo + " is greater than " + numOne);
}
