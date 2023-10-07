var option1 = 'One Piece';
var option2 = 'Two Pieces';



function img1clicked(){
    document.getElementById("product-img-1").src = "ColorfulCupHolder1.webp"
}
function img2clicked(){
    document.getElementById("product-img-1").src= "ColorfulCupHolder2.webp"
}

function img3clicked(){
    document.getElementById("product-img-1").src = "ColorfulCupHolder3.webp"
}

function img4clicked(){
    document.getElementById("product-img-1").src = "ColorfulCupHolder4.webp"
}


function optionDropdown(){
document.querySelector('#optiondropdownmenu').style.display= 'block';
}

function optionClicked1(){
document.querySelector('#optiondropdownmenu').style.display='none';
document.querySelector('#select-option').innerHTML = option1;
document.querySelector('#no-option').style.display= 'none';
document.querySelector('#price-product').innerHTML = '$12.49';
}
function optionClicked2(){
document.querySelector('#optiondropdownmenu').style.display='none';
document.querySelector('#select-option').innerHTML = option2;
document.querySelector('#no-option').style.display= 'none';
document.querySelector('#price-product').innerHTML = '$14.49';
}

var selectoption = document.getElementById("select-option");
var selectplug = document.getElementById("select-frame");



function Checkout(){
switch (selectoption.textContent) {
    //Option 1
    case option1:
        window.location.href = "https://buy.stripe.com/28o4jo2CleNI0yk3ck";
    break
    //Option 2
    case option2:
        window.location.href = "https://buy.stripe.com/28o2bg1yhgVQch26ox";
    break
    default:
        document.querySelector('#no-option').style.display= 'block';
        break
    }}
