var totalCost = 0
var bill = ""
var drinksItems = {[1]:0,[2]:0,[3]:0,[4]:0,[5]:0}
var dogsItems = {[1]:0,[2]:0,[3]:0,[4]:0,[5]:0}
var friesItems = {[1]:0,[2]:0,[3]:0,[4]:0,[5]:0}

let drink1 = 2.25
let drink2 = 2.25
let drink3 = 3.25
let drink4 = 4.25
let drink5 = 4.25

let dog1 = 4.25
let dog2 = 4.25
let dog3 = 4.25
let dog4 = 5.25
let dog5 = 5.75

let fries1 = 1.00
let fries2 = 2.00
let fries3 = 2.50
let fries4 = 3.00
let fries5 = 4.50

function addDrinks(){
    let drinksChoice = parseInt(document.getElementById("drinksSel").value);
    let drinksNum = parseInt(document.getElementById("drinksAmt").value);
    drinksItems[drinksChoice] += drinksNum
}
function addDogs(){
    let dogsChoice = parseInt(document.getElementById("dogsSel").value);
    let dogsNum = parseInt(document.getElementById("dogsAmt").value);
    dogsItems[dogsChoice] += dogsNum
}
function addFries(){
    let friesChoice = parseInt(document.getElementById("friesSel").value);
    let friesNum = parseInt(document.getElementById("friesAmt").value);
    friesItems[friesChoice] += friesNum
}
function totalItems(){
    if(drinksItems[1] != 0){
        bill += "- " + drink1 + " x " + drinksItems[1] + " vanilla\n"
        totalCost += (drink1 * drinksItems[1])
    }
    if(drinksItems[2] != 0){
        bill += "- " + drink2 + " x " + drinksItems[2] + " chocolate\n"
        totalCost += (drink2 * drinksItems[2])
    }
    if(drinksItems[3] != 0){
        bill += "- " + drink3 + " x " + drinksItems[3] + " swirl\n"
        totalCost += (drink3 * drinksItems[3])
    }
    if(drinksItems[4] != 0){
        bill += "- " + drink4 + " x " + drinksItems[4] + " strawberry\n"
        totalCost += (drink4 * drinksItems[4])
    }
    if(drinksItems[5] != 0){
        bill += "- " + drink5 + " x " + drinksItems[5] + " banana\n"
        totalCost += (drink5 * drinksItems[5])
    }

    if(dogsItems[1] != 0){
        bill += "- " + dog1 + " x " + dogsItems[1] + " plain\n"
        totalCost += (dog1 * dogsItems[1])
    }
    if(dogsItems[2] != 0){
        bill += "- " + dog2 + " x " + dogsItems[2] + " ketchup\n"
        totalCost += (dog2 * dogsItems[2])
    }
    if(dogsItems[3] != 0){
        bill += "- " + dog3 + " x " + dogsItems[3] + " ketchup mustard\n"
        totalCost += (dog3 * dogsItems[3])
    }
    if(dogsItems[4] != 0){
        bill += "- " + dog4 + " x " + dogsItems[4] + " chicago\n"
        totalCost += (dog4 * dogsItems[4])
    }
    if(dogsItems[5] != 0){
        bill += "- " + dog5 + " x " + dogsItems[5] + " cheese\n"
        totalCost += (dog5 * dogsItems[5])
    }

    if(friesItems[1] != 0){
        bill += "- " + fries1 + " x " + friesItems[1] + " kids\n"
        totalCost += (fries1 * friesItems[1])
    }
    if(friesItems[2] != 0){
        bill += "- " + fries2 + " x " + friesItems[2] + " small\n"
        totalCost += (fries2 * friesItems[2])
    }
    if(friesItems[3] != 0){
        bill += "- " + fries3 + " x " + friesItems[3] + " medium\n"
        totalCost += (fries3 * friesItems[3])
    }
    if(friesItems[4] != 0){
        bill += "- " + fries4 + " x " + friesItems[4] + " large\n"
        totalCost += (fries4 * friesItems[4])
    }
    if(friesItems[5] != 0){
        bill += "- " + fries5 + " x " + friesItems[5] + " X-large\n"
        totalCost += (fries5 * friesItems[5])
    }
    document.getElementById("totalCost").innerHTML = bill + "\n $" + totalCost

}