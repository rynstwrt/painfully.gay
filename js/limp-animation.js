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



const { chars: spanChars } = text.split("#subtitle-span", { chars: true });


const subtitleSpanTimeline = createTimeline({
    loopDelay: 0,
    // delay: 300,
    delay: 350,
    defaults: {
        ease: "linear",
        playbackEase: "linear",
        duration: 300
    }
});


subtitleSpanTimeline.add(spanChars, {
    scale: [1, 1.2, .7, 1, 0],
    fontWeight: [{to: "-300"}],
    color: ["#FFFFFF"],
    delay: stagger(30),
    duration: 800,
    playbackEase: "linear"
}).add(spanChars, {
    rotateX: [0, "0.5turn", 0],
    delay: stagger(45),
    scale: [0, 1, 0.8, 1],
    fontWeight: 500,
    ease: "outSine",
    duration: 350,
}).add(spanChars, {
    color: [{to: "#FF0000"}],
    alternate: true,
    loop: 5,
    ease: "inQuad",
    duration: 250,
}).add(utils.$("#subtitle-span")[0].parentElement, {
    scaleY: 0,
    height: 0,
    marginTop: 0,
    duration: 400,
    ease: "outQuad",
    opacity: 0
}, "+=100").add("#tile-container", {
    opacity: 1
}, "-=200").call(createWave).play();




// subtitleSpanTimeline
//     // .sync(scaleAnim, 0)
//     .add("#subtitle-span", {
//         // scale: [1, 1.3, 1],
//
//         // letterSpacing: ["1px", "3px", "1px"],
//         letterSpacing: "+=4px",
//         delay: stagger(40)
//         // ease: "inOutElastic",
//         // color: {from: "random", to: ["#FF0000", "#ff7d7d", "#814b4b"]},
//         // opacity: [0, .5, 0],
//         // opacity: {
//         //     to: "+=0.1"
//         // }
//         // duration: 100,
//         // delay: 0,
//         // scale: [0, "+=2", 0]
//         // scale: "+=2"
//     })
//     // .call(() => shakeAnimFunc(), 0)
//     // .sync(shakeAnimFunc)
//     .play();



// shakeAnimFunc();
