

// tl.to(".logo-scale__logo span", {
//   scale: 120,
//   duration: 6,
//   ease: Power0.easeNone,
//   // opacity: 0,
// });
// tl.to(
//     ".logo-scale__logo svg",
//     {
//       backgroundColor: "rgb(208 172 150 / 0%)",
//       duration: 0.7,
//       ease: Power2.easeIn,
//     },
//     "start+=0.1"
// );
// tl.to(
//     ".logo-scale__logo .filler",
//     {
//       backgroundColor: "rgb(26 26 26 / 0%)",
//       duration: 0.7,
//       ease: Power2.easeIn,
//     },
//     "start+=0.1"
// );


function init5GSection() {

    // function autorotate(progress) {
    //     if (progress > 98) {
    //         console.log(progress);
    //         progress = 0;
    //     }
    //     const step = 2.0408; // there are 48 imgs - every img stays for 2.083% of the progress
    //
    //     const img = Math.ceil(progress / step);
    //
    //     if (!document.querySelector(".coin2 img")) return;
    //     document.querySelector(".coin2 img").style.transform = `translateX(${
    //   (img - 1) * -2.0408
    // }%`;
    //
    //     progress += 1;
    //
    //     setTimeout(() => autorotate(progress), 5);
    //     // window.requestAnimationFrame(autorotate(progress++));
    // }
    //
    // autorotate(0);


    if (!document.querySelector(".coin-box")) return;
    const animationLength = 750;
    // pin the section
    ScrollTrigger.create({
        trigger: ".coin-section",
        start: "top top",
        end: `+=${animationLength}px`,
        pin: true,
        onUpdate: rotate,
    });

    function rotate(event) {
        const progress = event.progress * 100 - 0.1; // -0.1 is becouse of js math
        if (progress <= 0) return;

        console.log(progress);

        const step = 2.0408; // there are 48 imgs - every img stays for 2.083% of the progress

        const img = Math.ceil(progress / step);

        // console.log(progress);
        if (!document.querySelector(".coin-box img")) return;
        document.querySelector(
            ".coin-box img"
        ).style.transform = `translateX(${(img - 1) * -2.0408}%`;
    }


    // document.querySelector('video').playbackRate = 2.5;
    if (!document.querySelector(".loader")) return;

    let tl = gsap.timeline({ totalDuration: 20 });


    tl.addLabel("start")
        .to(".loader__wrapper img", {scaleX: 1.5,scaleY: 1.5, duration: 1,}, "start+=0.7")
        .to(".loader__wrapper svg", {scaleX: 1.5,scaleY: 1.5, duration: 1,}, "start+=0.7")
        .to(".loader__wrapper img", {opacity: 1, duration: 0.7, ease: Power3.easeIn,}, "start+=1.25")
        .to(".loader .shape1", {strokeDashoffset: 0, duration: 1.5, ease: Power3.easeIn,}, "start")
        .to(".loader .shape0", {strokeDashoffset: 0, duration: 1.3, ease: Power3.easeIn,}, "start+=0.15")
        .addLabel("exit")
        .to(".loader__wrapper", {y: "-100%", duration: 0.7, ease: Power4.easeIn,})
        .to(".loader__base", {y: "-100%", duration: 0.7, ease: Power4.easeIn,}, "exit+=0.13")
        .to(".overlay", {y: "-100%", duration: 0.7, ease: Power4.easeIn,}, "exit+=0.26")
        .call(() => {
            home();
        })
        .to(".last", {y: "-100%", duration: 0.7, ease: Power4.easeIn,}, "exit+=0.39")
        .call(() => {
            document.querySelector(".loader").classList.add("loader__done");
        })

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    };

  // const animationLength = 1700; // Set the time to complete the animation

  // pin the section
  ScrollTrigger.create({
    trigger: ".test-text",
    start: "top top",// when the top of the trigger hits the top of the viewport
    // end: `+=${animationLength}px`,
    end: "1200px",
    pin: true,
  });

  let tl_v = gsap.timeline({
      scrollTrigger: {
      trigger: ".first-screen",
      start: "top top",
      scrub: true,
    },
  });

  tl_v
      .addLabel("start")
      .from(".center", {scaleX: 2.7, scaleY: 2.7, duration: 1,}, "start")
      .to(".change-text", {opacity: 0, duration: 0.2,}, "start+=0.7")
      .to(".blend video", {opacity: 0, duration: 0.2,}, "start+=0.7")
      .to(".ground", {opacity: 0, duration: 0.3,}, "start+=0.7")
      .from(".text-two", {opacity: 0, duration: 0.2,}, "start+=0.7")
      .from(".left", {scaleX: 4.5, scaleY: 4.5, x: "-1700px", duration: 1,}, "start+=0.25")
      .from(".left h3", { opacity: 0, duration: 0.2,}, "start+=1")
      .from(".left .over", {scaleX: 1.5, scaleY: 1.5, opacity: 0, duration: 0.2,}, "start+=1.2")

      .addLabel("right")
      .from(".right", {scaleX: 4.5, scaleY: 4.5, x: "1700px", duration: 1,}, "start+=0.25")
      .from(".right h3", {opacity: 0, duration: 0.2,}, "start+=1")
      .from(".right .over", {scaleX: 1.5, scaleY: 1.5, opacity: 0, duration: 0.2,}, "start+=1.2")
      .from(".logo-sign", {opacity: 0, scaleX: 1.5, scaleY: 1.5, duration: 0.2,}, "start+=0.8")




    gsap.fromTo(".move-text", {translateX: 600,},
        {translateX: -200, opacity: 0, scrollTrigger: {trigger: ".move-text", scrub: 0.3, start: "top 90%", ease: Power4.easeOut,},}, "start-=2");



    let tl_card = gsap.timeline({
        scrollTrigger: {
            trigger: ".colored-section",
            start: "top top",
            end: "+=3000px",
            scrub: true,
            pin: true,
        },
    });

    tl_card
        .addLabel("cards")
        .from(".card.three", {translateY: 1000, duration: 1, ease: Power0.easeNone}, "cards")
        .to(".card.three", {translateY: -1000, duration: 1, ease: Power0.easeNone})
        .from(".card.one", {translateY: 1000, duration: 1, ease: Power0.easeNone}, "cards+=1")
        .to(".card.one", {translateY: -1000, duration: 1, ease: Power0.easeNone})
        .from(".card.two", {translateY: 1000, duration: 1, ease: Power0.easeNone}, "cards+=2")
        .to(".card.two", {translateY: -1000, duration: 1, ease: Power0.easeNone})
        .from(".card.four", {translateY: 1000, duration: 1, ease: Power0.easeNone}, "cards+=3")
        .to(".card.four", {translateY: -600, duration: 1, ease: Power0.easeNone})


    let tl_title = gsap.timeline({
        scrollTrigger: {
            trigger: ".big-text",
            start: "top top",
            end: "100%-=800px",
            scrub: true,
            toggleClass: {targets: "nav", className: "active"}
        },
    });

    tl_title
        .addLabel("text-start")
        .from(".top-text span", {y: "-898px", duration: 1,}, "text-start")
        .to(".top-text span", {y: "0px", scale: 0.8, duration: 1,}, "text-start")
        .from(".title", {y: "-898px", duration: 1,}, "text-start")
        .to(".title", {y: "0px", scale: 0.8, duration: 1,}, "text-start")



    let proxy = { skew: 0 },
        skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
        clamp = gsap.utils.clamp(-2, 2); // don't let the skew go beyond 20 degrees.

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



  // gsap.fromTo(
  //     ".test-text",
  //     {
  //       translateY: 0,
  //     },
  //     {
  //       translateY: 170,
  //       scrollTrigger: {
  //         trigger: ".phone",
  //         scrub: true,
  //         start: "top 80%",
  //         ease: Power4.easeOut,
  //       },
  //     }
  // )

  // gsap.fromTo(
  //     ".phone",
  //     {
  //       translateY: 70,
  //     },
  //     {
  //       translateY: -150,
  //       scrollTrigger: {
  //         trigger: ".phone",
  //         scrub: true,
  //         start: "top 80%",
  //         ease: Power4.easeOut,
  //       },
  //     }
  // );

  // gsap.fromTo(
  //     ".back",
  //     {
  //       rotate: 0
  //     },
  //     {
  //       rotate: -25,
  //       scrollTrigger: {
  //         trigger: ".phone",
  //         scrub: true,
  //         start: "top 50%",
  //         end: "top 10%",
  //         ease: Power4.easeOut,
  //       },
  //     }
  // );



  // gsap.fromTo(
  //   ".shade",
  //   {
  //     backgroundImage: "linear-gradient(45deg, rgba(0, 0, 0, 0) 9%, #000 15%)",
  //   },
  //   {
  //     backgroundImage: "linear-gradient(45deg, rgba(0, 0, 0, 0) 9%, #000 109%)",
  //     scrollTrigger: {
  //       trigger: ".shade",
  //       scrub: true,
  //       end: "bottom 20%",
  //     },
  //   }
  // );
  //
  // gsap.fromTo(
  //   ".section-5g .screen",
  //   {
  //     translateY: 0,
  //   },
  //   {
  //     translateY: -250,
  //     scrollTrigger: {
  //       trigger: ".section-5g .screen",
  //       scrub: true,
  //       start: "top 50%",
  //       end: "top -50%",
  //     },
  //   }
  // );


  // const items = gsap.utils.toArray(".download");
  //
  // items.forEach((item) => {
  //   let tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: item,
  //       scrub: true,
  //       end: "top 30%",
  //     },
  //   });
  //
  //   tl.addLabel("start")
  //     .to(item, {
  //       scaleX: 1,
  //       scaleY: 1,
  //       duration: 1,
  //     })
  //
  //     .to(
  //       item,
  //       {
  //         translateY: 0,
  //         duration: 1,
  //       },
  //       "start+=.5"
  //     )
  //
  //     .to(
  //       item,
  //       {
  //         opacity: 1,
  //         duration: 1.5,
  //       },
  //       "start"
  //     );
  // });

  // const fadeInElements = gsap.utils.toArray(".fade-in");
  // fadeInElements.forEach((element) => {
  //   let tl_t = gsap.timeline({
  //     scrollTrigger: {
  //       scrub: true,
  //       trigger: element,
  //       start: "center 80%",
  //     },
  //   });
  //
  //   tl_t.from(element, {
  //     opacity: 0,
  //   });
  // });
}
