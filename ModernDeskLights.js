var option1 = 'Green';
var option2 = 'Pink';
var option3 = 'Blue';



function img1clicked(){
    document.getElementById("product-img-1").src = "all_blackbackground.webp"
}
function img2clicked(){
    document.getElementById("product-img-1").src= "bendingexample.webp"
}

function img3clicked(){
    document.getElementById("product-img-1").src = "green_whitebackground.webp"
}

function img4clicked(){
    document.getElementById("product-img-1").src = "blue_whitebackground.webp"
}
function img5clicked(){
    document.getElementById("product-img-1").src = "pink_whitebackground.webp"
}


function optionDropdown(){
document.querySelector('#optiondropdownmenu').style.display= 'block';
}

function optionClicked1(){
document.querySelector('#optiondropdownmenu').style.display='none';
document.querySelector('#select-option').innerHTML = option1;
document.querySelector('#no-option').style.display= 'none';
}
function optionClicked2(){
document.querySelector('#optiondropdownmenu').style.display='none';
document.querySelector('#select-option').innerHTML = option2;
document.querySelector('#no-option').style.display= 'none';

}
function optionClicked3(){
document.querySelector('#optiondropdownmenu').style.display='none';
document.querySelector('#select-option').innerHTML = option3;
document.querySelector('#no-option').style.display= 'none';

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
        window.location.href = "https://buy.stripe.com/6oEeY2gtbcFAgxi004";
    break
    //Option 2
    case option2:
        window.location.href = "https://buy.stripe.com/00gg26el38pkdl68wz";
    break
    //Option 3
    case option3:
        window.location.href = "https://buy.stripe.com/bIY2bga4N6hc0ykeV1";
    break
    default:
        document.querySelector('#no-option').style.display= 'block';
        break
    }}