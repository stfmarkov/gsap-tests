gsap.registerPlugin(ScrollTrigger);

barba.init({
  transitions: [
    {
      name: "opacity-transition",
      leave(data) {

        let tl = gsap.timeline({ totalDuration: 20 });


        return tl.addLabel("start")
            .to(".loader__wrapper img", {scaleX: 1.5,scaleY: 1.5, duration: 1,}, "start+=0.7")
            .to(".loader__wrapper svg", {scaleX: 1.5,scaleY: 1.5, duration: 1,}, "start+=0.7")
            .to(".loader__wrapper img", {opacity: 1, duration: 0.7, ease: Power3.easeIn,}, "start+=1.25")
            .to(".loader .shape1", {strokeDashoffset: 0, duration: 1.5, ease: Power3.easeIn,}, "start")
            .to(".loader .shape0", {strokeDashoffset: 0, duration: 1.3, ease: Power3.easeIn,}, "start+=0.15")
            .addLabel("exit")
            .to(".loader__wrapper", {y: "-100%", duration: 0.7, ease: Power4.easeIn,})
            .to(".loader__base", {y: "-100%", duration: 0.7, ease: Power4.easeIn,}, "exit+=0.13")
            .to(".overlay", {y: "-100%", duration: 0.7, ease: Power4.easeIn,}, "exit+=0.26")
            .call(() => {
                home();
            })
            .to(".last", {y: "-100%", duration: 0.7, ease: Power4.easeIn,}, "exit+=0.39")
            .call(() => {
                document.querySelector(".loader").classList.add("loader__done");
            })
        // return gsap.to(data.current.container, {
        //   opacity: 0,
        // });
      },
      enter(data) {
        return gsap.from(data.next.container, {
          opacity: 0,
        });
      },
    },
  ],
});

window.addEventListener("load", function () {
  phoneLockup();
  initCursor();
  init5GSection();
  initVideoSection();
  initLogoScale();
});
