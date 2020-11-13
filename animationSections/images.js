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

    const sceneSpeed = 13; // Higher is slower

    gsap.to(".images-wrapper", {
      x: `${-x / sceneSpeed}%`,
      y: `${-y / sceneSpeed}%`,
      delay: 0.2,
      ease: "power2.out",
    });

    const imgSpeed = 6; // Higher is slower

    gsap.to(".images-card:nth-of-type(even)", {
      x: `${-y / imgSpeed}px`,
      y: `${-x / imgSpeed}px`,
      delay: 0.3,
      ease: "power2.out",
    });

    gsap.to(".images-heading", {
      x: `${y / imgSpeed}%`,
      y: `${x / imgSpeed}%`,
      delay: 0.2,
      ease: "power2.out",
    });
  });
}
