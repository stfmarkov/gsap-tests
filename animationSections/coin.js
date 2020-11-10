function initCoin() {
  if (!document.querySelector(".coin")) return;
  const animationLength = 2500;
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

    const step = 1.128; // there are 89 imgs - every img stays for 1.12359550562% of the progress

    const img = Math.ceil(progress / step);

    // console.log(progress);

    document.querySelector(".coin img").style.transform = `translateX(${
      (img - 1) * -1.128
    }%`;
  }

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
