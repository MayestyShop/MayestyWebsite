var option1 = 'Green';
var option2 = 'Pink';
var option3 = 'Blue';



function img1clicked(){
    document.getElementById("product-img-1").src = "all_blackbackground.jpg"
}
function img2clicked(){
    document.getElementById("product-img-1").src= "bendingexample.png"
}

function img3clicked(){
    document.getElementById("product-img-1").src = "green_whitebackground.jpg"
}

function img4clicked(){
    document.getElementById("product-img-1").src = "blue_whitebackground.jpg"
}
function img5clicked(){
    document.getElementById("product-img-1").src = "pink_whitebackground.jpg"
}


function optionDropdown(){
document.querySelector('#optiondropdownmenu').style.display= 'block';
}

function optionClicked1(){
document.querySelector('#optiondropdownmenu').style.display='none';
document.querySelector('#select-option').innerHTML = option1;
}
function optionClicked2(){
document.querySelector('#optiondropdownmenu').style.display='none';
document.querySelector('#select-option').innerHTML = option2;

}
function optionClicked3(){
document.querySelector('#optiondropdownmenu').style.display='none';
document.querySelector('#select-option').innerHTML = option3;

}




function menuClicked(){
document.querySelector('#menu').style.display= 'block';

}
function menuClosed() {
document.querySelector('#menu').style.display= 'none';
}

var selectoption = document.getElementById("select-option");
var selectplug = document.getElementById("select-plug");

function Checkout(){
switch (selectoption.textContent) {
    //Option 1
    case option1:
        window.location.href = "https://buy.stripe.com/eVabLQdgZfRM5SE8wx";
    break
    //Option 2
    case option2:
        window.location.href = "https://buy.stripe.com/eVabLQdgZfRM5SE8wx";
    break
    //Option 3
    case option3:
        window.location.href = "https://buy.stripe.com/eVabLQdgZfRM5SE8wx";
    break
    
    }}
