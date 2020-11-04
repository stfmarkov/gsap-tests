function init5GSection() {
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
      .from(".center", {scaleX: 3.1, scaleY: 3.1, duration: 1,}, "start")
      .to(".change-text", {opacity: 0, duration: 0.3,}, "start+=0.7")
      .from(".text-two", {opacity: 0, duration: 0.3,}, "start+=0.7")
      .from(".left", {scaleX: 4.5, scaleY: 4.5, x: "-1700px", duration: 1,}, "start+=0.25")
      .from(".left h3", { opacity: 0, duration: 0.2,}, "start+=1")
      .from(".left .over", {scaleX: 1.5, scaleY: 1.5, opacity: 0, duration: 0.2,}, "start+=1.2")

      .addLabel("right")
      .from(".right", {scaleX: 4.5, scaleY: 4.5, x: "1700px", duration: 1,}, "start+=0.25")
      .from(".right h3", {opacity: 0, duration: 0.2,}, "start+=1")
      .from(".right .over", {scaleX: 1.5, scaleY: 1.5, opacity: 0, duration: 0.2,}, "start+=1.2")
      .from(".logo-sign", {opacity: 0, scaleX: 1.5, scaleY: 1.5, duration: 0.2,}, "start+=0.8")


    gsap.fromTo(".move-text", {translateX: 0,},
        {translateX: -550, scrollTrigger: {trigger: ".move-text", scrub: 0.3, start: "top 90%", end: "top -50%", ease: Power4.easeOut,},}, "start-=2");



    let tl_card = gsap.timeline({
        scrollTrigger: {
            trigger: ".colored-section",
            start: "top top",
            end: "+=4000px",
            scrub: true,
            pin: true,
        },
    });

    tl_card
        .addLabel("cards")
        .from(".card.three", {translateY: 1000, duration: 1, ease: Power1.ease,})
        .to(".card.three", {translateY: -1000, duration: 1, ease: Power1.ease,})
        .from(".card.one", {translateY: 1000, duration: 1, ease: Power1.ease,}, "cards+=1")
        .to(".card.one", {translateY: -1000, duration: 1, ease: Power1.ease,})
        .from(".card.two", {translateY: 1000, duration: 1, ease: Power1.ease,}, "cards+=2")
        .to(".card.two", {translateY: -1000, duration: 1, ease: Power1.ease,})



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
