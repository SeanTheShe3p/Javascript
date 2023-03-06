/*
Iterables: https://www.w3schools.com/js/js_iterables.asp
Read the page
Demonstrate iteration of a list 
Create a list of movies, books, or games at least 5 items long and 
display them in the list paragraph
*/
const books = ["The DaVinci Code,", "Angels and Demons,", "The Lost Symbol,","Inferno,", "Origin"];
let text = "";
for (const x of books){text += x + " "};
document.getElementById("list").innerHTML = text;
/*
JS Sets

https://www.w3schools.com/js/js_sets.asp

Create a set with at least 5 song titles in it
display the contents of the set in the set1 paragraph (use iteration)

*/
const songs = new Set(["Sometimes Things Get, Whatever","Faxing Berlin","Ghosts 'n' Stuff","Hi Friend!","Lack of a Better Name"]);

let trackList1 = "";
songs.forEach (function(value) {trackList1 += value + "<br>";})
//for(const x in songs){trackList += x};
document.getElementById("set1").innerHTML = trackList1;
// add two more songs to the set then display in the set2 paragraph
let trackList2 = "";
songs.add("Sofi Needs a Ladder");
songs.add("Professional Griefers");
songs.forEach (function(value) {trackList2 += value + "<br>";})
//for(const x in songs){trackList += x};
document.getElementById("set2").innerHTML = trackList2;



/* 
Maps
https://www.w3schools.com/js/js_maps.asp

Maps are like dictionaries in python
Create a map with five names and emails in it.
Display the contents of the map in map1 use the forEach() method (bottom of
    the reference page)
*/
const contacts = new Map([["Sean","seanwiddowson95@gmail.com"],["Mom","kass185@hotmail.com"],["Dad","lakeshorebuilders@gmail.com"],["Joel","jawdispatch@gmail.com"],["MCCAdvising","advising@mchenry.edu"]]);
let contactList = "";
contacts.forEach(function(value,key){contactList += value + " = " + key + "</br>"})
document.getElementById("map1").innerHTML = contactList;


// add two new names and emails and display in map2 use the forEach() method
let contactList2 = ""
contacts.set("Admissions","admissions@mchenry.edu");
contacts.set("Bookstore","bookstore@mchenry.edu");
contacts.forEach(function(value,key){contactList2 += value + " = " + key + "</br>"})
document.getElementById("map2").innerHTML = contactList2;
// get and display the email of one person, display in map3
document.getElementById("map3").innerHTML = contacts.get("Mom");
