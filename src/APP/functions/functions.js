export function getCurrentDate() {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const currentDay = new Date().getDate();
  if (currentMonth + 1 < 10) {
    return `${currentYear}-0${currentMonth + 1}-${currentDay}`;
  } else {
    return `${currentYear}-${currentMonth + 1}-${currentDay}`;
  }
}

export function returnDateByTimeStamp(timeStamp) {
  const year = new Date(timeStamp).getFullYear();
  const month = new Date(timeStamp).getMonth();
  const day = new Date(timeStamp).getDate();
  if (month + 1 < 10 && day < 10) {
    return `${year}-0${month + 1}-0${day}`;
  } else if (month + 1 < 10 && day >= 10) {
    return `${year}-0${month + 1}-${day}`;
  } else if (month + 1 >= 10 && day < 10) {
    return `${year}-${month + 1}-0${day}`;
  } else {
    return `${year}-${month + 1}-${day}`;
  }
}
