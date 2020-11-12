function initLogoScale() {
  const animationLength = 2500;
  // pin the section
  ScrollTrigger.create({
    trigger: ".logo-scale",
    start: "top top",
    end: `+=${animationLength}px`,
    pin: true,
  });
}
