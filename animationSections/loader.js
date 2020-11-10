function initLoader() {
  if (!document.querySelector(".loader")) return;

  let tl = gsap.timeline({ totalDuration: 5 });

  tl.addLabel("start");

  tl.to(
    ".loader__wrapper img",
    {
      opacity: 1,
      duration: 2,
    },
    "start+=1.5"
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
  tl.to(".loader", {
    opacity: 0,
  });
  tl.call(() => {
    document.querySelector(".loader").classList.add("loader__done");
  });
}
