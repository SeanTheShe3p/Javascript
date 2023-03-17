
const cost = new Map([
    ["hamburger", 4],

    ["cheese", .5],
    ["ketchup", 0],
    ["mustard", 0],
    ["deluxe", 1.75],

    ["hotdog", 2],

    ["ketchup", 0],
    ["mustard", 0],
    ["relish", 0],
    ["cheese", 1.5],

    ["smallfries", 1.5],
    ["mediumfries", 2.5],
    ["largefries", 3.5],
    ["xlargefries", 4.5],

    ["soda", 3.5],
    ["water", 1],

    ["icecream", 3],
    ["sprinkles", 0],
    ["fudge", .5],
    ["nuts", .25]

])

function setup(){
    answer = Math.ceil(Math.random() *1000)
    alert(answer)    
}

const order = new Array()


document.getElementById("addHamburgerButton").addEventListener("click", function(event){
    let cheese = document.getElementById("hamburgerCheese")
    let ketchup = document.getElementById("hamburgerKetchup")
    let mustard = document.getElementById("hamburgerMustard")
    let deluxe = document.getElementById("hamburgerDeluxe")

    order.push("The order was added")
    console.log("The order should add")
})


document.getElementById("displayResults").innerHTML = order.toString()






// var count = 0;
// let item1 = document.getElementById("additem1")
// item1.addEventListener("click", function(event){
//     count++;
//     console.log(count)
// })
// function addItemClick1(){
//     let results = 0;
//     results++;
//     updateDisplay(results);
// };

// //let reupdate = setInterval(updateDisplay, 200)
// function updateDisplay(results){
//     //document.getElementById("displayResults").innerHTML = results;
//     console.log(results);
// }