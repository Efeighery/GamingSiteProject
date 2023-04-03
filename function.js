// *Author: Alexis Pechon
// *Student Number: x19358953
// *Student Email: x19358953@student.ncirl.ie
// *File: function.js
// *Date: 28/02/2023

//The following JavaScript file controls the behaviour of the website.
//The JS file is mostly used in the login.html file where it asks the user for their name.

//alert("Hello World!");

let userName = "";
let popup = prompt("Please enter your name", userName);


if (popup != "") {
    document.getElementById("greetings").innerHTML =
    "Welcome back " + popup + "! How are you today?";
}
else{
    document.getElementById("greetings").innerHTML =
    "Welcome back User!" + " How are you today?";
}
