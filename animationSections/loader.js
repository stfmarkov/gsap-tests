function initLoader() {
  if (!document.querySelector(".loader")) return;

  let tl = gsap.timeline({ totalDuration: 20 });

  tl.addLabel("start")
    .to(
      ".loader__wrapper img",
      {
        opacity: 1,
        duration: 1,
      },
      "start+=2.35"
    )
    .to(
      ".loader .shape1",
      {
        // opacity: 0,
        strokeDashoffset: 0,
        duration: 2,
      },
      "start"
    )
    .to(
      ".loader .shape0",
      {
        //   opacity: 0,
        strokeDashoffset: 0,
        duration: 2,
      },
      "start+=0.75"
    )
    .addLabel("exit")
    .to(".loader__wrapper", {
      y: "-100%",
      duration: 0.7,
        ease: Power4.easeIn,
    })
    .to(
      ".loader__base",
      {
        y: "-100%",
        duration: 0.7,
          ease: Power4.easeIn,
      },
      "exit+=0.13"
    )
      .to(
          ".overlay",
          {
              y: "-100%",
              duration: 0.7,
              ease: Power4.easeIn,
          },
          "exit+=0.26"
      )
      .to(
          ".last",
          {
              y: "-100%",
              duration: 0.7,
              ease: Power4.easeIn,
          },
          "exit+=0.39"
      )
    .call(() => {
      document.querySelector(".loader").classList.add("loader__done");
    });
}
