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

q1 = 0;
document.querySelector('#faq1').addEventListener('click', function() {
    if (q1 == 0){
        document.getElementById('faq1drop').style.display = "block";
        document.getElementById('faq1img').src ="arrow upside.png";
        q1 += 1;
        return
    }
    if (q1 == 1){
        document.getElementById('faq1drop').style.display = "none";
        document.getElementById('faq1img').src ="arrow.png";
        q1 -= 1;
        return
    }
});

q2 = 0;
document.querySelector('#faq2').addEventListener('click', function() {
    if (q2 == 0){
        document.getElementById('faq2drop').style.display = "block";
        document.getElementById('faq2img').src ="arrow upside.png";
        q2 += 1;
        return
    }
    if (q2 == 1){
        document.getElementById('faq2drop').style.display = "none";
        document.getElementById('faq2img').src ="arrow.png";
        q2 -= 1;
        return
    }
});

q3 = 0;
document.querySelector('#faq3').addEventListener('click', function() {
    if (q3 == 0){
        document.getElementById('faq3drop').style.display = "block";
        document.getElementById('faq3img').src ="arrow upside.png";
        q3 += 1;
        return
    }
    if (q3 == 1){
        document.getElementById('faq3drop').style.display = "none";
        document.getElementById('faq3img').src ="arrow.png";
        q3 -= 1;
        return
    }
});

q4 = 0;
document.querySelector('#faq4').addEventListener('click', function() {
    if (q4 == 0){
        document.getElementById('faq4drop').style.display = "block";
        document.getElementById('faq4img').src ="arrow upside.png";
        q4 += 1;
        return
    }
    if (q4 == 1){
        document.getElementById('faq4drop').style.display = "none";
        document.getElementById('faq4img').src ="arrow.png";
        q4 -= 1;
        return
    }
});

q5 = 0;
document.querySelector('#faq5').addEventListener('click', function() {
    if (q5 == 0){
        document.getElementById('faq5drop').style.display = "block";
        document.getElementById('faq5img').src ="arrow upside.png";
        q5 += 1;
        return
    }
    if (q5 == 1){
        document.getElementById('faq5drop').style.display = "none";
        document.getElementById('faq5img').src ="arrow.png";
        q5 -= 1;
        return
    }
});

q6 = 0;
document.querySelector('#faq6').addEventListener('click', function() {
    if (q6 == 0){
        document.getElementById('faq6drop').style.display = "block";
        document.getElementById('faq6img').src ="arrow upside.png";
        q6 += 1;
        return
    }
    if (q6 == 1){
        document.getElementById('faq6drop').style.display = "none";
        document.getElementById('faq6img').src ="arrow.png";
        q6 -= 1;
        return
    }
});

q7 = 0;
document.querySelector('#faq7').addEventListener('click', function() {
    if (q7 == 0){
        document.getElementById('faq7drop').style.display = "block";
        document.getElementById('faq7img').src ="arrow upside.png";
        q7 += 1;
        return;
    }
    if (q7 == 1){
        document.getElementById('faq7drop').style.display = "none";
        document.getElementById('faq7img').src ="arrow.png";
        q7 -= 1;
        return;
    }
});

q8 = 0;
document.querySelector('#faq8').addEventListener('click', function() {
    if (q8 == 0){
        document.getElementById('faq8drop').style.display = "block";
        document.getElementById('faq8img').src ="arrow upside.png";
        q8 += 1;
        return;
    }
    if (q8 == 1){
        document.getElementById('faq8drop').style.display = "none";
        document.getElementById('faq8img').src ="arrow.png";
        q8 -= 1;
        return;
    }
});

q9 = 0;
document.querySelector('#faq9').addEventListener('click', function() {
    if (q9 == 0){
        document.getElementById('faq9drop').style.display = "block";
        document.getElementById('faq9img').src ="arrow upside.png";
        q9 += 1;
        return;
    }
    if (q9 == 1){
        document.getElementById('faq9drop').style.display = "none";
        document.getElementById('faq9img').src ="arrow.png";
        q9 -= 1;
        return;
    }
});
