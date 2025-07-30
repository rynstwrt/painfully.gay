// import { animate, createSpring, utils, createTimer, createTimeline, stagger } from "./lib/anime.esm.js";
//
//
// const [ $tiles ] = utils.$('.tile');
// // const [ $time ] = utils.$('.time');
//
//
// // let loops = 0;
//
//
// const tiles = document.querySelectorAll(".tile");
//
// // animate(tiles, {
// //     scale: [
// //         { to: 1.25, ease: "inOut(3)", duration: 200 },
// //         { to: 1, ease: createSpring({ stiffness: 300 }) }
// //     ],
// //     loop: true,
// //     loopDelay: 250,
// //     duration: 1000
// // });
//
//
// const rynAnimation = animate($tiles, {
//     scale: [
//         { to: 1.25, ease: "inOut(3)", duration: 200 },
//         { to: 1, ease: createSpring({ stiffness: 300 }) }
//     ],
//     // duration: 100,
//     // delay: 1000
// });
//
//
// // const timer = createTimer({
// //     autoplay: false,
// //     onUpdate: self => $tiles.innerHTML = self.currentTime
// // });
//
//
// const animation = animate(".tile", {
//     scale: [
//         { to: 1.25, ease: "inOut(3)", duration: 200 },
//         { to: 1, ease: createSpring({ stiffness: 300 }) }
//     ],
// });
//
//
// const timeline = createTimeline();
//
//
// const tl1 = timeline.sync(animation)
//
//
// // tiles.forEach((tile, i) => {
// //     console.log(tile);
// //     timeline.add(tile, {
// //         scale: [
// //             { to: 1.25, ease: "inOut(3)", duration: 200 },
// //             { to: 1, ease: createSpring({ stiffness: 300 }) }
// //         ]
// //     }, i * 10);
// // });
//
//
// timeline.play(tl1);
//
//
// // timeline.play();
//
//
// // timeline.sync(rynAnimation, 3000).play();
//
//
// // createTimer({
// //     loop: true,
// //     duration: 1000,
// //     alternate: true,
// //     // onLoop: () => $loops.innerHTML = String(++loops),
// //     onLoop: () => {
// //
// //         ++loops;
// //     }
// //     // onUpdate: self => $time.innerHTML = self.iterationCurrentTime.toString()
// // });