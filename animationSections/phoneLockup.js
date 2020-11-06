function phoneLockup() {
  if (!document.querySelector(".spread-icons")) return;

  const animationLength = 3500;
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".spread-icons",
      pin: ".spread-icons", // pin the trigger element while active
      start: "top top", // when the top of the trigger hits the top of the viewport
      end: `+=${animationLength}px`,
      scrub: true,
    },
  });

  //TODO: Find out how to start animation before the pin

  tl.addLabel("start")
    .from(".spread-icons .section-content", {
      y: 200,
      opacity: 0,
      duration: 1,
    })
    .to(".spread-icons .section-content", {
      y: -200,
      opacity: 0,
      duration: 1,
    })
    .addLabel("scale", "-=0.5")
    .from(
      ".spread-icons .center-phone .hardware-container",
      {
        scale: 9.6,
        duration: 1,
      },
      "scale"
    )
    .from(
      ".side-phone-left figure",
      {
        scale: 9.6,
        x: -2400,
        duration: 1,
      },
      "scale+=0.2"
    )
    .from(
      ".side-phone-right figure",
      {
        scale: 9.6,
        x: 2400,
        duration: 1,
      },
      "scale+=0.2"
    )
    .from(
      ".image-app-chiclet-clock",
      { x: -122, y: -288, scale: 2, duration: 0.8 },
      "scale+=0.2"
    )
    .from(
      ".image-app-chiclet-camera",
      { x: -123, y: -51, scale: 1.4, duration: 0.8 },
      "scale+=0.2"
    )
    .from(
      ".image-app-chiclet-tv",
      { x: -140, y: -78, scale: 1.8, duration: 0.8 },
      "scale+=0.2"
    )
    .from(
      ".image-app-chiclet-stocks",
      { x: -104, y: -45, scale: 1.5, duration: 0.8 },
      "scale+=0.2"
    )
    .from(
      ".image-app-widget-activity",
      { x: 409, y: -400, scale: 4.8, duration: 0.8 },
      "scale"
    )
    .from(
      ".image-app-widget-photos",
      { x: -470, y: -352, scale: 2.2, duration: 0.8 },
      "scale+=0.2"
    )
    .from(
      ".image-app-chiclet-mail",
      { x: 126, y: 21, scale: 1.8, duration: 0.8 },
      "scale+=0.2"
    )
    .from(
      ".image-app-chiclet-files",
      { x: 361, y: -45, scale: 2.5, duration: 0.8 },
      "scale+=0.2"
    )
    .from(
      ".image-app-chiclet-appstore",
      { x: 182, y: 104, scale: 2.6, duration: 0.8 },
      "scale+=0.2"
    )
    .from(
      ".image-app-chiclet-weather",
      { x: 372, y: 5, scale: 2.2, duration: 0.8 },
      "scale+=0.2"
    )
    .from(
      ".image-app-chiclet-health",
      { x: -167, y: 66, scale: 2.2, duration: 0.8 },
      "scale+=0.2"
    )
    .from(
      ".image-app-chiclet-home",
      { x: -117, y: 30, scale: 1.7, duration: 0.8 },
      "scale+=0.2"
    )
    .from(
      ".image-app-chiclet-news",
      { x: -237, y: 265, scale: 2, duration: 0.8 },
      "scale+=0.2"
    )
    .from(
      ".image-app-chiclet-photos",
      { x: -131, y: 65, scale: 1.9, duration: 0.8 },
      "scale+=0.2"
    )
    .from(
      ".image-app-widget-music",
      { x: 341, y: 970, scale: 4.8, duration: 0.8 },
      "scale+=0.2"
    )
    .addLabel("showCopy")
    .from(".side-phone-left .content-copy", {
      y: 100,
      opacity: 0,
      duration: 0.5,
    })
    .from(
      ".center-phone .content-copy",
      {
        y: 100,
        opacity: 0,
        duration: 0.5,
      },
      "showCopy+=0.25"
    )
    .from(
      ".side-phone-right .content-copy",
      {
        y: 100,
        opacity: 0,
        duration: 0.5,
      },
      "showCopy+=0.5"
    );
}
