function initCursor() {
  const hoverable = document.querySelectorAll("a, button");
  hoverable.forEach((item) => item.classList.add("hover"));

  var hover = document.querySelector(".hover");
  gsap.set(".cursor", {
    xPercent: -50,
    yPercent: -50,
  });

  var cur = document.querySelector(".cursor");

  window.addEventListener("mousemove", (e) => {
    gsap.to(cur, 0.2, {
      x: e.clientX,
      y: e.clientY,
    });
  });

  hover.addEventListener("mouseenter", function (event) {
    gsap.to(cur, 0.2, {
      opacity: 0.9,
      scaleX: 4,
      scaleY: 4,
    });
  });
  hover.addEventListener("mouseleave", function (event) {
    gsap.to(cur, 0.2, {
      opacity: 1,
      scaleX: 1,
      scaleY: 1,
    });
  });
}
