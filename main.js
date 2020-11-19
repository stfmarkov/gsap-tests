gsap.registerPlugin(ScrollTrigger);

barbaInit();
initLoader();

window.addEventListener("load", function () {
    setupAnimations();
});

function setupAnimations(params) {
    phoneLockup();
    initCursor();
    init5GSection();
    initVideoSection();
    initLogoScale();
    initHorizontalScroll();
    initParallax();
    preventReloading();
}
