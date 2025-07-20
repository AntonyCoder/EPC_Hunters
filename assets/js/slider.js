const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

const steps = document.querySelector('.steps');
const stepsAmount = steps.children.length;
const stepWidth = document.querySelector('.step').offsetWidth + 40;

let scrollAmount = 0;
let slideNumber = 1;

//Обновление состояния кнопок
function updateButtons() {
    prevButton.disabled = slideNumber === 1;
    nextButton.disabled = slideNumber === stepsAmount
}

updateButtons();

//Слушатель события нажатия на кнопку далее
nextButton.addEventListener('click', () => {
    if (slideNumber < stepsAmount) {
        slideNumber++;
        scrollAmount += stepWidth;
        steps.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        updateButtons();
    }
})

//Слушатель события нажатия на кнопку назад
prevButton.addEventListener('click', () => {
    if (slideNumber > 1) {
        slideNumber--;
        scrollAmount -= stepWidth;
        steps.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        updateButtons();
    }
})

//Слушатель события скрола слайдера
steps.addEventListener('scroll', () => {
    const currentIndex = Math.round(steps.scrollLeft / stepWidth);
    slideNumber = currentIndex + 1;
    scrollAmount = steps.scrollLeft;
    updateButtons();
})
