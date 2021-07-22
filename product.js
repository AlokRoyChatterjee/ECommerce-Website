var id1 = JSON.parse(localStorage.getItem('idass'));
var id = parseInt(id1);

var list1 = JSON.parse(localStorage.getItem('listy'));
if(list1 == null){
    list1 = [];
}
var totaly = JSON.parse(localStorage.getItem('total'));
var sum = JSON.parse(localStorage.getItem('sumo'));

var cartCount = document.getElementById('cart-count');
if(totaly == null){
    cartCount.innerHTML = 0;
}else{
    cartCount.innerHTML = parseInt(totaly);
}

var http = new XMLHttpRequest();
http.open('GET', 'https://5d76bf96515d1a0014085cf9.mockapi.io/product/' + id, true);
http.onload = function () {
    var data = JSON.parse(this.response);
    var bigimg = document.querySelector('#image img');
    bigimg.src = data.preview;
    var head = document.getElementById('head');
    head.innerHTML = data.name;
    var sechead = document.getElementById('sechead');
    sechead.innerHTML = data.brand;
    var secprice = document.getElementById('secprice');
    secprice.innerHTML = "Price: Rs. " + data.price;
    var secdesc = document.getElementById('secdesc');
    secdesc.innerHTML = data.description;
    var smimg = document.getElementsByClassName('smimg');


    for (var i = 0; i < 5; i++) {
        smimg[i].src = data.photos[i];
    }
    for (var j = 0; j < 5; j++) {
        smimg[j].style.border = '2px solid white';
    }
    for (var i = 0; i < 5; i++) {
        smimg[i].addEventListener('click', function () {
            var idarr = this.id.split('');
            idarr.splice(0, 1);
            var id = idarr.join('');
            bigimg.src = data.photos[id - 1];
            for (var j = 0; j < 5; j++) {
                smimg[j].style.border = '2px solid white';
            }
            smimg[id - 1].style.border = '2px solid blue';
        });
    }
    var addBtn = document.getElementById('btn');
    addBtn.addEventListener('click', function () {
        cartCount.innerHTML = parseInt(cartCount.innerHTML) + 1;
        sum = sum + data.price;
        totaly += 1;
        list1.push(data.id);
        localStorage.setItem('listy', JSON.stringify(list1));
        localStorage.setItem('total', JSON.stringify(totaly));
        localStorage.setItem('sumo', JSON.stringify(sum));
    });
}
http.send();


var cart = document.getElementById('cart');
cart.addEventListener('click',function(){
    window.location.assign("checkout.html");
});
