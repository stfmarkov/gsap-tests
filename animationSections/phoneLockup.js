function phoneLockup() {
  let tl_icons = gsap.timeline({
    scrollTrigger: {
      trigger: ".spread-icons",
      pin: ".spread-icons", // pin the trigger element while active
      start: "top top", // when the top of the trigger hits the top of the viewport
      end: "+=3500px",
      scrub: true,
    },
  });

  tl_icons.from(".spread-icons .phone-lockup-container", {
    scaleX: 1.1,
    scaleY: 1.1,
  });
}
