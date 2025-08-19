let { animate, utils, stagger, text, createTimeline } = anime;



const GRID_DIMENSIONS = [7, 7];
const PRIDE_COLORS = ["#E50000", "#FF8D00", "#FFEE00", "#028121", "#004CFF", "#770088"];



let colorIndex = 0;



const tileContainer = document.querySelector("#tile-container");

const numTiles = GRID_DIMENSIONS.reduce((prev, curr) => prev * curr);
for (let i = 0; i < numTiles; ++i) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.style.backgroundColor = PRIDE_COLORS[colorIndex];
    tileContainer.append(tile);
}



let clockwise = true;
let reversed = false;

function createWave() {
    animate(".tile", {
        scale: [1, 0, 1],
        backgroundColor: [
            { to: PRIDE_COLORS[++colorIndex % PRIDE_COLORS.length] }
        ],
        rotate: [0, (clockwise ? "" : "-") + ".25turn"],
        delay: stagger(110, {
            grid: GRID_DIMENSIONS,
            from: "center",
            reversed: reversed
            // reverseqd: reversed = !reversed && !reversed
        }),
        // ease: "outQuad",
        onComplete: () => {
            clockwise = !clockwise;
            reversed = !reversed;
            createWave();
        }
    });



    // if (colorIndex.length === PRIDE_COLORS.length - 2)
    //     reversed = !reversed;
}