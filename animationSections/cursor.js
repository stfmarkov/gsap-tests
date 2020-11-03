function initCursor() {


    TweenMax.fromTo(".dot1", 5, {y:1100}, {y:-500, ease:Linear.easeNone, repeat:-1});
    TweenMax.fromTo(".dot2", 8, {y:1100, rotate: "0deg"}, {y:-700, rotate: "360deg", ease:Linear.easeNone, repeat:-1});
    TweenMax.fromTo(".dot3", 4, {y:1100}, {y:-500, ease:Linear.easeNone, repeat:-1});
    TweenMax.fromTo(".dot4", 7, {y:1100}, {y:-700, ease:Linear.easeNone, repeat:-1});
    TweenMax.fromTo(".dot5", 4, {y:1100}, {y:-700, ease:Linear.easeNone, repeat:-1});
    TweenMax.fromTo(".dot6", 12, {y:1100}, {y:-500, ease:Linear.easeNone, repeat:-1});


  const hoverable = document.querySelectorAll("a, button");
  hoverable.forEach((item) => item.classList.add("hover"));

  var hovers = document.querySelectorAll(".hover");
  var text = document.querySelectorAll(".test-text");
  gsap.set(".cursor", {
    xPercent: -50,
    yPercent: -50,
  });

  var cur = document.querySelector(".cursor");
  var shape1 = document.querySelector(".shape-1");
  var shape2 = document.querySelector(".shape-2");
  var shape3 = document.querySelector(".shape-3");
  var overs = document.querySelectorAll(".over");


  const animateit = function (e) {
    const span = this.querySelector('span');
    const { offsetX: x, offsetY: y } = e,
        { offsetWidth: width, offsetHeight: height } = this,

        move = 40,
        xMove = x / width * (move * 2) - move,
        yMove = y / height * (move * 2) - move;

    span.style.transform = `translate(${xMove}px, ${yMove}px)`;

    if (e.type === 'mouseleave') span.style.transform = '';
  };

  overs.forEach(b => b.addEventListener('mousemove', animateit));
  overs.forEach(b => b.addEventListener('mouseleave', animateit));

  window.addEventListener("mousemove", (e) => {
    gsap.to(cur, 0, {
      x: e.clientX,
      y: e.clientY,
    });
    gsap.to(shape1, 1.3, {
      x: e.clientX,
      y: e.clientY,
    });
    gsap.to(shape2, 1, {
      x: e.clientX,
      y: e.clientY,
    });
    gsap.to(shape3, 0.7, {
      x: e.clientX,
      y: e.clientY,
    });

  });


  hovers.forEach((hover) => {
    hover.addEventListener("mouseenter", function (event) {
      gsap.to(cur, 0.2, {
        scaleX: 4,
        scaleY: 4,
      });

    });
    hover.addEventListener("mouseleave", function (event) {
      gsap.to(cur, 0.2, {
        scaleX: 1,
        scaleY: 1,
      });
    });
  });



  overs.forEach((over) => {
    over.addEventListener("mouseenter", function (e) {
      gsap.to(cur, 0.2, {
        scaleX: 7,
        scaleY: 7,
        opacity: .3,
      });
    });
    over.addEventListener("mouseleave", function (e) {
      gsap.to(cur, 0.2, {
        scaleX: 1,
        scaleY: 1,
        opacity: 1,
      });
    });
  });



  let proxy = { skew: 0 },
      skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
      clamp = gsap.utils.clamp(-3, 3); // don't let the skew go beyond 20 degrees.

  ScrollTrigger.create({
    onUpdate: (self) => {
      let skew = clamp(self.getVelocity() / -1500);
      // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
      if (Math.abs(skew) > Math.abs(proxy.skew)) {
        proxy.skew = skew;
        gsap.to(proxy, {skew: 0, duration: 0.7, ease: "power1", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
      }
    }
  });

// make the right edge "stick" to the scroll bar. force3D: true improves performance
  gsap.set(".skewElem", {transformOrigin: "right center", force3D: true});



}
