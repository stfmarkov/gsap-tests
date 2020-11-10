gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  initAnimations();
});

barba.hooks.after(() => {
  initAnimations();
});

function initAnimations(params) {
  initCursor();
  initHeader();
  init5GSection();
  initVideoSection();
  phoneLockup();
  initCoin();
  logoSpin();
  initLoader();
}
