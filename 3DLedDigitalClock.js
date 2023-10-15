var color1 = 'White';
var color2 = 'Green';
var color3 = 'Red';
var color4 = 'Blue';
var color5 = 'Pink';
var color6 = 'Orange';

var frameN = 'Transparant';
var frameY = 'Black';

var selectoption = document.getElementById("select-option");
var selectframe = document.getElementById("select-frame");


function img1clicked(){
    document.getElementById("product-img-1").src = "main1.webp"
    document.querySelector('#optiondropdownmenu').style.display='none';
    document.querySelector('#arrowdropdown').src= 'arrow.png';
    document.querySelector('#framedropdownmenu').style.display='none';
    document.querySelector('#arrowdropdownframe').src= 'arrow.png';
}
function img2clicked(){
    document.getElementById("product-img-1").src= "main2.webp"
    document.querySelector('#arrowdropdown').src= 'arrow.png';
    document.querySelector('#optiondropdownmenu').style.display='none';
    document.querySelector('#framedropdownmenu').style.display='none';
    document.querySelector('#arrowdropdownframe').src= 'arrow.png';
}

function img3clicked(){
    document.getElementById("product-img-1").src = "main3.webp"
    document.querySelector('#arrowdropdown').src= 'arrow.png';
    document.querySelector('#optiondropdownmenu').style.display='none';
    document.querySelector('#framedropdownmenu').style.display='none';
    document.querySelector('#arrowdropdownframe').src= 'arrow.png';
}

function img4clicked(){
    document.getElementById("product-img-1").src = "main4.webp"
    document.querySelector('#arrowdropdown').src= 'arrow.png';
    document.querySelector('#optiondropdownmenu').style.display='none';
    document.querySelector('#framedropdownmenu').style.display='none';
    document.querySelector('#arrowdropdownframe').src= 'arrow.png';
}

function img5clicked(){
    document.getElementById("product-img-1").src = CurrentSrc;
    document.querySelector('#arrowdropdown').src= 'arrow.png';
    document.querySelector('#optiondropdownmenu').style.display='none';
    document.querySelector('#framedropdownmenu').style.display='none';
    document.querySelector('#arrowdropdownframe').src= 'arrow.png';
}


function optionDropdown(){
document.querySelector('#optiondropdownmenu').style.display= 'block';
document.querySelector('#arrowdropdown').src= 'arrow upside.png';
}

function optionColor1(){
document.querySelector('#optiondropdownmenu').style.display='none';
document.querySelector('#select-option').innerHTML = color1;
document.querySelector('#no-option').style.display= 'none';
document.querySelector('#arrowdropdown').src= 'arrow.png';
switch (selectframe.textContent) {
    case frameY: 
        document.getElementById("product-img-1").src = "2.webp" ; 
        document.getElementById("product-img-5s").src = "2.webp" ;
        break; 
    default:
        document.getElementById("product-img-1").src = "1.webp";
        document.getElementById("product-img-5s").src = "1.webp"; 
        break;
     }
}

function optionColor2(){
document.querySelector('#optiondropdownmenu').style.display='none';
document.querySelector('#select-option').innerHTML = color2;
document.querySelector('#no-option').style.display= 'none';
document.querySelector('#arrowdropdown').src= 'arrow.png';
switch (selectframe.textContent) {
    case frameY: 
        document.getElementById("product-img-1").src = "4.webp" ; 
        document.getElementById("product-img-5s").src = "4.webp" ;
        break; 
    default:
        document.getElementById("product-img-1").src = "3.webp";
        document.getElementById("product-img-5s").src = "3.webp"; 
        break;
    }
}

function optionColor3(){
document.querySelector('#optiondropdownmenu').style.display='none';
document.querySelector('#select-option').innerHTML = color3;
document.querySelector('#no-option').style.display= 'none';
document.querySelector('#arrowdropdown').src= 'arrow.png';
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
document.querySelector('#arrowdropdown').src= 'arrow.png';
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
document.querySelector('#arrowdropdown').src= 'arrow.png';
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
document.querySelector('#arrowdropdown').src= 'arrow.png';
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
    document.querySelector('#arrowdropdownframe').src= 'arrow upside.png';
}
    
    function frameClickedN(){
    document.querySelector('#framedropdownmenu').style.display='none';
    document.querySelector('#select-frame').innerHTML = "Transparant";
    document.querySelector('#arrowdropdownframe').src= 'arrow.png';
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
    document.querySelector('#select-frame').textContent="Black"
    document.querySelector('#arrowdropdownframe').src= 'arrow.png';

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

    let menumargin=-60;
  let menuopacity=4;
  function menu(){
  if(menuopacity<85){
    const animationMenu = setInterval(menuanimation,5);
    function menuanimation(){
        if (menumargin > -0.01) {
        clearInterval(animationMenu);
        }
        else{
        menumargin += 5;
        menuopacity += 7;
        document.querySelector('.menuslider').style.marginLeft = menumargin + 'vw';
        document.querySelector('.menuslider').style.opacity = menuopacity + '%';
      }}
  }
  if(menuopacity>85){
    menumargin = -60;
    menuopacity = 4;
    document.querySelector('.menuslider').style.marginLeft = -60 + 'vw';
    document.querySelector('.menuslider').style.opacity = 0 + '%';
  }
  }

    
