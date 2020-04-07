//DOM Example

function changeHeading1() {
    var h1, newHeading;
    newHeading = document.getElementById("textInput").value;
    if (newHeading.trim() == "") {
        alert("Please enter a heading");
    } else {
        h1 = document.getElementsByTagName("h1")[0];
        h1.innerHTML = newHeading;
        h1.scrollIntoView();
    }
}

//This code segment is an event listener, waiting for 

document.getElementById("textInput").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        changeHeading1();
    }
});

function reset() {
    h1 = document.getElementsByTagName("h1")[0];
    h1.innerHTML = "JavaScript (JS)";
    h1.scrollIntoView();
}

//AJAX Form Code API

document.getElementById("numberForm").addEventListener("submit", function() {
    event.preventDefault();
    let type, number, url, factDiv;
    factDiv = document.getElementById("fact");
    factDiv.innerHTML="<p class='fact'>Please wait...</p>";
    type=document.getElementById("type").value;
    number=document.getElementById("number").value;
    if (number=="") {
        number="random";
    }
    url="http://numbersapi.com/"+number+"/"+type+"?json";
    fetch(url)
    .then( (resp) => resp.json() )
    .then(function(data) {
        console.log(data);
        var text = data.text;
        factDiv.innerHTML="<p class='fact'>"+text+"</p>";
    })
    .catch( function(error) {
        console.log(error);
    });
});
