function initFloatingImages() {
  if (!document.querySelector(".images-wrapper")) return;

  window.addEventListener("mousemove", (e) => {
    const screen = { width: window.innerWidth, height: window.innerHeight };

    //Pointer position in percent
    const clientXPercent = (e.clientX / screen.width) * 100;
    const clientYPercent = (e.clientY / screen.height) * 100;

    // Pointers position in percent in respective halves of the screen
    // negative values show left half(x) and top half(y)
    const x =
      clientXPercent < 50
        ? (-50 + clientXPercent) * 2
        : (clientXPercent - 50) * 2;
    const y =
      clientYPercent < 50
        ? (-50 + clientYPercent) * 2
        : (clientYPercent - 50) * 2;

    const speed = 13; // Higher is slower

    gsap.to(".images-wrapper", {
      x: `${-x / speed}%`,
      y: `${-y / speed}%`,
      delay: 0.5,
      ease: Power2.easeOut,
    });
  });
}
