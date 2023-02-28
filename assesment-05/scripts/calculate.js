
var holiday1 = "";
var holiday2 = "";
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var text = "";

for(var month in months){
    text += "</br> " + months[month]
    let switchMont = parseInt(month)
    switch(switchMont+1){
        case 1:
            text+="</br>- 1st Z Day";
            text+="</br>- 22nd Answer Your Cats Questions Day";
            break;
        case 2:
            text+="</br>- 16th National Do A Grouch a Favor Day";
            text+="</br>- 28th National Public Sleeping Day";
            break;
        case 3:
            text+="</br>- 4th March Forth and Do Something Day";
            text+="</br>- 18th National Awkward Moments Day";
            break;
        case 4:
            text+="</br>- 4th tell a Lie Day";
            text+="</br>- 19th Bicycle Day";
            break;
        case 5:
            text+="</br>- 3rd National Two Different Colored Shoes Day";
            text+="</br>- 29th Put a Pillow on Your Fridge Day";
            break;
        case 6:
            text+="</br>- 14th National Pop Goes the Weasel Day";
            text+="</br>- 16th National Take Back the Lunch Break Day";
            break;
        case 7:
            text+="</br>- 2nd World UFO Day";
            text+="</br>- 14th Pandemonium Day";
            break;
        case 8:
            text+="</br>- 6th National Wiggle Your Toes Day";
            text+="</br>- 27th National Just Because Day";
            break;
        case 9:
            text+="</br>- 2nd Bison Ten Yell Day";
            text+="</br>- 19th International Talk Like a Pirate Day";
            break;
        case 10:
            text+="</br>- 6th National Mad Hatter Day";
            text+="</br>- 22ND CAPS LOCK DAY";
            break;
        case 11:
            text+="</br>- 20th National Absurdity Day";
            text+="</br>- 21st False Confession Day";
            break;
        case 12:
            text+="</br>- 8th Pretend To Be A Time Traveler Day";
            text+="</br>- 18th Answer The Telephone Like Buddy The Elf Day";
            break;
    
    }
    
}
document.getElementById("holiday").innerHTML = text