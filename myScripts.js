//This document holds the JavaScript used in the following webpages:
//More info: https://github.com/tarrantja/Project-1

//These functions are used to highligh certain elements on the index.html page

function hightlightList() { //Highlight unordered lists
    var x = document.getElementsByTagName("ul");
    for (i = 0; i < x.length; i++) {
        x[i].style.border = "5px solid yellow";
    }
}

function highlightHeader1() { //Highlight heading 1
    var x = document.getElementsByTagName("h1");
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "yellow";
    }
}
function highlightHeader2() { //Highlight heading 2
    var x = document.getElementsByTagName("h2");
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "yellow";
    }
}
function highlightPara() { //Highlight paragraphs
    var x = document.getElementsByTagName("p");
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "yellow";
    }
}
function highlightTable() { //Highlight tables
    var x = document.getElementsByTagName("table");
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "yellow";
    }
}
function highlightNone() { //Revert back to normal
    var x = document.querySelectorAll("h1, h2, p, table");
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "white";
    }
    var x = document.getElementsByTagName("ul");
    for (i = 0; i < x.length; i++) {
        x[i].style.border = "none";
    }
}

//Functions to change the page CSS.
//Used on css_info.html when the user clicks different style buttons. 
function changeToStyle1() {
    document.getElementById("style").href = "mystylesheet1.css";
    document.getElementById("bootStrap").href = "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css";
}

function changeToStyle2() {
    document.getElementById("style").href = "mystylesheet2.css";
    document.getElementById("bootStrap").href = "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css";
}

function noCSS() {
    document.getElementById("style").href = "";
    document.getElementById("bootStrap").href = "";
}


//This code segment is an event listener, waiting for the user to hit enter in form field "textInput"
//Purpose is to initiate changeHeading1() function, without needing to click buttons
let el = document.getElementById("textInput");
if (el != null) {
    el.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            changeHeading1();
        }
    });
}


//A function to demonstrate how JavaScript can update the web page by accessing the DOM.
//Takes user input from "textInput" and makes it the new heading. 
function changeHeading1() {
    let h1, newHeading;
    newHeading = document.getElementById("textInput").value;
    if (newHeading.trim() == "") {
        alert("Please enter a heading");
    } else {
        h1 = document.getElementsByTagName("h1")[0];
        h1.innerHTML = newHeading;
        h1.scrollIntoView();
    }
}

//Resets the heading back to the original
function reset() {
    h1 = document.getElementsByTagName("h1")[0];
    h1.innerHTML = "JavaScript (JS)";
    h1.scrollIntoView();
}

//The purpose of this script is to demonstrate how JavaScript can request external information (through AJAX) and dynamically display the content on the webpage. 
//It requests a fact (either 'math' or 'trivia') about a number from numbersapi.com.

let elNumber = document.getElementById("numberForm");
if (elNumber != null) {
    elNumber.addEventListener("submit", function () { //Wait for user to submit form
        event.preventDefault();
        let type, number, url, factDiv;
        factDiv = document.getElementById("fact"); //The section of the webpage where we will display the fact
        factDiv.innerHTML = "<p class='fact'>Please wait...</p>";
        type = document.getElementById("type").value;
        number = document.getElementById("number").value;
        if (number == "") {
            number = "random";
        }
        url = "http://www.numbersapi.com/" + number + "/" + type + "?json"; //Creates a custom url with number and fact type
        fetch(url) // Makes the request
            .then((resp) => resp.json()) //Read as JSON formatted data
            .then(function (data) {
                console.log(data);
                let text = data.text;
                factDiv.innerHTML = "<p class='fact'>" + text + "</p>"; //Display on webpage
            })
            .catch(function (error) { // Catch any error and display a useful message
                console.log(error);
                factDiv.innerHTML = "<p class='fact'>Sorry there was an error... please try again ¯\\_(ツ)_/¯ </p>";
            alert(url);
            });
    });
}
