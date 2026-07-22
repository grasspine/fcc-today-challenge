function piggyBank(coins) {
  let res = 0

  for (const key in coins) {
    switch (key) {
      case ("pennies"):
        res = res + (coins.pennies * 0.01);
        break;
      case ("nickels"):
        res = res + (coins.nickels * 0.05);
        break;
      case ("dimes"):
        res = res + (coins.dimes * 0.10);
        break;
      case ("quarters"):
        res = res + (coins.quarters * 0.25);
        break;
    }
  }
  console.log(res);
  return `$${(res.toFixed(2))}`;
}

piggyBank({ pennies: 3, nickels: 5, dimes: 2, quarters: 6 })
// should return "$1.98".
piggyBank({ nickels: 8, dimes: 6, quarters: 5 })
// should return "$2.25"
piggyBank({})
// should return "$0.00".
piggyBank({ pennies: 146, nickels: 11, dimes: 0, quarters: 19 })
// should return "$6.76"