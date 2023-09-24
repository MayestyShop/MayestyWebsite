var color1 = 'White';
var color2 = 'Green';
var color3 = 'Red';
var color4 = 'Blue';
var color5 = 'Pink';
var color6 = 'Orange';

var frameN = 'No';
var frameY = 'Yes';

var selectoption = document.getElementById("select-option");
var selectframe = document.getElementById("select-frame");

function img1clicked(){
    document.getElementById("product-img-1").src = "main1.webp"
}
function img2clicked(){
    document.getElementById("product-img-1").src= "main2.webp"
}

function img3clicked(){
    document.getElementById("product-img-1").src = "main3.webp"
}

function img4clicked(){
    document.getElementById("product-img-1").src = "main4.webp"
}

function img5clicked(){
    document.getElementById("product-img-1").src = "1.webp"
}


function optionDropdown(){
document.querySelector('#optiondropdownmenu').style.display= 'block';
}

function optionColor1(){
document.querySelector('#optiondropdownmenu').style.display='none';
document.querySelector('#select-option').innerHTML = color1;
document.querySelector('#no-option').style.display= 'none';
switch (selectframe.textContent) {
    case frameY: 
        document.getElementById("product-img-1").src = "2.webp" ; 
        document.getElementById("product-img-5s").src = "2.webp" ;
        break; 
    default:
        document.getElementById("product-img-1").src = "1.webp";
        document.getElementById("product-img-5s").src = "1.webp"; 
        break }
}
function optionColor2(){
document.querySelector('#optiondropdownmenu').style.display='none';
document.querySelector('#select-option').innerHTML = color2;
document.querySelector('#no-option').style.display= 'none';
switch (selectframe.textContent) {
    case frameY: 
        document.getElementById("product-img-1").src = "4.webp" ; 
        document.getElementById("product-img-5s").src = "4.webp" ;
        break; 
    default:
        document.getElementById("product-img-1").src = "3.webp";
        document.getElementById("product-img-5s").src = "3.webp"; 
        break }
}

function optionColor3(){
document.querySelector('#optiondropdownmenu').style.display='none';
document.querySelector('#select-option').innerHTML = color3;
document.querySelector('#no-option').style.display= 'none';
switch (selectframe.textContent) {
    case frameY: 
        document.getElementById("product-img-1").src = "6.webp" ; 
        document.getElementById("product-img-5s").src = "6.webp" ;
        break; 
    default:
        document.getElementById("product-img-1").src = "5.webp";
        document.getElementById("product-img-5s").src = "5.webp"; 
        break }
}

function optionColor4(){
document.querySelector('#optiondropdownmenu').style.display='none';
document.querySelector('#select-option').innerHTML = color4;
document.querySelector('#no-option').style.display= 'none';
switch (selectframe.textContent) {
    case frameY: 
        document.getElementById("product-img-1").src = "8.webp" ; 
        document.getElementById("product-img-5s").src = "8.webp" ;
        break; 
    default:
        document.getElementById("product-img-1").src = "7.webp";
        document.getElementById("product-img-5s").src = "7.webp"; 
        break }
}

function optionColor5(){
document.querySelector('#optiondropdownmenu').style.display='none';
document.querySelector('#select-option').innerHTML = color5;
document.querySelector('#no-option').style.display= 'none';
switch (selectframe.textContent) {
    case frameY: 
        document.getElementById("product-img-1").src = "10.webp" ; 
        document.getElementById("product-img-5s").src = "10.webp" ;
        break; 
    default:
        document.getElementById("product-img-1").src = "9.webp";
        document.getElementById("product-img-5s").src = "9.webp"; 
        break }
}

function optionColor6(){
document.querySelector('#optiondropdownmenu').style.display='none';
document.querySelector('#select-option').innerHTML = color6;
document.querySelector('#no-option').style.display= 'none';
switch (selectframe.textContent) {
    case frameY: 
        document.getElementById("product-img-1").src = "12.webp" ; 
        document.getElementById("product-img-5s").src = "12.webp" ;
        break; 
    default:
        document.getElementById("product-img-1").src = "11.webp";
        document.getElementById("product-img-5s").src = "11.webp"; 
        break }
}




function frameDropdown(){
    document.querySelector('#framedropdownmenu').style.display= 'block';
    }
    
    function frameClickedN(){
    document.querySelector('#framedropdownmenu').style.display='none';
    document.querySelector('#select-frame').innerHTML = "No";
    switch (selectoption.textContent) {
        case color1: 
            document.getElementById("product-img-1").src = "1.webp" ; 
            document.getElementById("product-img-5s").src = "1.webp" ;
            break; 
        case color2: 
            document.getElementById("product-img-1").src = "3.webp" ; 
            document.getElementById("product-img-5s").src = "3.webp" ;
            break;
        case color3: 
            document.getElementById("product-img-1").src = "5.webp" ; 
            document.getElementById("product-img-5s").src = "5.webp" ;
            break;
        case color4: 
            document.getElementById("product-img-1").src = "7.webp" ; 
            document.getElementById("product-img-5s").src = "7.webp" ;
            break;
        case color5: 
            document.getElementById("product-img-1").src = "9.webp" ; 
            document.getElementById("product-img-5s").src = "9.webp" ;
            break;
        case color6: 
            document.getElementById("product-img-1").src = "11.webp" ; 
            document.getElementById("product-img-5s").src = "11.webp" ;
            break;
    }
}
    function frameClickedY(){
    document.querySelector('#framedropdownmenu').style.display='none';
    document.querySelector('#select-frame').textContent="Yes"
    switch (selectoption.textContent) {
        case color1: 
            document.getElementById("product-img-1").src = "2.webp" ; 
            document.getElementById("product-img-5s").src = "2.webp" ;
            break; 
        case color2: 
            document.getElementById("product-img-1").src = "4.webp" ; 
            document.getElementById("product-img-5s").src = "4.webp" ;
            break;
        case color3: 
            document.getElementById("product-img-1").src = "6.webp" ; 
            document.getElementById("product-img-5s").src = "6.webp" ;
            break;
        case color4: 
            document.getElementById("product-img-1").src = "8.webp" ; 
            document.getElementById("product-img-5s").src = "8.webp" ;
            break;
        case color5: 
            document.getElementById("product-img-1").src = "10.webp" ; 
            document.getElementById("product-img-5s").src = "10.webp" ;
            break;
        case color6: 
            document.getElementById("product-img-1").src = "12.webp" ; 
            document.getElementById("product-img-5s").src = "12.webp" ;
            break;
    }
    }


    
function Checkout(){
switch (selectoption.textContent) {
    //Option 1
    case color1:
        window.location.href = "https://buy.stripe.com/4gw3fk4Kt4940ykcMW";
    break
    //Option 2
    case color2:
        window.location.href = "https://buy.stripe.com/4gwaHM5Ox8pkgxibIT";
    break
    //Option 3
    case color3:
        window.location.href = "https://buy.stripe.com/3cs6rw2CleNIbcY00c";
    break
    //Option 4
    case color4:
        window.location.href = "https://buy.stripe.com/14k8zE0ud3506WI3cp";
    break
    //Option 5
    case color5:
        window.location.href = "https://buy.stripe.com/eVaaHM6SB20W94Q6oC";
    break
    //Option 6
    case color6:
        window.location.href = "https://buy.stripe.com/dR6aHMfp79to1Co5kz";
    break
    default:
        document.querySelector('#no-option').style.display= 'block';
        break
    }}
