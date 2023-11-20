  function shopNow(){
    document.querySelector('.fc').scrollIntoView({
      behavior: "smooth"
    });
  }

  function fromproduct1(){
    document.querySelector('.product2-mobileh1').scrollIntoView({
      behavior: "smooth"
    })
  }

  function fromproduct2(){
    document.querySelector('.product3-mobileh1').scrollIntoView({
      behavior: "smooth"
    })
  }

  function fromproductLAST(){
    document.querySelector('#bestproducts').scrollIntoView({
      behavior: "smooth"
    }) 
  }
  /*
  x=0
  let margin = -30;
    function animationRA() {
        x=0
        margin += 0.04;
        document.querySelector("#earthimg").style.marginLeft= margin + 'vw';
        if (margin > -0.01){
        margin = -30;
      }
    }

    let animationR = setInterval(animationRA,20);
*/
    x = 1;
    function langclicked(){
      document.querySelector('#langmenu').style.display = "block";
    }

    function eglang(){
      document.querySelector('#langimg').src = "ukflag.png";
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
      document.querySelector('.product2-txt').innerHTML = "Glowing Earth Hoodie";
      document.querySelector('.product3-txt').innerHTML = "Black Hoodie";
      document.querySelector('.featured1txt').innerHTML = "NEW COLLECTION";
      document.querySelector('.featured1shopnow').innerHTML = "Shop Now";
      document.querySelector('#collection1txt').innerHTML = "'Fighter' Hoodie";
      document.querySelector('#collection2txt').innerHTML = "Glowing Earth Hoodie";
      document.querySelector('#collection3txt').innerHTML = "Black Hoodie";
      document.querySelector('#collection4txt').innerHTML = "Black Hoodie";
      document.querySelector('#HomeHeader').style.marginTop = "1.4vw";
      document.querySelector('#ShopHeader').style.marginTop = "1.4vw";
      document.querySelector('#ContactHeader').style.marginTop = "1.4vw";
      document.querySelector('#AboutusHeader').style.marginTop = "1.4vw";

    }

    function frlang(){
        document.querySelector('#langimg').src = "frflag.png";
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
        document.querySelector('.product2-txt').innerHTML = "Sweat à capuche Glowing Earth";
        document.querySelector('.product3-txt').innerHTML = "Sweat à capuche noir";
        document.querySelector('.featured1txt').innerHTML = "NOUVELLE COLLECTION";
        document.querySelector('.featured1shopnow').innerHTML = "Acheter";
        document.querySelector('#collection1txt').innerHTML = "Sweat à capuche 'Figher'";
        document.querySelector('#collection2txt').innerHTML = "Sweat à capuche Glowing Earth";
        document.querySelector('#collection3txt').innerHTML = "Sweat à capuche noir";
        document.querySelector('#collection4txt').innerHTML = "Sweat à capuche noir";
        document.querySelector('#HomeHeader').style.marginTop = "1.4vw";
        document.querySelector('#ShopHeader').style.marginTop = "1.4vw";
        document.querySelector('#ContactHeader').style.marginTop = "1.4vw";
        document.querySelector('#AboutusHeader').style.marginTop = "1.4vw";
    }

    function delang(){
        document.querySelector('#langimg').src = "deflag.png";
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
        document.querySelector('.product2-txt').innerHTML = "Glowing Earth Hoodie";
        document.querySelector('.product3-txt').innerHTML = "Schwarzer Hoodie";
        document.querySelector('.featured1txt').innerHTML = "NEUE KOLLEKTION";
        document.querySelector('.featured1shopnow').innerHTML = "Einkaufen";
        document.querySelector('#collection1txt').innerHTML = "'Figher' Hoodie";
        document.querySelector('#collection2txt').innerHTML = "Glowing Earth Hoodie";
        document.querySelector('#collection3txt').innerHTML = "Schwarzer Hoodie";
        document.querySelector('#collection4txt').innerHTML = "Schwarzer Hoodie";
        document.querySelector('#HomeHeader').style.marginTop = "1.4vw";
        document.querySelector('#ShopHeader').style.marginTop = "1.4vw";
        document.querySelector('#ContactHeader').style.marginTop = "1.4vw";
        document.querySelector('#AboutusHeader').style.marginTop = "1.4vw";


    }

    function nllang(){
      document.querySelector('#langimg').src = "nlflag.png";
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
      document.querySelector('.product2-txt').innerHTML = "Glowing Earth Hoodie";
      document.querySelector('.product3-txt').innerHTML = "Zwarte Hoodie";
      document.querySelector('.featured1txt').innerHTML = "NIEUWE COLLECTIE";
      document.querySelector('.featured1shopnow').innerHTML = "Shop Nu";
      document.querySelector('#collection1txt').innerHTML = "'Figher' Hoodie";
      document.querySelector('#collection2txt').innerHTML = "Glowing Earth Hoodie";
      document.querySelector('#collection3txt').innerHTML = "Zwarte Hoodie";
      document.querySelector('#collection4txt').innerHTML = "Zwarte Hoodie";
      document.querySelector('#HomeHeader').style.marginTop = "1.4vw";
      document.querySelector('#ShopHeader').style.marginTop = "1.4vw";
      document.querySelector('#ContactHeader').style.marginTop = "1.4vw";
      document.querySelector('#AboutusHeader').style.marginTop = "1.4vw";      
    }
   

a1 = 44
b1 = 12



function loading1(){
    window.scrollTo(0, 0);
    a1 +=  0.5;
    b1 += 0.5;
    document.querySelector('#loading1').style.marginLeft = a1 + "vw";
    document.querySelector('#loading1').style.marginTop = b1 + "vw";
    if (a1 == 65){
        clearInterval(loadinganim1);
    }
}
loadinganim1 = setInterval(loading1, 50);




o = 0;
opac = 0.4;
function procentA(){
    o += 0.5;
    opac += 0.0025;
    document.querySelector('#procent').innerHTML = Math.round(o) + "%";
    document.querySelector('#procent').style.opacity = opac ;
    if (o == 100){
        clearInterval(procentageanimation);
    }
}

procentageanimation = setInterval(procentA, 6);


marginTloading = 0;
function loadingscreen() {
    marginTloading += 5;
    document.querySelector('#loadingscreen').style.marginTop = marginTloading + "vw";
    if (marginTloading > 205){clearInterval(loadingscreenanimation)}
}


setTimeout(function() {
    loadingscreenanimation = setInterval(loadingscreen, 10);
}, 2000);

setTimeout(function() {
    document.querySelector('html').style.overflowY = "scroll";
    document.querySelector('html').style.overflowX = "none";

}, 2300);

setTimeout(function() {
  document.querySelector('#loadingscreen').style.display = "none";
}, 2600);

document.querySelector('.div-product1-img').addEventListener('click', function() {
  window.location.href = 'FighterHoodie';
});

document.querySelector('.div-product2-img').addEventListener('click', function() {
  window.location.href = 'UnderCoverHoodie';
});

document.querySelector('.div-product3-img').addEventListener('click', function() {
  window.location.href = 'RelentlessHoodie';
});

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


/*
shopopacity = 0;
function shop(){
    shoploading = setInterval(shop, 8)
    shopopacity += 0.02;
    document.querySelector('#procent').style.display = "none";
    document.querySelector('#loadingscreen').style.marginTop = 0 + "vw";
    document.querySelector('#loadingscreen').style.display = "block";
    document.querySelector('#loadingscreen').style.position = "absolute";
    document.querySelector('html').style.overflowY = "hidden";
    window.scrollTo(0, 0);
    document.querySelector('#loadingscreen').style.opacity = shopopacity ;
    window.open('shop', "_self");
    if (shopopacity >80){
        clearInterval(shoploading);
        window.open('shop', "_self");
    };

}
*/
