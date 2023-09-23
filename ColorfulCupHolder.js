//TIKTOK
!function (w, d, t) {
  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};

  ttq.load('CK7J3MRC77U0BUL4L0S0');
  ttq.page();
}(window, document, 'ttq');


var option1 = 'One Piece';
var option2 = 'Two Pieces';



function img1clicked(){
    document.getElementById("product-img-1").src = "ColorfulCupHolder1.webp"
}
function img2clicked(){
    document.getElementById("product-img-1").src= "Colorful Cup Holder/ColorfulCupHolder2.webp"
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
var selectplug = document.getElementById("select-plug");

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
