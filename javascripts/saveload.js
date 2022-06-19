import * as basic from "./basic.js";
import { buyUpgrade, generateNewState } from "./buildings.js";

const buildingGroup = document.getElementById("building-group");
const totalPatsDom = document.getElementById("totalPats");
const totalPerSecondDom = document.getElementById("perSecond");
const save_button = document.getElementById("save_button");
const reset_button = document.getElementById("reset_button");
save_button.onclick = saveData;
reset_button.onclick = resetData;
totalPatsDom.onload = loadData();

function saveData(e) {
    e.preventDefault();
    localStorage.setItem('totalPats', basic.getBigInt(totalPatsDom));
    localStorage.setItem('perSecond', basic.getBigInt(totalPerSecondDom));
    localStorage.setItem('buildingGroup', buildingGroup.innerHTML)
    alert("Game saved")
}

function loadData(e) {
    let perSecond = localStorage.getItem('totalPats')
    if (perSecond) {
        loadSavedData();
    } else {
        generateNewState();
    }
}

function loadSavedData(e) {
    let totalPats = localStorage.getItem('totalPats')
    basic.setBigInt(totalPatsDom, totalPats);
    let perSecond = localStorage.getItem('perSecond')
    basic.setBigInt(totalPerSecondDom, perSecond);
    let buildingState = localStorage.getItem('buildingGroup')
    buildingGroup.innerHTML = buildingState;

    let imageGroups = document.getElementsByClassName("imageGroup")
    Array.from(imageGroups).forEach(element => {
        element.addEventListener("click", buyUpgrade)
    });   
}

function resetData(e) {
    let confirmReset = confirm("Are you sure you want to lose all your progress?")
    if (confirmReset) {
        localStorage.removeItem('totalPats')
        localStorage.removeItem('perSecond')
        localStorage.removeItem('buildingGroup')
        location.reload()
    }
}