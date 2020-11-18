function initParallax() {
    gsap.utils.toArray(".parallax").forEach(layer => {

        let tl = gsap.timeline({
            scrollTrigger: {
              trigger: layer,
              start: "top 80%",
              end: "top top",
              scrub: true,
            //     pin: true,
            },
          });

        const depth = layer.dataset.depth;
        const movement = -(layer.offsetHeight * depth)
        tl.to(layer, {y: movement, ease: "none"});
    });
}