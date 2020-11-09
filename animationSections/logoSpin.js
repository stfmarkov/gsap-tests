function logoSpin() {
  if (!document.querySelector(".logo-spin")) return;
  const animationLength = 3000;
  const animationLengthCoin = 34000 * 1.5;

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
    end: `+=${animationLengthCoin}px`,
    pin: true,
    onUpdate: rotateCoin,
  });

  //   function rotate(event) {
  //     const progress = event.progress;
  //     const scrollposs = (animationLength * progress) / 1000;

  //     if (progress <= 0) return;
  //     current += (scrollposs - current) * 0.1;
  //   }

  //   function rotateCoin(event) {
  //     const progress = event.progress;
  //     const scrollposs = (animationLength * progress) / 1000;

  //     if (progress <= 0) return;
  //     currentCoin += (scrollposs - currentCoin) * 0.1;
  //   }

  function rotate(event) {
    const progress = event.progress;

    if (progress <= 0) return;
    const lenght = video.duration;
    current = lenght * progress;
    console.log(current);
  }

  function rotateCoin(event) {
    const progress = event.progress;

    if (progress <= 0) return;
    const lenght = videoCoin.duration;
    currentCoin = lenght * progress;
    console.log(currentCoin);
  }

  //   function updatevideo() {
  //     window.requestAnimationFrame(() => {
  //       video.currentTime = current || 0;
  //       videoCoin.currentTime = currentCoin || 0;
  //       updatevideo();
  //     });
  //   }

  //   updatevideo();

  //   setInterval(() => {
  //     video.currentTime = current || 0;
  //     videoCoin.currentTime = currentCoin || 0;
  //   }, 33.33);
}
