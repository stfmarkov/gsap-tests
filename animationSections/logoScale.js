function initLogoScale() {
  const video = document.querySelector(".logo-scale__video video");
  video.loop = true;
  video.muted = true; // without this line it's not working although I have "muted" in HTML
  video.play();

  const animationLengthScale = 4000;
  // pin the section
  ScrollTrigger.create({
    trigger: ".logo-scale",
    start: "top top",
    end: `+=${animationLengthScale}px`,
    pin: true,
    onToggle: changeBackground,
  });

  const tscale = gsap.timeline({
    scrollTrigger: {
      trigger: ".logo-scale",
      start: "top top", // when the top of the trigger hits the top of the viewport
      end: `+=${animationLengthScale}px`,
      scrub: true,
    },
  });

  //   tscale.call(changeBackground);
  tscale.addLabel("start");
  tscale.to(".logo-scale__logo span", {
    scale: 200,
    duration: 5,
    delay: 0.5,
    ease: "none",
    // opacity: 0,
  });

  // tl.to(
  //   ".logo-scale__logo svg",
  //   {
  //     backgroundColor: "rgba(0, 94, 127, 0)",
  //     duration: 0.7,
  //     ease: Power2.easeIn,
  //   },
  //   "start-=0.0001"
  // );

  tscale.to(
    ".logo-scale__logo .filler",
    {
      backgroundColor: "rgb(26 26 26 / 0%)",
      duration: 1,
      delay: 0.5,

      ease: "none",
    },
    "start+=0.25"
  );
  tscale.to(
    ".logo-scale__logo .filler",
    {
      backgroundColor: "rgba(255, 255, 255, 1)",
      duration: 0.8,
      delay: 0.5,

      ease: "none",
    },
    "start+=2"
  );
  tscale.call(write, null, "start+=3");
  // tscale.to(".logo-scale__logo .filler-white", {backgroundColor: "rgba(255, 255, 255, 1)", duration: 0.8, ease:Linear.easeNone,}, "start+=2")
  //   tscale.from(
  //     ".action-call-text",
  //     { opacity: 0, y: 200, duration: 0.3, delay: 0.5, ease: Linear.easeNone },
  //     "start+=2.2"
  //   );
  //   tscale.to(
  //     ".action-call-text",
  //     { opacity: 1, y: 0, duration: 0.3, delay: 0.5, ease: Linear.easeNone },
  //     "start+=2.2"
  //   );

  //   const tlwhite = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".action-call-text",
  //       start: "top 50%",
  //       //   onToggle: test,
  //     },
  //   });

  //   gsap.from(
  //     words,
  //     {
  //       duration: 0.15,
  //       delay: 0.5,

  //       opacity: 0,
  //       y: 5,
  //       transformOrigin: "top left",
  //       ease: "easeIn",
  //       stagger: 0.02,
  //     },
  //     "+=2"
  //   );

  mySplitText = new SplitText(".action-call-text", { type: "words,chars" });
  words = mySplitText.chars;

  function write(params) {
    let toSet = {
      opacity: 1,
      y: 0,
    };
    if (words[0].style.opacity == 1) {
      toSet = {
        opacity: 0,
        y: 50,
      };
    }
    gsap.to(words, {
      duration: 0.15,
      opacity: toSet.opacity,
      y: toSet.y,
      transformOrigin: "top left",
      ease: "easeIn",
      stagger: 0.02,
    });
  }

  function changeBackground(e) {
    if (e.progress == 1) return;
    let color;
    if (e.direction > 0) color = "rgb(26 26 26)";
    else color = "rgb(255, 255, 255)";
    gsap.to(".logo-scale__logo .filler", {
      backgroundColor: color,
      duration: 0.2,
      ease: Linear.easeNone,
    });
  }
}
