let heightDataSource = "https://en.wikipedia.org/wiki/Average_human_height_by_country#cite_note-cdc-214";

let heightData = {
    "5.0-5.2": { "M": 0.004, "F": 0.020 },
    "5.2-5.4": { "M": 0.021, "F": 0.075 },
    "5.4-5.6": { "M": 0.065, "F": 0.200 },
    "5.6-5.8": { "M": 0.200, "F": 0.350 },
    "5.8-6.0": { "M": 0.350, "F": 0.250 },
    "6.0-6.2": { "M": 0.250, "F": 0.090 },
    "6.2-6.4": { "M": 0.090, "F": 0.015 },
    "6.4+": { "M": 0.020, "F": 0.0002 },
};

let totalM = 0, totalF = 0;
for (let heightGroup in heightData) {
    totalM += heightData[heightGroup]["M"];
    totalF += heightData[heightGroup]["F"];
}

for (let heightGroup in heightData) {
    heightData[heightGroup]["M"] /= totalM;
    heightData[heightGroup]["F"] /= totalF;
}

export default { heightData, heightDataSource };
