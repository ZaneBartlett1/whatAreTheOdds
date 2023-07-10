let ageDataSource = "https://www.populationpyramid.net/united-states-of-america/2023/";

let ageData = {
    "0-4": { "M": 9596708, "F": 9175309 },
    "5-9": { "M": 10361680, "F": 9904126 },
    "10-14": { "M": 10781688, "F": 10274310 },
    "15-19": { "M": 11448281, "F": 10950664 },
    "20-24": { "M": 11384263, "F": 10964564 },
    "25-29": { "M": 11438191, "F": 11078541 },
    "30-34": { "M": 12048644, "F": 11797245 },
    "35-39": { "M": 11541070, "F": 11299124 },
    "40-44": { "M": 11160804, "F": 11028013 },
    "45-49": { "M": 10160722, "F": 10185712 },
    "50-54": { "M": 10578142, "F": 10641874 },
    "55-59": { "M": 10334788, "F": 10678099 },
    "60-64": { "M": 10387785, "F": 10997888 },
    "65-69": { "M": 9233967, "F": 10097028 },
    "70-74": { "M": 7104835, "F": 8189102 },
    "75-79": { "M": 5119582, "F": 6295285 },
    "80-84": { "M": 3030378, "F": 3983607 },
    "85-89": { "M": 1626571, "F": 2440362 },
    "90-94": { "M": 757034, "F": 1281854 },
    "95-99": { "M": 172530, "F": 361883 },
    "100+": { "M": 27665, "F": 76635 },
};

let totalM = 0, totalF = 0;
for (let ageGroup in ageData) {
    totalM += ageData[ageGroup]["M"];
    totalF += ageData[ageGroup]["F"];
}

for (let ageGroup in ageData) {
    ageData[ageGroup]["M"] /= totalM;
    ageData[ageGroup]["F"] /= totalF;
}

export default { ageData, ageDataSource, totalM, totalF };