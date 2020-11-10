function initLoader() {
    tl.addLabel("start")
        .to(".loader__wrapper img", {scaleX: 1.5,scaleY: 1.5, duration: 1,}, "start+=0.7")
        .to(".loader__wrapper svg", {scaleX: 1.5,scaleY: 1.5, duration: 1,}, "start+=0.7")
        .to(
            ".loader__wrapper img",
            {
                opacity: 1,
                duration: 0.7,
                ease: Power2.easeIn,
            },
            "start+=1.25"
        )
        .to(
            ".loader .shape1",
            {
                // opacity: 0,
                strokeDashoffset: 0,
                duration: 1.5,
                ease: Power2.easeIn,
            },
            "start"
        )
        .to(
            ".loader .shape0",
            {
                //   opacity: 0,
                strokeDashoffset: 0,
                duration: 1.3,
                ease: Power2.easeIn,
            },
            "start+=0.15"
        )
        .addLabel("exit")
        .to(".loader__wrapper", {
            y: "-100%",
            duration: 0.7,
            ease: Power4.easeIn,
        })
        .to(
            ".loader__base",
            {
                y: "-100%",
                duration: 0.7,
                ease: Power4.easeIn,
            },
            "exit+=0.13"
        )
        .to(
            ".overlay",
            {
                y: "-100%",
                duration: 0.7,
                ease: Power4.easeIn,
            },
            "exit+=0.26"
        )
        .to(
            ".last",
            {
                y: "-100%",
                duration: 0.7,
                ease: Power4.easeIn,
            },
            "exit+=0.39"
        )
        .call(() => {
            document.querySelector(".loader").classList.add("loader__done");
        });

    
}
