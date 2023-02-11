function start() {
    // Math: https://www.w3schools.com/js/js_math.asp
    // Demonstrate the use of round, ceil, floor, trunc, sign
    // pow, min, and random and display to the appropriate paragraphs
    let x = 3.14
    document.getElementById("round").innerHTML = Math.round(x)
    document.getElementById("ceil").innerHTML = Math.ceil(x)
    document.getElementById("floor").innerHTML = Math.ceil(x)
    document.getElementById("trunc").innerHTML = Math.trunc(x)
    document.getElementById("sign").innerHTML = Math.sign(-3)
    document.getElementById("pow").innerHTML = Math.pow(3, 4)
    document.getElementById("min").innerHTML = Math.min(3,4,5,2,1)
    document.getElementById("random").innerHTML = Math.random()

    // Random: https://www.w3schools.com/js/js_random.asp
    // create a random integer between 1 and 100 and display in the random2 paragraph
    document.getElementById("random2").innerHTML = Math.ceil(Math.random() * 100)

    // Booleans: https://www.w3schools.com/js/js_booleans.asp
    // read the reference


    // Comparisons: https://www.w3schools.com/js/js_comparisons.asp
    // demonstrate and explain the difference between == and === in the
    // comparisons paragraph
    answerA = (1=="1")
    answerB = (1==="1")
    document.getElementById("comparisons").innerHTML = answerA + " , " + answerB


    // Conditions: https://www.w3schools.com/js/js_if_else.asp
    // Read the conditions page
}