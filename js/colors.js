import { animate, createSpring, utils, createTimer, createTimeline, stagger } from "./lib/anime.esm.js";



// const [ $time ] = utils.$('.time');
// console.log($time);
// return;



const PRIDE_COLORS = ["#E50000", "#FF8D00", "#FFEE00", "#028121", "#004CFF", "#770088"];


const $tiles = utils.$(".tile");


const gridDims = [6, 5];

// const randomIndex = utils.random(0, 5*6);


function animateGrid()
{
    animate($tiles, {
        // background: utils.randomPick(PRIDE_COLORS),

        scale: [
            {
                to: [1, 1.2],
                from: {axis: "center"}
            },
            {
                to: 1
            }
            // {
            //     to: 1
            // }
            // {
            //     to: 0
            // }
        ],

        delay: stagger("+150", {
            gridDims: gridDims,
            // from: {axis: "y"}
            from: "center"
            // from: utils.random(0, 5*6)
        }),

        // duration: 1000
        // onComplete: animateGrid
    });
}

animateGrid();




// const timer1 = createTimer({
//     duration: 200,
//     loop: true,
//     loopDelay: 1,
//     reversed: false,
// });


// timer1.sync(animate).start();