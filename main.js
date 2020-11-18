gsap.registerPlugin(ScrollTrigger);

barba.init({
  transitions: [
    {
      name: "opacity-transition",
      leave(data) {

        let tl = gsap.timeline();


        return tl.addLabel("start")
            .to(".loader__wrapper *", {opacity: 0, duration: 0,})
            .to(".loader__wrapper", {y: "100%", duration: 0,})
            .to(".loader__base", {y: "100%", duration: 0}, )
            .to(".overlay", {y: "100%", duration: 0,},)
            .to(".last", {y: "100%", duration: 0,})

            .addLabel("enter-=1")
            .to(".last", {y: "0", duration: 0.7, ease: Power1.easeIn,},"enter")
            .to(".overlay", {y: "0", duration: 0.7, ease: Power1.easeIn,},"enter+=0.13" )
            .to(".loader__base", {y: "0", duration: 0.7, ease: Power1.easeIn,},"enter+=0.26")
            .to(".loader__wrapper", {y: "0", duration: 0.7, ease: Power1.easeIn,},"enter+=0.39")

            .call(() => {
                document.querySelector(".loader").classList.add("loader__done");
            })
        // return gsap.to(data.current.container, {
        //   opacity: 0,
        // });
      },
      after(data) {
        setupAnimations();
        let tlE = gsap.timeline();

        return tlE.addLabel("start")
        .addLabel("exit")
        .to(".loader__wrapper", {y: "-100%", duration: 0.7, ease: Power4.easeIn,})
        .to(".loader__base", {y: "-100%", duration: 0.7, ease: Power4.easeIn,}, "exit+=0.13")
        .to(".overlay", {y: "-100%", duration: 0.7, ease: Power4.easeIn,}, "exit+=0.26")
        .to(".last", {y: "-100%", duration: 0.7, ease: Power4.easeIn,}, "exit+=0.39")
        .call(() => {
            document.querySelector(".loader").classList.add("loader__done");
        })
      },
    },
  ],
});

window.addEventListener("load", function () {
    initLoader();
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
}
