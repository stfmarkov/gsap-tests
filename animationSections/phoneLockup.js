function phoneLockup() {
  //   // pin the section
  //   ScrollTrigger.create({
  //     trigger: ".player__slides",
  //     start: "top top",
  //     end: `+=${animationLength}px`,
  //     pin: true,
  //   });

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".spread-icons",
      pin: ".spread-icons", // pin the trigger element while active
      start: "top top", // when the top of the trigger hits the top of the viewport
      end: "+=3500px",
      scrub: true,
    },
  });

  tl.addLabel("start")
    .from(".spread-icons .center-phone .hardware-container", {
      scale: 9.6,
      duration: 1,
    })
    .from(
      ".side-phone-left figure",
      {
        scale: 9.6,
        x: -2400,
        duration: 1,
      },
      "start+=0.2"
    )
    .from(
      ".side-phone-right figure",
      {
        scale: 9.6,
        x: 2400,
        duration: 1,
      },
      "start+=0.2"
    );
}
