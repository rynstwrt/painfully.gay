import { animate, createSpring, utils, createTimer, createTimeline, stagger } from "./lib/anime.esm.js";



// const [ $time ] = utils.$('.time');
// console.log($time);
// return;



const PRIDE_COLORS = ["#E50000", "#FF8D00", "#FFEE00", "#028121", "#004CFF", "#770088"];


const $tiles = utils.$(".tile");


// animate(utils.shuffle($tiles), {
animate($tiles, {
    scale: [
        { to: 1.2, ease: "inOut(3)", duration: 130 },
        { to: 1, ease: createSpring({ stiffness: 100 }) }
    ],
    // background: utils.randomPick(PRIDE_COLORS),
    background: "#FF6600",
    delay: stagger(30),
    ease: "outCirc",
    alternate: 10,
    loop: true,
    // loopDelay: 0
});



const timer1 = createTimer({
    duration: 200,
    loop: true,
    loopDelay: 1,
    reversed: false,
});


// timer1.sync(animate).start();