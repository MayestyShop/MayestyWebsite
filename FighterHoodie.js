x = 1;
    function langclicked(){
      document.querySelector('#langmenu').style.display = "block";
    }

    function eglang(){
      document.querySelector('#langimg').src = "/Users/Carsten/VSCode/Website/files/ukflag.png";
      document.querySelector('#langmenu').style.display = "none";
      document.querySelector('#shopnowtxt').innerHTML = "Shop Now";
      document.querySelector('.txtheader').innerHTML = "NEW COLLECTION";
      document.querySelector('#HomeHeader').innerHTML = "Home";
      document.querySelector('#ShopHeader').innerHTML = "Shop";
      document.querySelector('#ContactHeader').innerHTML = "Contact";
      document.querySelector('#AboutusHeader').innerHTML = "About Us";
      document.querySelector('#subtitle').innerHTML = "Shipping To All Around Europe";
      document.querySelector('#bestproducts').innerHTML = "Best Sellers";
      document.querySelector('.product1-txt').innerHTML = "'Fighter' Hoodie";
      document.querySelector('.product2-txt').innerHTML = "'Khabib' Hoodie";
      document.querySelector('.product3-txt').innerHTML = "Black Hoodie";
      document.querySelector('.featured1txt').innerHTML = "NEW COLLECTION";
      document.querySelector('.featured1shopnow').innerHTML = "Shop Now";
      document.querySelector('#collection1txt').innerHTML = "'Fighter' Hoodie";
      document.querySelector('#collection2txt').innerHTML = "'Khabib' Hoodie";
      document.querySelector('#collection3txt').innerHTML = "Black Hoodie";
      document.querySelector('#collection4txt').innerHTML = "Black Hoodie";
      document.querySelector('#HomeHeader').style.marginTop = "1.4vw";
      document.querySelector('#ShopHeader').style.marginTop = "1.4vw";
      document.querySelector('#ContactHeader').style.marginTop = "1.4vw";
      document.querySelector('#AboutusHeader').style.marginTop = "1.4vw";

    }

    function frlang(){
        document.querySelector('#langimg').src = "/Users/Carsten/VSCode/Website/files/frflag.png";
        document.querySelector('#langmenu').style.display = "none";
        document.querySelector('#shopnowtxt').innerHTML = "Acheter";
        document.querySelector('.txtheader').innerHTML = "NOUVELLE COLLECTION";
        document.querySelector('#HomeHeader').innerHTML = "Accueil";
        document.querySelector('#ShopHeader').innerHTML = "Boutique";
        document.querySelector('#ContactHeader').innerHTML = "Contact";
        document.querySelector('#AboutusHeader').innerHTML = "À Propos de Nous";
        document.querySelector('#subtitle').innerHTML = "Livraison dans toute l'Europe";
        document.querySelector('#bestproducts').innerHTML = "Meilleures Ventes";
        document.querySelector('.product1-txt').innerHTML = "Sweat à capuche 'Figher'";
        document.querySelector('.product2-txt').innerHTML = "Sweat à capuche 'Khabib'";
        document.querySelector('.product3-txt').innerHTML = "Sweat à capuche noir";
        document.querySelector('.featured1txt').innerHTML = "NOUVELLE COLLECTION";
        document.querySelector('.featured1shopnow').innerHTML = "Acheter";
        document.querySelector('#collection1txt').innerHTML = "Sweat à capuche 'Figher'";
        document.querySelector('#collection2txt').innerHTML = "Sweat à capuche 'Khabib'";
        document.querySelector('#collection3txt').innerHTML = "Sweat à capuche noir";
        document.querySelector('#collection4txt').innerHTML = "Sweat à capuche noir";
        document.querySelector('#HomeHeader').style.marginTop = "1.4vw";
        document.querySelector('#ShopHeader').style.marginTop = "1.4vw";
        document.querySelector('#ContactHeader').style.marginTop = "1.4vw";
        document.querySelector('#AboutusHeader').style.marginTop = "1.4vw";
    }

    function delang(){
        document.querySelector('#langimg').src = "/Users/Carsten/VSCode/Website/files/deflag.png";
        document.querySelector('#langmenu').style.display = "none";
        document.querySelector('#shopnowtxt').innerHTML = "Einkaufen";
        document.querySelector('.txtheader').innerHTML = "NEUE KOLLEKTION";
        document.querySelector('#HomeHeader').innerHTML = "Startseite";
        document.querySelector('#ShopHeader').innerHTML = "Geschäft";
        document.querySelector('#ContactHeader').innerHTML = "Kontakt";
        document.querySelector('#AboutusHeader').innerHTML = "Über uns";
        document.querySelector('#subtitle').innerHTML = "Versand in ganz Europa";
        document.querySelector('#bestproducts').innerHTML = "Bestseller";
        document.querySelector('.product1-txt').innerHTML = "'Figher' Hoodie";
        document.querySelector('.product2-txt').innerHTML = "'Khabib' Hoodie";
        document.querySelector('.product3-txt').innerHTML = "Schwarzer Hoodie";
        document.querySelector('.featured1txt').innerHTML = "NEUE KOLLEKTION";
        document.querySelector('.featured1shopnow').innerHTML = "Einkaufen";
        document.querySelector('#collection1txt').innerHTML = "'Figher' Hoodie";
        document.querySelector('#collection2txt').innerHTML = "'Khabib' Hoodie";
        document.querySelector('#collection3txt').innerHTML = "Schwarzer Hoodie";
        document.querySelector('#collection4txt').innerHTML = "Schwarzer Hoodie";
        document.querySelector('#HomeHeader').style.marginTop = "1.4vw";
        document.querySelector('#ShopHeader').style.marginTop = "1.4vw";
        document.querySelector('#ContactHeader').style.marginTop = "1.4vw";
        document.querySelector('#AboutusHeader').style.marginTop = "1.4vw";


    }

    function nllang(){
      document.querySelector('#langimg').src = "/Users/Carsten/VSCode/Website/files/nlflag.png";
      document.querySelector('#langmenu').style.display = "none";
      document.querySelector('#langmenu').style.pointerEvents = "all";
      document.querySelector('#shopnowtxt').innerHTML = "Shop Nu";
      document.querySelector('.txtheader').innerHTML = "NIEUWE COLLECTIE";
      document.querySelector('#HomeHeader').innerHTML = "Home";
      document.querySelector('#ShopHeader').innerHTML = "Shop";
      document.querySelector('#ContactHeader').innerHTML = "Contact";
      document.querySelector('#AboutusHeader').innerHTML = "Over Ons";
      document.querySelector('#subtitle').innerHTML = "Verzending Door Heel Europa";
      document.querySelector('#bestproducts').innerHTML = "Populaire Producten";
      document.querySelector('.product1-txt').innerHTML = "'Figher' Hoodie";
      document.querySelector('.product2-txt').innerHTML = "'Khabib' Hoodie";
      document.querySelector('.product3-txt').innerHTML = "Zwarte Hoodie";
      document.querySelector('.featured1txt').innerHTML = "NIEUWE COLLECTIE";
      document.querySelector('.featured1shopnow').innerHTML = "Shop Nu";
      document.querySelector('#collection1txt').innerHTML = "'Figher' Hoodie";
      document.querySelector('#collection2txt').innerHTML = "'Khabib' Hoodie";
      document.querySelector('#collection3txt').innerHTML = "Zwarte Hoodie";
      document.querySelector('#collection4txt').innerHTML = "Zwarte Hoodie";
      document.querySelector('#HomeHeader').style.marginTop = "1.4vw";
      document.querySelector('#ShopHeader').style.marginTop = "1.4vw";
      document.querySelector('#ContactHeader').style.marginTop = "1.4vw";
      document.querySelector('#AboutusHeader').style.marginTop = "1.4vw";      
    }

var option1 = 'S';
var option2 = 'M';
var option3 = 'L';
var option4 = 'XL';



function img1clicked(){
    document.getElementById("product-img-1").src = "/Users/carsten/VSCode/Website/hoodies/fighterF.png"
    document.getElementById("div-product-1").style.border = "solid black 0.1vw";
    document.getElementById("div-product-2").style.border = "solid white 0.1vw";

}
function img2clicked(){
    document.getElementById("product-img-1").src= "/Users/carsten/VSCode/Website/hoodies/fighterB.png"
    document.getElementById("div-product-2").style.border = "solid black 0.1vw";
    document.getElementById("div-product-1").style.border = "solid white 0.1vw";

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
  window.location.href = "https://buy.stripe.com/8wM17cccV20WgxidR9?prefilled_promo_code=BLACKFRIDAY";
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
        window.location.href = '/Users/carsten/VSCode/Website/code/index.html';
      });
      
      document.querySelector('#Header2').addEventListener('click', function() {
        window.location.href = '/Users/carsten/VSCode/Website/code/shop.html';
      });
      
      document.querySelector('#Header3').addEventListener('click', function() {
        window.location.href = '/Users/carsten/VSCode/Website/code/collections.html';
      });
      
      document.querySelector('#Header4').addEventListener('click', function() {
        window.location.href = '/Users/carsten/VSCode/Website/code/support.html';
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
      
      
