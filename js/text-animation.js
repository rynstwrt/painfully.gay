// const { animate, text } = anime;
// const { createTimeline } = anime;
// "use strict";

// "use strict";
// let { animate, utils, stagger, text } = anime;
// let anim = anime.animate;
//
//
// const { words, chars } = text.split("h1", {
//     chars: true,
//     // words: { wrap: "hidden" },
//     // lines: true,
//     // words: {
//     //     // wrap: "clip",
//     //     // clone: true
//     // },
//     // includeSpaces: true,
//     // debug: true
// });


// function aaaa() {
//     animate(chars, {
//         translateX: utils.random(-5, 5) * 5,
//         translateY: utils.random(-50, 50),
//         duration: 500,
//         delay: stagger(50)
//     });
// }
// aaaa();


function memememe() {
    anim(chars, {
        scale: [1, 0.7, 1],
        // ease: "Out",
        duration: 500,
        delay: stagger(30),
        rotateX: "+1turn",
        textShadow: [{ to: "15px 15px 0px white"}, { to: "0px 0px 0px white" }],
        ease: "outSine"
    })

    // createTimeline({
    //     // loop: true,
    //     defaults: {
    //         ease: 'inOut(3)',
    //         duration: 6000,
    //         onComplete: () => memememe()
    //     }
    // }).add(words, {
    //         // y: [$el => +$el.dataset.line % 2 ? '100%' : '-100%', '0%']
    //     },
    //     stagger(125)
    // ).add(chars, {
    //         // y: $el => +$el.dataset.line % 2 ? '100%' : '-100%'
    //         translateX: [-utils.random(-10, 10), utils.random(-10, 10)],
    //     duration: 10000
    //     },
    //     stagger(100, {from: "random"})
    // ).play()
}
// memememe();

// createTimeline({
//     loop: true,
//     defaults: { ease: 'inOut(3)', duration: 650 }
// })
//     .add(words, {
//         y: [$el => +$el.dataset.line % 2 ? '100%' : '-100%', '0%'],
//     }, stagger(125))
//     .add(chars, {
//         y: $el => +$el.dataset.line % 2 ? '100%' : '-100%',
//     }, stagger(10, { from: 'random' }))
//     .play();



// const {limpWords, limpChars} = text.split(utils.$("#subheader span:last-child"));
// const {limpWords, limpChars} = text.split(utils.$("span"));

//
// anim(limpChars, {
//     scale: [1, 0, 1],
//     duration: 1000,
//
// });