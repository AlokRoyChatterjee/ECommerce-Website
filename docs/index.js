
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);                   
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


var http = new XMLHttpRequest();
http.open('GET','https://5d76bf96515d1a0014085cf9.mockapi.io/product',true);  //getting products info from api
http.onload = function() {
    var data = JSON.parse(this.response);
    for(var i=1;i<=10;i++){
        var imgu = document.querySelector('#i'+i+' img');
        var ct = document.querySelector('#i'+i+' .clothesname');
        var cb = document.querySelector('#i'+i+' .clothesitemname');
        var cp = document.querySelector('#i'+i+' .itemnumber');
        imgu.src = data[i-1].preview;
        ct.innerHTML = data[i-1].name;
        cb.innerHTML = data[i-1].brand;
        cp.innerHTML =  data[i-1].price+" dollars";
    }
}
http.send();


var imgury = document.querySelectorAll('.imgur');

for(var i=0;i<10;i++){
    imgury[i].addEventListener('click',function(){
        
        var idarr = this.id.split('');
        idarr.splice(0,1);
        var id = idarr.join('');
        localStorage.setItem('idarr', JSON.stringify(id));
        window.location.assign("product_details.html");
    });
}
var cart = document.getElementById('cart');
cart.addEventListener('click',function(){
    window.location.assign("checkout.html");
});
