function isGoldenRatio(a, b) {
  const gold = 1.618;
  const tol = 0.01;
  const approx = ((b / a) > 1 ? (b / a) : (a / b));
  console.log(approx)

  if (approx < (gold + tol) && approx > (gold - tol))
    return true;
  return false;
}

// isGoldenRatio(21, 34)
// true
isGoldenRatio(1618, 1000)
// true