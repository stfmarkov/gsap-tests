function initLogoScale() {
    const video = document.querySelector(".logo-scale__video video");
    video.loop = true;
    video.muted = true; // without this line it's not working although I have "muted" in HTML
    video.play();

    const animationLengthScale = 3000;
    // pin the section
    ScrollTrigger.create({
        trigger: ".logo-scale",
        start: "top top",
        end: `+=${animationLengthScale}px`,
        pin: true,
        onToggle: changeBackground,
    });

    const tl_color = gsap.timeline({
        scrollTrigger: {
            trigger: ".logo-scale",
            start: "top top",
        }
    });

    // tl_color.from(".logo-scale__logo svg", { scaleX: 0.5, scaleY: 0.5, duration: 0.7,}, "+=5")
    // tl_color.to(".logo-scale__logo svg", { scaleX: 1, scaleY: 1, duration: 0.7,}, "+=5")

    // tl_color.to(".logo-scale__logo .filler", {backgroundColor: "rgb(26 26 26)", duration: 0.2, ease:Linear.easeNone,})

    const tscale = gsap.timeline({
        scrollTrigger: {
            trigger: ".logo-scale",
            start: "top top",
            end: `+=${animationLengthScale}px`,
            scrub: 0.15,
        },
    });


    tscale
        .addLabel("start")
        .to(".logo-scale__logo span", {scale: 65, duration: 2.5, delay: 0.1, ease:Linear.easeNone,})
        .to(".logo-scale__logo .filler", {backgroundColor: "rgba(26, 26, 26, 0)", duration: 1.5, delay: 0.05, ease:Linear.easeNone,}, "start+=0.35")
        .to(".logo-scale__logo .filler", {backgroundColor: "rgba(255, 255, 255, 0.85)", duration: 1, delay: 0.2, ease:Linear.easeNone,}, "start+=2.2")
        .to(".action-call-text", {duration: 0.3, opacity: 1, transformOrigin: "center center", ease:Linear.easeNone,}, "start+=3.5")
        .to(".action-call-text", {duration: 0.5, translateY: 0, transformOrigin: "center center", ease:Linear.easeNone,}, "start+=3.5")
        .to(".action-call-text", {duration: 0.5, translateY: "-70%", transformOrigin: "center center", ease:Linear.easeNone,}, "start+=4")
        .to(".action-call-text", {duration: 0.5, opacity: 0, translateY: "-150%", transformOrigin: "center center", ease:Linear.easeNone,}, "start+=4.3")
        .to(".logo-scale__logo .filler", {backgroundColor: "rgba(255, 255, 255, 1)", duration: 1, delay: 0, ease:Linear.easeNone,}, "start+=3.5");


    // tscale.call(write, null, "start+=3.5");
    //
    // function write(params) {
    //
    //     var actions = document.querySelector(".action-call-text");
    //     let toSet = {
    //         opacity: 1,
    //         y: 0,
    //     };
    //     if (actions.style.opacity == 1) {
    //         toSet = {
    //             opacity: 0,
    //             y: 150,
    //         };
    //
    //     }
    //     gsap.to(actions, {
    //         duration: 0.35,
    //         opacity: toSet.opacity,
    //         y: toSet.y,
    //         transformOrigin: "center center",
    //         ease:Linear.easeNone,
    //     });
    //
    //     // window.addEventListener("mousemove", (e) => {
    //     //
    //     //     var xPos = (e.clientX/window.innerWidth)-0.5,
    //     //         yPos = (e.clientY/window.innerHeight)-0.5,
    //     //         xSkew = (e.clientX/window.innerWidth)-0.5,
    //     //         ySkew = (e.clientY/window.innerHeight)-0.5;
    //     //
    //     //     TweenLite.to(actions, 0, {
    //     //
    //     //         rotationY: 15 * xSkew,
    //     //         rotationX: -15 * ySkew,
    //     //         translateY: 45 * yPos,
    //     //         translateX: -45 * xPos,
    //     //         ease: Power3.easeOut,
    //     //         transformPerspective: 900,
    //     //         transformOrigin: 'center center'
    //     //     });
    //     // });
    //
    // }

    // function logoScale(e) {
    //     if (e.progress == 1) return;
    //     let scale;
    //     if (e.direction > 0) scale = "scale(1)";
    //     else scale = "scale(0.5)";
    //     gsap.to(".logo-scale__logo svg", {
    //         transform: scale,
    //         duration: 1,
    //         ease: Linear.easeNone,
    //     },"-=1");
    // }

    function changeBackground(e) {
        if (e.progress == 1) return;
        let color;
        if (e.direction > 0) color = "rgb(26 26 26)";
        else color = "rgb(255, 255, 255)";
        gsap.to(".logo-scale__logo .filler", {
            backgroundColor: color,
            duration: 0.05,
            ease: Linear.easeNone,
        });
    }
}