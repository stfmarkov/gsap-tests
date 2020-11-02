function init5GSection() {

  gsap.to(
      ".test-text",
      {
        scaleY: 0.5,
        scaleX: 0.5,
        scrollTrigger: {
          trigger: ".phone",
          scrub: true,
          pin: true,
          start: "top 80%",
          ease: Power4.easeOut,
        },
      }
  )

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
      }
  );

  gsap.fromTo(
      ".phone",
      {
        translateY: 70,
      },
      {
        translateY: -150,
        scrollTrigger: {
          trigger: ".phone",
          scrub: true,
          start: "top 80%",
          ease: Power4.easeOut,
        },
      }
  );

  gsap.fromTo(
      ".back",
      {
        rotate: 0
      },
      {
        rotate: -25,
        scrollTrigger: {
          trigger: ".phone",
          scrub: true,
          start: "top 50%",
          end: "top 10%",
          ease: Power4.easeOut,
        },
      }
  );



  gsap.fromTo(
    ".shade",
    {
      backgroundImage: "linear-gradient(45deg, rgba(0, 0, 0, 0) 9%, #000 15%)",
    },
    {
      backgroundImage: "linear-gradient(45deg, rgba(0, 0, 0, 0) 9%, #000 109%)",
      scrollTrigger: {
        trigger: ".shade",
        scrub: true,
        end: "bottom 20%",
      },
    }
  );

  gsap.fromTo(
    ".section-5g .screen",
    {
      translateY: 0,
    },
    {
      translateY: -250,
      scrollTrigger: {
        trigger: ".section-5g .screen",
        scrub: true,
        start: "top 50%",
        end: "top -50%",
      },
    }
  );


  const items = gsap.utils.toArray(".download");

  items.forEach((item) => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        scrub: true,
        end: "top 30%",
      },
    });

    tl.addLabel("start")
      .to(item, {
        scaleX: 1,
        scaleY: 1,
        duration: 1,
      })

      .to(
        item,
        {
          translateY: 0,
          duration: 1,
        },
        "start+=.5"
      )

      .to(
        item,
        {
          opacity: 1,
          duration: 1.5,
        },
        "start"
      );
  });

  const fadeInElements = gsap.utils.toArray(".fade-in");
  fadeInElements.forEach((element) => {
    let tl_t = gsap.timeline({
      scrollTrigger: {
        scrub: true,
        trigger: element,
        start: "center 80%",
      },
    });

    tl_t.from(element, {
      opacity: 0,
    });
  });
}
