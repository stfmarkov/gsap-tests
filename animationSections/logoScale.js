function initLogoScale() {
  const video = document.querySelector(".logo-scale__video video");
  video.loop = true;
  video.muted = true; // without this line it's not working although I have "muted" in HTML
  video.play();

  const animationLength = 4500;
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

  tl.addLabel("start");
  tl.to(".logo-scale__logo span", {
    scale: 200,
    duration: 1,
    ease: Power0.easeNone,
    // opacity: 0,
  });

  tl.to(
    ".logo-scale__logo svg",
    {
      backgroundColor: "rgba(0, 94, 127, 0)",
      duration: 0.25,
      ease: Power2.easeIn,
    },
    "start+=0.00001"
  );
  tl.to(
    ".logo-scale__logo .filler",
    {
      backgroundColor: "rgba(0, 94, 127, 0)",
      duration: 0.25,
      ease: Power2.easeIn,
    },
    "start+=0.00001"
  );
}
