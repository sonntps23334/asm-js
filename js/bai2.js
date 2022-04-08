var slideItem = document.querySelector('.slide-show').children
var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");
var div = document.getElementById('content');
var slideLength = slideItem.length
var nextBtn = document.querySelector('#next')
var firstBtn = document.querySelector('#first')
var lastBtn = document.querySelector('#last')
var prevBtn = document.querySelector('#prev')
var number = document.querySelector('#number')
var index = 0

nextBtn.onclick = function() {
    handleChangeImage('next')
}
prevBtn.onclick = function() {
    handleChangeImage('prev')
}
lastBtn.onclick = function() {
    handleChangeImage('last')
}
firstBtn.onclick = function() {
    handleChangeImage('first')
}

function handleChangeImage(direction) {
    if (direction == 'next') {
        index++
        if (index == slideLength) {
            index = 0
        }
        number.innerHTML = index + 1
    } 
    else if (direction == 'prev')  {
        index--
        if (index < 0) {
            index = slideLength - 1
        }
        number.innerHTML = index + 1
    }
    else if (direction == 'last')  {
        index=-4;
        if (index < 0) {
            index = slideLength - 1
        }
        number.innerHTML = index + 1
    }else{
        index=0;
        if (index < 0) {
            index = slideLength - 1
        }
        number.innerHTML = index + 1
    }
    for (var i = 0; i < slideLength; i++) {
        slideItem[i].classList.remove('active')
    }
    slideItem[index].classList.add('active')
   
}