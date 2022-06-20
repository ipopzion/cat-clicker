import * as basic from "./basic.js";
import { getBuildingsJson } from "./buildingsJson.js"

const buildingGroup = document.getElementById("building-group");
const totalPatsDom = document.getElementById("totalPats");
const totalPerSecondDom = document.getElementById("perSecond");

function generateNewState() {
    let buildingsJson = getBuildingsJson()
    generateBuildings(buildingsJson);
}

function generateBuildings(buildingsJson) {
    buildingsJson.map(
        buildingInfo => {

            var icon = document.createElement("img");
            icon.setAttribute("class", "icon");
            icon.setAttribute("src", `../images/${buildingInfo["imageUrl"]}`);

            var counter = document.createElement("div");
            counter.setAttribute("class", "counter");
            counter.innerText = 0;

            var imageGroup = document.createElement("div");
            imageGroup.setAttribute("class", "imageGroup");
            imageGroup.appendChild(icon);
            imageGroup.appendChild(counter);
            imageGroup.addEventListener("click", buyUpgrade);     

            var pps = document.createElement("h3");
            pps.setAttribute("class", "pps");
            pps.innerHTML = `Gives <span class="buildingPps">${buildingInfo["pps"]}</span> pats/s`

            var price = document.createElement("h3");
            price.setAttribute("class", "price");
            price.setAttribute("baseCost", buildingInfo["baseCost"])
            price.innerHTML = `Costs <span class="buildingCost">${buildingInfo["baseCost"]}</span> pats`

            var saleGroup = document.createElement("div");
            saleGroup.appendChild(pps);
            saleGroup.appendChild(price);
            saleGroup.setAttribute("class", "saleGroup");

            var building = document.createElement("div");
            building.setAttribute("class", "building");
            building.appendChild(imageGroup);
            building.appendChild(saleGroup);
            buildingGroup.appendChild(building);
        }
    )
}

function buyUpgrade(e) {
    const buildingGroupDom = e.target.parentElement.parentElement
    const counterDom = buildingGroupDom.querySelector(".counter");

    const buildingCost = basic.getBigInt(buildingGroupDom.querySelector(".buildingCost"));
    const buildingPps = basic.getBigInt(buildingGroupDom.querySelector(".buildingPps"));
    const totalPats = basic.getBigInt(totalPatsDom);

    if (buildingCost <= totalPats) {
        basic.addBigIntToField(totalPatsDom, -buildingCost);
        basic.addOne(counterDom);
        basic.addBigIntToField(totalPerSecondDom, buildingPps);
    } else {
        alert("Insufficient pats")
    }
}

// function calculateCost() {

// }

export {generateNewState, buyUpgrade}
