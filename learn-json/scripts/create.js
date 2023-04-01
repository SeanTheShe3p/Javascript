function addme() {
    const displayInfo = {};

    displayInfo.fname = document.getElementById("fname").value.toString();
    displayInfo.lname = document.getElementById("lname").value.toString();
    displayInfo.email = document.getElementById("email").value.toString();
    displayInfo.phone = document.getElementById("phone").value.toString();

    document.getElementById("json-value").innerHTML = JSON.stringify(displayInfo);
};