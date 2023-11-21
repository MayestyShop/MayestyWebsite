var option1 = 'S';
var option2 = 'M';
color1B = "UnderCoverB.png";
color1F = "UnderCoverF.png";
color2B = "AshGreyUnderCoverB.png";
color2F = "AshGreyUnderCoverF.png";


colorF = "UnderCoverF.png";
colorB = "UnderCoverB.png";

function img1clicked(){
    document.getElementById("product-img-1").src = colorF;
    document.getElementById("div-product-1").style.border = "solid black 0.1vw";
    document.getElementById("div-product-2").style.border = "solid black 0vw";

}
function img2clicked(){
    document.getElementById("product-img-1").src= colorB;
    document.getElementById("div-product-2").style.border = "solid black 0.1vw";
    document.getElementById("div-product-1").style.border = "solid black 0vw";
}

function color1(){
  document.getElementById("product-img-1").src= color1F;
  document.getElementById("product-img-1s").src= color1F;
  document.getElementById("product-img-2s").src= color1B;
  colorF = "UnderCoverF.png";
  colorB = "UnderCoverB.png";
  document.getElementById("div-product-1").style.border = "solid black 0.1vw";
  document.getElementById("div-product-2").style.border = "solid black 0vw"
}

function color2(){
  document.getElementById("product-img-1").src= color2F;
  document.getElementById("product-img-1s").src= color2F;
  document.getElementById("product-img-2s").src= color2B;
  colorF = "AshgreyUnderCoverF.png";
  colorB = "AshgreyUnderCoverB.png";
  document.getElementById("div-product-1").style.border = "solid black 0.1vw";
  document.getElementById("div-product-2").style.border = "solid black 0vw"
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
function optionClicked4(){
    document.querySelector('#optiondropdownmenu').style.display='none';
    document.querySelector('#select-option').innerHTML = option4;
    document.querySelector('#no-option').style.display= 'none';
}

    

var selectoption = document.getElementById("select-option");
var selectplug = document.getElementById("select-frame");



function Checkout(){ /*BLACKFRIDAY*/
  window.location.href = "https://buy.stripe.com/aEUbLQ90JaxsfteeVa?prefilled_promo_code=BLACKFRIDAY";
}

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

    document.querySelector('#Header1').addEventListener('click', function() {
        window.location.href = 'index';
      });
      
      document.querySelector('#Header2').addEventListener('click', function() {
        window.location.href = 'shop';
      });
      
      document.querySelector('#Header3').addEventListener('click', function() {
        window.location.href = 'collections';
      });
      
      document.querySelector('#Header4').addEventListener('click', function() {
        window.location.href = 'support';
      });
      
      a=0
      document.querySelector('#information').addEventListener('click', function() {
        if (a == 0){
        document.querySelector('#informationIn').style.display = "block";
        document.querySelector('.product-overview').style.height ="260vw";
        a +=1
        console.log(a);
        return;
        }
        if (a == 1){
          document.querySelector('#informationIn').style.display = "none";
          document.querySelector('.product-overview').style.height ="225vw";
          a -= 1;
          console.log(a);
          return;
        }
      });
