function initLogoScale() {
    const video = document.querySelector(".logo-scale__video video");
    video.loop = true;
    video.muted = true; // without this line it's not working although I have "muted" in HTML
    video.play();

    const animationLengthScale = 5000;
    // pin the section
    ScrollTrigger.create({
        trigger: ".logo-scale",
        start: "top top",
        end: `+=${animationLengthScale}px`,
        pin: true,
    });

    const tscale = gsap.timeline({
        scrollTrigger: {
            trigger: ".logo-scale",
            start: "top top", // when the top of the trigger hits the top of the viewport
            end: `+=${animationLengthScale}px`,
            scrub: true,
        },
    });



    tscale.from(".logo-scale__logo .filler", {backgroundColor: "rgb(255, 255, 255)", duration: 0.2, ease:Linear.easeNone,})
    tscale.to(".logo-scale__logo .filler", {backgroundColor: "rgb(26 26 26)", duration: 0.2, ease:Linear.easeNone,})
    tscale.addLabel("start");
    tscale.to(".logo-scale__logo span", {
        scale: 200,
        duration: 5,
        ease:Linear.easeNone,
        // opacity: 0,
    });

    // tl.to(
    //   ".logo-scale__logo svg",
    //   {
    //     backgroundColor: "rgba(0, 94, 127, 0)",
    //     duration: 0.7,
    //     ease: Power2.easeIn,
    //   },
    //   "start-=0.0001"
    // );


    tscale.to(".logo-scale__logo .filler", {backgroundColor: "rgb(26 26 26 / 0%)", duration: 1, ease:Linear.easeNone,}, "start+=0.25")
    tscale.to(".logo-scale__logo .filler", {backgroundColor: "rgba(255, 255, 255, 1)", duration: 0.8, ease:Linear.easeNone,}, "start+=2")
    // tscale.to(".logo-scale__logo .filler-white", {backgroundColor: "rgba(255, 255, 255, 1)", duration: 0.8, ease:Linear.easeNone,}, "start+=2")
    tscale.from(".action-call-text", {opacity: 0, y: 200, duration: 0.3, ease:Linear.easeNone,}, "start+=2.2")
    tscale.to(".action-call-text", {opacity: 1, y: 0, duration: 0.3, ease:Linear.easeNone,}, "start+=2.2")


    const tlwhite = gsap.timeline({
        scrollTrigger: {
            trigger: ".action-call-text",
            start: "top 50%",
        }
    });
    mySplitText = new SplitText(".action-call-text", {type:"words,chars"}),
        words = mySplitText.chars;
    tlwhite.from(words, {duration: 0.15, opacity:0, y:5, transformOrigin:"top left",  ease:"easeIn", stagger: 0.02}, "+=2");
}