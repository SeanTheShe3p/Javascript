// declare and initialize array
let game = ["CAT", "DOG", "FISH", "HAMSTER", "LIZARD", "BIRD", "ROCK", "CHIA", "TAMAGOTCHI", "SNAKE"];
let choice = Math.floor(Math.random() * 10);
let answer = game[choice];
let myLength = answer.length;
let display = [myLength];
let win = myLength;
let letters = answer.split('');
let attemptsLeft = 6;
let output = '';
let userLetter = '';
var found;
var imageNumber = 0
const images = ["images/02.png","images/03.png","images/04.png","images/05.png","images/06.png","images/07.png"]
const userChoices = []

// game setup works fine --steffen

function setup() {
    alert(answer);
    for (let i = 0; i < answer.length; i++) {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("word").innerHTML = output;
}

// Issue below here
// noticed if we uncomment below it reveals all letter for the hangman

document.getElementById("submit").addEventListener("click", function(event){
    found = '';
    event.preventDefault();
    output = '';
    userLetter = document.getElementById("guess").value;
    document.getElementById("guess").value = ''; //would this reset value to null
    for (let c = 0; c < answer.length; c++) {
        //alert(letters[c]);
        if (userLetter.toUpperCase() == letters[c]) {
            display[c] = userLetter.toUpperCase();
            win--;
            found=true;
        }
        // win only with one letter
        output = output + display[c] + ' ';
    }
    if(found == false){
        attemptsLeft--;
        document.getElementById("hangman").src = images[imageNumber]
        imageNumber++;
        userChoices.push(userLetter);

    }
    document.getElementById("word").innerHTML = output;
    output = '';
    //attemptsLeft--;
    document.getElementById("guessed").innerHTML= userChoices;
    if (win < 1) {
        document.getElementById("guesses").innerHTML = 'YOU WIN!!!';
    } else if (attemptsLeft < 1) {
        document.getElementById("guesses").innerHTML = 'YOU LOSE!!!';
    } else {
        document.getElementById("guesses").innerHTML = 'You have ' + attemptsLeft + ' guesses left';
    }
});


//scirpt connected fine somereason the button and the script are not registering.