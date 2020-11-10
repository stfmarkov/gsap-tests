function initLoader() {
  if (!document.querySelector(".loader")) return;

  let tl = gsap.timeline({ totalDuration: 5 });

  tl.addLabel("start");

  tl.to(".loader__wrapper img", {
    duration: 0.01,
  });

  tl.to(
    ".loader__wrapper img",
    {
      opacity: 1,
      duration: 1,
    },
    "start+=2.25"
  );

  tl.to(
    ".loader .shape1",
    {
      // opacity: 0,
      strokeDashoffset: 0,
      duration: 2,
    },
    "start+=0"
  );
  tl.to(
    ".loader .shape0",
    {
      //   opacity: 0,
      strokeDashoffset: 0,
      duration: 2,
    },
    "start+=0.75"
  );
  tl.addLabel("exit");
  tl.to(".loader__wrapper", {
    y: "-100%",
    duration: 0.5,
  });
  tl.to(
    ".loader__base",
    {
      y: "-100%",
      duration: 0.3,
    },
    "exit+=0.25"
  );
  tl.call(() => {
    document.querySelector(".loader").classList.add("loader__done");
  });
}
