function daysUntilBirthday(today, birthday) {
  const toTemp = today.split('-');
  const toBirth = birthday.split('/');
  const to = {
    day: parseInt(toTemp[2]),
    mon: parseInt(toTemp[1]),
    yea: parseInt(toTemp[0]),
  }
  const bir = {
    day: parseInt(toBirth[1]),
    mon: parseInt(toBirth[0]),
  }

  let nYearBDay = to.yea;
  if (to.mon > bir.mon && birthday != "2/29")
    nYearBDay = to.yea + 1;

  if (birthday === "2/29") {
    let loopTrue = true;
    do {
      nYearBDay += 4;
      if (nYearBDay % 4 == 0) {
        loopTrue = false;
        if (nYearBDay % 100 == 0) {
          loopTrue = true;
          if (nYearBDay % 400 == 0) {
            loopTrue = false;
          }
        }
      }
    } while (loopTrue)
  }

  if (to.mon === bir.mon && to.day === bir.day) return 365

  console.log(to, bir)
  console.log(nYearBDay);
  const nbdayTemp = (`${nYearBDay}-${bir.mon < 10 ? (`0${bir.mon}`) : bir.mon}-${bir.day < 10 ? (`0${bir.day}`) : bir.day}`)
  const tday = new Date(today + "T00:00:00"); // treat as local midnight
  const nbday = new Date(nbdayTemp)

  console.log(tday)
  console.log(nbday)

  const diffMs = nbday - tday;
  console.log(diffMs);

  const msPerDay = 24 * 60 * 60 * 1000;
  const dayUntil = diffMs / msPerDay;
  console.log(parseInt(dayUntil));

  console.log('end\n');
  return parseInt(dayUntil);
}

daysUntilBirthday("2026-07-16", "9/7")
daysUntilBirthday("2024-03-01", "2/29")
daysUntilBirthday("2096-03-01", "2/29")