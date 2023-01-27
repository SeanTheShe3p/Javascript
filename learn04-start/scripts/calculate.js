function todayDate(){
    let todayDate = new Date();
    //alert(todayDate)
    document.getElementById("todayDate").innerHTML = todayDate
    document.getElementById("rm1length").value = "";
    document.getElementById("rm1width").value = "";
    document.getElementById("rm1height").value = "";
    document.getElementById("rm1cost").value = "";
}

function getRooms(){
    if(document.getElementById("rooms").value == 1){
    document.getElementById("room1").style.display = "block";
    document.getElementById("room2").style.display = "none";
    document.getElementById("room3").style.display = "none";
}
if(document.getElementById("rooms").value == 2){
    document.getElementById("room1").style.display = "block";
    document.getElementById("room2").style.display = "block";
    document.getElementById("room3").style.display = "none";
}
if(document.getElementById("rooms").value == 3){
    document.getElementById("room1").style.display = "block";
    document.getElementById("room2").style.display = "block";
    document.getElementById("room3").style.display = "block";
}}
function estimate(){
    let name = document.getElementById("name").value;
    var ttlCost = 0
    var room1Cost = 0
    var room2Cost = 0
    var room3Cost = 0

    if(document.getElementById("rooms").value == 3){

        let room1Length = parseFloat(document.getElementById("rm1length").value);
        let room1Width  = parseFloat(document.getElementById("rm1width").value);
        let room1Height = parseFloat(document.getElementById("rm1height").value);
        let ttlSqrFoot1 = 2 * room1Length * room1Width + 2 * room1Height * room1Length + 2 * room1Height * room1Width
        room1Cost = ttlSqrFoot1 * .65
        //document.getElementById("rm1cost").value = room1Cost

        let room2Length = parseFloat(document.getElementById("rm2length").value);
        let room2Width  = parseFloat(document.getElementById("rm2width").value);
        let room2Height = parseFloat(document.getElementById("rm2height").value);
        let ttlSqrFoot2 = 2 * room2Length * room2Width + 2 * room2Height * room2Length + 2 * room2Height * room2Width
        room2Cost = ttlSqrFoot2 * .65
        //document.getElementById("rm2Cost").value = room2Cost

        let room3Length = parseFloat(document.getElementById("rm3length").value);
        let room3Width  = parseFloat(document.getElementById("rm3width").value);
        let room3Height = parseFloat(document.getElementById("rm3height").value);
        let ttlSqrFoot3 = 2 * room3Length * room3Width + 2 * room3Height * room3Length + 2 * room3Height * room3Width
        room3Cost = ttlSqrFoot3 * .65
        ttlCost = room1Cost + room2Cost+ room3Cost
        //document.getElementById("rm3Cost").value = room3Cost

    }else if(document.getElementById("rooms").value == 2){

        let room1Length = parseFloat(document.getElementById("rm1length").value);
        let room1Width  = parseFloat(document.getElementById("rm1width").value);
        let room1Height = parseFloat(document.getElementById("rm1height").value);
        let ttlSqrFoot1 = 2 * room1Length * room1Width + 2 * room1Height * room1Length + 2 * room1Height * room1Width
        room1Cost = ttlSqrFoot1 * .65
        //document.getElementById("rm1cost").value = room1Cost

        let room2Length = parseFloat(document.getElementById("rm2length").value);
        let room2Width  = parseFloat(document.getElementById("rm2width").value);
        let room2Height = parseFloat(document.getElementById("rm2height").value);
        let ttlSqrFoot2 = 2 * room2Length * room2Width + 2 * room2Height * room2Length + 2 * room2Height * room2Width
        room2Cost = ttlSqrFoot2 * .65
        ttlCost = room1Cost + room2Cost
        //document.getElementById("rm2Cost").value = room2Cost

    }else if(document.getElementById("rooms").value == 1){

        let room1Length = parseFloat(document.getElementById("rm1length").value);
        let room1Width  = parseFloat(document.getElementById("rm1width").value);
        let room1Height = parseFloat(document.getElementById("rm1height").value);
        let ttlSqrFoot1 = 2 * room1Length * room1Width + 2 * room1Height * room1Length + 2 * room1Height * room1Width
        room1Cost = ttlSqrFoot1 * .65
        ttlCost = room1Cost
        //document.getElementById("rm1cost").value = room1Cost

    }else{
        ttlCost = 0
    }
    document.getElementById("estimate").innerHTML = "The estimate for " + name + ", is $" + ttlCost
/*
    let name = document.getElementById("name").value;

    let roomLength = parseFloat(document.getElementById("rm1length").value);
    let roomWidth  = parseFloat(document.getElementById("rm1width").value);
    let roomHeight = parseFloat(document.getElementById("rm1height").value);
    let ttlSqrFoot = 2 * roomLength * roomWidth + 2 * roomHeight * roomLength + 2 * roomHeight * roomWidth
    let roomCost = ttlSqrFoot * .65
    document.getElementById("rm1cost").value = roomCost;
    document.getElementById("estimate").innerHTML = "The estimate for " + name + ", is $" + roomCost
    */
}
