let heightDataSource = "https://en.wikipedia.org/wiki/Average_human_height_by_country#cite_note-cdc-214";

let heightData = {
    "4.4-4.6": {
        "M": 0.0,
        "F": 0.0
    },
    "4.6-4.8": {
        "M": 0.0,
        "F": 0.001
    },
    "4.8-4.10": {
        "M": 0.0,
        "F": 0.01
    },
    "4.10-5.0": {
        "M": 0.0,
        "F": 0.051
    },
    "5.0-5.2": {
        "M": 0.003,
        "F": 0.148
    },
    "5.2-5.4": {
        "M": 0.02,
        "F": 0.26
    },
    "5.4-5.6": {
        "M": 0.075,
        "F": 0.274
    },
    "5.6-5.8": {
        "M": 0.177,
        "F": 0.173
    },
    "5.8-5.10": {
        "M": 0.264,
        "F": 0.066
    },
    "5.10-6.0": {
        "M": 0.247,
        "F": 0.015
    },
    "6.0-6.2": {
        "M": 0.145,
        "F": 0.002
    },
    "6.2-6.4": {
        "M": 0.053,
        "F": 0.0
    },
    "6.4-6.6": {
        "M": 0.012,
        "F": 0.0
    },
    "6.6-6.8": {
        "M": 0.002,
        "F": 0.0
    }
};

let totalM = 0, totalF = 0;
for (let heightGroup in heightData) {
    totalM += heightData[heightGroup]["M"];
    totalF += heightData[heightGroup]["F"];
};

for (let heightGroup in heightData) {
    heightData[heightGroup]["M"] /= totalM;
    heightData[heightGroup]["F"] /= totalF;
};

export default { heightData, heightDataSource };
