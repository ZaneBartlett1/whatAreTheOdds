let educationDataSource = "https://www.census.gov/data/tables/2021/demo/educational-attainment/cps-detailed-tables.html"

let educationDataMale = {
    '18-24': {
        'None': 0.08,
        '1st - 4th grade': 0.10,
        '5th - 6th grade': 0.19,
        '7th - 8th grade': 0.68,
        '9th grade': 0.77,
        '10th grade': 0.77,
        '11th grade2': 1.81,
        'High school graduate': 12.10,
        'Some college, no degree': 35.31,
        "Associate's degree, occupational": 32.35,
        "Associate's degree, academic": 1.97,
        "Bachelor's degree": 3.50,
        "Master's degree": 0.58,
        'Professional degree': 0.05,
        'Doctoral degree': 0.04
    },
    '25-29': {
        'None': 0.28,
        '1st - 4th grade': 0.16,
        '5th - 6th grade': 0.51,
        '7th - 8th grade': 0.45,
        '9th grade': 0.92,
        '10th grade': 0.95,
        '11th grade2': 3.17,
        'High school graduate': 32.17,
        'Some college, no degree': 17.63,
        "Associate's degree, occupational": 4.58,
        "Associate's degree, academic": 6.71,
        "Bachelor's degree": 33.40,
        "Master's degree": 7.23,
        'Professional degree': 1.06,
        'Doctoral degree': 0.70
    },
    '30-34': {
        'None': 0.09,
        '1st - 4th grade': 0.31,
        '5th - 6th grade': 0.81,
        '7th - 8th grade': 0.93,
        '9th grade': 0.92,
        '10th grade': 0.88,
        '11th grade2': 2.86,
        'High school graduate': 24.89,
        'Some college, no degree': 13.98,
        "Associate's degree, occupational": 3.73,
        "Associate's degree, academic": 5.03,
        "Bachelor's degree": 22.95,
        "Master's degree": 7.80,
        'Professional degree': 1.10,
        'Doctoral degree': 1.60
    },
    '35-39': {
        'None': 0.22,
        '1st - 4th grade': 0.55,
        '5th - 6th grade': 1.46,
        '7th - 8th grade': 1.36,
        '9th grade': 1.61,
        '10th grade': 1.47,
        '11th grade2': 2.85,
        'High school graduate': 27.23,
        'Some college, no degree': 15.74,
        "Associate's degree, occupational": 4.58,
        "Associate's degree, academic": 4.61,
        "Bachelor's degree": 17.60,
        "Master's degree": 6.99,
        'Professional degree': 1.32,
        'Doctoral degree': 1.89
    },
    '40-44': {
        'None': 0.20,
        '1st - 4th grade': 0.65,
        '5th - 6th grade': 1.53,
        '7th - 8th grade': 1.34,
        '9th grade': 1.88,
        '10th grade': 1.27,
        '11th grade2': 3.08,
        'High school graduate': 28.57,
        'Some college, no degree': 13.61,
        "Associate's degree, occupational": 4.50,
        "Associate's degree, academic": 5.15,
        "Bachelor's degree": 23.73,
        "Master's degree": 10.63,
        'Professional degree': 1.84,
        'Doctoral degree': 2.38
    },
    '45-49': {
        'None': 0.45,
        '1st - 4th grade': 0.64,
        '5th - 6th grade': 1.85,
        '7th - 8th grade': 1.44,
        '9th grade': 1.26,
        '10th grade': 1.64,
        '11th grade2': 2.73,
        'High school graduate': 28.87,
        'Some college, no degree': 13.48,
        "Associate's degree, occupational": 4.37,
        "Associate's degree, academic": 5.81,
        "Bachelor's degree": 22.57,
        "Master's degree": 10.81,
        'Professional degree': 1.72,
        'Doctoral degree': 2.46
    },
    '50-54': {
        'None': 0.39,
        '1st - 4th grade': 0.82,
        '5th - 6th grade': 1.29,
        '7th - 8th grade': 1.88,
        '9th grade': 1.38,
        '10th grade': 1.38,
        '11th grade2': 2.47,
        'High school graduate': 29.74,
        'Some college, no degree': 12.69,
        "Associate's degree, occupational": 4.39,
        "Associate's degree, academic": 5.23,
        "Bachelor's degree": 24.43,
        "Master's degree": 9.75,
        'Professional degree': 1.51,
        'Doctoral degree': 2.54
    },
    '55-59': {
        'None': 0.22,
        '1st - 4th grade': 0.90,
        '5th - 6th grade': 1.36,
        '7th - 8th grade': 1.32,
        '9th grade': 1.19,
        '10th grade': 1.99,
        '11th grade2': 3.17,
        'High school graduate': 31.09,
        'Some college, no degree': 15.02,
        "Associate's degree, occupational": 5.17,
        "Associate's degree, academic": 5.63,
        "Bachelor's degree": 19.84,
        "Master'sdegree": 8.75,
        'Professional degree': 1.93,
        'Doctoral degree': 2.72
    },
    '60-64': {
        'None': 0.51,
        '1st - 4th grade': 0.98,
        '5th - 6th grade': 1.16,
        '7th - 8th grade': 1.28,
        '9th grade': 1.41,
        '10th grade': 1.36,
        '11th grade2': 3.33,
        'High school graduate': 32.70,
        'Some college, no degree': 15.18,
        "Associate's degree, occupational": 4.82,
        "Associate's degree, academic": 4.84,
        "Bachelor's degree": 19.77,
        "Master's degree": 9.14,
        'Professional degree': 1.46,
        'Doctoral degree': 2.02
    },
    '65-69': {
        'None': 0.43,
        '1st - 4th grade': 0.75,
        '5th - 6th grade': 1.31,
        '7th - 8th grade': 1.32,
        '9th grade': 0.81,
        '10th grade': 1.54,
        '11th grade2': 2.70,
        'High school graduate': 28.87,
        'Some college, no degree': 16.88,
        "Associate's degree, occupational": 4.49,
        "Associate's degree, academic": 5.16,
        "Bachelor's degree": 20.59,
        "Master's degree": 9.96,
        'Professional degree': 2.39,
        'Doctoral degree': 2.70
    },
    '70-74': {
        'None': 0.57,
        '1st - 4th grade': 0.52,
        '5th - 6th grade': 0.96,
        '7th - 8th grade': 1.62,
        '9th grade': 1.11,
        '10th grade': 1.72,
        '11th grade2': 2.42,
        'High school graduate': 24.78,
        'Some college, no degree': 16.64,
        "Associate's degree, occupational": 4.62,
        "Associate's degree, academic": 5.16,
        "Bachelor's degree": 21.68,
        "Master's degree": 10.92,
        'Professional degree': 2.87,
        'Doctoral degree': 3.50
    },
    '75+': {
        'None': 0.47,
        '1st - 4th grade': 0.97,
        '5th - 6th grade': 1.80,
        '7th - 8th grade': 2.95,
        '9th grade': 1.56,
        '10th grade': 2.80,
        '11th grade2': 3.13,
        'High school graduate': 29.55,
        'Some college, no degree': 13.93,
        "Associate's degree, occupational": 2.80,
        "Associate's degree, academic": 3.67,
        "Bachelor's degree": 19.23,
        "Master's degree": 10.99,
        'Professional degree': 3.14,
        'Doctoral degree': 3.92
    }
};

let educationDataFemale = {
    '18-24': {
        'None': 0.23,
        '1st - 4th grade': 0.06,
        '5th - 6th grade': 0.23,
        '7th - 8th grade': 0.55,
        '9th grade': 1.10,
        '10th grade': 1.73,
        '11th grade2': 4.74,
        'High school graduate': 28.38,
        'Some college, no degree': 28.40,
        "Associate's degree, occupational": 2.20,
        "Associate's degree, academic": 4.73,
        "Bachelor's degree": 13.55,
        "Master's degree": 1.04,
        'Professional degree': 0.02,
        'Doctoral degree': 0.03
    },
    '25-29': {
        'None': 0.03,
        '1st - 4th grade': 0.04,
        '5th - 6th grade': 0.31,
        '7th - 8th grade': 0.68,
        '9th grade': 0.69,
        '10th grade': 0.57,
        '11th grade2': 2.37,
        'High school graduate': 22.24,
        'Some college, no degree': 15.61,
        "Associate's degree, occupational": 4.79,
        "Associate's degree, academic": 7.23,
        "Bachelor's degree": 26.67,
        "Master's degree": 13.11,
        'Professional degree': 1.40,
        'Doctoral degree': 2.03
    },
    '30-34': {
        'None': 0.21,
        '1st - 4th grade': 0.15,
        '5th - 6th grade': 0.65,
        '7th - 8th grade': 0.56,
        '9th grade': 1.18,
        '10th grade': 0.92,
        '11th grade2': 2.27,
        'High school graduate': 21.24,
        'Some college, no degree': 14.35,
        "Associate's degree, occupational": 4.33,
        "Associate's degree, academic": 6.51,
        "Bachelor's degree": 23.83,
        "Master's degree": 10.84,
        'Professional degree': 1.19,
        'Doctoral degree': 1.73
    },
    '35-39': {
        'None': 0.23,
        '1st - 4th grade': 0.37,
        '5th - 6th grade': 1.10,
        '7th - 8th grade': 1.23,
        '9th grade': 1.25,
        '10th grade': 1.28,
        '11th grade2': 2.38,
        'High school graduate': 19.57,
        'Some college, no degree': 13.88,
        "Associate's degree, occupational": 3.85,
        "Associate's degree, academic": 7.32,
        "Bachelor's degree": 28.78,
        "Master's degree": 15.40,
        'Professional degree': 1.66,
        'Doctoral degree': 2.37
    },
    '40-44': {
        'None': 0.14,
        '1st - 4th grade': 0.47,
        '5th - 6th grade': 1.49,
        '7th - 8th grade': 1.57,
        '9th grade': 1.22,
        '10th grade': 1.37,
        '11th grade2': 2.47,
        'High school graduate': 20.93,
        'Some college, no degree': 13.49,
        "Associate's degree, occupational": 4.48,
        "Associate's degree, academic": 6.96,
        "Bachelor's degree": 25.67,
        "Master's degree": 15.37,
        'Professional degree': 2.03,
        'Doctoral degree': 2.21
    },
    '45-49': {
        'None': 0.27,
        '1st - 4th grade': 0.42,
        '5th - 6th grade': 1.28,
        '7th - 8th grade': 1.29,
        '9th grade': 1.17,
        '10th grade': 0.99,
        '11th grade2': 2.03,
        'High school graduate': 21.91,
        'Some college, no degree': 13.68,
        "Associate's degree, occupational": 5.20,
        "Associate's degree, academic": 7.19,
        "Bachelor's degree": 26.22,
        "Master's degree": 14.15,
        'Professional degree': 1.81,
        'Doctoral degree': 2.60
    },
    '50-54': {
        'None': 0.38,
        '1st - 4th grade': 0.42,
        '5th - 6th grade': 1.12,
        '7th - 8th grade': 1.03,
        '9th grade': 1.47,
        '10th grade': 0.80,
        '11th grade2': 2.37,
        'High school graduate': 24.68,
        'Some college, no degree': 14.49,
        "Associate's degree, occupational": 4.37,
        "Associate's degree, academic": 7.06,
        "Bachelor's degree": 24.77,
        "Master's degree": 13.29,
        'Professional degree': 1.02,
        'Doctoral degree': 1.80
    },
    '55-59': {
        'None': 0.32,
        '1st - 4th grade': 0.73,
        '5th - 6th grade': 1.34,
        '7th - 8th grade': 1.27,
        '9th grade': 1.34,
        '10th grade': 1.22,
        '11th grade2': 2.47,
        'High school graduate': 28.42,
        'Some college, no degree': 13.85,
        "Associate's degree, occupational": 5.32,
        "Associate's degree, academic": 7.51,
        "Bachelor's degree": 23.44,
        "Master's degree": 11.04,
        'Professional degree': 0.49,
        'Doctoral degree': 0.72
    },
    '60-64': {
        'None': 0.41,
        '1st - 4th grade': 0.56,
        '5th - 6th grade': 1.60,
        '7th - 8th grade': 1.26,
        '9th grade': 1.10,
        '10th grade': 1.18,
        '11th grade2': 2.74,
        'High school graduate': 29.76,
        'Some college, no degree': 15.02,
        "Associate's degree, occupational": 4.83,
        "Associate's degree, academic": 7.53,
        "Bachelor's degree": 21.68,
        "Master's degree": 9.55,
        'Professional degree': 1.00,
        'Doctoral degree': 1.80
    },
    '65-69': {
        'None': 0.31,
        '1st - 4th grade': 0.59,
        '5th - 6th grade': 1.21,
        '7th - 8th grade': 1.21,
        '9th grade': 0.86,
        '10th grade': 1.80,
        '11th grade2': 2.76,
        'High school graduate': 30.61,
        'Some college, no degree': 16.34,
        "Associate's degree, occupational": 4.88,
        "Associate's degree, academic": 7.38,
        "Bachelor's degree": 19.99,
        "Master's degree": 10.76,
        'Professional degree': 1.07,
        'Doctoral degree': 1.58
    },
    '70-74': {
        'None': 0.53,
        '1st - 4th grade': 0.83,
        '5th - 6th grade': 1.47,
        '7th - 8th grade': 1.64,
        '9th grade': 1.14,
        '10th grade': 1.62,
        '11th grade2': 2.59,
        'High school graduate': 31.17,
        'Some college, no degree': 16.49,
        "Associate's degree, occupational": 4.76,
        "Associate's degree, academic": 6.38,
        "Bachelor's degree": 21.35,
        "Master's degree": 13.60,
        'Professional degree': 1.22,
        'Doctoral degree': 1.97
    },
    '75+': {
        'None': 0.64,
        '1st - 4th grade': 1.26,
        '5th - 6th grade': 1.81,
        '7th - 8th grade': 2.55,
        '9th grade': 0.78,
        '10th grade': 3.97,
        '11th grade2': 4.59,
        'High school graduate': 37.84,
        'Some college, no degree': 14.52,
        "Associate's degree, occupational": 3.65,
        "Associate's degree, academic": 4.70,
        "Bachelor's degree": 15.24,
        "Master's degree": 8.16,
        'Professional degree': 0.80,
        'Doctoral degree': 1.25
    }
};

export default { educationDataMale, educationDataFemale, educationDataSource };