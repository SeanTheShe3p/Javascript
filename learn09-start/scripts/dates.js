/* JavaScript Dates: https://www.w3schools.com/js/js_dates.asp */

// Create a variable, assign it to a new date object
// display the variable in the basic paragraph
var date = new Date();
document.getElementById("basic").innerHTML = date;
// create a new date variable and load the information for today into it
// display the results in the today paragraph (Year, Month, Day)
var todayDate = new Date(2023,1,9)
document.getElementById("today").innerHTML = todayDate;
// Create a new date variable based on the dateString and store your birthday in it
// display the variable in the birthday paragraph
var myBirthday = new Date("May 29 1995");
document.getElementById("birthday").innerHTML = myBirthday;
// Convert your basic date to the ISO string format and display the result
// in the iso paragraph
date.toISOString();
document.getElementById("iso").innerHTML = date;// this is correct I think I don't know what is wrong.

//  Date Formats: https://www.w3schools.com/js/js_date_formats.asp
// Demonstrate 3 date formats of your choice to date1, date2, and date3 paragraphs
var date1 = new Date("2012-12-21")
var date2 = new Date("02/02/1955")
var date3 = new Date("Sep 27 1963")
document.getElementById("date1").innerHTML= date1
document.getElementById("date2").innerHTML= date2
document.getElementById("date3").innerHTML= date3


//  getDate() Methods: https://www.w3schools.com/js/js_date_methods.asp
// Demonstrate 4 get date methods of your choice to get1-get4 paragraphs
document.getElementById("get1").innerHTML= date.getFullYear();
document.getElementById("get2").innerHTML= date.getHours();
document.getElementById("get3").innerHTML= date.getMinutes();
document.getElementById("get4").innerHTML= date.getSeconds();



// set date methods: https://www.w3schools.com/js/js_date_methods_set.asp
// Demonstrate 4 set date methods of your choice to set1-set4 paragraphs
var setDate = new Date();
setDate.setFullYear(1970, 0, 1);
document.getElementById("set1").innerHTML = setDate
setDate.setHours(12);
document.getElementById("set2").innerHTML = setDate
setDate.setMinutes(7);
document.getElementById("set3").innerHTML = setDate
setDate.setSeconds(7);
document.getElementById("set4").innerHTML = setDate