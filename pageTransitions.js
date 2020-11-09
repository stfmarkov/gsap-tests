// Helper Functions
const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

function showOverlay(next, current) {
  let tl = gsap.timeline();
  tl.call(() => {
    const overlay = document.querySelector(".overlay");
    overlay.classList.add(next);
    overlay.style.opacity = 1;
  });
  tl.to(".overlay", {
    scale: 5,
  });
}

function hideOverlay(next) {
  let tl = gsap.timeline();

  tl.call(() => {
    const overlay = document.querySelector(".overlay");
    // overlay.classList.add(next);
    overlay.classList.add("large", next);
  });
  tl.to(".overlay", {
    opacity: 0,
  });
  tl.addLabel("isGone");
  tl.call(() =>
    document.querySelector(".overlay").classList.remove("large", next)
  );
}

barba.init({
  sync: true,
  transitions: [
    {
      name: "fade-transition",
      async leave({ current, trigger }) {
        console.log(current.namespace);
        const done = this.async();
        showOverlay(trigger.dataset.next, current.namespace);
        await delay(1000);
        done();
      },
      async after({ next }) {
        const done = this.async();
        hideOverlay(next.namespace);
        await delay(50);
        done();
      },
    },
  ],
  views: [
    {
      namespace: "home",
      afterEnter(data) {
        ScrollTrigger.refresh();
      },
    },
  ],
});
