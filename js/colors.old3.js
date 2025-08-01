// import { animate, createSpring, utils, createTimer, createTimeline, stagger } from "./lib/anime.esm.js";
//
//
//
// // const [ $time ] = utils.$('.time');
// // console.log($time);
// // return;
//
//
//
// const PRIDE_COLORS = ["#E50000", "#FF8D00", "#FFEE00", "#028121", "#004CFF", "#770088"];
//
//
// const $tiles = utils.$(".tile");
//
//
// const gridDims = [6, 10];
//
//
// // animate(utils.shuffle($tiles), {
// animate($tiles, {
//     // scale: [
//     //     // { to: 1, ease: "inOut(3)" },
//     //     { to: 1.25, ease: "inOut(3)", duration: 130 },
//     //     { to: 1, ease: createSpring({ stiffness: 100 }) }
//     // ],
//
//     // delay: [
//     //     { to: stagger(1, { gridDims, from: {axis: 'x' }}) },
//     //     // { to: 0, ease: 'inOutQuad' },
//     // ],
//
//     translateX: [
//         { to: stagger("-.75rem", { gridDims, from: {axis: 'x' }}) },
//         { to: 0, ease: 'inOutQuad' },
//     ],
//
//     // scaleY: [
//     //     { to: stagger("10px", { gridDims, from: {axis: 'y' }}) },
//     //     { to: 0, ease: 'inOutQuad' },
//     // ],
//
//     // maxWidth: ["100%", "50%"],
//     background: utils.randomPick(PRIDE_COLORS),
//     // background: utils.randomPick(PRIDE_COLORS),
//     // background: stagger(["#FF6600", "#FF00FF"]),
//     // background: "rgba(0, 0, 0, .01)",
//     delay: stagger(30),
//     // opacity: .7,
//     // background: "#00FFFF",
//
//     // delay: stagger(85, { gridDims }),
//     // delay: stagger(30),
//     ease: "outCirc",
//     alternate: true,
//     loop: true,
//     // loopDelay: 0,
//     // playbackEase: "outQuad",
//     // playbackEase: "outCirc"
//     // loopDelay: 0,
//     // duration: 1200
//     duration: 1400,
//     zIndex: "-2",
//     onLoop: self => self.refresh()
// });
//
//
//
// // const timer1 = createTimer({
// //     duration: 200,
// //     loop: true,
// //     loopDelay: 1,
// //     reversed: false,
// // });
//
//
// // timer1.sync(animate).start();