const MONTHS_OF_YEAR = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const formattedDate = (_) => {
  const zeroPad = (value) => (value < 10 ? `0${value}` : value);

  return {
    MONTH: MONTHS_OF_YEAR[_.getMonth()].split("").slice(0, 3).join(""),
    DAY: _.getDate(),
    HOUR: zeroPad(_.getHours()),
    MINUTE: zeroPad(_.getMinutes()),
  };
};
