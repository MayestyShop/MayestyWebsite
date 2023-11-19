var option1 = 'Only 1 Camera';
var option2 = '1 Camera with 16GB';
var option3 = '1 Camera with 32GB';
var option4 = '1 Camera with 64GB';
var plug1 = 'EU Plug';
var plug2 = 'US Plug';
var plug3 = 'AU Plug';
var plug4 = 'UK Plug';


function img1clicked(){
    document.getElementById("product-img-1").src = "https://www.ikea.com/gb/en/images/products/lilleplutt-soft-toy-cat-grey-white__0876952_pe611260_s5.jpg?f=s"
}
function img2clicked(){
    document.getElementById("product-img-1").src = "https://www.cameradeals.nl/wp-content/uploads/2020/02/Fujifilm-X100V-Zilver-compact-camera-cameradeals.be-10.jpg"
}

function img3clicked(){
    document.getElementById("product-img-1").src = "https://www.sony.nl/image/3a882b48f293cc77c6a232424cf0615c?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF"
}
function img4clicked(){
    document.getElementById("product-img-1").src = "data:image/jpeg;base64,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"
}
function img5clicked(){
    document.getElementById("product-img-1").src= "https://media.wired.com/photos/64123456412651fa6ee1473c/2:3/w_1200,h_1800,c_limit/Sony-A7IV-Gear.jpg"
}

function optionDropdown(){
document.querySelector('#optiondropdownmenu').style.display= 'block';
}

function optionClicked1(){
document.querySelector('#optiondropdownmenu').style.display='none';
document.querySelector('#select-option').innerHTML = option1;
document.querySelector('#price-product').innerHTML = '$49.99';
}
function optionClicked2(){
document.querySelector('#optiondropdownmenu').style.display='none';
document.querySelector('#select-option').innerHTML = option2;
document.querySelector('#price-product').innerHTML = '$54.99';

}
function optionClicked3(){
document.querySelector('#optiondropdownmenu').style.display='none';
document.querySelector('#select-option').innerHTML = option3;
document.querySelector('#price-product').innerHTML = '$56.99';

}
function optionClicked4(){
document.querySelector('#optiondropdownmenu').style.display='none';
document.querySelector('#select-option').innerHTML = option4;
document.querySelector('#price-product').innerHTML = '$59.99';
}

function plugDropdown(){
document.querySelector('#plugdropdownmenu').style.display= 'block';
}

function plugClickedEU(){
document.querySelector('#plugdropdownmenu').style.display='none';
document.querySelector('#select-plug').innerHTML = plug1;
}
function plugClickedUS(){
document.querySelector('#plugdropdownmenu').style.display='none';
document.querySelector('#select-plug').textContent="US Plug"
}
function plugClickedAU(){
document.querySelector('#plugdropdownmenu').style.display='none';
document.querySelector('#select-plug').textContent="AU Plug"
}
function plugClickedUK(){
document.querySelector('#plugdropdownmenu').style.display='none';
document.querySelector('#select-plug').textContent="UK Plug"
}

function menuClicked(){
document.querySelector('#menu').style.display= 'block';

}
function menuClosed() {
document.querySelector('#menu').style.display= 'none';
}

var selectoption = document.getElementById("select-option");
var selectplug = document.getElementById("select-plug");

function Checkout(){
switch (selectoption.textContent) {
    //Option 1
    case option1:
        switch (selectplug.textContent) {
        case plug1:
            window.location.href = "https://buy.stripe.com/eVabLQdgZfRM5SE8wx";
            break
        case plug2:
            console.log("Option 1 And Plug US is Selected")
            break
        case plug3:
            console.log("Option 1 And Plug AU is Selected")
            break
        case plug4:
            console.log("Option 1 And Plug UK is Selected")
            break
        }
    break
    //Option 2
    case option2:
        switch (selectplug.textContent) {
        case plug1:
            console.log("Option 2 And Plug EU is Selected")
            break
        case plug2:
            console.log("Option 2 And Plug US is Selected")
            break
        case plug3:
            console.log("Option 2 And Plug AU is Selected")
            break
        case plug4:
            console.log("Option 2 And Plug UK is Selected")
            break
        }
    break
    //Option 3
    case option3:
        switch (selectplug.textContent) {
        case plug1:
            console.log("Option 3 And Plug EU is Selected")
            break
        case plug2:
            console.log("Option 3 And Plug US is Selected")
            break
        case plug3:
            console.log("Option 3 And Plug AU is Selected")
            break
        case plug4:
            console.log("Option 3 And Plug UK is Selected")
            break
        }
    break
//Option 4
    case option4:
        switch (selectplug.textContent) {
        case plug1:
            console.log("Option 4 And Plug EU is Selected")
            break
        case plug2:
            console.log("Option 4 And Plug US is Selected")
            break
        case plug3:
            console.log("Option 4 And Plug AU is Selected")
            break
        case plug4:
            console.log("Option 4 And Plug UK is Selected")
            break
        }
    break
   
}
}







/* STRIPE
var stripe = Stripe('pk_test_51NaxWvFDex9HAsPOf86h9UjbaevD1ZVKlfZYLIueNntHsgC1vw04KH9C2HEwMZsJJMB0fLa8G3RRXjNBOkAmtMxY00Uzgy3oJZ');

function checkout() {
    stripe.redirectToCheckout
}





var stripe = Stripe("pk_test_51NaxWvFDex9HAsPOf86h9UjbaevD1ZVKlfZYLIueNntHsgC1vw04KH9C2HEwMZsJJMB0fLa8G3RRXjNBOkAmtMxY00Uzgy3oJZ");

document.getElementById('checkout').addEventListener("click",function(){
    stripe.redirectToCheckout({
        lineItems: [
            {
            price:"price_1NnPtUFDex9HAsPOTGM9mRRb",
            quantity: 1,
            },
          ]  ,
        mode: "One Time",
        successUrl: "https://www.google.com/",
        cancelUrl: "https://www.twitter.com/",
    })
    .then(function(result){
    });
})
*/