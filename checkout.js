var list1 = JSON.parse(localStorage.getItem('listy'));
var totaly = JSON.parse(localStorage.getItem('total'));
var sum = JSON.parse(localStorage.getItem('sumo'));

var cartCount1 = document.getElementById('cart-count');
cartCount1.innerHTML = parseInt(totaly);
var c1 = 0, c2 = 0, c3 = 0, c4 = 0, c5 = 0, c6 = 0, c7 = 0, c8 = 0, c9 = 0, c10 = 0;
for (var i = 0; i < list1.length; i++) {
    if (list1[i] == 1)
        c1++;
    else if (list1[i] == 2)
        c2++;
    else if (list1[i] == 3)
        c3++;
    else if (list1[i] == 4)
        c4++;
    else if (list1[i] == 5)
        c5++;
    else if (list1[i] == 6)
        c6++;
    else if (list1[i] == 7)
        c7++;
    else if (list1[i] == 8)
        c8++;
    else if (list1[i] == 9)
        c9++;
    else if (list1[i] == 10)
        c10++;
}
function remdup(array){
    var uniqueArray = [];
    for(i=0; i < array.length; i++){
        if(uniqueArray.indexOf(array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}
list1 = remdup(list1);


var prodWrap = document.getElementById('products-wrap');
for (var i = 0; i < list1.length; i++) {
    var http = new XMLHttpRequest();
    http.open('GET', 'https://5d76bf96515d1a0014085cf9.mockapi.io/product/' + list1[i], true);
    http.onload = function () {
        var data = JSON.parse(this.response);

        var newdiv = document.createElement('div');
        newdiv.classList.add('prod');

        var newimg = document.createElement('img');
        newimg.classList.add('prod-img');

        var newdiv1 = document.createElement('div');

        var newh3 = document.createElement('h3');
        newh3.classList.add('prod-head');


        var newh4 = document.createElement('h4');
        if (data.id == 1)
            newh4.innerHTML = 'x' + c1;
        else if (data.id == 2)
            newh4.innerHTML = 'x' + c2;
        else if (data.id == 3)
            newh4.innerHTML = 'x' + c3;
        else if (data.id == 4)
            newh4.innerHTML = 'x' + c4;
        else if (data.id == 5)
            newh4.innerHTML = 'x' + c5;
        else if (data.id == 6)
            newh4.innerHTML = 'x' + c6;
        else if (data.id == 7)
            newh4.innerHTML = 'x' + c7;
        else if (data.id == 8)
            newh4.innerHTML = 'x' + c8;
        else if (data.id == 9)
            newh4.innerHTML = 'x' + c9;
        else if (data.id == 10)
            newh4.innerHTML = 'x' + c10;
        newh4.classList.add('prod-count');


        var newp = document.createElement('p');
        newp.classList.add('prod-amount');
        newh3.innerHTML = data.name;
        newp.innerHTML = 'Amount: Rs. ' + data.price;
        newimg.src = data.preview;
        newdiv1.appendChild(newh3);
        newdiv1.appendChild(newh4);
        newdiv1.appendChild(newp);
        newdiv.appendChild(newimg);
        newdiv.appendChild(newdiv1);
        prodWrap.appendChild(newdiv);
    }
    http.send();
}

var totalItems = document.getElementById('total-items');
totalItems.innerHTML = "Total Items: " + totaly;
var totalAmount = document.getElementById('total-amount');
totalAmount.innerHTML = 'Amount: Rs. ' + sum;


var totalBtn = document.getElementById('total-btn');
totalBtn.addEventListener('click', function () {
    window.location.href = "confirmation.html";
});