gsap.registerPlugin(ScrollTrigger);

function getYTApi() {
  // 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

function init() {
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
    ".screen",
    {
      translateY: 0,
    },
    {
      translateY: -250,
      scrollTrigger: {
        trigger: ".screen",
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

    tl.to(item, {
      scaleX: 1,
      scaleY: 1,
      duration: 1,
    });

    tl.to(item, {
      translateY: 0,
      duration: 1,
      delay: -0.8,
    });

    tl.to(item, {
      opacity: 1,
      duration: 1.5,
      delay: -1,
    });
  });

  gsap.from(".section-intro", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".section-intro",
      scrub: true,
      start: "top 80%",
    },
  });

  gsap.from(".innovation-callout", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".innovation-callout",
      scrub: true,
      start: "top 80%",
    },
  });

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".player__slides",
      pin: true, // pin the trigger element while active
      start: "top top", // when the top of the trigger hits the top of the viewport
      //   end: "+=100%",
      scrub: true,
      onUpdate: videoAnimationUpdated,
    },
  });

  // add animations and labels to the timeline
  tl.to(".player__heading", {
    y: -350,
    opacity: 0,
    duration: 10,
    delay: 3,
  });
  tl.to(".player-wrapper__player", {
    opacity: 1,
    duration: 10,
    delay: -10,
  });
  tl.from(".player__text", {
    opacity: 0,
    y: 350,
    duration: 10,
  });
  tl.to(".player-wrapper__player", {
    opacity: 0.1,
    duration: 10,
    delay: -10,
  });
  tl.to(".player__text", {
    opacity: 0,
    y: -350,
    duration: 5,
    delay: 3,
  });
  tl.to(".player-wrapper__player", {
    opacity: 1,
    duration: 5,
    delay: -5,
  });

  tl.to(".player-wrapper", {
    scaleX: 0.43,
    scaleY: 0.43,
    duration: 10,
  });

  tl.to(".player-wrapper__ui", {
    opacity: 1,
    delay: -10,
    duration: 10,
  });
  tl.to(".player-wrapper__hardware", {
    opacity: 1,
    delay: -10,
    duration: 10,
  });

  const video = document.querySelector(".player-wrapper__player");
  video.loop = true;
  video.muted = true; // without this line it's not working although I have "muted" in HTML

  let isRuning = false;
  function videoAnimationUpdated(event) {
    if (!isRuning && event.progress > 0.01) {
      video.play();
      isRuning = true;
    }
    if (isRuning && (event.progress > 0.72 || event.progress < 0.1)) {
      video.pause();
      isRuning = false;
    }
  }
}

getYTApi();

// needs to be in the global scope
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    videoId: "M7lc1UVf-VE",
    events: {
      //   onReady: onPlayerReady,
      //   onStateChange: onPlayerStateChange,
    },
  });
}

function startVideo() {
  player.playVideo();
  console.log("start");
}
function stopVideo() {
  player.stopVideo();
  console.log("stop");
}

window.addEventListener("load", function () {
  init();
});
