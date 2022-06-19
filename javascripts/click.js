import * as basic from "./basic.js";

const catPic = document.getElementById("catpic");
const totalPatsDom = document.getElementById("totalPats");
const patsPerSecondDom = document.getElementById("perSecond");
const patValue = 1;

function runPatsPerSecond() { 
    const patsPerSecond = basic.getBigInt(patsPerSecondDom)
    basic.addBigIntToField(totalPatsDom, patsPerSecond);
}

function pattingCat() {
    basic.addBigIntToField(totalPatsDom, patValue);
}

catPic.onclick = pattingCat
setInterval(runPatsPerSecond, 1000)