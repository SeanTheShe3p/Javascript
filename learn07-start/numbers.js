function start() {

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Sean Widdowson"
        /*
            read/watch the associated reference and complete the directions in the comments.

        */

    /* JS Numbers: https://www.w3schools.com/js/js_numbers.asp
        We will focus on the things with numbers that are significantly
        different than python. Please read the page linked to above before 
        completing the following:
    */

    /* Write a line of code demonstrating what will happen if 
       you try to add a number and a string. Print to the add paragraph to 
       display both the equation and the results. 
    */
    document.getElementById("add").innerHTML = 5 + "5"

    /*
        JS Number Methods: https://www.w3schools.com/js/js_number_methods.asp
    */

    // Demonstrate the use of toString() and print to the to-string paragraph
    document.getElementById("to-string").innerHTML = toString(5 + 3)

    // Demonstrate the use of toExponential() and print to the exponent paragraph
    let exp = 5450000000
    document.getElementById("exponent").innerHTML = exp.toExponential(3)

    // Demonstrate the use of toFixed() and print to the fixed paragraph
    let fix = 2.355
    document.getElementById("fixed").innerHTML = fix.toFixed(2)

    // Demonstrate the use of toPrecision() and print to the precision paragraph
    let pre = 55
    document.getElementById("precision").innerHTML = pre.toPrecision(3)

    // Demonstrate the use of parseFloat() and print to the float paragraph
    let flo = 24
    document.getElementById("float").innerHTML = parseFloat(flo)

    // Demonstrate the use of parseInt() and print to the int paragraph
    let inter = 4.6
    document.getElementById("int").innerHTML = parseInt(inter)


    // Watch Simple Comparisons: https://www.linkedin.com/learning/learning-the-javascript-language-2/simple-comparisons?autoplay=true&resume=false&u=69317474

    /* In the equals paragraph explain your understanding of the difference between using == and ===  (You will probably
    need to do an additional web search to really get it.)
    */
   document.getElementById("equals").innerHTML = " the double equals is a comparison tool and the triple equals" +
   " is a strict comparison tool, comparing data types and values."

    // Watch Arithmetic Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/arithmetic-operators?autoplay=true&resume=false&u=69317474
    // Watch Logical Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // In the logic paragraph describe the order of precedence for and / or operators
    document.getElementById("logic").innerHTML = " and  is an operator requiring all conditions to be met, or is when only some conditions must be met"


    // Watch Conditional If: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // Watch Conditionals Switch: https://www.linkedin.com/learning/learning-the-javascript-language-2/conditionals-switch?autoplay=true&resume=false&u=69317474


    // Write code to demonstrate the use of the switch statement and display results to switch paragraph
    let day;
    switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case  6:
        day = "Saturday";
    }
    document.getElementById("switch").innerHTML = "Today is " + day;

    // Watch Terse ifs: https://www.linkedin.com/learning/learning-the-javascript-language-2/terse-ifs?autoAdvance=true&autoSkip=true&autoplay=true&resume=false&u=69317474
    // Watch Ternary Operator:https://www.linkedin.com/learning/learning-the-javascript-language-2/ternary-operator?autoplay=true&resume=false&u=69317474
    // Write code to demonstrate the use of the ternary operator and print to the ternary paragraph
    let print;
    (day == "Tuesday") ? print = "today is tuesday": print = "today is not tuesday";
    document.getElementById("ternary").innerHTML = print

}