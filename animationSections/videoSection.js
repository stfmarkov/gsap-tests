function initVideoSection() {
  const animationLength = 8500; // Set the time to complete the animation

  // pin the section
  ScrollTrigger.create({
    trigger: ".player__slides",
    start: "top top",
    end: `+=${animationLength}px`,
    pin: true,
  });

  let tl_v = gsap.timeline({
    scrollTrigger: {
      trigger: ".player-wrapper",
      start: "top top", // when the top of the trigger hits the top of the viewport
      end: `+=${animationLength}px`,
      scrub: true,
      onUpdate: videoAnimationUpdated,
      pinSpacing: false,
    },
  });

  tl_v
    .addLabel("start")
    .to(".player__heading", {
      y: -350,
      opacity: 0,
      duration: 5,
      delay: 3,
    })
    .to(
      ".player-wrapper__player",
      {
        opacity: 1,
        duration: 5,
      },
      "start"
    )
    .addLabel("infoSlide")
    .from(".player__text", {
      opacity: 0,
      y: 350,
      duration: 5,
    })
    .to(
      ".player-wrapper__player",
      {
        opacity: 0.1,
        duration: 5,
      },
      "infoSlide"
    )
    .addLabel("clearVideo")
    .to(".player__text", {
      opacity: 0,
      y: -350,
      duration: 5,
      delay: 3,
    })
    .to(
      ".player-wrapper__player",
      {
        opacity: 1,
        duration: 5,
      },
      "clearVideo"
    )
    .addLabel("revealVideo")
    .to(".player-wrapper", {
      scaleX: 0.25,
      scaleY: 0.25,
      duration: 10,
    })

    .to(
      ".player-wrapper__ui",
      {
        opacity: 1,
        duration: 10,
      },
      "revealVideo"
    )
    .to(
      ".player-wrapper__hardware",
      {
        opacity: 1,
        duration: 10,
      },
      "revealVideo"
    )
    .addLabel("playerExit", "+=1.5")
    .to(".player-wrapper", {
      y: "-=80%",
      duration: 10,
    })
    .from(
      ".player__footer",
      {
        opacity: 0,
        duration: 2,
      },
      "playerExit"
    )
    .to(
      ".player__footer",
      {
        y: -150,
        duration: 5,
      },
      "playerExit+=6"
    )
    .from(
      ".player__footer .subsection-intro, .player__footer .innovation-callout",
      {
        opacity: 0,
        y: 20,
        duration: 7,
      },
      "playerExit"
    )
    .from(
      ".section-video .innovation-callout-keyline",
      {
        scaleX: 0.3,
        duration: 4,
      },
      "playerExit"
    );

  const video = document.querySelector(".player-wrapper__player");
  video.loop = true;
  video.muted = true; // without this line it's not working although I have "muted" in HTML

  let isRuning = false;
  function videoAnimationUpdated(event) {
    if (!isRuning && event.progress > 0.01) {
      video.play();
      isRuning = true;
    }
    if (isRuning && (event.progress > 0.54 || event.progress < 0.1)) {
      video.pause();
      isRuning = false;
    }
  }
}
