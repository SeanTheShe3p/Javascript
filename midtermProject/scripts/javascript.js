// This is the list of items and there costs for sale


const menucost = new Map([
    ["hamburger", 4],

    ["hamburgercheese", .5],
    ["ketchup", 0],
    ["mustard", 0],
    ["deluxe", 1.75],

    ["hotdog", 2],

    ["relish", 0],
    ["hotdogcheese", 1],
    ["hotdogchili", 1],
    ["hotdogeverything", .5],

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
// the arrays and maps I will be using to store items and their costs

const order = new Array();
const costs = new Array();
const special = new Array();

const condiments = new Map([
    ["ketchup", 0],
    ["mustard", 0],
    ["relish", 0]
]);

// junk i decided to do differently
// let count = 0.0;
// let temp = 0.0;



// the hamburger event listener and the "if" statements for options
document.getElementById("addHamburgerButton").addEventListener("click", function(event){
    let cheese = document.getElementById("hamburgerCheese");
    let deluxe = document.getElementById("hamburgerDeluxe");

    if(!cheese.checked&&!deluxe.checked){
        costs.push(menucost.get("hamburger"));
        order.push("Plain hamburger");
    };
    if(cheese.checked&&!deluxe.checked){
        costs.push(menucost.get("hamburger")+ menucost.get("hamburgercheese"));
        order.push("Cheeseburger");
        cheese.checked = false;
    };
    if(cheese.checked&&deluxe.checked){
        costs.push(menucost.get("hamburger")+ menucost.get("hamburgercheese") + menucost.get("deluxe"));
        order.push("Cheeseburger Everything");
        cheese.checked = false;
        deluxe.checked = false;
    };

    if(!cheese.checked&&deluxe.checked){
        costs.push(menucost.get("hamburger") + menucost.get("deluxe"));
        order.push("Hamburger Everything");
        deluxe.checked = false;
    };

    // logs
    console.log(order.toString());
    console.log(costs.toString());

    // my attempt at making a live counter

    // let length = costs.length;
    // for(let i = 0; i<length; i++){
    //     temp += costs[i]
    // }
    // console.log(temp.toString())
});

// the hotdog event listener and the "if" statements for options
document.getElementById("addHotDogButton").addEventListener("click",function(event){
    let cheese = document.getElementById("hotDogCheese");
    let chili = document.getElementById("hotDogChili");
    let everything = document.getElementById("hotDogEverything");

    if(!cheese.checked&&!chili.checked&&!everything.checked){
        costs.push(menucost.get("hotdog"));
        order.push("Plain Hotdog");
    };

    if(cheese.checked&&!chili.checked&&!everything.checked){
        costs.push(menucost.get("hotdog") + menucost.get("hotdogcheese"));
        order.push("Cheesedog");
        cheese.checked = false;
    };
    if(cheese.checked&&chili.checked&&!everything.checked){
        costs.push(menucost.get("hotdog") + menucost.get("hotdogcheese") + menucost.get("hotdogchili"));
        order.push("Chili-Cheesedog");
        cheese.checked = false;
        chili.checked = false;
    };
    if(cheese.checked&&!chili.checked&&everything.checked){
        costs.push(menucost.get("hotdog") + menucost.get("hotdogcheese") + menucost.get("hotdogeverything"));
        order.push("Cheesedog Supreme");
        cheese.checked = false;
        everything.checked = false;
    };
    if(cheese.checked&&chili.checked&&everything.checked){
        costs.push(menucost.get("hotdog") + menucost.get("hotdogcheese") + menucost.get("hotdogchili") + menucost.get("hotdogeverything"));
        order.push("Chili-Cheesedog Supreme");
        cheese.checked = false;
        chili.checked = false;
        everything.checked = false;
    };


    if(!cheese.checked&&chili.checked&&!everything.checked){
        costs.push(menucost.get("hotdog") + menucost.get("hotdogchili"));
        order.push("Chilidog");
        chili.checked = false;
    };
    if(!cheese.checked&&chili.checked&&everything.checked){
        costs.push(menucost.get("hotdog") + menucost.get("hotdogchili") + menucost.get("hotdogeverything"));
        order.push("Chilidog Everything");
        chili.checked = false;
        everything.checked = false;
    };


    if(!cheese.checked&&!chili.checked&&everything.checked){
        costs.push(menucost.get("hotdog") + menucost.get("hotdogeverything"));
        order.push("Hotdog Everything");
        everything.checked = false;
    };
    

    // logs
    console.log(order.toString());
    console.log(costs.toString());
});



// the fries event listener and the "if" statements for options
document.getElementById("addFriesButton").addEventListener("click", function(event){
    let small = document.getElementById("smallFries");
    let medium = document.getElementById("medFries");
    let large = document.getElementById("largeFries");
    let xlarge = document.getElementById("xlargeFries");

    if (small.checked){
        costs.push(menucost.get("smallfries"));
        order.push("Small Fries");
        small.checked = false;
    };
    if (medium.checked){
        costs.push(menucost.get("mediumfries"));
        order.push("Medium Fries");
        medium.checked = false;
    };
    if (large.checked){
        costs.push(menucost.get("largefries"));
        order.push("Large Fries");
        large.checked = false;
    };
    if (xlarge.checked){
        costs.push(menucost.get("xlargefries"));
        order.push("X-Large Fries");
        xlarge.checked = false;
    };


    //logs
    console.log(order.toString());
    console.log(costs.toString());
});

// the drink event listener
document.getElementById("addDrinkButton").addEventListener("click", function(event){
    let cola = document.getElementById("colaDrink");
    let diet = document.getElementById("dietDrink");
    let lemonlime = document.getElementById("lemonLimeDrink");
    let water = document.getElementById("waterDrink");

    if (cola.checked){
        costs.push(menucost.get("soda"));
        order.push("Cola");
        cola.checked = false;
    };
    if (diet.checked){
        costs.push(menucost.get("soda"));
        order.push("Diet");
        diet.checked = false;
    };
    if (lemonlime.checked){
        costs.push(menucost.get("soda"));
        order.push("Lemon Lime");
        lemonlime.checked = false;
    };
    if (water.checked){
        costs.push(menucost.get("water"));
        order.push("Water");
        water.checked = false;
    };



    // logs
    console.log(order.toString());
    console.log(costs.toString());
});

// the Ice Cream event listener and the "if" statements for options
document.getElementById("addIceCreamButton").addEventListener("click", function(event){
    let chocolate = document.getElementById("chocolateIceCream");
    let vanilla = document.getElementById("vanillaIceCream");
    let swirl = document.getElementById("swirlIceCream");

    let sprinkles = document.getElementById("sprinklesIceCream");
    let fudge = document.getElementById("fudgeIceCream");
    let nuts = document.getElementById("nutsIceCream");

    if(chocolate.checked){
        if(!sprinkles.checked&&!fudge.checked&&!nuts.checked){
            costs.push(menucost.get("icecream"));
            order.push("Chocolate Ice Cream");
            chocolate.checked = false;
        };
        if(sprinkles.checked&&!fudge.checked&&!nuts.checked){
            costs.push(menucost.get("icecream") + menucost.get("sprinkles"));
            order.push("Chocolate Ice Cream w/ Sprinkles");
            sprinkles.checked = false;
            chocolate.checked = false;
        };
        if(sprinkles.checked&&fudge.checked&&!nuts.checked){
            costs.push(menucost.get("icecream") + menucost.get("sprinkles") + menucost.get("fudge"));
            order.push("Chocolate Ice Cream w/ Sprinkles and Fudge");
            sprinkles.checked = false;
            fudge.checked = false;
            chocolate.checked = false;
        };
        if(sprinkles.checked&&!fudge.checked&&nuts.checked){
            costs.push(menucost.get("icecream") + menucost.get("sprinkles") + menucost.get("nuts"));
            order.push("Chocolate Ice Cream w/ Sprinkles and Nuts");
            sprinkles.checked = false;
            nuts.checked = false;
            chocolate.checked = false;
        };
        if(sprinkles.checked&&fudge.checked&&nuts.checked){
            costs.push(menucost.get("icecream") + menucost.get("sprinkles") + menucost.get("fudge") + menucost.get("nuts"));
            order.push("Chocolate Ice Cream w/ Sprinkles, Fudge and Nuts");
            sprinkles.checked = false;
            fudge.checked = false;
            nuts.checked = false;
            chocolate.checked = false;
        };
        if(sprinkles.checked&&fudge.checked&&!nuts.checked){
            costs.push(menucost.get("icecream") + menucost.get("fudge"));
            order.push("Chocolate Ice Cream w/ Fudge");
            fudge.checked = false;
            chocolate.checked = false;
        };
        if(!sprinkles.checked&&fudge.checked&&nuts.checked){
            costs.push(menucost.get("icecream") + menucost.get("fudge") + menucost.get("nuts"));
            order.push("Chocolate Ice Cream w/ Fudge and Nuts");
            fudge.checked = false;
            nuts.checked = false;
            chocolate.checked = false;
        };
        if(!sprinkles.checked&&!fudge.checked&&nuts.checked){
            costs.push(menucost.get("icecream") + menucost.get("nuts"));
            order.push("Chocolate Ice Cream w/ Nuts");
            nuts.checked = false;
            chocolate.checked = false;
        };
    };


    if(vanilla.checked){
        if(!sprinkles.checked&&!fudge.checked&&!nuts.checked){
            costs.push(menucost.get("icecream"));
            order.push("Vanilla Ice Cream");
            vanilla.checked = false;
        };
        if(sprinkles.checked&&!fudge.checked&&!nuts.checked){
            costs.push(menucost.get("icecream") + menucost.get("sprinkles"));
            order.push("Vanilla Ice Cream w/ Sprinkles");
            sprinkles.checked = false;
            vanilla.checked = false;
        };
        if(sprinkles.checked&&fudge.checked&&!nuts.checked){
            costs.push(menucost.get("icecream") + menucost.get("sprinkles") + menucost.get("fudge"));
            order.push("Vanilla Ice Cream w/ Sprinkles and Fudge");
            sprinkles.checked = false;
            fudge.checked = false;
            vanilla.checked = false;
        };
        if(sprinkles.checked&&!fudge.checked&&nuts.checked){
            costs.push(menucost.get("icecream") + menucost.get("sprinkles") + menucost.get("nuts"));
            order.push("Vanilla Ice Cream w/ Sprinkles and Nuts");
            sprinkles.checked = false;
            nuts.checked = false;
            vanilla.checked = false;
        };
        if(sprinkles.checked&&fudge.checked&&nuts.checked){
            costs.push(menucost.get("icecream") + menucost.get("sprinkles") + menucost.get("fudge") + menucost.get("nuts"))
            order.push("Vanilla Ice Cream w/ Sprinkles, Fudge and Nuts");
            sprinkles.checked = false;
            fudge.checked = false;
            nuts.checked = false;
            vanilla.checked = false;
        };


        if(sprinkles.checked&&fudge.checked&&!nuts.checked){
            costs.push(menucost.get("icecream") + menucost.get("fudge"));
            order.push("Vanilla Ice Cream w/ Fudge");
            fudge.checked = false;
            vanilla.checked = false;
        };
        if(!sprinkles.checked&&fudge.checked&&nuts.checked){
            costs.push(menucost.get("icecream") + menucost.get("fudge") + menucost.get("nuts"));
            order.push("Vanilla Ice Cream w/ Fudge and Nuts");
            fudge.checked = false;
            nuts.checked = false;
            vanilla.checked = false;
        }


        if(!sprinkles.checked&&!fudge.checked&&nuts.checked){
            costs.push(menucost.get("icecream") + menucost.get("nuts"));
            order.push("Vanilla Ice Cream w/ Nuts");
            nuts.checked = false;
            vanilla.checked = false;
        }
    };


    if(swirl.checked){
        if(!sprinkles.checked&&!fudge.checked&&!nuts.checked){
            costs.push(menucost.get("icecream"));
            order.push("Swirl Ice Cream");
            swirl.checked = false;
        };
        if(sprinkles.checked&&!fudge.checked&&!nuts.checked){
            costs.push(menucost.get("icecream") + menucost.get("sprinkles"));
            order.push("Swirl Ice Cream w/ Sprinkles")
            sprinkles.checked = false;
            swirl.checked = false;
        };
        if(sprinkles.checked&&fudge.checked&&!nuts.checked){
            costs.push(menucost.get("icecream") + menucost.get("sprinkles") + menucost.get("fudge"));
            order.push("Swirl Ice Cream w/ Sprinkles and Fudge");
            sprinkles.checked = false;
            fudge.checked = false;
            swirl.checked = false;
        };
        if(sprinkles.checked&&!fudge.checked&&nuts.checked){
            costs.push(menucost.get("icecream") + menucost.get("sprinkles") + menucost.get("nuts"));
            order.push("Swirl Ice Cream w/ Sprinkles and Nuts");
            sprinkles.checked = false;
            nuts.checked = false;
            swirl.checked = false;
        }
        if(sprinkles.checked&&fudge.checked&&nuts.checked){
            costs.push(menucost.get("icecream") + menucost.get("sprinkles") + menucost.get("fudge") + menucost.get("nuts"));
            order.push("Swirl Ice Cream w/ Sprinkles, Fudge and Nuts")
            sprinkles.checked = false;
            fudge.checked = false;
            nuts.checked = false;
            swirl.checked = false;
        };
        if(sprinkles.checked&&fudge.checked&&!nuts.checked){
            costs.push(menucost.get("icecream") + menucost.get("fudge"));
            order.push("Swirl Ice Cream w/ Fudge");
            fudge.checked = false;
            swirl.checked = false;
        };
        if(!sprinkles.checked&&fudge.checked&&nuts.checked){
            costs.push(menucost.get("icecream") + menucost.get("fudge") + menucost.get("nuts"));
            order.push("Swirl Ice Cream w/ Fudge and Nuts");
            fudge.checked = false;
            nuts.checked = false;
            swirl.checked = false;
        };
        if(!sprinkles.checked&&!fudge.checked&&nuts.checked){
            costs.push(menucost.get("icecream") + menucost.get("nuts"));
            order.push("Swirl Ice Cream w/ Nuts");
            nuts.checked = false;
            swirl.checked = false;
        };
    };

    //that was a big block. Thank god for copy/paste!
    //logs
    console.log(order.toString());
    console.log(costs.toString());
});




// condiment counters

document.getElementById("addKetchupButton").addEventListener("click", function(event){
    let prev = condiments.get("ketchup");
    prev++;
    condiments.set("ketchup", prev);

    console.log("Ketchup x " + condiments.get("ketchup").toString());
});
document.getElementById("addMustardButton").addEventListener("click", function(event){
    let prev = condiments.get("mustard");
    prev++;
    condiments.set("mustard", prev);

    console.log("Mustard x " + condiments.get("mustard").toString());
});
document.getElementById("addRelishButton").addEventListener("click", function(event){
    let prev = condiments.get("relish");
    prev++;
    condiments.set("relish", prev);

    console.log("Relish x " + condiments.get("relish").toString());
});


// special instructions
document.getElementById("addSpecialInstructions").addEventListener("click", function(event){
    let inputbox = document.getElementById("specialOrder").value;
    console.log(inputbox);
    special.push(inputbox);
    document.getElementById("specialOrder").value = "";
});

// decided a total button was easier
document.getElementById("totalButton").addEventListener("click", function(event){
    
    let length = order.length;
    let total = 0;
    let formated_total = [];


    // i couldn't figure out the formating... I tried a few options
    for(let i = 0; i < length; i++){

        let temp_num = 0;
        temp_num = costs[i].toFixed(2);
        total += parseFloat(temp_num);
        temp_num.toLocaleString("en-US");

        formated_total += order[i].toString() + ": $";
        formated_total += costs[i] + "</br>";
        
        console.log(order[i].toString());
        console.log(costs[i].toString());

        console.log("TOTAL = " + total);
    };

    formated_total += "</br>" + condiments.get("ketchup") + " x Ketchup";
    formated_total += "</br>" + condiments.get("mustard") + " x Mustard";
    formated_total += "</br>" + condiments.get("relish") + " x Relish";

    formated_total += "</br>::" + special.toString();

    document.getElementById("displayResults").innerHTML = formated_total.toString();
    document.getElementById("totalCost").innerHTML = "$" + total.toString();
});


document.getElementById("displayResults").innerHTML = order.toString();






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