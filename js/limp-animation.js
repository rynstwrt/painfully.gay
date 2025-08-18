function shakeAnimFunc() {
    const randomNum = utils.random(-5, 5) * .1;

    animate("#subtitle-span", {
        duration: 20,
        // duration: 40,
        x: randomNum > 0 ? `${randomNum}` : `${randomNum}`,
        y: randomNum > 0 ? `${randomNum}` : `${randomNum}`,
        // ease: "linear",
        // playbackEase: "linear",
        // delay: 0,
        // onComplete: shakeAnimFunc
    });
}



// const scaleAnim = animate("#subtitle-span", {
//     scale: [1, 1.1, 1],
//     duration: 3000,
//     // ease: "",
//     // ease: "linear",
//     // loop: true,
//     autoplay: false,
//     // duration: 0
//     // delay: 0,
// });

const subtitleSpanTimeline = createTimeline({
    defaults: {
        ease: "linear",
        playbackEase: "linear",
        delay: 0,
        loop: true,
        duration: 1
    }
});

subtitleSpanTimeline
    // .sync(scaleAnim, 0)
    .add("#subtitle-span", {
        scale: [1, 1.06, 1],
        duration: 2000,
        letterSpacing: ["1px", "3px", "1px"],
        // ease: "outSine",
        ease: "inOutElastic",
        // verticalAlign: "baseline",
        // ease: "",
        // ease: "linear",
        // loop: true,
        // autoplay: false,
        // duration: 0
        // delay: 0,
    })
    .call(() => shakeAnimFunc(), 0)
    // .sync(shakeAnimFunc)
    .play();

// subtitleSpanTimeline.play();



// shakeAnimFunc();
