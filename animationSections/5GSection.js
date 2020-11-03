function init5GSection() {

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
      pinspacer: false,
    },
  });

  tl_v
      .addLabel("start")
      .from(".center", {
        scaleX: 3.7,
        scaleY: 3.7,
          y: "-350px",
        duration: 1,
      },
          "start"
      )
      .from(".left", {
        scaleX: 4.5,
        scaleY: 4.5,
        x: "-1700px",
            duration: 1,
      },
          "start+=0.25"
          )
      .addLabel("right")
      .from(".right", {
        scaleX: 4.5,
        scaleY: 4.5,
        x: "1700px",
            duration: 1,
      },
          "start+=0.25"
          )
      .from(".logo-sign", {
              opacity: 0,
              scaleX: 1.5,
              scaleY: 1.5,
              duration: 0.2,
          },
          "start+=0.7"
      )



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

  gsap.fromTo(
      ".move-text",
      {
        translateX: 0,
      },
      {
        translateX: -550,
        scrollTrigger: {
          trigger: ".move-text",
          scrub: true,
          start: "top 90%",
          end: "top -50%",
          ease: Power4.easeOut,
        },
      },
      "start-=2"
  );

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
