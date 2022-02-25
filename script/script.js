console.log("limoen");

var skeletImg = document.querySelector(".skelet");
var alienImg = document.querySelector(".alien");
var demonImg = document.querySelector(".demon");

var venomImg = document.querySelector("#venom");
var clawImg = document.querySelector("#claw");
var teethImg = document.querySelector("#teeth");

var greenBut = document.querySelector(".green");
var blackBut = document.querySelector(".black");
var redBut = document.querySelector(".red");

var rateBut = document.querySelector(".rate");
var mainImg = document.querySelector("section>img");
var title = document.querySelector("h1");
var boodschap = ["Pretty scary right?", "Oh no", "Please don't attack others", "Dont bite!"];
var rating = 0;
var bodyFactor = 0;
var audioScary = new Audio("audio/monster.mp3");
var audioLame = new Audio("audio/lamesound.mp3")

skeletImg.addEventListener("click", function() {
    mainImg.src = "images/skelet.png";
    rating = rating + 5;
    bodyFactor = 1;
}, false)

alienImg.addEventListener("click", function() {
    mainImg.src = "images/alien.png";
    rating = rating + 10;
    bodyFactor = 2;
}, false)

demonImg.addEventListener("click", function() {
    mainImg.src = "images/demon.png";
    rating = rating + 15;
    bodyFactor = 3;
}, false)

venomImg.addEventListener("click", function() {
    if (bodyFactor == 1){
        mainImg.src = "images/effecten/skeletslime.png";
        bodyFactor = 1.1;
        rating = rating + 15;
    } else if (bodyFactor == 2){
        mainImg.src = "images/effecten/alienslime.png";
        bodyFactor = 2.1;
        rating = rating + 15;
    } else {
        mainImg.src = "images/effecten/demonslime.png";
        bodyFactor = 3.1;
        rating = rating + 15;
    }
}, false)

clawImg.addEventListener("click", function() {
    if (bodyFactor == 1){
        mainImg.src = "images/effecten/skeletclaw.png";
        bodyFactor = 1.2;
        rating = rating + 5;
    } else if (bodyFactor == 2){
        mainImg.src = "images/effecten/alienclaw.png";
        bodyFactor = 2.2;
        rating = rating + 5;
    } else {
        mainImg.src = "images/effecten/demonclaw.png";
        bodyFactor = 3.2;
        rating = rating + 5;
    }
}, false)

teethImg.addEventListener("click", function() {
    if (bodyFactor == 1){
        mainImg.src = "images/effecten/skeletteeth.png";
        bodyFactor = 1.3;
        rating = rating + 10;
    } else if (bodyFactor == 2){
        mainImg.src = "images/effecten/alienteeth.png";
        bodyFactor = 2.3;
        rating = rating + 10;
    } else {
        mainImg.src = "images/effecten/demonteeth.png";
        bodyFactor = 3.3;
        rating = rating + 10;
    }
}, false)

greenBut.addEventListener("click", function() {
    if (bodyFactor == 1.1){
        mainImg.src = "images/colors.effecten/skeletslimegroen.png";
        rating = rating + 5;
    } else if (bodyFactor == 1.2){
        mainImg.src = "images/colors.effecten/skeletclawgroen.png";
        rating = rating + 5;
    } else if (bodyFactor == 1.3){
        mainImg.src = "images/colors.effecten/skeletteethgroen.png";
        rating = rating + 5;
    } else if (bodyFactor == 2.1){
        mainImg.src = "images/colors.effecten/alienslimegroen.png";
        rating = rating + 5;
    } else if (bodyFactor == 2.2){
        mainImg.src = "images/colors.effecten/alienclawgroen.png";
        rating = rating + 5;
    } else if (bodyFactor == 2.3){
        mainImg.src = "images/colors.effecten/alienteethgroen.png";
        rating = rating + 5;
    } else if (bodyFactor == 3.1){
        mainImg.src = "images/colors.effecten/demonslimegroen.png";
        rating = rating + 5;
    } else if (bodyFactor == 3.2){
        mainImg.src = "images/colors.effecten/demonclawgroen.png";
        rating = rating + 5;
    } else if (bodyFactor == 3.3){
        mainImg.src = "images/colors.effecten/demonteethgroen.png";
        rating = rating + 5;
    } else {
        mainImg.src = "images/colors.effecten/demonteethgroen.png";
        rating = rating + 5;
    }
}, false)

blackBut.addEventListener("click", function() {
    if (bodyFactor == 1.1){
        mainImg.src = "images/colors.effecten/skeletslimezwart.png";
        rating = rating + 15;
    } else if (bodyFactor == 1.2){
        mainImg.src = "images/colors.effecten/skeletclawzwart.png";
        rating = rating + 15;
    } else if (bodyFactor == 1.3){
        mainImg.src = "images/colors.effecten/skeletteethzwart.png";
        rating = rating + 15;
    } else if (bodyFactor == 2.1){
        mainImg.src = "images/colors.effecten/alienslimezwart.png";
        rating = rating + 15;
    } else if (bodyFactor == 2.2){
        mainImg.src = "images/colors.effecten/alienclawzwart.png";
        rating = rating + 15;
    } else if (bodyFactor == 2.3){
        mainImg.src = "images/colors.effecten/alienteethzwart.png";
        rating = rating + 15;
    } else if (bodyFactor == 3.1){
        mainImg.src = "images/colors.effecten/demonslimezwart.png";
        rating = rating + 15;
    } else if (bodyFactor == 3.2){
        mainImg.src = "images/colors.effecten/demonclawzwart.png";
        rating = rating + 15;
    } else if (bodyFactor == 3.3){
        mainImg.src = "images/colors.effecten/demonteethzwart.png";
        rating = rating + 15;
    } else {
        mainImg.src = "images/colors.effecten/demonteethzwart.png";
        rating = rating + 5;
    }
}, false)

redBut.addEventListener("click", function() {
    if (bodyFactor == 1.1){
        mainImg.src = "images/colors.effecten/skeletslimerood.png";
        rating = rating + 10;
    } else if (bodyFactor == 1.2){
        mainImg.src = "images/colors.effecten/skeletclawrood.png";
        rating = rating + 10;
    } else if (bodyFactor == 1.3){
        mainImg.src = "images/colors.effecten/skeletteethrood.png";
        rating = rating + 10;
    } else if (bodyFactor == 2.1){
        mainImg.src = "images/colors.effecten/alienslimerood.png";
        rating = rating + 10;
    } else if (bodyFactor == 2.2){
        mainImg.src = "images/colors.effecten/alienclawrood.png";
        rating = rating + 10;
    } else if (bodyFactor == 2.3){
        mainImg.src = "images/colors.effecten/alienteethrood.png";
        rating = rating + 10;
    } else if (bodyFactor == 3.1){
        mainImg.src = "images/colors.effecten/demonslimerood.png";
        rating = rating + 10;
    } else if (bodyFactor == 3.2){
        mainImg.src = "images/colors.effecten/demonclawrood.png";
        rating = rating + 10;
    } else if (bodyFactor == 3.3){
        mainImg.src = "images/colors.effecten/demonteethrood.png";
        rating = rating + 10;
    } else {
        mainImg.src = "images/colors.effecten/demonteethrood.png";
        rating = rating + 10;
    }
}, false)


rateBut.addEventListener("click", function() {
    if (rating <= 15){
        rateBut.textContent = "Lame";
        audioLame.play();
    } else if (rating <= 30){
        rateBut.textContent = "Cool";
    } else {
        rateBut.textContent = "Scary";
        audioScary.play();
    }
}, false)

title.addEventListener("click", function() {
    var pelementHead = document.querySelector("header>p");
    var randomGetal = Math.random()*4;
    randomGetal = Math.floor(randomGetal);
    pelementHead.textContent = boodschap[randomGetal];
}, false)
