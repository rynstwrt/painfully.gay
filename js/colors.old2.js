// import { animate, createSpring, utils, createTimer, createTimeline, stagger } from "./lib/anime.esm.js";
//
//
//
// const [ $time ] = utils.$('.tile');
// console.log($time);
// // return;
//
//
//
// const PRIDE_COLORS = ["#E50000", "#FF8D00", "#FFEE00", "#028121", "#004CFF", "#770088"];
//
//
// const $tiles = utils.$(".tile");
//
// let colorIndex = 0;
//
// let animRandom = utils.randomPick(PRIDE_COLORS);
// const animation = animate($tiles, {
//     scale: [
//         { to: 1.25, ease: "inOut(3)", duration: 180 },
//         { to: 1, ease: createSpring({ stiffness: 130 }) }
//     ],
//     // background: "#FF6600",
//     background: utils.randomPick(PRIDE_COLORS),
//     // background: stagger(100, ),
//     delay: stagger(30),
//     onBegin: () =>
//     {
//         console.log(colorIndex);
//     },
//     ease: "outBack",
//     alternate: 10
// });
//
//
//
//
// // animation.res();
// // console.log(animation)
// // animation.play().then(() => {
// //     animation.reverse();
// //     animation
// //     animation.play();
// // });
//
// // const timeline = createTimeline();
// //
// // timeline.sync(animation).onUpdate(event =>
// // {
// //
// // }).play();
//
//
// // animation.play();
// // animation.add({
// //     targets:
// // }).play();