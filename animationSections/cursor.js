// function menu() {
//   TweenMax.to(".mobile-menu ul li a", {y: 0, opacity: 1, stagger: 0.05})
// }

function initCursor() {

    // TweenMax.fromTo(".dot1", 5, {y:1100}, {y:-500, ease:Linear.easeNone, repeat:-1});
    // TweenMax.fromTo(".dot2", 8, {y:1100, rotate: "0deg"}, {y:-700, rotate: "360deg", ease:Linear.easeNone, repeat:-1});
    // TweenMax.fromTo(".dot3", 4, {y:1100}, {y:-500, ease:Linear.easeNone, repeat:-1});
    // TweenMax.fromTo(".dot4", 7, {y:1100, rotate: "0deg"}, {y:-700, rotate: "360deg", ease:Linear.easeNone, repeat:-1});
    // TweenMax.fromTo(".dot5", 4, {y:1100}, {y:-700, ease:Linear.easeNone, repeat:-1});
    // TweenMax.fromTo(".dot6", 12, {y:1100, rotate: "0deg"}, {y:-500, rotate: "360deg", ease:Linear.easeNone, repeat:-1});
    // TweenMax.fromTo(".dot7", 12, {y:1100, rotate: "0deg"}, {y:-700, rotate: "360deg", ease:Linear.easeNone, repeat:-1});


  // const menu_trigger = document.querySelector(".menu-trigger");
  const mobile_menu = document.querySelector(".mobile-menu");

const showBox = new TimelineMax();
//alias for brevity
const sb = showBox;

const hb = new TimelineMax(); //hidebox

  gsap.utils.toArray('.menu-trigger').forEach((element, index) => {

    element.addEventListener("click", function () {
      if (!mobile_menu.classList.contains("active")) {
        var tl_menu = gsap.timeline()
        tl_menu
            .addLabel("menu-start")
            .to(mobile_menu, 0.2, {opacity: 1, height: "7px",ease: "easeIn", }, "menu-start")
            .to(mobile_menu, 0.3, {width: "100%",ease: "easeIn"}, "menu-start")
            .to(mobile_menu, 0.3, {height: "100vh",ease: "easeIn"}, "menu-start+=0.4")
            .to(".mobile-menu .menu-trigger", 0.4, {opacity: 1,ease: "easeIn"}, "menu-start+=0.7")
            .to(".mobile-menu img", 0.3, {opacity: 1,ease: "easeIn"}, "menu-start+=0.5")
            .to(".mobile-menu ul li a", 0.5, {x: 0, opacity: 1, stagger: 0.1,ease: Back.easeOut, transformOrigin: "top left",}, "menu-start+=0.7")
            mobile_menu.classList.add("active")

      } else {
        var tl_menu_close = gsap.timeline()
        tl_menu_close
            .addLabel("menu-start")
            .to(".mobile-menu ul li a", 0.3, {x: 250, opacity: 0, stagger: 0.1, ease: Back.easeIn, transformOrigin: "top left",}, "menu-start")
            .to(".mobile-menu .menu-trigger", 0.4, {opacity: 0,ease: "easeIn"}, "menu-start")
            .to(".mobile-menu img", 0.3, {opacity: 0,ease: "easeIn"}, "menu-start+=0.5")
            .to(mobile_menu, 0.2, {height: "7px",ease: "easeIn"}, "menu-start+=0.8")
            .to(mobile_menu, 0.3, {width: "0%",ease: "easeIn"}, "menu-start+=1.2")
            .to(mobile_menu, 0.3, {height: "0px",ease: "easeIn"}, "menu-start+=1.4")
            .to(mobile_menu, 0.2, {opacity: 0,ease: "easeIn"}, "menu-start+=1.5")
            mobile_menu.classList.remove("active");
      }
    });
  })


  const hoverable = document.querySelectorAll("a, button");
  hoverable.forEach((item) => item.classList.add("over"));

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
        xSkew = (e.clientX/window.innerWidth)-0.5,
        ySkew = (e.clientY/window.innerHeight)-0.5,
        box = document.querySelectorAll(".intro .first");

    TweenLite.to(box, 0, {
      translateY: 40 * yPos,
      translateX: 40 * xPos,
      rotationY: 30 * xSkew,
      rotationX: -30 * ySkew,
      ease: Power3.easeOut,
      transformPerspective: 900,
      transformOrigin: 'center center'
    });

  });


  // hovers.forEach((hover) => {
  //   hover.addEventListener("mouseenter", function (event) {
  //     gsap.to(cur, 0.2, {
  //       scaleX: 4,
  //       scaleY: 4,
  //     });
  //
  //   });
  //   hover.addEventListener("mouseleave", function (event) {
  //     gsap.to(cur, 0.2, {
  //       scaleX: 1,
  //       scaleY: 1,
  //     });
  //   });
  // });



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


  mobile_menu.addEventListener("mouseenter", function (e) {
    gsap.to(cur, 0.1, {
      backgroundColor: "#fff",
    });
  });
  mobile_menu.addEventListener("mouseleave", function (e) {
    gsap.to(cur, 0.1, {
      backgroundColor: "#000",
    });
  })

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
