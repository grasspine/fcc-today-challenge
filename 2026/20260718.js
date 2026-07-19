const diceArr = [1, 2, 3, 4, 5, 6]

function getOdds(dice, target) {
  const targetHit = [];
  // targetHit.push(diceNum)

  for (let i = 0; i < diceArr.length; i++) {
    const el = [diceArr[i]];
    checkDown(el, dice, target, targetHit)
  }

  console.log('res', targetHit)
  console.log(`${targetHit.length} in ${6 ** dice}`)
  console.log(`${1} in ${Math.round((6 ** dice) / targetHit.length)}`)
  const res = `${1} in ${Math.round((6 ** dice) / targetHit.length)}`
  return res;
}

function checkDown(diceNum, diceLeft, target, targetHit) {
  let isCor = false;
  diceLeft--;
  const diceSum = diceNum.reduce((acc, x) => acc + x, 0);
  // console.log(diceNum, diceSum)

  if (diceSum === target && diceLeft == 0) {
    targetHit.push(diceNum);
    isCor = true;
  } else if (diceLeft > 0) {
    for (let i = 0; i < diceArr.length; i++) {
      const el = diceArr[i];
      checkDown([...diceNum, el], diceLeft, target, targetHit)
    }
  }
  return isCor
}

// getOdds(1, 5)
// getOdds(2, 4)
// getOdds(3, 10)
// getOdds(4, 7)
getOdds(5, 26)