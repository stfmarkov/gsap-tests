// Helper Functions
const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

function showOverlay(next) {
  document.querySelector(".overlay").classList.add(next);
  gsap.to(".overlay", {
    scale: 5,
  });
}

function hideOverlay(next) {
  //   document.querySelector(".overlay").classList.add(next);
  gsap.to(".overlay", {
    opacity: 0,
  });
}

barba.init({
  sync: true,
  transitions: [
    {
      name: "fade-transition",
      async leave({ trigger }) {
        const done = this.async();
        showOverlay(trigger.dataset.next);
        await delay(1000);
        done();
      },
      async afterEnter({ next }) {
        const done = this.async();
        hideOverlay(next.namespace);
        await delay(1000);
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
