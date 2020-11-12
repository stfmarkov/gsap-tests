function initCoin() {
  if (!document.querySelector(".coin")) return;
  const animationLength = 250;
  // pin the section
  ScrollTrigger.create({
    trigger: "nav",
    start: "top top",
    end: `+=${animationLength}px`,
    // pin: true,
    onUpdate: rotate,
  });

  function rotate(event) {
    const progress = event.progress * 100 - 0.1; // -0.1 is becouse of js math
    if (progress <= 0) return;

    console.log(progress);

    const step = 2.0408; // there are 48 imgs - every img stays for 2.083% of the progress

    const img = Math.ceil(progress / step);

    // console.log(progress);
    if (!document.querySelector(".coin img")) return;
    document.querySelector(
      ".coin:not(.coin2) img"
    ).style.transform = `translateX(${(img - 1) * -2.0408}%`;
  }

  function autorotate(img) {
    const step = 2.0408; // there are 49 imgs - every img stays for 2.083% of the progress

    if (img > 49) {
      img = 1;
    }

    if (!document.querySelector(".coin2 img")) return;

    document.querySelector(".coin2 img").style.transform = `translateX(${
      (img - 1) * -step
    }%)`;

    img += 1;

    setTimeout(() => autorotate(img), 32);
  }

  //   autorotate(1);

  function autorotateTl() {
    const step = 1.0204;
    let numOfImages = 97;
    let img = 0;
    if (img > 97) {
      img = 0;
    }
    let tl = gsap.timeline({
      onComplete: () => tl.restart(),
    });
    for (let img = 0; img < numOfImages; img++) {
      tl.set(".coin2 img", {
        x: `${step * -img}%`,
        delay: 0.025, // the speed of the animation
      });
    }
  }

  autorotateTl();

  //   function rotate(event) {
  //     const progress = event.progress * 100 - 0.1; // -0.1 is becouse of js math
  //     if (progress <= 0) return;

  //     const step = 2.22222222222; // there are 45 imgs - every img stays for 2.222% of the progress

  //     const img = Math.ceil(progress / step);
  //     const row = Math.ceil(img / 5); // 5 imgs per row
  //     const coll = Math.ceil(img - 5 * (row - 1)); // the current img number minus the imgs on previous rows

  //     document.querySelector(".coin img").style.transform = `translate(${
  //       (coll - 1) * -20
  //     }%, ${(row - 1) * -11.1111}%)`;
  //   }
}
