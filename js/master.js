//Select background for main-page
let mainPage = document.querySelector(".main-page");

//get aaray of backgroundSize: 
let imgsArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

//changing background: 
setInterval(function() {
    let randNum = Math.floor(Math.random() * imgsArray.length);

    mainPage.style.background = 'url("imgs/' + imgsArray[randNum] + '")';



}, 10000)