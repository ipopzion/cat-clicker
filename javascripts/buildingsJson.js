let buildingsJson = [{
    "name": "Sibling",
    "baseCost": 100,
    "pps": 1,
    "imageUrl": "sibling.png"
}, {
    "name": "Grandma",
    "baseCost": 1100,
    "pps": 8,
    "imageUrl": "grandma.png"
}, {
    "name": "Family",
    "baseCost": 12000,
    "pps": 47,
    "imageUrl": "family.png"
}, {
    "name": "Orphanage",
    "baseCost": 130000,
    "pps": 260,
    "imageUrl": "orphanage.png"
}, {
    "name": "School",
    "baseCost": 1400000,
    "pps": 1400,
    "imageUrl": "school.png"
}, {
    "name": "Company",
    "baseCost": 20000000,
    "pps": 7800,
    "imageUrl": "company.png"
}]

function getBuildingsJson() {
    return buildingsJson;
}

export {getBuildingsJson}