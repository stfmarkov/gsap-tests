function logoSpin() {
  if (!document.querySelector(".logo-spin")) return;
  const animationLength = 8500;

  const video = document.querySelector(".logo-spin");
  video.loop = true;
  video.muted = true; // without this line it's not working although I have "muted" in HTML
  let current = 0;

  const videoCoin = document.querySelector(".logo-spin-coin");
  videoCoin.loop = true;
  videoCoin.muted = true; // without this line it's not working although I have "muted" in HTML
  let currentCoin = 0;

  // pin the section
  ScrollTrigger.create({
    trigger: ".logo-spin",
    start: "top top",
    end: `+=${animationLength}px`,
    pin: true,
    onUpdate: rotate,
  });

  // pin the section
  ScrollTrigger.create({
    trigger: ".logo-spin-coin",
    start: "top top",
    end: `+=${animationLength}px`,
    pin: true,
    onUpdate: rotateCoin,
  });

  function rotate(event) {
    const progress = event.progress;
    if (progress <= 0) return;
    current = video.duration * progress;
  }

  function rotateCoin(event) {
    const progress = event.progress;
    if (progress <= 0) return;
    currentCoin = videoCoin.duration * progress;
  }

  setInterval(() => {
    video.currentTime = current || 0;
    videoCoin.currentTime = currentCoin || 0;
  }, 33.33);
}
