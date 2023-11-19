hoodie1 = "/Users/carsten/VSCode/Website/hoodies/fighterB.png";
hoodie2 = "/Users/carsten/VSCode/Website/hoodies/GlowingEarthF.png";
hoodie3 = "/Users/carsten/VSCode/Website/hoodies/RelentlessB.png";
hoodie4 = "/Users/carsten/VSCode/Website/hoodies/blackB.png";

hoodie1txt = "Fighter hoodie";
hoodie2txt = "Khabib Hoodie";
hoodie3txt = "Relentless Hoodie";
hoodie4txt = "Black Hoodie";

hoodie1price = "€39.49";
hoodie2price = "€39.49";
hoodie3price = "€29.49";
hoodie4price = "€24.49";

hoodie1link = "/Users/carsten/VSCode/Website/code/FighterHoodie.html";
hoodie2link = "/Users/carsten/VSCode/Website/code/GlowingEarthHoodie.html";
hoodie3link = "/Users/carsten/VSCode/Website/code/RelentlessHoodie.html";
hoodie4link = "/Users/carsten/VSCode/Website/code/UnderCoverHoodie.html";
hoodie5link = "/Users/carsten/VSCode/Website/code/WarriorHoodie.html";

hoodie1href = hoodie1link;
hoodie2href = hoodie2link;
hoodie3href = hoodie3link;
hoodie4href = hoodie4link;

/* Meest verkocht
hoodie1
hoodie2
hoodie3
hoodie4
*/

/* Nieuw
hoodie3
hoodie2
hoodie1
hoodie4
*/

/* prijs laag hoog
hoodie4
hoodie3
hoodie2
hoodie1
*/

/* prijs hoog naar laag
hoodie1
hoodie2
hoodie3
hoodie4
*/
/*
document.getElementById("sortbutton").onchange = changeListener;

function changeListener(){
    var value = this.value;
    
    if (value =="Meest Verkocht"){
        document.querySelector('#product-1-img').src = hoodie1;
        document.querySelector('#product-2-img').src = hoodie2;
        document.querySelector('#product-3-img').src = hoodie3;
        document.querySelector('#product-4-img').src = hoodie4;
        document.querySelector('#name-product-1').innerHTML = hoodie1txt;
        document.querySelector('#name-product-2').innerHTML = hoodie2txt;
        document.querySelector('#name-product-3').innerHTML = hoodie3txt;
        document.querySelector('#name-product-4').innerHTML = hoodie4txt;
        document.querySelector('#price-product-1').innerHTML = hoodie1price;
        document.querySelector('#price-product-2').innerHTML = hoodie2price;
        document.querySelector('#price-product-3').innerHTML = hoodie3price;
        document.querySelector('#price-product-4').innerHTML = hoodie4price;
        hoodie1href = hoodie1link;
        hoodie2href = hoodie2link;
        hoodie3href = hoodie3link;
        hoodie4href = hoodie4link;
    }

    if (value =="Nieuw"){
        document.querySelector('#product-1-img').src = hoodie3;
        document.querySelector('#product-2-img').src = hoodie2;
        document.querySelector('#product-3-img').src = hoodie1;
        document.querySelector('#product-4-img').src = hoodie4;
        document.querySelector('#name-product-1').innerHTML = hoodie3txt;
        document.querySelector('#name-product-2').innerHTML = hoodie2txt;
        document.querySelector('#name-product-3').innerHTML = hoodie1txt;
        document.querySelector('#name-product-4').innerHTML = hoodie4txt;
        document.querySelector('#price-product-1').innerHTML = hoodie3price;
        document.querySelector('#price-product-2').innerHTML = hoodie2price;
        document.querySelector('#price-product-3').innerHTML = hoodie1price;
        document.querySelector('#price-product-4').innerHTML = hoodie4price;
        hoodie1href = hoodie3link;
        hoodie2href = hoodie2link;
        hoodie3href = hoodie1link;
        hoodie4href = hoodie4link;
    }

    if (value =="Prijs van laag naar hoog"){
        document.querySelector('#product-1-img').src = hoodie4;
        document.querySelector('#product-2-img').src = hoodie3;
        document.querySelector('#product-3-img').src = hoodie2;
        document.querySelector('#product-4-img').src = hoodie1;
        document.querySelector('#name-product-1').innerHTML = hoodie4txt;
        document.querySelector('#name-product-2').innerHTML = hoodie3txt;
        document.querySelector('#name-product-3').innerHTML = hoodie2txt;
        document.querySelector('#name-product-4').innerHTML = hoodie1txt;
        document.querySelector('#price-product-1').innerHTML = hoodie4price;
        document.querySelector('#price-product-2').innerHTML = hoodie3price;
        document.querySelector('#price-product-3').innerHTML = hoodie2price;
        document.querySelector('#price-product-4').innerHTML = hoodie1price; 
        hoodie1href = hoodie4link;
        hoodie2href = hoodie3link;
        hoodie3href = hoodie2link;
        hoodie4href = hoodie1link;   
      }

    if (value =="Prijs van hoog naar laag"){
        document.querySelector('#product-1-img').src = hoodie1;
        document.querySelector('#product-2-img').src = hoodie2;
        document.querySelector('#product-3-img').src = hoodie3;
        document.querySelector('#product-4-img').src = hoodie4;
        document.querySelector('#name-product-1').innerHTML = hoodie1txt;
        document.querySelector('#name-product-2').innerHTML = hoodie2txt;
        document.querySelector('#name-product-3').innerHTML = hoodie3txt;
        document.querySelector('#name-product-4').innerHTML = hoodie4txt;
        document.querySelector('#price-product-1').innerHTML = hoodie1price;
        document.querySelector('#price-product-2').innerHTML = hoodie2price;
        document.querySelector('#price-product-3').innerHTML = hoodie3price;
        document.querySelector('#price-product-4').innerHTML = hoodie4price;    
        hoodie1href = hoodie1link;
        hoodie2href = hoodie2link;
        hoodie3href = hoodie3link;
        hoodie4href = hoodie4link;
      }
}
*/

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

  document.querySelector('#product-1-div').addEventListener('click', function() {
    window.location.href = hoodie1link;
  });

  document.querySelector('#product-2-div').addEventListener('click', function() {
    window.location.href = hoodie2link;
  });

  document.querySelector('#product-3-div').addEventListener('click', function() {
    window.location.href = hoodie3link;
  });

  document.querySelector('#product-4-div').addEventListener('click', function() {
    window.location.href = hoodie4link;
  });

  document.querySelector('#product-5-div').addEventListener('click', function() {
    window.location.href = hoodie5link;
  });