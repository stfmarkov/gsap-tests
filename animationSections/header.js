function initHeader() {
  const animationLength = 3500;
  // pin the section
  ScrollTrigger.create({
    trigger: ".header",
    start: "top top",
    end: `+=${animationLength}px`,
    pin: true,
  });

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".header__container",
      //   pin: ".header", // pin the trigger element while active
      start: "top top", // when the top of the trigger hits the top of the viewport
      end: `+=${animationLength}px`,
      scrub: true,
      markers: true,
    },
  });

  tl.to(".header__block_one", {
    y: -500,
    opacity: 0,
    duration: 1,
  }).from(".header__block_two", {
    y: 500,
    opacity: 0,
    duration: 1,
  });
}
