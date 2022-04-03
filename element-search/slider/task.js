const elementsSliderArrowNext = document.querySelector('.slider__arrow_next');
const elementsSliderArrowPrev = document.querySelector('.slider__arrow_prev');


const allImg = document.querySelectorAll('.slider__item');
let arrayAllImg = Array.from(allImg);

function changeNext () {
    for (let i = 1; i < arrayAllImg.length; i++) {
        arrayAllImg[i].className = 'slider__item slider__item_active';
        arrayAllImg[i-1].className = 'slider__item';
    }
}
 function changePrev () {
    for (let i = 3; i < arrayAllImg.length; i--) {
        arrayAllImg[i].className = 'slider__item slider__item_active';
        arrayAllImg[i+1].className = 'slider__item';
    }
 }

elementsSliderArrowNext.onclick = changeNext;
elementsSliderArrowPrev.onclick = changePrev;
 