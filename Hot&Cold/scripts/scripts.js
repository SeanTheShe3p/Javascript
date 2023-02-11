let answer;
var userGuess;
var difference;

function setup(){
    answer = Math.ceil(Math.random() *1000)
    alert(answer)    
}

document.getElementById("submit").addEventListener("click", function(event){
    userGuess = document.getElementById("userGuess").value
    document.getElementById("userGuess").value = ""
    difference = Math.abs(userGuess-answer)
    if(userGuess != answer && difference > 500){
        document.getElementById("hint").innerHTML = "cold"
    }else if(userGuess != answer && difference > 250 && difference <= 500){
        document.getElementById("hint").innerHTML = "cool"
    }else if(userGuess != answer && difference > 100 && difference <= 250){
        document.getElementById("hint").innerHTML = "warm"
    }else if(userGuess != answer && difference > 50 && difference <= 100){
        document.getElementById("hint").innerHTML = "warmer"
    }else if(userGuess != answer && difference > 10 && difference <= 50){
        document.getElementById("hint").innerHTML = "hot"
    }else if(userGuess != answer && difference >= 1 && difference <= 10){
        document.getElementById("hint").innerHTML = "very hot"
    }else if(userGuess == answer){
        document.getElementById("hint").innerHTML = "WINNER!";
        document.getElementById("answer").innerHTML = answer.toString();
    }else{
        alert("The data was invalid")
    }});


/*
document.getElementById("submit").addEventListener("click", function(event){
    userGuess = document.getElementById("userGuess").value
    document.getElementById("userGuess").value = ""
    difference = Math.abs(userGuess-answer)
    switch(answer != userGuess){
        case userGuess != answer && difference > 500:
            document.getElementById("hint").innerHTML = "cold";
            break;
        case userGuess != answer && difference > 250 && difference <= 500:
            document.getElementById("hint").innerHTML = "cool";
            break;
        case userGuess != answer && difference > 100 && difference <= 250:
            document.getElementById("hint").innerHTML = "warm";
            break;
        case userGuess != answer && difference > 50 && difference <= 100:
            document.getElementById("hint").innerHTML = "warmer";
            break;
        case userGuess != answer && difference > 10 && difference <= 50:
            document.getElementById("hint").innerHTML = "hot";
            break;
        case userGuess != answer && difference > 1 && difference <= 10:
            document.getElementById("hint").innerHTML = "very hot";
            break;
        case userGuess == answer:
            document.getElementById("hint").innerHTML = "WINNER!";
            document.getElementById("answer").innerHTML = answer.toString();
    }
});
document.getElementById("submit").addEventListener("click", function(event){
    userGuess = document.getElementById("userGuess").value
    document.getElementById("userGuess").value = ""
    if(userGuess != answer && difference< 100 && userGuess < answer){
        document.getElementById("hint").innerHTML = "The number is more";
    }else if(userGuess != answer && difference>= 100 && difference< 250 && userGuess < answer){
        document.getElementById("hint").innerHTML = "The number is much more";
    }else if(userGuess != answer && difference>= 250 && userGuess < answer){
        document.getElementById("hint").innerHTML = "The number is much, much more";
    }else if(userGuess != answer && difference< 100 && userGuess > answer){
        document.getElementById("hint").innerHTML = "The number is less";
    }else if(userGuess != answer && difference>= 100 && difference< 250 && userGuess > answer){
        document.getElementById("hint").innerHTML = "The number is much less";
    }else if(userGuess != answer && difference>= 250 && userGuess > answer){
        document.getElementById("hint").innerHTML = "The number is much, much less";
    }else if(userGuess == answer){
        document.getElementById("hint").innerHTML = "WINNER!";
        document.getElementById("answer").innerHTML = answer.toString();
    }else{
        alert("The data was invalid")
    }
});

document.getElementById("submit").addEventListener("click", function(event){
    userGuess = document.getElementById("userGuess").value
    document.getElementById("userGuess").value = ""
    switch(userGuess !== answer){
        case userGuess != answer && userGuess > answer:
        document.getElementById("hint").innerHTML = "The number is more";
        break;
        case userGuess != answer && userGuess < answer:
            document.getElementById("hint").innerHTML = "The number is less";
        break;
        case userGuess == answer:
        document.getElementById("hint").innerHTML = "WINNER!";
        document.getElementById("answer").innerHTML = answer.toString()
        break;
    }
}); */
