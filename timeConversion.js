function timeConversion(s) {
  // Write your code here
  let militaryTime = 0,
    militaryHour = 0,
    timeFormatPm = {},
    timeFormatAm = {};

  timeFormatPm = {
    "01": 13,
    "02": 14,
    "03": 15,
    "04": 16,
    "05": 17,
    "06": 18,
    "07": 19,
    "08": 20,
    "09": 21,
    "10": 22,
    "11": 23,
    "12": 12,
  };

  timeFormatAm = {
    "12": "00",
  };

  if ("PM" == s.substring(s.length - 2, s.length)) {
    militaryHour = timeFormatPm[s.substring(0, 2)];
  } else if (
    "AM" == s.substring(s.length - 2, s.length) &&
    12 == s.substring(0, 2)
  ) {
    militaryHour = timeFormatAm[s.substring(0, 2)];
  } else {
    militaryHour = s.substring(0, 2);
  }
  militaryTime = militaryHour + s.substring(2, s.length - 2);
  return militaryTime;
}
