// Dog objects
const dog1 = {
    heading: "Bucket Case",
    image: "images/black-dog.jpg",
    caption: "Just hanging out waiting for water",
    altTag: "Black dog in bucket."
};
const dog2 = {
    heading: "Retrieving sun",
    image: "images/gold-dog.jpg",
    caption: "Get me sum sun",
    altTag: "gold dog in field."
};
const dog3 = {
    heading: "Sum magic in that old stick ar..",
    image: "images/snow-dog.jpg",
    caption: "Stick!",
    altTag: "probably fake doggo."
};
const dog4 = {
    heading: "Beach Day",
    image: "images/white-dogs.jpg",
    caption: "at The beach",
    altTag: "Doggo/pupper."
};
function chooseDog(dog){
    if(dog == 1){
        loadDog(dog1, 1)
    } else if(dog == 2){
        loadDog(dog2, 2)
    }else if(dog == 3){
        loadDog(dog3, 3)
    }else if(dog == 4){
        loadDog(dog4, 4)
    }else{
        alert("There is a problem with the code")
    }
}
function loadDog(dog, number){
    // document.getElementById("card"+number).heading = dog[heading];
    // document.getElementById("card"+number).image = dog[image];
    // document.getElementById("card"+number).caption = dog[caption];
    // document.getElementById("card"+number).altTag = dog[altTag];
    // document.getElementById("card"+number).image.style.display = "block";
    document.getElementById("heading"+number).innerHTML = dog.heading;
    document.getElementById("img"+number).src = dog.image;
    document.getElementById("img"+number).innerHTML = dog.caption;
    document.getElementById("img"+number).setAttribute("alt",dog.altTag)
    document.getElementById("img" + number).style.display = "block";
    document.getElementById("button"+number).style.display = "none";
}