var option1 = 'One Piece';
var option2 = 'Two Pieces';



function img1clicked(){
    document.getElementById("product-img-1").src = "/Users/Carsten/VSCode/Website/files/Colorful Cup Holder/ColorfulCupHolder1.webp"
}
function img2clicked(){
    document.getElementById("product-img-1").src= "/Users/Carsten/VSCode/Website/files/Colorful Cup Holder/ColorfulCupHolder2.webp"
}

function img3clicked(){
    document.getElementById("product-img-1").src = "/Users/Carsten/VSCode/Website/files/Colorful Cup Holder/ColorfulCupHolder3.webp"
}

function img4clicked(){
    document.getElementById("product-img-1").src = "/Users/Carsten/VSCode/Website/files/Colorful Cup Holder/ColorfulCupHolder4.webp"
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