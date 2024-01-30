const swiperClassName = ".brand-swiper";
const swiperPaginationClassName = ".swiper-pagination";

function showMore() {
    let element = document.getElementById('menu');
    if (element.style.maxHeight === '188px') {
        element.style.maxHeight = 'none';
        document.getElementById('showMore').innerText='Скрыть'
        document.getElementById('showMore').classList.toggle('close');
    } else {
        element.style.maxHeight = '188px';
        document.getElementById('showMore').innerText='Показать все'
        document.getElementById('showMore').classList.remove('close');
    }
}

var swiper = new Swiper(".swiper", {
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});