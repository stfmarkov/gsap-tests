function initCursor() {



    // TweenMax.fromTo(".dot1", 5, {y:1100}, {y:-500, ease:Linear.easeNone, repeat:-1});
    // TweenMax.fromTo(".dot2", 8, {y:1100, rotate: "0deg"}, {y:-700, rotate: "360deg", ease:Linear.easeNone, repeat:-1});
    // TweenMax.fromTo(".dot3", 4, {y:1100}, {y:-500, ease:Linear.easeNone, repeat:-1});
    // TweenMax.fromTo(".dot4", 7, {y:1100, rotate: "0deg"}, {y:-700, rotate: "360deg", ease:Linear.easeNone, repeat:-1});
    // TweenMax.fromTo(".dot5", 4, {y:1100}, {y:-700, ease:Linear.easeNone, repeat:-1});
    // TweenMax.fromTo(".dot6", 12, {y:1100, rotate: "0deg"}, {y:-500, rotate: "360deg", ease:Linear.easeNone, repeat:-1});
    // TweenMax.fromTo(".dot7", 12, {y:1100, rotate: "0deg"}, {y:-700, rotate: "360deg", ease:Linear.easeNone, repeat:-1});



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


  // const animateit = function (e) {
  //   const span = this.querySelector('span');
  //   const { offsetX: x, offsetY: y } = e,
  //       { offsetWidth: width, offsetHeight: height } = this,
  //
  //       move = 30,
  //       xMove = x / width * (move * 2) - move,
  //       yMove = y / height * (move * 2) - move;
  //
  //   span.style.transform = `translate(${xMove}px, ${yMove}px)`;
  //
  //   if (e.type === 'mouseleave') span.style.transform = '';
  // };

  // overs.forEach(b => b.addEventListener('mousemove', animateit));
  // overs.forEach(b => b.addEventListener('mouseleave', animateit));


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


    var xPos = (e.clientX/window.innerWidth)-0.5,
        yPos = (e.clientY/window.innerHeight)-0.5,
        // xSkew = (e.clientX/window.innerWidth)-0.5,
        // ySkew = (e.clientY/window.innerHeight)-0.5,
        box = document.querySelectorAll(".intro h1");

    TweenLite.to(box, 0, {
      translateY: 50 * yPos,
      translateX: -50 * xPos,
      // rotationY: 30 * xSkew,
      // rotationX: -30 * ySkew,
      ease: Power3.easeOut,
      transformPerspective: 900,
      transformOrigin: 'center center'
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


  // let tl_coin = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".coin-section",
  //     start: "top top",
  //     scrub: 0.25,
  //     pin: true,
  //   },
  // });
  //
  // tl_coin.addLabel("start-coin")
  //     .to(".coin-section h2", {y: "-500px", duration: 1,})
  //     .to(".coin-section h2", {opacity: 0, duration: 0.4,}, "-=1")



}
