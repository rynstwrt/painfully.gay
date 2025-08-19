const {chars: spanChars} = text.split("#subtitle-span", {
    words: false,
    chars: true
});

const {chars: limpWristChars} = text.split("#limp-wrists-span", {
    words: false,
    chars: true
});



createTimeline({
    defaults: {
        ease: "outCubic",
        delay: 0,
        loopDelay: 0,
        autoplay: false
    },
    autoplay: false,
    delay: 0,
    loopDelay: 0,
    // ease: "outCubic"
})
    // TEXT WAVE
    .add(spanChars, {
        scale: [1, 1.2, .7, 1, 0],
        fontWeight: [{to: "-300"}],
        color: ["#FFFFFF"],
        delay: stagger(30),
        duration: 700,
        playbackEase: "linear"
    })

    // FLIP BACKWARDS TO FRONT
    .add(spanChars, {
        rotateX: [0, "+0.5turn", 0],
        delay: stagger(50),
        opacity: [0, 1],
        scale: [0, 1.05],
        // fontWeight: 500,
        ease: "outSine",
        duration: 300
    })

    // LIMP WRISTS SCROLL
    .add(limpWristChars, {
        color: PRIDE_COLORS.concat(["#FFFFFF"]),
        fontWeight: "+=200",
        scaleY: 1.1,
        delay: stagger(15),
        duration: 350,
        filter: [`brightness(110%)`, `brightness(150%)`],
        ease: "linear"
    })

    // FLASH RED
    .add(spanChars, {
        color: [{to: "#FF0000"}],
        alternate: true,
        loop: 3,
        ease: "inOutQuad",
        duration: 300,
    })
    .add(spanChars, {
        fontWeight: 500,
        duration: 200,
        ease: "outCubic"
    }, "-=1100")

    // REMOVE LINE + SHRINK TITLE BOX
    .add(utils.$("#subtitle-span")[0].parentElement, {
        // delay: 1000,
        scaleY: 0,
        height: 0,
        marginTop: 0,
        duration: 400,
        opacity: 0
    })

    // SHOW TILE CONTAINER
    .add(["#tile-container", ".tile"], {
        opacity: [0, 1],
        duration: 300,
        scale: [0, 1],
    }, "-=400")
    // }, "-=1400")

    // BEGIN TILE ANIMATION
    .call(createWave)

    // CALL TIMELINE
    .play();