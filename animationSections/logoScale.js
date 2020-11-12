function initLogoScale() {
  const animationLength = 5500;
  // pin the section
  ScrollTrigger.create({
    trigger: ".logo-scale",
    start: "top top",
    end: `+=${animationLength}px`,
    pin: true,
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".logo-scale",
      start: "top top", // when the top of the trigger hits the top of the viewport
      end: `+=${animationLength}px`,
      scrub: true,
    },
  });
  tl.to(".logo-scale__logo", {
    scale: 30,
    delay: 0.1,
    // opacity: 0,
  });
}
