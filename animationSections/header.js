function initHeader() {
  if (!document.querySelector(".header__container")) return;

  const video = document.querySelector(".header video");
  video.loop = true;
  video.muted = true; // without this line it's not working although I have "muted" in HTML
  let isRuning = false;

  ScrollTrigger.matchMedia({
    // desktop
    "(min-width: 1200px)": function () {
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
          onUpdate: videoAnimationUpdated,
        },
      });

      tl.addLabel("start");
      tl.to(".header__block_one", {
        y: -500,
        opacity: 0,
        duration: 1,
      });

      tl.from(
        ".header__block_two",
        {
          y: 500,
          opacity: 0,
          duration: 1,
        },
        "start+=0.5"
      );
      tl.to(
        ".header__screen",
        {
          boxShadow: "rgba(64, 62, 61, 0.15) 0px 5px 15px",
          x: -287,
          y: 0,
          borderRadius: "30px",
          height: 626,
          width: 300,
          duration: 1,
        },
        "start"
      );

      tl.addLabel("scaled");
      tl.to(
        ".header__screen video",
        {
          opacity: 0,
          duration: 1,
        },
        "scaled-=0.25"
      )
        .from(
          ".header__screen svg",
          {
            opacity: 0,
            duration: 1,
          },
          "scaled+=0.5"
        )
        .from(
          ".PortfolioValueText",
          {
            opacity: 0,
            y: 20,
            duration: 0.75,
          },
          "scaled+=0.65"
        )
        .from(
          ".LineGraph",
          {
            opacity: 0,
            scaleY: 0.4,
            duration: 0.75,
          },
          "scaled+=0.65"
        )
        .from(
          ".DepositInsightsBox",
          {
            opacity: 0,
            y: 20,
            duration: 0.25,
          },
          "scaled+=1.2"
        )
        .from(
          ".Advisors__advisor:nth-of-type(1) .Advisors__image",
          {
            y: 50,
            scale: 0.68,
            opacity: 0,
          },
          "scaled+=1.25"
        )
        .from(
          ".Advisors__advisor:nth-of-type(2) .Advisors__image",
          {
            y: 50,
            scale: 0.73,
            opacity: 0,
          },
          "scaled+=1.35"
        )
        .from(
          ".Advisors__advisor:nth-of-type(3) .Advisors__image",
          {
            y: 50,
            scale: 0.7,
            opacity: 0,
          },
          "scaled+=1.45"
        );
    },

    // mobile
    "(max-width: 992px)": function () {
      tl.to(
        ".header__screen",
        {
          boxShadow: "rgba(64, 62, 61, 0.15) 0px 5px 15px",
          x: "-50%",
          y: 0,
          borderRadius: "30px",
          height: 626,
          width: 300,
          duration: 1,
          left: "50vh",
        },
        "start+=0.75"
      );
    },

    // all
    all: function () {},
  });

  //   Moving the video with scrolling
  //   let currentTime;

  //   function videoSetTime(event) {
  //     currentTime = (video.duration * event.progress) / 1.5;
  //   }

  //   setInterval(() => {
  //     video.currentTime = currentTime || 0;
  //   }, 33.33);

  function videoAnimationUpdated(event) {
    if (!isRuning && event.progress > 0) {
      video.play();
      isRuning = true;
    }
    if (isRuning && (event.progress > 0.54 || event.progress < 0)) {
      video.pause();
      isRuning = false;
    }
  }
}
