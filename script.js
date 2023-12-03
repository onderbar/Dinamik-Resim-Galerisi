// JavaScript Document


// script.js
window.onload = function() {

  var kartlar = document.querySelectorAll('.kart-container');

 
  var unsplashURL = 'https://source.unsplash.com/random/400x320';

  kartlar.forEach(function(kart) {
    
    var resimElementi = kart.querySelector('#dinamik-resim');

    
    fetch(unsplashURL)
      .then(function(response) {
        return response.url;
      })
      .then(function(resimURL) {
        resimElementi.src = resimURL;
      })
      .catch(function(error) {
        console.error('Resim alınamadı: ', error);
      });
  });
};



// script.js
document.addEventListener("DOMContentLoaded", function () {
  const yildizArkaplan = document.getElementById("yildiz-arkaplan");

  for (let i = 0; i < 50; i++) {
    const yildiz = document.createElement("div");
    yildiz.classList.add("yildiz");
    yildiz.style.left = `${Math.random() * 100}vw`;
    yildiz.style.top = `${Math.random() * 100}vh`;
    yildiz.style.animationDuration = `${Math.random() * 5 + 5}s`;
    yildiz.style.animationDelay = `${Math.random() * 30}s`;
    yildizArkaplan.appendChild(yildiz);
  }
});






