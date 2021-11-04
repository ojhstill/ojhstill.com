const scrollElements = document.querySelectorAll('.js-scroll');
const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

let throttleTimer = false;

const elementInView = (element, dividend = 1) => {
    const elementTop = element.getBoundingClientRect().top;

    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const displayScrollElement = (element) => {
    element.classList.add('scrolled');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((element) => {
        if (elementInView(element, 1.25)) {
            displayScrollElement(element);
        }
    })
}

const throttle = (callback, time) => {
    if (throttleTimer) return;

    throttleTimer = true;
    setTimeout(() => {
        if (typeof callback === 'function') {
            console.log(scrollElements)
            callback();
        }
        throttleTimer = false;
    }, time);
}

window.addEventListener('scroll', () => {
    if (mediaQuery && !mediaQuery.matches) {
        throttle(handleScrollAnimation(), 400);
    }
});