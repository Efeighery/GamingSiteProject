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