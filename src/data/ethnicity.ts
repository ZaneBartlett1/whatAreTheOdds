let ethnicityDataSource = "https://www.kff.org/other/state-indicator/distribution-by-raceethnicity/?currentTimeframe=0&sortModel=%7B%22colId%22:%22Location%22,%22sort%22:%22asc%22%7D"


let ethnicityData = {
  'Alabama': {
    'White': 0.644,
    'Black': 0.255,
    'Hispanic': 0.047,
    'Asian': 0.013,
    'American Indian/Alaska Native': 0.004,
    'Native Hawaiian/Other Pacific Islander': 0,
    'Multiple Races': 0.037
  },
  'Alaska': {
    'White': 0.579,
    'Black': 0.026,
    'Hispanic': 0.067,
    'Asian': 0.07,
    'American Indian/Alaska Native': 0.138,
    'Native Hawaiian/Other Pacific Islander': 0.015,
    'Multiple Races': 0.105
  },
  'Arizona': {
    'White': 0.521,
    'Black': 0.041,
    'Hispanic': 0.324,
    'Asian': 0.033,
    'American Indian/Alaska Native': 0.033,
    'Native Hawaiian/Other Pacific Islander': 0.002,
    'Multiple Races': 0.047
  },
  'Arkansas': {
    'White': 0.683,
    'Black': 0.144,
    'Hispanic': 0.083,
    'Asian': 0.014,
    'American Indian/Alaska Native': 0.004,
    'Native Hawaiian/Other Pacific Islander': 0.004,
    'Multiple Races': 0.068
  },
  'California': {
    'White': 0.342,
    'Black': 0.051,
    'Hispanic': 0.403,
    'Asian': 0.151,
    'American Indian/Alaska Native': 0.002,
    'Native Hawaiian/Other Pacific Islander': 0.003,
    'Multiple Races': 0.047
  },
  'Colorado': {
    'White': 0.653,
    'Black': 0.036,
    'Hispanic': 0.222,
    'Asian': 0.031,
    'American Indian/Alaska Native': 0.003,
    'Native Hawaiian/Other Pacific Islander': 0.002,
    'Multiple Races': 0.053
  },
  'Connecticut': {
    'White': 0.628,
    'Black': 0.097,
    'Hispanic': 0.178,
    'Asian': 0.047,
    'American Indian/Alaska Native': 0.001,
    'Native Hawaiian/Other Pacific Islander': 0,
    'Multiple Races': 0.049
  },
  'Delaware': {
    'White': 0.595,
    'Black': 0.203,
    'Hispanic': 0.102,
    'Asian': 0.041,
    'American Indian/Alaska Native': 0,
    'Native Hawaiian/Other Pacific Islander': 0,
    'Multiple Races': 0.057
  },
  'District of Columbia': {
    'White': 0.359,
    'Black': 0.431,
    'Hispanic': 0.115,
    'Asian': 0.038,
    'American Indian/Alaska Native': 0,
    'Native Hawaiian/Other Pacific Islander': 0,
    'Multiple Races': 0.055
  },
  'Florida': {
    'White': 0.512,
    'Black': 0.144,
    'Hispanic': 0.27,
    'Asian': 0.028,
    'American Indian/Alaska Native': 0.001,
    'Native Hawaiian/Other Pacific Islander': 0.0,
    'Multiple Races': 0.046
  },
  'Georgia': {
    'White': 0.503,
    'Black': 0.303,
    'Hispanic': 0.1,
    'Asian': 0.043,
    'American Indian/Alaska Native': 0.002,
    'Native Hawaiian/Other Pacific Islander': 0.0,
    'Multiple Races': 0.048
  },
  'Hawaii': {
    'White': 0.196,
    'Black': 0.013,
    'Hispanic': 0.109,
    'Asian': 0.375,
    'American Indian/Alaska Native': 0,
    'Native Hawaiian/Other Pacific Islander': 0.097,
    'Multiple Races': 0.209
  },
  'Idaho': {
    'White': 0.788,
    'Black': 0.007,
    'Hispanic': 0.133,
    'Asian': 0.014,
    'American Indian/Alaska Native': 0.007,
    'Native Hawaiian/Other Pacific Islander': 0.001,
    'Multiple Races': 0.051
  },
  'Illinois': {
    'White': 0.59,
    'Black': 0.132,
    'Hispanic': 0.181,
    'Asian': 0.057,
    'American Indian/Alaska Native': 0.001,
    'Native Hawaiian/Other Pacific Islander': 0.0,
    'Multiple Races': 0.039
  },
  'Indiana': {
    'White': 0.767,
    'Black': 0.086,
    'Hispanic': 0.077,
    'Asian': 0.023,
    'American Indian/Alaska Native': 0.001,
    'Native Hawaiian/Other Pacific Islander': 0,
    'Multiple Races': 0.045
  },
  'Iowa': {
    'White': 0.831,
    'Black': 0.034,
    'Hispanic': 0.067,
    'Asian': 0.023,
    'American Indian/Alaska Native': 0.003,
    'Native Hawaiian/Other Pacific Islander': 0.001,
    'Multiple Races': 0.041
  },
  'Kansas': {
    'White': 0.734,
    'Black': 0.047,
    'Hispanic': 0.129,
    'Asian': 0.03,
    'American Indian/Alaska Native': 0.004,
    'Native Hawaiian/Other Pacific Islander': 0,
    'Multiple Races': 0.056
  },
  'Kentucky': {
    'White': 0.83,
    'Black': 0.068,
    'Hispanic': 0.038,
    'Asian': 0.015,
    'American Indian/Alaska Native': 0.002,
    'Native Hawaiian/Other Pacific Islander': 0,
    'Multiple Races': 0.047
  },
  'Louisiana': {
    'White': 0.574,
    'Black': 0.306,
    'Hispanic': 0.055,
    'Asian': 0.018,
    'American Indian/Alaska Native': 0.004,
    'Native Hawaiian/Other Pacific Islander': 0,
    'Multiple Races': 0.044
  },
  'Maine': {
    'White': 0.9,
    'Black': 0.014,
    'Hispanic': 0.018,
    'Asian': 0.011,
    'American Indian/Alaska Native': 0.003,
    'Native Hawaiian/Other Pacific Islander': 0,
    'Multiple Races': 0.053
  },
  'Maryland': {
    'White': 0.481,
    'Black': 0.286,
    'Hispanic': 0.111,
    'Asian': 0.068,
    'American Indian/Alaska Native': 0.001,
    'Native Hawaiian/Other Pacific Islander': 0.0,
    'Multiple Races': 0.052
  },
  'Massachusetts': {
    'White': 0.677,
    'Black': 0.061,
    'Hispanic': 0.129,
    'Asian': 0.069,
    'American Indian/Alaska Native': 0.001,
    'Native Hawaiian/Other Pacific Islander': 0,
    'Multiple Races': 0.063
  },
  'Michigan': {
    'White': 0.731,
    'Black': 0.131,
    'Hispanic': 0.056,
    'Asian': 0.032,
    'American Indian/Alaska Native': 0.003,
    'Native Hawaiian/Other Pacific Islander': 0.0,
    'Multiple Races': 0.048
  },
  'Minnesota': {
    'White': 0.769,
    'Black': 0.067,
    'Hispanic': 0.058,
    'Asian': 0.05,
    'American Indian/Alaska Native': 0.006,
    'Native Hawaiian/Other Pacific Islander': 0,
    'Multiple Races': 0.049
  },
  'Mississippi': {
    'White': 0.559,
    'Black': 0.357,
    'Hispanic': 0.031,
    'Asian': 0.008,
    'American Indian/Alaska Native': 0.004,
    'Native Hawaiian/Other Pacific Islander': 0,
    'Multiple Races': 0.04
  },
  'Missouri': {
    'White': 0.768,
    'Black': 0.106,
    'Hispanic': 0.046,
    'Asian': 0.02,
    'American Indian/Alaska Native': 0.002,
    'Native Hawaiian/Other Pacific Islander': 0.001,
    'Multiple Races': 0.057
  },
  'Montana': {
    'White': 0.838,
    'Black': 0.004,
    'Hispanic': 0.043,
    'Asian': 0.007,
    'American Indian/Alaska Native': 0.055,
    'Native Hawaiian/Other Pacific Islander': 0,
    'Multiple Races': 0.054
  },
  'Nebraska': {
    'White': 0.766,
    'Black': 0.042,
    'Hispanic': 0.12,
    'Asian': 0.022,
    'American Indian/Alaska Native': 0.006,
    'Native Hawaiian/Other Pacific Islander': 0,
    'Multiple Races': 0.044
  },
  'Nevada': {
    'White': 0.451,
    'Black': 0.086,
    'Hispanic': 0.301,
    'Asian': 0.084,
    'American Indian/Alaska Native': 0.006,
    'Native Hawaiian/Other Pacific Islander': 0.007,
    'Multiple Races': 0.066
  },
  'New Hampshire': {
    'White': 0.876,
    'Black': 0.012,
    'Hispanic': 0.043,
    'Asian': 0.027,
    'American Indian/Alaska Native': 0,
    'Native Hawaiian/Other Pacific Islander': 0,
    'Multiple Races': 0.043
  },
  'New Jersey': {
    'White': 0.522,
    'Black': 0.121,
    'Hispanic': 0.216,
    'Asian': 0.1,
    'American Indian/Alaska Native': 0.001,
    'Native Hawaiian/Other Pacific Islander': 0.0,
    'Multiple Races': 0.04
  },
  'New Mexico': {
    'White': 0.348,
    'Black': 0.016,
    'Hispanic': 0.503,
    'Asian': 0.014,
    'American Indian/Alaska Native': 0.081,
    'Native Hawaiian/Other Pacific Islander': 0,
    'Multiple Races': 0.037
  },
  'New York': {
    'White': 0.535,
    'Black': 0.132,
    'Hispanic': 0.196,
    'Asian': 0.087,
    'American Indian/Alaska Native': 0.002,
    'Native Hawaiian/Other Pacific Islander': 0.0,
    'Multiple Races': 0.048
  },
  'North Carolina': {
    'White': 0.611,
    'Black': 0.197,
    'Hispanic': 0.101,
    'Asian': 0.031,
    'American Indian/Alaska Native': 0.009,
    'Native Hawaiian/Other Pacific Islander': 0.0,
    'Multiple Races': 0.05
  },
  'North Dakota': {
    'White': 0.827,
    'Black': 0.029,
    'Hispanic': 0.039,
    'Asian': 0.014,
    'American Indian/Alaska Native': 0.043,
    'Native Hawaiian/Other Pacific Islander': 0,
    'Multiple Races': 0.044
  },
  'Ohio': {
    'White': 0.767,
    'Black': 0.115,
    'Hispanic': 0.043,
    'Asian': 0.024,
    'American Indian/Alaska Native': 0.001,
    'Native Hawaiian/Other Pacific Islander': 0.001,
    'Multiple Races': 0.049
  },
  'Oklahoma': {
    'White': 0.629,
    'Black': 0.065,
    'Hispanic': 0.119,
    'Asian': 0.023,
    'American Indian/Alaska Native': 0.069,
    'Native Hawaiian/Other Pacific Islander': 0.001,
    'Multiple Races': 0.093
  },
  'Oregon': {
    'White': 0.721,
    'Black': 0.018,
    'Hispanic': 0.14,
    'Asian': 0.045,
    'American Indian/Alaska Native': 0.007,
    'Native Hawaiian/Other Pacific Islander': 0.004,
    'Multiple Races': 0.065
  },
  'Pennsylvania': {
    'White': 0.739,
    'Black': 0.097,
    'Hispanic': 0.084,
    'Asian': 0.037,
    'American Indian/Alaska Native': 0.001,
    'Native Hawaiian/Other Pacific Islander': 0,
    'Multiple Races': 0.043
  },
  'Rhode Island': {
    'White': 0.689,
    'Black': 0.043,
    'Hispanic': 0.174,
    'Asian': 0.03,
    'American Indian/Alaska Native': 0.002,
    'Native Hawaiian/Other Pacific Islander': 0,
    'Multiple Races': 0.06
  },
  'South Carolina': {
    'White': 0.628,
    'Black': 0.247,
    'Hispanic': 0.063,
    'Asian': 0.016,
    'American Indian/Alaska Native': 0.002,
    'Native Hawaiian/Other Pacific Islander': 0,
    'Multiple Races': 0.043
  },
  'South Dakota': {
    'White': 0.802,
    'Black': 0.02,
    'Hispanic': 0.04,
    'Asian': 0.015,
    'American Indian/Alaska Native': 0.076,
    'Native Hawaiian/Other Pacific Islander': 0,
    'Multiple Races': 0.045
  },
  'Tennessee': {
    'White': 0.723,
    'Black': 0.151,
    'Hispanic': 0.06,
    'Asian': 0.017,
    'American Indian/Alaska Native': 0.001,
    'Native Hawaiian/Other Pacific Islander': 0,
    'Multiple Races': 0.048
  },
  'Texas': {
    'White': 0.393,
    'Black': 0.114,
    'Hispanic': 0.404,
    'Asian': 0.052,
    'American Indian/Alaska Native': 0.002,
    'Native Hawaiian/Other Pacific Islander': 0.001,
    'Multiple Races': 0.035
  },
  'Utah': {
    'White': 0.76,
    'Black': 0.01,
    'Hispanic': 0.147,
    'Asian': 0.025,
    'American Indian/Alaska Native': 0.006,
    'Native Hawaiian/Other Pacific Islander': 0.008,
    'Multiple Races': 0.044
  },
  'Vermont': {
    'White': 0.906,
    'Black': 0.011,
    'Hispanic': 0.02,
    'Asian': 0.018,
    'American Indian/Alaska Native': 0,
    'Native Hawaiian/Other Pacific Islander': 0,
    'Multiple Races': 0.044
  },
  'Virginia': {
    'White': 0.595,
    'Black': 0.177,
    'Hispanic': 0.102,
    'Asian': 0.068,
    'American Indian/Alaska Native': 0.002,
    'Native Hawaiian/Other Pacific Islander': 0.001,
    'Multiple Races': 0.056
  },
  'Washington': {
    'White': 0.646,
    'Black': 0.037,
    'Hispanic': 0.136,
    'Asian': 0.094,
    'American Indian/Alaska Native': 0.007,
    'Native Hawaiian/Other Pacific Islander': 0.006,
    'Multiple Races': 0.073
  },
  'West Virginia': {
    'White': 0.906,
    'Black': 0.025,
    'Hispanic': 0.017,
    'Asian': 0.008,
    'American Indian/Alaska Native': 0,
    'Native Hawaiian/Other Pacific Islander': 0,
    'Multiple Races': 0.043
  },
  'Wisconsin': {
    'White': 0.793,
    'Black': 0.058,
    'Hispanic': 0.075,
    'Asian': 0.03,
    'American Indian/Alaska Native': 0.005,
    'Native Hawaiian/Other Pacific Islander': 0,
    'Multiple Races': 0.039
  },
  'Wyoming': {
    'White': 0.813,
    'Black': 0.009,
    'Hispanic': 0.106,
    'Asian': 0.007,
    'American Indian/Alaska Native': 0.017,
    'Native Hawaiian/Other Pacific Islander': 0,
    'Multiple Races': 0.048
  },
  'Puerto Rico': {
    'White': 0.005,
    'Black': 0.001,
    'Hispanic': 0.993,
    'Asian': 0,
    'American Indian/Alaska Native': 0,
    'Native Hawaiian/Other Pacific Islander': 0,
    'Multiple Races': 0.001
  }
}

export default { ethnicityData, ethnicityDataSource };