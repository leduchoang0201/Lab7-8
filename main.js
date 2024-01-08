document.addEventListener('DOMContentLoaded', function() {
    const listImage = document.querySelector('.list-image');
    const imgs = document.querySelectorAll('.list-image img');
    const btnLeft = document.querySelector('.btn-left');
    const btnRight = document.querySelector('.btn-right');
    const length = imgs.length;
    let current = 0;
    let width = imgs[0].offsetWidth;

    btnRight.addEventListener('click', () => {
        if (current === length - 1) {
            current = 0;
        } else {
            current++;
        }
        listImage.style.transform = `translateX(${-width * current}px)`;
    });

    btnLeft.addEventListener('click', () => {
        if (current === 0) {
            current = length - 1;
        } else {
            current--;
        }
        listImage.style.transform = `translateX(${-width * current}px)`;
    });
});
