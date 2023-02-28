// for loop - https://www.w3schools.com/js/js_loop_for.asp
// Write 99 bottles of beer on the wall using a for loop
// hints - decrement at the end, create a variable, save the song lyrics from
// the loop to the variable. use <br> instead of \n with the inner html. 
var text =  "";
for(let i = 5; i > 0; i--){
    text +=  i + " bottles of beer on the wall, " + i + " bottles of beer,</br> take one down, pass it a round, " + (i-1) + " bottles of beer on the wall.</br>"
};
document.getElementById("beer").innerHTML = text; 



//for in: https://www.w3schools.com/js/js_loop_forin.asp
// create an array of months and use the for in
// command to print them to the for-in paragraph
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var forin = "";
for(month in months){
    forin += months[month] + " "
};
document.getElementById("for-in").innerHTML = forin;






// For of: https://www.w3schools.com/js/js_loop_forof.asp
// demonstrate the use of For Of to print letters from a string. 
// Create your own string variable of at least 5 letters
// print the results in the for-of paragraph

let stringLetters = "Sean Widdowson";
var nameLetters = "";
for (letter of stringLetters){
    nameLetters += letter.toUpperCase() + " " 
}
document.getElementById("for-of").innerHTML = nameLetters



// While loop: https://www.w3schools.com/js/js_loop_while.asp
// Create a while loop to print the numbers 1 to 50
// print the results in the while paragraph
var digit = 1;
var numLine= "";
while(digit<=50){
    numLine += digit + " ";
    digit++;
};
document.getElementById("while").innerHTML = numLine