function getLoanSchedule(loanAmount, annualRate, monthlyPayment) {
  const total = [loanAmount];
  while (loanAmount > 0) {
    // let monthlyRate = (loanAmount / 100 * annualRate) / 12;
    let monthlyRate = (annualRate / 100) / 12 * loanAmount;
    // let monthlyRate = Math.round((loanAmount / 100 * annualRate) / 12);
    // let monthlyRate = Math.round((annualRate / 100) / 12 * loanAmount);
    loanAmount = loanAmount - (monthlyPayment - monthlyRate);
    // console.log(total, loanAmount, (monthlyPayment - monthlyRate), monthlyRate);
    total.push(loanAmount > 0 ? Math.round(loanAmount) : 0);
  }
  // console.log(total);
  return total;
}


// getLoanSchedule(1000, 0, 200)
// should return [1000, 800, 600, 400, 200, 0].
getLoanSchedule(1000, 5, 200)
// should return [1000, 804, 608, 410, 212, 13, 0]
getLoanSchedule(10, 50, 1)
// should return [10, 9, 9, 8, 8, 7, 6, 5, 5, 4, 3, 2, 1, 0, 0]