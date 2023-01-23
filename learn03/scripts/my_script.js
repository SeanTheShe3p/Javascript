// Global Variables
//  global variables are declared with var
//  local variables are declared wih let
//  
var name1 = "Sean";

const taxRate = .07; // This is a constant
// myName = "Sean David Suyeta Widdowson" - Allowed but frowned upon

function names() {

    //fix the errors
    var firstName = "Sean",
        lastName = "Widdowson";
    document.getElementById("name").innerHTML = name1;
    document.getElementById("full-name").innerHTML = firstName + " " + lastName;
    var firstName = "Mister";
    var name = "Bobo";
    document.getElementById("first").innerHTML = name;
    document.getElementById("nick-name").innerHTML = firstName;

}

function scope() {
    let name = "Bobo";
    let firstName = "Sean";
    let taxRate = .08
    //fix the errors
    document.getElementById("global").innerHTML = name;
    document.getElementById("local").innerHTML = firstName;
    document.getElementById("tax").innerHTML = taxRate;
    taxRate+=1
    document.getElementById("new-tax").innerHTML = taxRate;
}
//This function keeps returning an error,
//undeclared Jameson, however I cant figure out why.

function letMe() {
    // Fix the errors
    let dog1 = "Dakota";
    dog2 = "Jack";
    // dog2 = "Nessie";
    var dog3 = "Maya";
    var dog2;
    document.getElementById("dog1").innerHTML = dog1;
    document.getElementById("dog2").innerHTML = dog2;
    document.getElementById("dog3").innerHTML = dog3;
    var dog2 = Jameson;
    document.getElementById("dog1-2").innerHTML = dog2;
}

function constants() {
    // fix the errors
    const PI = 3.14;
    const dogs = ["Ollie", "Nessie", "Ory"];
    document.getElementById("doggos").innerHTML = dogs;
    dogs[0] = "Ollie Bear";
    document.getElementById("doggos").innerHTML = dogs;
    breed = ["Shepherd", "Collie", "Bouvier"];
    document.getElementById("pi").innerHTML = PI;
    document.getElementById("breeds").innerHTML = breed;
}

function myMath() {
    // create statements demonstrating the use of each operator
    var x= 2+1;
    document.getElementById("addition").innerHTML = "1 + 2 = "+ x;
    x = 2-1;
    document.getElementById("subtraction").innerHTML = "2 - 1 = "+ x;
    x = 2*4
    document.getElementById("multiplication").innerHTML = "2 * 4 = " + x;
    x = 8**2
    document.getElementById("exponent").innerHTML = "8^2 = " + x;
    x = 64/4
    document.getElementById("division").innerHTML = "64 / 4 = " + x;
    x = 16%3
    document.getElementById("modulus").innerHTML = "16 % 3 = " + x;
    x++
    document.getElementById("increment").innerHTML = "x ++ = " + x;
    x--
    document.getElementById("decrement").innerHTML = "x -- = "+ x;
}

function assignments() {
    // create statements demonstrating the use of each assignment type
    x = 10
    document.getElementById("equals").innerHTML = "x = 10  x = " + x;
    x+=6
    document.getElementById("plus-equals").innerHTML = "x += 6 x = " + x;
    x-=6
    document.getElementById("minus-equals").innerHTML = "x -= 6 = "+ x;
    x*=2
    document.getElementById("times-equals").innerHTML = "x *= 2 = " + x;
    x/=2
    document.getElementById("divide-equals").innerHTML = "x /= 2 = " + x;
    x%=3
    document.getElementById("modulus-equals").innerHTML = "x % 3 = " + x;
    
}
function dataTypes() {
    // create samples of each of the data types from the
    // index page and display them in the Data Types section
    const languages = ["Python", "HTML/CSS", "Javascript"];
    document.getElementById("array").innerHTML = languages;
    const classes = {prg105:"Python", Web105:"HTML/CSS", Prg147:"Javascript"};
    document.getElementById("object").innerHTML = classes.prg105;
}
