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
    document.getElementById("product-img-1").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/main1.webp"
}
function img2clicked(){
    document.getElementById("product-img-1").src= "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/main2.webp"
}

function img3clicked(){
    document.getElementById("product-img-1").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/main3.webp"
}

function img4clicked(){
    document.getElementById("product-img-1").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/main4.webp"
}

function img5clicked(){
    document.getElementById("product-img-1").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/1.webp"
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
        document.getElementById("product-img-1").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/2.webp" ; 
        document.getElementById("product-img-5s").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/2.webp" ;
        break; 
    default:
        document.getElementById("product-img-1").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/1.webp";
        document.getElementById("product-img-5s").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/1.webp"; 
        break }
}
function optionColor2(){
document.querySelector('#optiondropdownmenu').style.display='none';
document.querySelector('#select-option').innerHTML = color2;
document.querySelector('#no-option').style.display= 'none';
switch (selectframe.textContent) {
    case frameY: 
        document.getElementById("product-img-1").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/4.webp" ; 
        document.getElementById("product-img-5s").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/4.webp" ;
        break; 
    default:
        document.getElementById("product-img-1").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/3.webp";
        document.getElementById("product-img-5s").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/3.webp"; 
        break }
}

function optionColor3(){
document.querySelector('#optiondropdownmenu').style.display='none';
document.querySelector('#select-option').innerHTML = color3;
document.querySelector('#no-option').style.display= 'none';
switch (selectframe.textContent) {
    case frameY: 
        document.getElementById("product-img-1").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/6.webp" ; 
        document.getElementById("product-img-5s").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/6.webp" ;
        break; 
    default:
        document.getElementById("product-img-1").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/5.webp";
        document.getElementById("product-img-5s").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/5.webp"; 
        break }
}

function optionColor4(){
document.querySelector('#optiondropdownmenu').style.display='none';
document.querySelector('#select-option').innerHTML = color4;
document.querySelector('#no-option').style.display= 'none';
switch (selectframe.textContent) {
    case frameY: 
        document.getElementById("product-img-1").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/8.webp" ; 
        document.getElementById("product-img-5s").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/8.webp" ;
        break; 
    default:
        document.getElementById("product-img-1").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/7.webp";
        document.getElementById("product-img-5s").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/7.webp"; 
        break }
}

function optionColor5(){
document.querySelector('#optiondropdownmenu').style.display='none';
document.querySelector('#select-option').innerHTML = color5;
document.querySelector('#no-option').style.display= 'none';
switch (selectframe.textContent) {
    case frameY: 
        document.getElementById("product-img-1").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/10.webp" ; 
        document.getElementById("product-img-5s").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/10.webp" ;
        break; 
    default:
        document.getElementById("product-img-1").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/9.webp";
        document.getElementById("product-img-5s").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/9.webp"; 
        break }
}

function optionColor6(){
document.querySelector('#optiondropdownmenu').style.display='none';
document.querySelector('#select-option').innerHTML = color6;
document.querySelector('#no-option').style.display= 'none';
switch (selectframe.textContent) {
    case frameY: 
        document.getElementById("product-img-1").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/12.webp" ; 
        document.getElementById("product-img-5s").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/12.webp" ;
        break; 
    default:
        document.getElementById("product-img-1").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/11.webp";
        document.getElementById("product-img-5s").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/11.webp"; 
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
            document.getElementById("product-img-1").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/1.webp" ; 
            document.getElementById("product-img-5s").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/1.webp" ;
            break; 
        case color2: 
            document.getElementById("product-img-1").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/3.webp" ; 
            document.getElementById("product-img-5s").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/3.webp" ;
            break;
        case color3: 
            document.getElementById("product-img-1").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/5.webp" ; 
            document.getElementById("product-img-5s").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/5.webp" ;
            break;
        case color4: 
            document.getElementById("product-img-1").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/7.webp" ; 
            document.getElementById("product-img-5s").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/7.webp" ;
            break;
        case color5: 
            document.getElementById("product-img-1").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/9.webp" ; 
            document.getElementById("product-img-5s").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/9.webp" ;
            break;
        case color6: 
            document.getElementById("product-img-1").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/11.webp" ; 
            document.getElementById("product-img-5s").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/11.webp" ;
            break;
    }
}
    function frameClickedY(){
    document.querySelector('#framedropdownmenu').style.display='none';
    document.querySelector('#select-frame').textContent="Yes"
    switch (selectoption.textContent) {
        case color1: 
            document.getElementById("product-img-1").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/2.webp" ; 
            document.getElementById("product-img-5s").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/2.webp" ;
            break; 
        case color2: 
            document.getElementById("product-img-1").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/4.webp" ; 
            document.getElementById("product-img-5s").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/4.webp" ;
            break;
        case color3: 
            document.getElementById("product-img-1").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/6.webp" ; 
            document.getElementById("product-img-5s").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/6.webp" ;
            break;
        case color4: 
            document.getElementById("product-img-1").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/8.webp" ; 
            document.getElementById("product-img-5s").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/8.webp" ;
            break;
        case color5: 
            document.getElementById("product-img-1").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/10.webp" ; 
            document.getElementById("product-img-5s").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/10.webp" ;
            break;
        case color6: 
            document.getElementById("product-img-1").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/12.webp" ; 
            document.getElementById("product-img-5s").src = "/Users/Carsten/VSCode/Website/files/3D LED Digital Clock/12.webp" ;
            break;
    }
    }


    
function Checkout(){
switch (selectoption.textContent) {
    //Option 1
    case color1:
        window.location.href = "https://buy.stripe.com/28o4jo2CleNI0yk3ck";
    break
    //Option 2
    case color2:
        window.location.href = "https://buy.stripe.com/28o2bg1yhgVQch26ox";
    break
    default:
        document.querySelector('#no-option').style.display= 'block';
        break
    }}
